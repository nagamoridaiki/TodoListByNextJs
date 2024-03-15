import { TodoType } from '../interfaces/Todo';


export const INIT_TODO_LIST: Array<TodoType> = [
  {
    id: 1,
    title: "todo1",
    content: "todo1 content"
  },
  {
    id: 2,
    title: "todo2",
    content: "todo2 content"
  }
];

export const INIT_UNIQUE_ID = INIT_TODO_LIST.length;