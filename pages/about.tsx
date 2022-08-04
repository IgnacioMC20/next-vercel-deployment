import Link from 'next/link'
import { LightLayout } from '../layouts/LightLayout'
import { MainLayout } from '../layouts/MainLayout'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <>
      <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link> Page
      </h1>
    </>
  )
}


// ? Para tener un codigo mas limpio se puede usar este bloque para incluir layouts
About.getLayout = function getLayout(page: any) {

  return (
    <MainLayout>
      <LightLayout>
        {page}
      </LightLayout>
    </MainLayout>
  )
}
