import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid/grid";
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card";
import { Skeleton } from '../../components/common/Skeleton';


import 'react-loading-skeleton/dist/skeleton.css'

export function Pets() {
    return (
        <Grid>
            <div className={styles.container}>
            <Header />
            <main className={styles.list}>
                <Skeleton count={5}
                containerClassName={styles.skeleton} />
            </main>
            </div>
        </Grid>
    )
}