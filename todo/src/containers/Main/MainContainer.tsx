import * as React from 'react';
import MainTemplate from '../../components/MainTemplate';
import TodoList from '../../components/TodoList';
import { connect } from 'react-redux';
import { getTodoList } from '../../lib/api/list';
import { RootState } from '../../modules';
import { basic, Body, create, remove, toggle } from '../../modules/todo';

interface OwnProps {}
interface StateProps {
  todoList: Body[];
}

interface DispatchProps {
  basic: typeof basic;
  create: typeof create;
  remove: typeof remove;
  toggle: typeof toggle;
}

type MainContainerProps = OwnProps & StateProps & DispatchProps;

const { useState, useEffect, useCallback } = React;

const MainContainer: React.SFC<MainContainerProps> = ({
  basic,
  todoList,
  create,
  remove,
  toggle,
}) => {
  let autoId = 5;

  /**
   *  기본 https://killsanghyuck.github.io/prography_5th_front/todoDummy.json  data 호출
   */
  async function initDataSet() {
    const todoListItem = await getTodoList();
    basic(todoListItem.data.body);
  }

  useEffect(() => {
    initDataSet();
  }, []);

  // todo List 추가
  const addTodoList = useCallback(async (todo: string) => {
    const newTodoList = {
      title: todo,
      id: autoId++,
      status: 'todo',
    };
    create(newTodoList);
  }, []);

  // Remove
  const onRemove = useCallback((id: number) => {
    remove({ id });
  }, []);

  const onToggle = useCallback((id: number) => {
    toggle({ id });
  }, []);

  // button toggle hidden show
  const [closed, setClosed] = useState(false);
  const onVisible = () => {
    if (closed) {
      setClosed(false);
    } else {
      setClosed(true);
    }
  };
  return (
    <MainTemplate addTodoList={addTodoList}>
      <TodoList
        onVisible={onVisible}
        visible={closed}
        onRemove={onRemove}
        onToggle={onToggle}
        todoItems={todoList}
      />
    </MainTemplate>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  state => ({
    todoList: state.todo.todoItems,
  }),
  { basic, create, remove, toggle },
)(MainContainer);
