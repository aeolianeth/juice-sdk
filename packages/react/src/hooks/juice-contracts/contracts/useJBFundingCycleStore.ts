/**
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */
import { useContext } from 'react';
import { getJBFundingCycleStore } from 'juice-sdk';

import { JuiceContext } from 'contexts/JuiceContext';

export function useJBFundingCycleStore() {
  const { provider } = useContext(JuiceContext);

  return getJBFundingCycleStore(provider);
}
