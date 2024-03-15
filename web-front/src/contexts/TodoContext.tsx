import { FC, ReactNode, useContext, createContext } from 'react';
import { TodoType } from '@/interfaces/Todo';
import { useTodo } from '@/hooks/useTodo';

type Props = {
  children: ReactNode;
};

interface ContextInterface {
  originTodoList: Array<TodoType>;
  addTodo: (title: string, content: string) => Promise<void>;
  updateTodo: (id: number, title: string, content: string) => Promise<void>;
  deleteTodo: (id: number, targetTitle: string) => void;
}

const TodoContext  = createContext({} as ContextInterface)

export const TodoProvider: FC<Props> = ({children}) => {
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

  return (
    <TodoContext.Provider
    value={{
      originTodoList,
      addTodo,
      updateTodo,
      deleteTodo,
    }}>
    {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => useContext(TodoContext);

