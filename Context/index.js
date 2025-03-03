import {BigNumber , ethers} from 'ethers';
import toast from 'react-hot-toast';
import {contract , tokenContract , ERC20  , toEth , TOKEN_ICO_CONTRACT} from './constants'

const STAKING_DAPP_ADDRESS = process.env.NEXT_PUBLIC_STAKING_DAPP;

const DEPOSIT_TOKEN = process.env.NEXT_PUBLIC_DEPOSIT_TOKEN;
const REWARD_TOKEN = process.env.NEXT_PUBLIC_REWARD_TOKEN;
const TOKEN_LOGO = process.env.NEXT_PUBLIC_TOKEN_LOGO;

const notifySuccess = (msg) => toast.success(msg , {duration: 2000});
const notifyError = (msg) => toast.error(msg , {duration : 2000});

//functions

function CONVERT_TIMESTAMP_TO_READABLE(timeStamp){
    const date = new Date(timeStamp * 1000);

    const readableTime = date.toLocaleDateString("en-US",{
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
    return readableTime;
}

function toWei(amount){
    const toWei = ethers.utils.parseUnits(amount.toString());
    return toWei.toString();
}

function parseErrorMsg(e){
    const json = JSON.parse(JSON.stringify(e));
    return json?.reason || json?.error?.message;
}

export const SHORTEN_ADDRESS = (address) =>{
    `${address?.slice(0,8)} ... ${address?.slice(address.length -4 )}`;
}

export const copyAddress = (text) => {
    navigator.clipboard.writeText(text);
    notifySuccess("Copied Successfully");
}

export async function CONTRACT_DATA (address){
    try {
        const contractObj = await contract();
        const stakingTokenObj = await tokenContract();

        if(address){
            const contractOwner = await contractObj.owner();
            const contractAddress = await contractObj.address();

            //Notifications
            const notifications = await contractObj.getNotifications();
            const _notificationArray = await Promise.all(notifications.map(async({poolID , amount , user, typeOf , timeStamp}) => {
                return {
                    poolID: poolID.toNumber(),
                    amount: toEth(amount),
                    user: user,
                    typeOf: typeOf,
                    timeStamp: CONVERT_TIMESTAMP_TO_READABLE(timeStamp),
                };
            }));

            //Pools

            let poolInfoArray = [];
            const poolLength = await contractObj.poolCount();
            const length = poolLength.toNumber();

            for(let i = 0; i < length;i++){
                const poolInfo = await contractObj.poolInfo(i);
                const userInfo = await contractObj.userInfo(i, address);
                const userReward = await contractObj.pendingReward(i, address);
                const tokenPoolInfoA = await ERC20(poolInfo.depositToken , address);
                const tokenPoolInfoB = await ERC20(poolInfo.rewardToken , address);

                const pool = {
                    depositTokenAddress: poolInfo.depositToken,
                    rewardTokenAddress: poolInfo.rewardToken,
                    depositToken: tokenPoolInfoA,
                    rewardToken: tokenPoolInfoB,
                    depositedAmount: toEth(poolInfo.depositedAmount.toString()),
                    apy: poolInfo.apy.toString(),
                    lockDays: poolInfo.lockDays.toString(),

                    //user
                    amount: toEth(userInfo.amount.toString()),
                    userReward: toEth(userReward),
                    lockUntil: CONVERT_TIMESTAMP_TO_READABLE(userInfo.lockUntil.toNumber()),
                    lastRewardAt: toEth(userInfo.lastRewardAt.toString()),
                };
                poolInfoArray.push(pool);

                const totalDepositedAmount = poolInfoArray.reduce((total , pool) => {
                    return total + parseFloat(pool.depositedAmount);
                });

                const rewardToken = await ERC20(REWARD_TOKEN , address);
                const depositToken = await ERC20(DEPOSIT_TOKEN , address);
                const data = {
                    contractOwner: contractOwner.toLowerCase(),
                    contractAddress: contractAddress,
                    notifications: _notificationArray.reverse(),
                    poolInfoArray: poolInfoArray,
                    totalDepositedAmount: totalDepositedAmount,
                    rewardToken: rewardToken,
                    depositToken: depositToken,
                    contractTokenBalance: depositToken.contractTokenBalance - totalDepositedAmount,
                };
                return data;
            }
        }
    } catch (error) {
        console.log(error);
        console.log(parseErrorMsg(error));
        return parseErrorMsg(error);
    }
}

export async function deposit(poolId , amount , address){
    try {
        notifySuccess("Calling contract ...");
        const contractObj = await contract();
        const stakingTokenObj = await tokenContract();

        const amountInWei = ethers.utils.parseUnits(amount.toString(), 18);
        const currentAllowance = await stakingTokenObj.allowance(address , contractObj.address);

        if(currentAllowance.lt(amountInWei)){
            notifySuccess("Approving token ...");
            const approveTx = await stakingTokenObj.approve(contractObj.address , amountInWei);

            await approveTx.wait();
            console.log(`Approved ${amountInWei.toString()} tokens for staking`);
        }

        const gasEstimation = await contractObj.estimationGas.deposit(Number(poolId), amountInWei);
        notifySuccess("Staking token calling...");
        const stakeTx = await contractObj.deposit(poolId , amountInWei , {gasLimit: gasEstimation});
        const receipt = await stakeTx.wait();
        notifySuccess("Token take Successfully.");
        return receipt;

    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
}

export async function transferToken(amount , transferAddress){
    try {
        notifySuccess("Calling contract token ...");
        const stakingTokenObj = await tokenContract();
        const transferAmount = ethers.utils.parseEther(amount);

        const approveTx = await stakingTokenObj.transfer(transferAddress , transferAmount);

        await approveTx.wait();

        notifySuccess("Token transfer Successfully.");
    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
}

export async function withdraw(poolId , amount){
    try {
        notifySuccess("Calling contract ...");
        const amountInWei = ethers.utils.parseUnits(amount.toString(), 18);
        const contractObj = await contract();
        const gasEstimation = await contractObj.estimationGas.withdraw(Number(poolId), amountInWei);
        const data = await contractObj.withdraw(Number(poolId) , amountInWei , {gasLimit: gasEstimation});

        notifySuccess("Withdraw token calling...");
        const receipt = await data.wait();
        notifySuccess("Token withdraw Successfully.");
        return receipt;
    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
}

export async function claimReward(poolId){
    try {
        notifySuccess("Calling contract ...");
        const contractObj = await contract();
        const gasEstimation = await contractObj.estimationGas.claimReward(Number(poolId));
        const data = await contractObj.claimReward(Number(poolId) , {gasLimit: gasEstimation});

        notifySuccess("Claim reward token calling...");
        const receipt = await data.wait();
        notifySuccess("Token claim Successfully.");
        return receipt;
    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
}

export async function createPool(pool){
    try {
        const {_depositToken , _rewardToken , _apy , _lockDays} = pool;
        if(!_depositToken || !_rewardToken || !_apy || !_lockDays){
            return notifyError("Please provide all the details.");
        }
        notifySuccess("Calling contract ...");
        const contractObj = await contract();
        const gasEstimation = await contractObj.estimationGas.addPool(
            _depositToken,
            _rewardToken,
            Number(_apy),
            Number(_lockDays)
        );
        const stakeTx = await contractObj.addPool(
            _depositToken,
            _rewardToken,
            Number(_apy),
            Number(_lockDays) , 
            {gasLimit: gasEstimation}
        );

        notifySuccess("Create pool token calling...");
        const receipt = await stakeTx.wait();
        notifySuccess("Pool created Successfully.");
        return receipt;
    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
}

export async function modifyPool(poolId , amount){
    try {
        const {_depositToken , _rewardToken , _apy , _lockDays} = pool;
        if(!_depositToken || !_rewardToken || !_apy || !_lockDays){
            return notifyError("Please provide all the details.");
        }
        notifySuccess("Calling contract ...");
        const contractObj = await contract();
        const gasEstimation = await contractObj.estimationGas.modifyPool(
            Number(poolId),
            Number(amount)
        );
        const stakeTx = await contractObj.modifyPool(
            Number(poolId),
            Number(amount) , 
            {gasLimit: gasEstimation}
        );

        notifySuccess("Create pool token calling...");
        const receipt = await stakeTx.wait();
        notifySuccess("Pool Modified Successfully.");
        return receipt;
    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
}

export async function sweep(tokenData){
    try {
        const {token , amount} = tokenData;
        if(!token  || !amount){
            return notifyError("Data is missing");
        }
        notifySuccess("Calling contract ...");
        const contractObj = await contract();
        const transferAmount = ethers.utils.parseEther(amount);
        const gasEstimation = await contractObj.estimationGas.sweep(token , transferAmount);
        const data = await contractObj.sweep(
            token ,amount, 
            {gasLimit: gasEstimation}
        );


        
        const receipt = await data.wait();
        notifySuccess("Transaction completed Successfully.");
        return receipt;
    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
}

//Add Token Metamask
export const addTokenMetaMask = async(token) => {
    if(window.ethereum){
        const contract = await tokenContract();
        const tokenDecimals = await contract.decimals();
        const tokenAddress = await contract.address();
        const tokenSymbol = await contract.symbol();
        const tokenImage = await TOKEN_LOGO;
    
        try {
            const wasAdded = await window.ethereum.request({
                method :"Wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: tokenDecimals,
                        image: tokenImage
                    }
                }
            });

            if(wasAdded){
                notifySuccess("Token added to metamask successfully.");
            } else {
                notifyError("Failed to add token to metamask.");
            }
        } catch (error) {
            notifyError("Failed to add token to metamask.");
            
        }
    }else{
        notifyError("Metamask is not installed.");
    }

}


//ICO contract

export const  BUY_TOKEN = async(amount) =>{
    try {
        notifySuccess("Calling ICO contract");
        const contract = await TOKEN_ICO_CONTRACT();
        const tokenDetails = await contract.gettokenDetails();
        const availableToken = ethers.utils.formatEther(tokenDetails.balance.toString());
        if(availableToken > 1){
            const price = ethers.utils.formatEther(tokenDetails.tokenPrice.toString() * Number(amount));

            const payAmount = ethers.utils.parseUnits(price.toString(), "ether");
            const transaction = await contract.buyToken(Number(amount) , {
                value: payAmount.toString(),
                gasLimit: ethers.utils.hexlify(8000000),
            });
            const receipt = await transaction.wait();
            notifySuccess("Transaction successfully");
            return receipt;
        }else{
            notifyError("No token available for sale");
        }
    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
};
export const  TOKEN_WITHDRAW = async() =>{
    try {
        notifySuccess("Calling ICO contract");
        const contract = await TOKEN_ICO_CONTRACT();

        const tokenDetails = await contract.gettokenDetails();
        const availableToken = ethers.utils.formatEther(tokenDetails.balance.toString());

        if(availableToken > 1){
            
            const transaction = await contract.withdrawAllTokens();
            const receipt = await transaction.wait();
            notifySuccess("Transaction successfully");
            return receipt;
        }else{
            notifyError("No token available for sale");
        }
    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
};

export const  UPDATE_TOKEN = async(_address) =>{
    try {
        if(!_address) return notifyError("Address is missing");
        const contract = await TOKEN_ICO_CONTRACT();
        const gasEstimation = await contractObj.estimateGas.updateToken(_address);
        const transaction = await contract.updateToken(_address , {gasLimit: gasEstimation});
        const receipt = await transaction.wait();
        notifySuccess("Transaction  completed successfully");
        return receipt;
    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
};

export const  UPDATE_TOKEN_PRICE = async(price) =>{
    try {
        if(!price) return notifyError("Price is missing");
        const contract = await TOKEN_ICO_CONTRACT();

        const payAmount = ethers.utils.parseUnits(price.toString(), "ether");
        const gasEstimation = await contractObj.estimateGas.updateTokenSalePrice(payAmount);
        const transaction = await contract.updateTokenPrice(payAmount , {gasLimit: gasEstimation});
        const receipt = await transaction.wait();

        notifySuccess("Transaction  completed successfully");
        return receipt;
    } catch (error) {
        console.log(error);
        const errorMsg = parseErrorMsg(error);
        notifyError(errorMsg);
    }
};
