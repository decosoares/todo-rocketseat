import { useState } from 'react';
import { Empty } from './Empty';
import { Task } from './Task';
import styles from './List.module.css';
import { AddTodo } from './AddTodo';

export function List() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskDelete) {
    const taskListWithoutOne = tasks.filter(task => task.id != taskDelete.id);
    setTasks(taskListWithoutOne);
  }

  function updateTask(taskUpdate) {
    const taskListWithUpdatedOne = tasks.map(task => {
      if (task.id == taskUpdate.id) {
        return taskUpdate;
      }
      return task;
    });

    setTasks(taskListWithUpdatedOne);
  }

  return (
    <>
      <AddTodo addTask={addTask}/>
      <div>
        <header>
          <div className={styles.labelContent}>
            <span className={styles.labelCreated}>Tarefas Criadas</span>
            <span className={styles.count}>{ tasks.length }</span>
          </div>
          <div className={styles.labelContent}>
            <span className={styles.labelCompleted}>Concluídas</span>
            <span className={styles.count}>
              {tasks.reduce(
                (accumulator, task) => {
                  if (task.isComplete)
                    return accumulator + 1
                  return accumulator
                },0
              )} de {tasks.length}
            </span>
          </div>
        </header>
        {tasks.length ?
          tasks.map(
            (task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onUpdateTask={updateTask}
                />)
            }) :
          <Empty />}
      </div>
    </>
  );
}