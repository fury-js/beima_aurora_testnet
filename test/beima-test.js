  
// const web3 = require("web3")
let BN = web3.utils.BN;
const EVM_REVERT = 'VM Exception while processing transaction: revert'


require('chai')
.use(require('chai-as-promised'))
.should()

const PensionServiceProvider = artifacts.require('BeimaAva');
const TestUsdc = artifacts.require('TUSDC');




contract('Pension Service Provider', ([owner, applicant]) => {
    
  
    let result;
    let userDetails = 'chukky';
    let upkeepInterval = 1;
    let pensionPlanDetails = "Flexible";
    let amountToSpend = web3.utils.toWei("10", 'ether');  // 10 usdc tokens
    let approvedAmountToSpend = web3.utils.toWei('10000', 'ether');  // 10 link 
    // const usdt_e = new web3.eth.Contract(usdteAbi, usdteAddress);
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
        pensionContract = await PensionServiceProvider.new(
            yakVaultAddress,
			upkeepInterval,
		);
        testUsdc = await TestUsdc.new();

    }) 


    describe("Beima Tests",  () => {
        
        it("Register's Applicants", async () => {
              // register a user
            let result = await pensionContract.register(userDetails )
            // console.log(result.logs[0].args);               

        })

        it("Accepts Deposits and Invests", async () => {
            await pensionContract.register(userDetails);
            await pensionContract.setPlan(
				testUsdc.address, 
				pensionPlanDetails, 
				approvedAmountToSpend, 
				amountToSpend, 
				timeDuration, 
				lockTime
			)
            await testUsdc.approve(pensionContract.address, amountToSpend);
            let deposit = await pensionContract.depositToken(testUsdc.address, amountToSpend);
            console.log("First deposit:", deposit.logs[0].args.amountSpent.toString());
            await pensionContract.pensionServiceApplicant(owner);

            await pensionContract.supply();
        });   
    });
    


});



































































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