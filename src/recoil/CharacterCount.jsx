import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from './selector';
export const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};
