import style from './InputCheckbox.module.css';

export function InputCheckbox() {
  return (
    <div className={style.checkbox}>
      <input type="checkbox" checked="checked" />
      <span className={style.checkmark}></span>
    </div>
  );
} 