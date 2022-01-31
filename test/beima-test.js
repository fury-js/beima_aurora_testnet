  
// const web3 = require("web3")
let BN = web3.utils.BN;
const EVM_REVERT = 'VM Exception while processing transaction: revert'
const usdteAbi = [
				{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
				{
					anonymous: false,
					inputs: [
						{
							indexed: false,
							internalType: 'uint256',
							name: 'chainId',
							type: 'uint256',
						},
					],
					name: 'AddSupportedChainId',
					type: 'event',
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: false,
							internalType: 'address',
							name: 'contractAddress',
							type: 'address',
						},
						{
							indexed: false,
							internalType: 'uint256',
							name: 'supplyIncrement',
							type: 'uint256',
						},
					],
					name: 'AddSwapToken',
					type: 'event',
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: true,
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							indexed: true,
							internalType: 'address',
							name: 'spender',
							type: 'address',
						},
						{
							indexed: false,
							internalType: 'uint256',
							name: 'value',
							type: 'uint256',
						},
					],
					name: 'Approval',
					type: 'event',
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: false,
							internalType: 'address',
							name: 'newBridgeRoleAddress',
							type: 'address',
						},
					],
					name: 'MigrateBridgeRole',
					type: 'event',
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: false,
							internalType: 'address',
							name: 'to',
							type: 'address',
						},
						{
							indexed: false,
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256',
						},
						{
							indexed: false,
							internalType: 'address',
							name: 'feeAddress',
							type: 'address',
						},
						{
							indexed: false,
							internalType: 'uint256',
							name: 'feeAmount',
							type: 'uint256',
						},
						{
							indexed: false,
							internalType: 'bytes32',
							name: 'originTxId',
							type: 'bytes32',
						},
					],
					name: 'Mint',
					type: 'event',
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: false,
							internalType: 'address',
							name: 'contractAddress',
							type: 'address',
						},
						{
							indexed: false,
							internalType: 'uint256',
							name: 'supplyDecrement',
							type: 'uint256',
						},
					],
					name: 'RemoveSwapToken',
					type: 'event',
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: false,
							internalType: 'address',
							name: 'token',
							type: 'address',
						},
						{
							indexed: false,
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256',
						},
					],
					name: 'Swap',
					type: 'event',
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: true,
							internalType: 'address',
							name: 'from',
							type: 'address',
						},
						{
							indexed: true,
							internalType: 'address',
							name: 'to',
							type: 'address',
						},
						{
							indexed: false,
							internalType: 'uint256',
							name: 'value',
							type: 'uint256',
						},
					],
					name: 'Transfer',
					type: 'event',
				},
				{
					anonymous: false,
					inputs: [
						{
							indexed: false,
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256',
						},
						{
							indexed: false,
							internalType: 'uint256',
							name: 'chainId',
							type: 'uint256',
						},
					],
					name: 'Unwrap',
					type: 'event',
				},
				{
					inputs: [
						{ internalType: 'uint256', name: 'chainId', type: 'uint256' },
					],
					name: 'addSupportedChainId',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [
						{
							internalType: 'address',
							name: 'contractAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'supplyIncrement',
							type: 'uint256',
						},
					],
					name: 'addSwapToken',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'address', name: 'owner', type: 'address' },
						{ internalType: 'address', name: 'spender', type: 'address' },
					],
					name: 'allowance',
					outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
					stateMutability: 'view',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'address', name: 'spender', type: 'address' },
						{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					],
					name: 'approve',
					outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'address', name: 'account', type: 'address' },
					],
					name: 'balanceOf',
					outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
					stateMutability: 'view',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					],
					name: 'burn',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'address', name: 'account', type: 'address' },
						{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					],
					name: 'burnFrom',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
					name: 'chainIds',
					outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
					stateMutability: 'view',
					type: 'function',
				},
				{
					inputs: [],
					name: 'decimals',
					outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
					stateMutability: 'view',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'address', name: 'spender', type: 'address' },
						{
							internalType: 'uint256',
							name: 'subtractedValue',
							type: 'uint256',
						},
					],
					name: 'decreaseAllowance',
					outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'address', name: 'spender', type: 'address' },
						{ internalType: 'uint256', name: 'addedValue', type: 'uint256' },
					],
					name: 'increaseAllowance',
					outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [
						{
							internalType: 'address',
							name: 'newBridgeRoleAddress',
							type: 'address',
						},
					],
					name: 'migrateBridgeRole',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'address', name: 'to', type: 'address' },
						{ internalType: 'uint256', name: 'amount', type: 'uint256' },
						{ internalType: 'address', name: 'feeAddress', type: 'address' },
						{ internalType: 'uint256', name: 'feeAmount', type: 'uint256' },
						{ internalType: 'bytes32', name: 'originTxId', type: 'bytes32' },
					],
					name: 'mint',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [],
					name: 'name',
					outputs: [{ internalType: 'string', name: '', type: 'string' }],
					stateMutability: 'view',
					type: 'function',
				},
				{
					inputs: [
						{
							internalType: 'address',
							name: 'contractAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'supplyDecrement',
							type: 'uint256',
						},
					],
					name: 'removeSwapToken',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'address', name: 'token', type: 'address' },
						{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					],
					name: 'swap',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
					name: 'swapSupply',
					outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
					stateMutability: 'view',
					type: 'function',
				},
				{
					inputs: [],
					name: 'symbol',
					outputs: [{ internalType: 'string', name: '', type: 'string' }],
					stateMutability: 'view',
					type: 'function',
				},
				{
					inputs: [],
					name: 'totalSupply',
					outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
					stateMutability: 'view',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'address', name: 'recipient', type: 'address' },
						{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					],
					name: 'transfer',
					outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'address', name: 'sender', type: 'address' },
						{ internalType: 'address', name: 'recipient', type: 'address' },
						{ internalType: 'uint256', name: 'amount', type: 'uint256' },
					],
					name: 'transferFrom',
					outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
					stateMutability: 'nonpayable',
					type: 'function',
				},
				{
					inputs: [
						{ internalType: 'uint256', name: 'amount', type: 'uint256' },
						{ internalType: 'uint256', name: 'chainId', type: 'uint256' },
					],
					name: 'unwrap',
					outputs: [],
					stateMutability: 'nonpayable',
					type: 'function',
				},
	];

const usdteAddress = '0xface851a4921ce59e912d19329929ce6da6eb0c7';

require('chai')
.use(require('chai-as-promised'))
.should()

const PensionServiceProvider = artifacts.require('BeimaAva');




contract('Pension Service Provider', ([owner, applicant]) => {
    
  
    let result;
    let userDetails = 'chukky';
    let upkeepInterval = 1;
    let pensionPlanDetails = "Flexible";
    let amountToSpend = web3.utils.toWei("1000", 'ether');  // 1 usdc tokens
    let approvedAmountToSpend = web3.utils.toWei('10000', 'ether');  // 10 link 
    const usdt_e = new web3.eth.Contract(usdteAbi, usdteAddress);
    let timeDuration = 0
    let lockTime = 1




    const yakVaultAddress = '0x07B0E11D80Ccf75CB390c9Be6c27f329c119095A';



     const unlockedAccount = '0x0d26d103c91f63052fbca88aaf01d5304ae40015';

 

    const fromUnlockedAccount = {
			from: unlockedAccount,
			gasLimit: web3.utils.toHex(500000),
			gasPrice: web3.utils.toHex(21875000000), // use ethgasstation.info (mainnet only)
		};




    beforeEach(async () => {

        // load contracts
        // busd = await BUSD.new();
        pensionContract = await PensionServiceProvider.new(
                    yakVaultAddress,
					upkeepInterval,
				);
        let usdt_e = new web3.eth.Contract(usdteAbi, usdteAddress);
        // console.log(usdc_kovan)


    })         
    describe("Beima Pensions Tests",  () => {
        
        it("Register's Applicants", async () => {
              // register a company
            let result = await pensionContract.register(userDetails )
            // console.log(result.logs[0].args);               

        })

        it("Accepts Deposits and Invests", async () => {
            await pensionContract.register(userDetails);
            await pensionContract.setPlan(usdteAddress, pensionPlanDetails, approvedAmountToSpend, amountToSpend, timeDuration, lockTime)
            let approveResult = await usdt_e.methods.approve(pensionContract.address, amountToSpend).send({from: owner});
            let deposit = await pensionContract.depositToken(usdteAddress, amountToSpend)
            console.log("First deposit:", deposit.logs[0].args.amountSpent.toString())
            let user = await pensionContract.pensionServiceApplicant(unlockedAccount);

            await pensionContract.supply(user.client.underlyingAsset)
        })   
    })
    


})



































































    // it("Updates User deposited amount and Reduces User Approved amount", async () => {
//             await pensionContract.register(userDetails,{ from: unlockedAccount });
//             await pensionContract.setPlan(cLinkMainet, pensionPlanDetails, approvedAmountToSpend, amountToSpend, timeDuration, lockTime, { from: unlockedAccount })

//             await link.methods.approve(pensionContract.address, approvedAmountToSpend).send(fromUnlockedAccount);
//             let deposit = await pensionContract.depositToken(LINK_ADDRESS, amountToSpend, fromUnlockedAccount)
         
//             console.log(deposit.logs[0].args)

//             result = await pensionContract.assets( LINK_ADDRESS, unlockedAccount, fromUnlockedAccount);
// ;
//             console.log(result.toString())
//             let user = await pensionContract.pensionServiceApplicant(unlockedAccount);
//             assert.equal(Number(new BN(approvedAmountToSpend).sub(new BN(amountToSpend))), Number(new BN(user.client.approvedAmountToSpend)), "Approved Amount Reduced after Deposit")

//             // console.log("Deposited Amount:", web3.utils.fromWei(result.client.depositedAmount.toString(), "ether"))
//             // console.log("Remaing Approved Amount set by User:", web3.utils.fromWei(result.client.approvedAmountToSpend.toString(), "ether"))
//             // console.log("Deafult amount to deposit on intervals:", web3.utils.fromWei(result.client.amountToSpend.toString(), "ether"))
//             // console.log(`Increased deposited amount by ${web3.utils.fromWei(amountToSpend.toString(), "ether")}. Deposited Amount currently at:`, web3.utils.fromWei(result.client.depositedAmount.toString(), "ether"))
//             // console.log(`Reduced approved Amount to Spend by Contract by ${web3.utils.fromWei(amountToSpend.toString(), "ether")}. Approved Amount to Spend currently at: `, web3.utils.fromWei(result.client.approvedAmountToSpend.toString(), "ether"))
//             // console.log("Default amount to spend set by User on Registeration:", web3.utils.fromWei(reslt.client.amountToSpend.toString(), "ether"))
//         })

//         it("Gets User Accrued Interest PerBlock", async () => {
//             let interest;
//             await pensionContract.register(userDetails,{ from: unlockedAccount });
//             await pensionContract.setPlan(cLinkMainet, pensionPlanDetails, approvedAmountToSpend, amountToSpend, timeDuration, lockTime, { from: unlockedAccount })
            

//             await link.methods.approve(pensionContract.address, approvedAmountToSpend).send(fromUnlockedAccount);
		
//             let deposit = await pensionContract.depositToken(LINK_ADDRESS, amountToSpend, fromUnlockedAccount)
            

//             await wait(2)
       
//             await pensionContract.depositToken(LINK_ADDRESS, amountToSpend, fromUnlockedAccount)
//             let user = await pensionContract.pensionServiceApplicant(unlockedAccount);
//             let assetAddress = await pensionContract.getAssetAddress(user.client.underlyingAsset)

//             interest = await pensionContract.getAccruedInterest(assetAddress, fromUnlockedAccount)
//             console.log("Accrued Interest per block based on deposited amount:", web3.utils.fromWei(interest.toString(), "ether"))

            
//             await pensionContract.depositToken(LINK_ADDRESS, amountToSpend, fromUnlockedAccount)

//             interest = await pensionContract.getAccruedInterest(assetAddress, fromUnlockedAccount)
//             console.log("Accrued Interest per block based on deposited amount:", web3.utils.fromWei(interest.toString(), "ether"))

            
//             await pensionContract.depositToken(LINK_ADDRESS, amountToSpend, fromUnlockedAccount)

//             interest = await pensionContract.getAccruedInterest(assetAddress, fromUnlockedAccount)
//             console.log("Accrued Interest per block based on deposited amount:", web3.utils.fromWei(interest.toString(), "ether"))

            

//             interest = await pensionContract.getAccruedInterest(assetAddress, fromUnlockedAccount)
//             console.log("Accrued Interest per block based on deposited amount:", web3.utils.fromWei(interest.toString(), "ether"))

//             await pensionContract.supply(user.client.underlyingAsset, fromUnlockedAccount)

//         })

//         it("Wthdraws Underlying Assets and Credits the Owner of the Assets", async () => {
//             await pensionContract.register(userDetails);
//             await pensionContract.setPlan(cLinkMainet, pensionPlanDetails, approvedAmountToSpend, amountToSpend, timeDuration, lockTime, { from: unlockedAccount })

//             await link.methods.approve(pensionContract.address, approvedAmountToSpend).send(fromUnlockedAccount);
			
//             await pensionContract.depositToken(LINK_ADDRESS, amountToSpend, fromUnlockedAccount)

//             await wait(2)
//             // 2nd transaction
//             await pensionContract.depositToken(LINK_ADDRESS, amountToSpend, fromUnlockedAccount)
//             let UserAssetamount = await pensionContract.assets( LINK_ADDRESS, unlockedAccount, fromUnlockedAccount);
//             let user = await pensionContract.pensionServiceApplicant(unlockedAccount);

//             await pensionContract.supply(user.client.underlyingAsset, fromUnlockedAccount)

//             userAmount = web3.utils.fromWei(UserAssetamount.toString(), "ether")
//             console.log(userAmount)
//             console.log("cAsset to withdraw", user.client.underlyingAsset)



//             // check balance before withdrawal
//             let balanceBeforeWithdraw = await link.methods.balanceOf(unlockedAccount).call();
//             balanceBeforeWithdrawal = web3.utils.fromWei(balanceBeforeWithdraw.toString(), "ether")
//             console.log("User Balance Before Withdrawal:",Number(balanceBeforeWithdrawal))
//             // assert.equal(balanceBeforeWithdrawal, balanceBefore);

//             await pensionContract.updateLockTime({from: unlockedAccount})

//             result = await pensionContract.redeemCErc20Tokens(user.client.underlyingAsset, fromUnlockedAccount )
//             await pensionContract.withdrawToken(LINK_ADDRESS, {from: unlockedAccount})

//             // result = await pensionContract.forcedWithdraw(LINK_ADDRESS, {from: unlockedAccount});
//             // console.log(result.logs[0].args)

//             let stakedBalance = await pensionContract.stakedBalance(unlockedAccount, {from: unlockedAccount})
//             assert.equal(Number(stakedBalance), 0, "Staked balance not updated after Redeem")

//             // let balanceAfterWithdraw = await link. methods.balanceOf(unlockedAccount).call();
//             // balanceAfterWithdrawal = web3.utils.fromWei(balanceAfterWithdraw.toString(), "ether")
//             // console.log("User Balance After Withdrawal:",Number(balanceAfterWithdrawal))
//             // assert.equal(Number(balanceAfterWithdrawal), Number(new BN(balanceBeforeWithdrawal).add(new BN(userAmount))))

//             // let interest = await pensionContract.getAccruedInterest(assetAddress, fromUnlockedAccount)
//             // console.log("Accrued Interest per year based on deposited amount:", web3.utils.fromWei(interest.toString(), "ether"))

//         })
//         it("Should reject withdrawal before locktime expires", async () => {
//             await pensionContract.register(userDetails, {from: unlockedAccount });
//             await pensionContract.setPlan(cLinkMainet, pensionPlanDetails, approvedAmountToSpend, amountToSpend, timeDuration, lockTime, { from: unlockedAccount })

//             await link.methods.approve(pensionContract.address, approvedAmountToSpend).send(fromUnlockedAccount);
//             await pensionContract.depositToken(LINK_ADDRESS, amountToSpend, fromUnlockedAccount)

//             let user = await pensionContract.pensionServiceApplicant(unlockedAccount);

//             await pensionContract.supply(user.client.underlyingAsset, fromUnlockedAccount)
//             await pensionContract.redeemCErc20Tokens(user.client.underlyingAsset, fromUnlockedAccount ).should.be.rejectedWith(EVM_REVERT)
//             await pensionContract.withdrawToken(LINK_ADDRESS, {from: unlockedAccount}).should.be.rejectedWith(EVM_REVERT)

        // })