import { useState, useCallback, useEffect } from 'react';
//import { useAuthContext } from '@/contexts/AuthContext';
//import { fetchTodoListApi, createTodoApi, updateTodoApi, deleteTodoApi } from '@/apis/todoApi';
import { TodoType } from '@/interfaces/Todo';
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from '@/constants/data'

export const useTodo = () => {
  const [originTodoList, setOriginTodoList] = useState<Array<TodoType>>(INIT_TODO_LIST);
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  // Todo新規登録処理
  const addTodo = useCallback(
    async (title: string, content: string) => {
      const nextUniqueId = uniqueId + 1;
      setOriginTodoList([
        ...originTodoList,
        {
          id: nextUniqueId,
          title: title,
          content: content,
        },
      ]);
      setUniqueId(nextUniqueId);
    },[originTodoList, uniqueId]
  );

  // Todo更新処理
  const updateTodo = useCallback(
    async (id: number, title: string, content: string) => {
      const updatedTodoList = originTodoList.map((todo) => {
        if (todo.id == id) {
          return {
            id: todo.id,
            title: title,
            content: content
          }
        }
        return todo
      })
      setOriginTodoList(updatedTodoList)
    }, [originTodoList]
  );

  // Todo削除処理
  const deleteTodo = useCallback(
    (id: number, targetTitle: string) => {
      if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
        const newTodoList = originTodoList.filter(
          (todo) => todo.id !== id
        );
        setOriginTodoList(newTodoList);
      }
    }, [originTodoList]
  );

  return {
    originTodoList,
    addTodo,
    updateTodo,
    deleteTodo
  }
}
