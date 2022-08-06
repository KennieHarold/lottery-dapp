declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ADMIN_PRIVATE_KEY: string;
      INFURA_API_KEY: string;
      BSCSCAN_API_KEY: string;
      ETHERSCAN_API_KEY: string;
      BSCTESTNET_VRF_COORDINATOR: string;
      BSCTESTNET_GASLANE: string;
      BSCTESTNET_SUBSCRIPTION_ID: string;
      BSCTESTNET_LOTTERY_ADDRESS: string;
    }
  }
}

export {};
