import React from 'react';
import RecoilizeDebugger from 'recoilize';
import { Main } from './Main';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
const RecoilApp = () => {
  return (
    <RecoilRoot>
      <RecoilizeDebugger />
      <Main />
    </RecoilRoot>
  );
};

export default RecoilApp;
