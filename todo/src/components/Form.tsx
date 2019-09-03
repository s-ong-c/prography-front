import * as React from 'react';
import styled from 'styled-components';

const FormBlock = styled.form`
  display: flex;
  width: 100%;
  height: 2rem;
  justify-content: space-between;
  input {
    flex: 1;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid #dee2e6;
  }
  button {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background: #20c997;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 5rem;
    cursor: pointer;
    &:hover,
    &:focus {
      background: #6147ad;
    }
  }
`;
interface FormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (value: string) => void;
  value: string;
}

const Form: React.SFC<FormProps> = ({ onChange, onSubmit, value }) => {
  return (
    <FormBlock
      onSubmit={e => {
        e.preventDefault();
        onSubmit(value);
      }}
    >
      <input
        onChange={onChange}
        value={value}
        placeholder="오늘의 TODO LIST."
      />
      <button>Submit</button>
    </FormBlock>
  );
};

export default Form;
