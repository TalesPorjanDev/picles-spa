
import { ReactNode } from 'react'
import styles from './Panel.module.css'
import { SideBar } from '../../common/Sidebar/Sidebar'

interface IPanel {
    children: ReactNode
}

export function Panel({ children }: IPanel) {
    return <div className={styles.panel}>
        <SideBar />
        <main className={styles.content}>{children}</main>
    
    </div>
}