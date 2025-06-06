// pages/index.js
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-10">
      <Head>
        <title>...</title>
        <meta name="description" content="sillyy.lol"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-48 h-48">
        <motion.img
          src="https://media1.tenor.com/m/vDHHQtr3PAwAAAAd/doudou-oye.gif"
          alt="rotating cat"
          className="rounded-full border-4 border-purple-300 shadow-lg"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        />
      </div>

      <div className="mt-6 text-xl text-purple-700 font-semibold">
        we are working on sillyy.lol to make sure u have the best experience.
      </div>
    </div>
  );
}
