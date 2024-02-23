import Head from "next/head"
const CustomHead = () => {
  return (
    <Head>
        <title>Next Chat App</title>
        <meta name="description" content=" Enormous Chat App" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/chat-icon-filled.svg" />
        <link rel="stylesheet"  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </Head>
   
  )
}

export default CustomHead