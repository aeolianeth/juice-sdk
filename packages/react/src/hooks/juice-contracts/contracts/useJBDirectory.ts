/**
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */
import { useContext } from 'react';
import { getJBDirectory } from 'juice-sdk';

import { JuiceContext } from 'contexts/JuiceContext';

export function useJBDirectory() {
  const { provider } = useContext(JuiceContext);

  return getJBDirectory(provider);
}
