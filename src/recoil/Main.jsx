import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './atom';
import { CharacterCount } from './CharacterCount';
export const Main = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <input
            type="text"
            class="form-control"
            placeholder="text here"
            value={text}
            onChange={onChange}
          />
          <br />
          Echo: {text}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <CharacterCount />
        </div>
      </div>
    </div>
  );
};
