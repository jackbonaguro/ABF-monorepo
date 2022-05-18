import { FC, useEffect } from 'react';
import toast, { useToasterStore } from 'react-hot-toast';
import { useMountedState } from 'react-use';
import { MAINNET_PROVIDER } from '../clients/provider';
import { usePriorityAccount, usePriorityChainId } from '../connectors/priority';
import { CHAIN_ID } from '../constants';
import { useProvider } from '../hooks/useProvider';
import { useBlockchainStore } from '../stores/blockchain';
import { DEFAULT_TOAST_STYLES } from '../constants/styles';

export const BlockchainEffect: FC = () => {
  const setBlockNumber = useBlockchainStore((s) => s.setBlockNumber);
  const setBalance = useBlockchainStore((s) => s.setBalance);
  const blockNumber = useBlockchainStore((s) => s.blockNumber);

  const provider = useProvider(false);
  const isMounted = useMountedState();
  const account = usePriorityAccount();
  const chainId = usePriorityChainId();

  useEffect(() => {
    if (!isMounted() || !provider) {
      return;
    }

    let stale = false;

    // set initial value
    provider.getBlockNumber().then((blockNum: number) => {
      if (!stale) {
        setBlockNumber(blockNum);
      }
    });

    provider.on('block', (blockNum: number) => {
      if (stale) {
      }
      setBlockNumber(blockNum);
    });

    // remove listener when the component is unmounted
    return () => {
      provider.removeAllListeners('block');
      setBlockNumber(undefined);
      stale = true;
    };
  }, [provider, isMounted, setBlockNumber]);

  useEffect(() => {
    if (!isMounted() || !provider || !account) {
      return;
    }
    provider.getBalance(account).then((v) => {
      setBalance(account, v.toString());
    });
  }, [provider, account, setBalance, blockNumber]);

  const { toasts } = useToasterStore();

  useEffect(() => {
    if (CHAIN_ID !== chainId && !!chainId) {
      toast(
        (t) => (
          <span>
            You are on the wrong network. <br />
            Switch to <b>mainnet</b> to enjoy <b>ABF</b>.
          </span>
        ),
        {
          duration: 50000,
          style: DEFAULT_TOAST_STYLES,
          id: 'wrong-chain-id',
        },
      );
    }
    if (CHAIN_ID === chainId) {
      toasts
        .filter((t) => t.id === 'wrong-chain-id' && t.visible)
        .forEach((t) => toast.dismiss(t.id));
    }
  }, [chainId]);

  return <></>;
};
