import { createStandardAction } from 'typesafe-actions';
import { createReducer } from '../lib/utils';

// actions 함수
const BASIC = 'todo/BASIC';
const CREATE = 'todo/CREATE';
const REMOVE = 'todo/REMOVE';
const TOGGLE = 'todo/TOGGLE';

export const basic = createStandardAction(BASIC)<Body[]>();
export const create = createStandardAction(CREATE)<Body>();
export const remove = createStandardAction(REMOVE)<{ id: number }>();
export const toggle = createStandardAction(TOGGLE)<{ id: number }>();

type Basic = ReturnType<typeof basic>;
type Create = ReturnType<typeof create>;
type Remove = ReturnType<typeof remove>;
type Toggle = ReturnType<typeof toggle>;

export interface TodoTypeParam {
  statusCode: number;
  body: Body[];
}

export interface Body {
  id: number;
  status: string;
  title: string;
}
export interface TodoState {
  todoItems: Body[];
  input: string;
  visible: boolean;
}

const initialState: TodoState = {
  todoItems: [],
  input: '',
  visible: true,
};
const todo = createReducer<TodoState>(
  {
    [BASIC]: (state, action: Basic) => ({
      ...state,
      todoItems: action.payload,
    }),
    [CREATE]: (state, action: Create) => ({
      input: '',
      todoItems: [...state.todoItems, action.payload],
      visible: true,
    }),
    [REMOVE]: (state, action: Remove) => ({
      ...state,
      todoItems: state.todoItems.filter(todo => todo.id !== action.payload.id),
    }),
    [TOGGLE]: (state, action: Toggle) => ({
      ...state,
      todoItems: state.todoItems.map(todo => {
        if (todo.id === action.payload.id) {
          if (todo.status === 'complete') {
            todo.status = 'todo';
          } else {
            todo.status = 'complete';
          }
        }
        return todo;
      }),
    }),
  },
  initialState,
);

export default todo;
