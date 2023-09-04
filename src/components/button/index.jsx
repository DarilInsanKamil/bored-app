import styles from './button.module.css'
export const Button = ({onClick, title}) => {
    return <button className={styles.btn} onClick={onClick}>{title}</button>
}