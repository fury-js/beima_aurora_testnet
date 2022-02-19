<<<<<<< HEAD
/** @format */

// const BUSD = artifacts.require("mBUSD");
const Beima = artifacts.require('BeimaAva');
const TUSDC = artifacts.require('TUSDC');

module.exports = async function (deployer, network, accounts) {
	const DVaultAddress = '0x07B0E11D80Ccf75CB390c9Be6c27f329c119095A';
	const upkeepInterval = 2;

	// await deployer.deploy(BUSD);
	// const busd = await BUSD.deployed();
		await deployer.deploy(
			Beima,
			DVaultAddress,
			upkeepInterval,
		);
		const pensionContract = await Beima.deployed();
        console.log("Contract deployed at:", pensionContract.address)

		await deployer.deploy(TUSDC)
		const Tusdc = await TUSDC.deployed();
		console.log("Test Usdc Deployed at:", Tusdc.address)
};
=======
/** @format */

const Beima = artifacts.require('BeimaAva');

module.exports = async function (deployer, network, accounts) {
	const yakVaultAddress = '0x07B0E11D80Ccf75CB390c9Be6c27f329c119095A';
	const upkeepInterval = 2;

		await deployer.deploy(
			Beima,
			yakVaultAddress,
			upkeepInterval,
		);
		const pensionContract = await Beima.deployed();
        console.log("Contract deployed at:", pensionContract.address)
};
>>>>>>> 2e9713e0dc9f228167db15ea13b54ad52ce84f71
