/**
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 */
import { useContext } from 'react';
import { getJBProjects } from 'juice-sdk';

import { JuiceContext } from 'contexts/JuiceContext';

export function useJBProjects() {
  const { provider } = useContext(JuiceContext);

  return getJBProjects(provider);
}
