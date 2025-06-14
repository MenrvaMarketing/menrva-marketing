
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meneriva Marketing</title>
        <meta name="description" content="SEO, SEM, and Web Design agency based in the USA. Grow your brand with Meneriva Marketing." />
      </Head>

      <header className="bg-navy p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gold">Meneriva Marketing</h1>
        <button className="bg-gold text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-400 transition">Grow Your Brand Today</button>
      </header>

      <main className="p-10 text-center">
        <motion.h2 className="text-4xl font-bold mb-4" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          Empowering Brands with SEO, SEM & Web Design
        </motion.h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          We help businesses grow with results-driven digital marketing strategies and beautifully designed websites.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard title="SEO" desc="Rank higher in search engines and drive organic traffic." />
          <ServiceCard title="SEM" desc="Run high-ROI paid ads across Google and Bing." />
          <ServiceCard title="Web Design" desc="Modern, mobile-friendly sites that convert visitors into clients." />
        </div>
      </main>

      <footer className="bg-navy text-center p-10">
        <h3 className="text-xl font-bold text-gold mb-2">Contact Anthony Joseph</h3>
        <p className="mb-1">Phone: <a href="tel:9372417859" className="underline">937-241-7859</a></p>
        <p>Email: <a href="mailto:hello@menerivamarketing.com" className="underline">hello@menerivamarketing.com</a></p>
        <p className="text-sm mt-4">© 2025 Meneriva Marketing</p>
      </footer>
    </>
  );
}

const ServiceCard = ({ title, desc }) => (
  <div className="bg-white text-black p-6 rounded-xl shadow-xl hover:scale-105 transform transition">
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p>{desc}</p>
  </div>
);
