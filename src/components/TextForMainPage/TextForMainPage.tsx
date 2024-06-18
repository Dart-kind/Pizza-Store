import styles from './styles.module.scss'
import { FC } from "react"

interface TextProps {
  title: string
  paragraph: string
}
const TextForMainPage: FC<TextProps>= ({title, paragraph}) => {
  return (
    <div className={styles.text__container}>
      <h2 className={styles.text__title}>{title}</h2>
      <p className={styles.text__description}>{paragraph}</p>
    </div>
  )
}

export default TextForMainPage