import { useState } from 'react';

type HookStateActions<T> = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<T>>;
  setError: React.Dispatch<React.SetStateAction<Error>>;
};

export type ContractWriteHookResponse<T> = {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
};

export function useContractWriteState<T>(
  defaultData?: T,
): ContractWriteHookResponse<T> & {
  actions: HookStateActions<T>;
} {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>(defaultData);
  const [error, setError] = useState<Error>();

  return { loading, data, error, actions: { setLoading, setData, setError } };
}
