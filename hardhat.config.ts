import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import dotenv from 'dotenv';

dotenv.config();

const { ADMIN_PRIVATE_KEY, BSCSCAN_API_KEY, ETHERSCAN_API_KEY }: NodeJS.ProcessEnv = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  networks: {
    bsc: {
      url: 'https://bsc-dataseed1.binance.org/',
      accounts: [ADMIN_PRIVATE_KEY],
      chainId: 56
    },
    bscTestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [ADMIN_PRIVATE_KEY],
      chainId: 97
    }
  },
  etherscan: {
    apiKey: {
      bsc: ETHERSCAN_API_KEY,
      bscTestnet: BSCSCAN_API_KEY
    }
  }
};

export default config;
