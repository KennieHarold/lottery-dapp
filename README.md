# Lottery Dapp with NextJS and Chainlink

This project demonstrates a basic a lottery dapp using Chainlink's keepers which automatically determines the winner
based on the logic provided on the contract without the owner's intervention. And Chainlink's VRF to get the random value.

Great thanks also to Chainlink for providing an awesome tutorial video. You can check the link below. <br />
[Build a Raffle App With Solidity and NextJS: Code Along](https://www.youtube.com/watch?v=8bMrko6iD9Q)

Make sure you fill in these environment variables
```shell
ADMIN_PRIVATE_KEY=
BSCSCAN_API_KEY=
BSCTESTNET_VRF_COORDINATOR=
BSCTESTNET_GASLANE=
BSCTESTNET_SUBSCRIPTION_ID=
BSCTESTNET_LOTTERY_ADDRESS=
```

To run the project

```shell
npm run dev
```

To deploy the contract
```shell
npx hardhat run ./scripts/deploy/Lottery.sol
```

To verify the contract
```shell
npx hardhat run ./scripts/verify/Lottery.sol
```

Deployed lottery contract address on BSC Testnet
```shell
BSCTESTNET_LOTTERY_ADDRESS=0xa2a0C2622cE89d593D622AB2DEb85A101aa1c8b5
```