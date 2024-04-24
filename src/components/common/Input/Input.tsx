import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
}

export function Input({ label, ...rest }: IInput) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input {...rest} />
    </div>
  )
}
