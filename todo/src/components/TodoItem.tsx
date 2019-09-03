import * as React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
interface TodoItemProps {
  onToggle: () => void;
  onRemove: () => void;
  title: string;
  status: string;
  visible: boolean;
}
const TodoItemBlock = styled.div<{ visible: boolean }>`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  ${props =>
    props.visible &&
    css`
      display: none;
    `}
`;

const Text = styled.div<{ status: string }>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  cursor: pointer;
  ${props =>
    props.status === 'complete' &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const CheckCircle = styled.div<{ status: string }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.status &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
const TodoItem: React.SFC<TodoItemProps> = ({
  onToggle,
  status,
  title,
  onRemove,
  visible,
}) => {
  return (
    <TodoItemBlock visible={visible}>
      <CheckCircle status={status} onClick={onToggle}>
        {/* <b
          onClick={onToggle}
          style={{
            textDecoration: status === 'complete' ? 'line-through' : 'none',
          }}
        ></b> */}
        {status === 'complete' ? <MdDone /> : ''}
      </CheckCircle>
      <Text status={status}>{title}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
