import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Login from '../components/Login'
import { Button, Text } from "@nextui-org/react";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  const login = () => {
    console.log('redirect to login page')
    router.push('/login')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Mirror App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* {<Login />} */}
        <Text
          h1
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
            margin: 10
          }}
          weight="bold"
        >
          Wellcome to the
        </Text>
        <Text
          h1
          css={{
            textGradient: "45deg, $purple600 -20%, $pink600 100%",
            margin: 10
          }}
          weight="bold"
          size={60}
        >
          Mirror World
        </Text>
        <Button
          color="secondary" auto ghost
          css={{
            marginTop: '10vh'
          }}
          onClick={login}
        >
          Enter
        </Button>
      </main>
    </div>
  )
}
