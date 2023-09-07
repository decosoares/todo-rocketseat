import { PlusCircle } from '@phosphor-icons/react';

import styles from './AddTodo.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function AddTodo({ addTask }) {
  const [task,setTask] = useState({ title: '' });
  function handleAddNewTask(event) {
    event.preventDefault();
    if (!task.title)
      return;
    task.id = uuidv4();
    task.isComplete = false;
    addTask(task);
    setTask({ id:'',title: '' });
  }

  function handleChangeInputTitle(event) {
    setTask({ title: event.target.value });
  }
  return (
    <form onSubmit={handleAddNewTask} className={styles.formContent}>
      <input type="text" placeholder='Adicionar uma nova tarefa' name="title" id="title" value={task.title} onChange={handleChangeInputTitle} />
      <button type='submit'>
        Criar
        <PlusCircle size={16} weight='bold' />
      </button>
    </form>
  )
}