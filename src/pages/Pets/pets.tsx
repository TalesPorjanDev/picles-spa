import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid/grid";
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card";

export function Pets() {
    return (
        <Grid>
            <div className={styles.container}>
            <Header />
            <main className={styles.list}>
                <Card href='./pets/1' text="nina" thumb="" />
                <Card href='./pets/2' text="bob" thumb="" />
                <Card href='./pets/3' text="jão" thumb="" />
            </main>
            </div>
        </Grid>
    )
}