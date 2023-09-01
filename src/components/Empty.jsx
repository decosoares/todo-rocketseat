import Clipboard from '../assets/Clipboard.svg'
import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.content}>
      <img src={Clipboard} />
      <div className={styles.message}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}