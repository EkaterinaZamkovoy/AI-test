'use client';

import { store } from '@/store/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type Props = {
  children: ReactNode;
};

export const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
