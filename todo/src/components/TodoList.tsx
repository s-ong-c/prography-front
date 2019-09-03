import * as React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { Body } from '../modules/todo';

const TodoListBlock = styled.div`
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  header {
    width: 100%;
    display: flex;
    background: linear-gradient(
      100deg,
      #008282,
      #005682,
      #000056,
      #2b0057,
      #6a006a
    );
    border-radius: 16px;
    flex: 1;
    h3 {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-basis: 90%;
      color: white;
    }
    button {
      display: flex;
      margin: 1rem;
      width: 4rem;
      outline: none;
      border: none;
      border-radius: 4px;
      background: #20c997;
      font-size: 1rem;
      color: white;
      justify-items: center;
      align-content: center;
      justify-content: space-around;
      cursor: pointer;
      &:hover,
      &:focus {
        background: #20c997;
      }
    }
  }
`;
interface TodoListProps {
  visible: boolean;
  todoItems: Body[];
  onVisible: () => void;
  onRemove(id: number): void;
  onToggle(id: number): void;
}
const TodoList: React.SFC<TodoListProps> = ({
  todoItems,
  onToggle,
  onRemove,
  visible,
  onVisible,
}) => {
  return (
    <TodoListBlock>
      <header>
        <h3>Prograhy Todo App</h3>
        <button onClick={onVisible}>{visible ? '숨기기' : '보여줘'}</button>
      </header>
      {todoItems.map(todo => (
        <TodoItem
          visible={visible}
          key={todo.id}
          status={todo.status}
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)}
          title={todo.title}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
