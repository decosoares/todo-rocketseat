// import { Empty } from './Empty';
import { Task } from './Task';
import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <div>
      <header>
        <div className={styles.labelContent}>
          <span className={styles.labelCreated}>Tarefas Criadas</span>
          <span className={styles.count}>0</span>
        </div>
        <div className={styles.labelContent}>
          <span className={styles.labelCompleted}>Concluídas</span>
          <span className={styles.count}>0</span>
        </div>
      </header>
      {/* <Empty/> */}
      <Task />
    </div>
  );
}