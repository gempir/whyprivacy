import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import GiantPhone from "../images/giant-phone.png"

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Why Privacy</title>
                <meta name="description" content="Why privacy matters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex align-center justify-center flex-col p-5">
                <div className="text-center">
                    <h1 className={"text-3xl font-bold mt-5"}>
                        Why Privacy?
                    </h1>
                    <h3 id="hide" className={"text-xl font-bold mt-2 text-neutral-500"}>
                        Why you should care about your privacy
                    </h3>
                    <div className="h-28 block relative">
                        <Image src={GiantPhone} alt="Giant Phone" layout='fill' objectFit='contain' />
                    </div>
                </div>
                <h2 id="secrecy" className={"text-2xl font-bold mt-5"}>
                    Privacy is not secrecy
                </h2>
                <h3 id="hide" className={"text-xl font-bold my-2 text-neutral-500"}>
                    “You have nothing to hide”
                </h3>
                <p>
                    - You have drapes on your windows because you wouldn’t want everyone to look in
                    - You close the bathroom door
                    - Your medical history?
                    - Your political vote
                    - People will take advantage of you for if you publicize everything
                </p>

                <h2 id="value" className={"text-2xl font-bold mt-5"}>
                    Your data has value
                </h2>
                <p>
                    - Why give something away for free? You’re not a charity
                    - Be aware of the trade you are doing
                    - No company is in the business of giving away something for free
                    - Google makes money off of your searches
                    - Giveaways on social media drive traffic to the companies social media channels
                    - Free trials are a way to drive customers to buy subscriptions in the future
                </p>

                <h2 id="right" className={"text-2xl font-bold mt-5"}>
                    Privacy is a right and it hasn&apos;t always been
                </h2>
                <p>
                    - Freedom of Speech, The Right to Vote, The Right to Divorce in a lot of countries all of these rights aren’t a given
                    - You can chose not to exercise that right, but that does not mean everyone has to make the same choice
                    - If you post about your children every day on Facebook, Tiktok you don’t give them any choice
                    - In 10 Years they might resent you for posting every detail of their life online, you didn’t give them any choice
                </p>

                <h2 id="against" className={"text-2xl font-bold mt-5"}>
                    Your data can be used against you
                </h2>
                <p>
                    - What if you go into a high role in 30 years, maybe a CEO of a big company?
                    - Every piece of information will be used against you
                    - Oh you used Tinder in your 20s, Oh just a sleezy man looking for a quick one night stand
                </p>

            </main>

            <footer className="p-5 text-center">
                <Link href={"/privacy"}>Privacy Policy</Link>
            </footer>
        </div>
    )
}

export default Home
