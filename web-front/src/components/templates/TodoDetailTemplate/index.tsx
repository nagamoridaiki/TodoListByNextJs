/**
 * TodoDetailTemplate
 *
 * @package components
 */
import { FC } from 'react';
import { useTodoContext } from '../../../contexts/TodoContext';
import { useTodoDetailTemplate } from './useTodoDetailTemplate';
import { BaseLayout } from '../../organisms/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TextArea } from '../../atoms/TextArea';
import styles from './styles.module.css';

export const TodoDetailTemplate = () => {
  const { originTodoList } = useTodoContext();
  const [{ todo }] = useTodoDetailTemplate({ originTodoList });

  return (
    <BaseLayout title={'TodoDetail'}>
      {!!todo && (
        <div className={styles.container}>
          <div className={styles.area}>
            <InputForm disabled value={todo.title} placeholder={'Title'} />
          </div>
          <div className={styles.area}>
            <TextArea disabled value={todo.content} placeholder={'Content'} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};