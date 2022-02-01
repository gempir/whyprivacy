import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GiantPhone from "../images/giant-phone.png"

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Why Privacy</title>
                <meta name="description" content="Why privacy matters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex align-center justify-center">
                <h1 className={"text-3xl font-bold m-5"}>
                    Why Privacy?
                </h1>
                <Image src={GiantPhone} alt="Giant Phone" className={"w-1/2"} />

            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Home
