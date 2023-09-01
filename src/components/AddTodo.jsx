import { PlusCircle } from '@phosphor-icons/react';

import styles from './AddTodo.module.css';

export function AddTodo() {
  return (
    <form className={styles.formContent}>
      <input type="text" placeholder='Adicionar uma nova tarefa' name="task" id="task" />
      <button type='submit'>
        Criar
        <PlusCircle size={16} weight='bold' />
      </button>
    </form>
  )
}