import styles from './Button.module.css';

const Button = ({isOutline ,icon ,text}) => {
  return (
    <button className={isOutline ? styles.form_button_line : styles.form_button}>
        {icon}
        {text}
    </button>
  )
}

export default Button