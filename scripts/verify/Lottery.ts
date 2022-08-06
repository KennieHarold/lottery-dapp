import hardhat, { ethers } from 'hardhat';

async function main() {
  const entranceFee = ethers.utils.parseEther('0.001');
  const interval = '300';
  const vrfCoordinator = process.env.BSCTESTNET_VRF_COORDINATOR;
  const gasLane = process.env.BSCTESTNET_GASLANE;
  const subscriptionId = process.env.BSCTESTNET_SUBSCRIPTION_ID;
  const callbackGaslimit = '500000';

  await hardhat.run('verify:verify', {
    address: process.env.BSCTESTNET_LOTTERY_ADDRESS,
    contract: 'contracts/Lottery.sol:Lottery',
    constructorArguments: [entranceFee, interval, vrfCoordinator, gasLane, subscriptionId, callbackGaslimit]
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
