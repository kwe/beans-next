import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut} from "next-auth/react"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data: session} = useSession()
  
  if (session){
  return (
    <div className={styles.container}>
      <h1>Hello world!</h1>
    </div>
  )
  }
  
  return (
    <>
    Not signed in
    <button onClick={()=> signIn()}>Sign in</button>
    </>
  )
}

export default Home