import dog from '../../assets/dog.svg'
import { Button, ButtonVariant } from "../../components/common/Button";
import styles from './Home.module.css'

export function Home() {
    return (
      <div className={styles.container}>
        <img src ={dog} />
        <Button variant={ButtonVariant.Default}>Quero adotar</Button>
        <Button variant={ButtonVariant.Outlined}>Tenho um abrigo</Button>
      </div>
    )
}