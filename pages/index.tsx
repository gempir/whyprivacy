import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Phone from "../images/phone.png"
import Videocall from "../images/videocall.png"
import Walking from "../images/walking.png"
import Graphs from "../images/graphs.png"
import Reviews from "../images/reviews.png"

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Why Privacy</title>
                <meta name="description" content="Why privacy matters" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex align-center justify-center flex-col p-5 items-center">
                <div className='container'>
                    <div className="text-center">
                        <h1 className={"text-3xl font-bold mt-5"}>
                            Why Privacy?
                        </h1>
                        <h3 id="hide" className={"text-xl font-bold mt-2 text-neutral-500"}>
                            Why you should care about your privacy
                        </h3>
                        <div className="h-28 block relative">
                            <Image src={Phone} alt="Giant Phone" layout='fill' objectFit='contain' />
                        </div>
                    </div>
                    <h2 id="secrecy" className={"text-2xl font-bold mt-5"}>
                        Privacy is not secrecy
                    </h2>
                    <div className="flex gap-5">
                        <div>
                            <h3 id="hide" className={"text-xl font-bold my-1 text-neutral-500"}>
                                “You have nothing to hide”
                            </h3>
                            <p>
                                You have drapes on your windows, you close the bathroom door, you vote alone.
                                Even with nothing to hide, privacy does not mean everyone needs to know everything about you.
                            </p>
                        </div>
                        <div className='w-full relative'>
                            <Image src={Videocall} alt="Video Call" layout='fill' objectFit='contain' />
                        </div>
                    </div>



                    <h2 id="right" className={"text-2xl font-bold mt-5 mb-1 "}>
                        Privacy is a right and it hasn&apos;t always been
                    </h2>
                    <div className="flex gap-5">
                        <div className='w-full relative'>
                            <Image src={Walking} alt="Walking" layout='fill' objectFit='contain' />
                        </div>
                        <p>
                            Freedom of speech, the right to vote, the right to divorce, freedom from discrimination aren&apos;t a given in every country or time.
                            <p>
                                You can chose to not exercise your right of privacy, but everyone else should have the choice to do so.
                            </p>
                            <p>
                                In ten years you might feel differently, but if you don&apos;t defend your rights now you might not be able to excercise them in the future.
                            </p>
                        </p>
                    </div>


                    <h2 id="value" className={"text-2xl font-bold mt-5 mb-1"}>
                        Your data has value
                    </h2>
                    <div className='flex gap-5'>
                        <p className="flex flex-col gap-2">
                            <p>
                                Similarily how you would pay for a plumber fixing your sink you should consider the cost when
                                you pay with your privacy for services.
                            </p>
                            <p>
                                No Company is in the business of giving something away for free. Giveaways drive traffic to their products, free trials are
                                a way to to drive customers to buy subscriptions in the future.
                            </p>
                            <p>
                                Be concious of the trade you are doing.
                            </p>
                        </p>
                        <div className='w-full relative'>
                            <Image src={Graphs} alt="Graphs" layout='fill' objectFit='contain' />
                        </div>
                    </div>

                    <h2 id="against" className={"text-2xl font-bold mt-5 mb-1 "}>
                        You lose control of your data
                    </h2>
                    <div className='flex gap-5'>
                        <p>
                            <p>
                                Data never stays where it should, companies sell it, hackers gain access to it or managers find a way to repurpose it.
                            </p>
                            <p>
                                Combining multiple data points from different sources can be a great way to build a profile.
                                Suddendly more people know where you live, work, previous partners, sexual preferences or where they will find you next sunday.
                            </p>
                        </p>
                        <div className='w-full relative'>
                            <Image src={Reviews} alt="Reviews" layout='fill' objectFit='contain' />
                        </div>
                    </div>

                </div>

            </main>

            <footer className="p-5 text-center">
                <Link href={"/privacy"}>Privacy Policy</Link>
            </footer>
        </div>
    )
}

export default Home
