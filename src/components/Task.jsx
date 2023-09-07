import { Trash } from "@phosphor-icons/react";
import styles from './Task.module.css';
import { InputCheckbox } from "./InputCheckbox";

export function Task({ task, onDeleteTask, onUpdateTask }) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function onChangeStatus(status) {
    task.isComplete = status;
    onUpdateTask(task);
  }

  return (
    <div className={styles.wrapper}>
      <InputCheckbox task={task} onChangeStatus={onChangeStatus} />
      <span className={task.isComplete ? styles.isComplete : ''}>{ task.title }</span>      
      <button onClick={handleDeleteTask}>
        <Trash size={16}  />
      </button>
    </div>
  );
}