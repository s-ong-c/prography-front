import * as React from 'react';
import styled from 'styled-components';
import Form from './Form';
import useInput from '../lib/hooks/useInput';

const MainTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;

  .wrapper {
    width: 100%;
    display: flex;
    margin-top: 5rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .contents {
    width: 512px;
    height: 768px;

    position: relative;
    background: white;
    border-radius: 16px;
    position: relative;
    background: white;
    margin: 0 auto;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    margin-top: 6rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
  }
`;
interface MainTemplateProps {
  addTodoList: (todo: string) => void;
}

const MainTemplate: React.SFC<MainTemplateProps> = ({
  addTodoList,
  children,
}) => {
  const [todo, onChangeTodo] = useInput('');
  const onSubmit = (todo: string) => {
    addTodoList(todo);
  };
  return (
    <MainTemplateBlock>
      <div className="wrapper">
        <Form value={todo} onChange={onChangeTodo} onSubmit={onSubmit} />
      </div>
      <div className="contents">{children}</div>
    </MainTemplateBlock>
  );
};

export default MainTemplate;
