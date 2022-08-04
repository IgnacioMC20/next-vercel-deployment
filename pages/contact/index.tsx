import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../../components/Navbar'
import { MainLayout } from '../../layouts/MainLayout'
import styles from '../../styles/Home.module.css'

export default function Contact() {
  return (
   <MainLayout>
        <h1 className={styles.title}>
          {/* Ir a HomePage <a href="/">Home</a> */}
          Ir a <Link href="/">Home</Link> Page
        </h1>
        <h2 className={styles.title}>
          Ir a <Link href='/contact/info'>Info</Link> Page
        </h2>
   </MainLayout>

     )
}
