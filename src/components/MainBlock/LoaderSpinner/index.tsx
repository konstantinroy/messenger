import styles from './styles.module.scss'

const LoaderSpinner: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={`${styles.inner} ${styles.one}`} />
      <div className={`${styles.inner} ${styles.two}`} />
      <div className={`${styles.inner} ${styles.three}`} />
    </div>
  )
}

export default LoaderSpinner
