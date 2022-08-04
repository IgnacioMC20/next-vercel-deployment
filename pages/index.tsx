import Link from 'next/link';
import { MainLayout } from '../layouts/MainLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        Ir a <Link href="/about">About</Link> Page
      </h1>
      <h1 className={styles.title}>
        Ir a <Link href="/about">Contact</Link> Page
      </h1>
      <h2 className={styles.title}>
        Ir a <Link href='/contact/info'>Info</Link> Page
      </h2>
    </MainLayout>
  )
}
