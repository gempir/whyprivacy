import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Why Privacy</title>
                <meta name="description" content="Why privacy matters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex align-center justify-center">
                <h1 className={"text-3xl text-slate-50 font-bold underline"}>
                    Why Privacy?
                </h1>


            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Home
