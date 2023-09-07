import { useState } from 'react';
import style from './InputCheckbox.module.css';

export function InputCheckbox({ status, onChangeStatus }) {
  const [checkValue, setCheckValue] = useState(status);
  function handleChangeCheckbox(event) {
    setCheckValue(event.target.checked);
    onChangeStatus(!checkValue);
  }
  return (
    <>
      <label className={style.customCheckbox}>
        <input type="checkbox" name="ckeck" id="ckeck" checked={checkValue} onChange={handleChangeCheckbox}/>
        <span className={style.checkmark}></span>
      </label>
    </>
  );
} 