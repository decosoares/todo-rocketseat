import { Trash } from "@phosphor-icons/react";
import styles from './Task.module.css';
import { InputCheckbox } from "./InputCheckbox";

export function Task() {
  return (
    <div className={styles.wrapper}>
      <InputCheckbox />
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nemo doloribus distinctio eum quam a tenetur ad? Molestias eligendi corporis eius? Nam natus tempore incidunt. Quam beatae iste numquam amet.</span>      
      <button type="button">
        <Trash size={16} />
      </button>
    </div>
  );
}