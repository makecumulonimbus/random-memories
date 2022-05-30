import Head from 'next/head'

export default function Home() {
  return (
    <div className="head">
      <Head>
        <title>Random Memories</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Pridi:wght@300&display=swap" rel="stylesheet"/>
      </Head>
    </div>
  )
}