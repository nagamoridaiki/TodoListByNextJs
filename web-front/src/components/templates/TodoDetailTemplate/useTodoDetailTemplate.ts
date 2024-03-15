/**
 * useTodoDetailTemplate
 *
 * @package components
 */
import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
//import { fetchTodoDetailApi } from '@/apis/todoApi';
import { TodoType } from '@/interfaces/Todo';

type StatesType = {
  todo: TodoType | undefined;
};

type Params = {
  originTodoList: Array<TodoType>;
};

/**
 * useTodoDetailTemplate
 */
export const useTodoDetailTemplate = ({ originTodoList }: Params) => {
  const router = useRouter();
  const [todo, setTodo] = useState<TodoType | undefined>(undefined);

  /**
   * fetchTodoDetail
   */
  const fetchTodoDetail = useCallback(async () => {
    const targetId = router?.query?.id;
    if (!!targetId && typeof targetId === 'string' && !Number.isNaN(Number(targetId))) {
      const res = originTodoList.find(todo => String(todo.id) === targetId);

      setTodo(res && typeof res === 'object' ? res : undefined);
    }
  }, [router?.query?.id]);

  useEffect(() => {
    fetchTodoDetail();
  }, [fetchTodoDetail]);

  const states: StatesType = {
    todo,
  };

  return [states] as const;
};
