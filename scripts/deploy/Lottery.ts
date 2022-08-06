import { ethers } from 'hardhat';

async function main() {
  const entranceFee = ethers.utils.parseEther('0.001');
  const interval = '300';
  const vrfCoordinator = process.env.BSCTESTNET_VRF_COORDINATOR;
  const gasLane = process.env.BSCTESTNET_GASLANE;
  const subscriptionId = process.env.BSCTESTNET_SUBSCRIPTION_ID;
  const callbackGaslimit = '500000';

  const Lottery = await ethers.getContractFactory('Lottery');
  const lottery = await Lottery.deploy(
    entranceFee,
    interval,
    vrfCoordinator,
    gasLane,
    subscriptionId,
    callbackGaslimit
  );

  await lottery.deployed();

  console.log('Lottery deployed to:', lottery.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
