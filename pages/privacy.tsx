import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Why Privacy</title>
                <meta name="description" content="Why privacy matters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="mt-3">
                <Link href="/" passHref><a className="p-5 text-xl text-blue-800 hover:text-blue-600">❮ Back</a></Link>
            </header>

            <main className="flex align-center justify-center flex-col p-5 gap-5">
                <section>
                    <p>
                    This website is hosted on Vercel please refer to Vercel&apos;s privacy policy for more information.
                    </p>
                    <a href={"https://vercel.com/legal/privacy-policy"} className="text-blue-800 hover:text-blue-600">Vercel&apos;s privacy policy</a>
                    <p>No further data is collected by this website.</p>
                </section>
                <section>
                    <p>If you have any concerns please contact me at</p>
                    <a href={"mailto:gempir.dev@gmail.com"} className="text-blue-800 hover:text-blue-600">gempir.dev@gmail.com</a>
                </section>
                <section>
                    <p>This website is open source and available on Github.</p>
                    <a href="https://github.com/gempir/whyprivacy" className="text-blue-800 hover:text-blue-600">github.com/gempir/whyprivacy</a>
                </section>
            </main>
        </div>
    )
}

export default Home
