import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          THIS IS VERSION 0.0.7 BACKEND
        </h1>

        <p className={styles.description}>
         GET READY TO ROCK AND ROLL!!!
        </p>
      </main>

    </div>
  )
}
