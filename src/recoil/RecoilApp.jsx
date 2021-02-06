import React from 'react';
import { Main } from './Main';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
const RecoilApp = () => {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
};

export default RecoilApp;
