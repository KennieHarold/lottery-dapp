import React from 'react';
import { useWeb3Contract, useMoralis } from 'react-moralis';
import Lottery from '../constants/Lottery.json';

function LotteryEntrance() {
  const { isWeb3Enabled } = useMoralis();
  const [recentWinner, setRecentWinner] = React.useState('0');

  console.log(process.env.REACT_APP_LOTTERY_CONTRACT_ADDRESS);

  const { runContractFunction: enterRaffle } = useWeb3Contract({
    abi: Lottery.abi,
    contractAddress: process.env.REACT_APP_LOTTERY_CONTRACT_ADDRESS,
    functionName: 'enterRaffle',
    msgValue: '1000000000000000', // 0.001 ETH
    params: {}
  });

  const { runContractFunction: getRecentWinner } = useWeb3Contract({
    abi: Lottery.abi,
    contractAddress: process.env.REACT_APP_LOTTERY_CONTRACT_ADDRESS,
    functionName: 'recentWinner',
    params: {}
  });

  React.useEffect(() => {
    async function startup() {
      const _recentWinner = await getRecentWinner();
      setRecentWinner(_recentWinner);
    }

    if (isWeb3Enabled) {
      startup();
    }
  }, [isWeb3Enabled]);

  return (
    <div>
      <button
        className="mt-5 px-4 py-2 rounded bg-black text-white"
        onClick={async () => {
          await enterRaffle();
        }}
      >
        Enter Lottery!
      </button>

      <div className="mt-4">The recent winner is: {recentWinner}</div>
    </div>
  );
}

export default LotteryEntrance;
