import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Menrva Marketing | SEO, SEM & Web Design</title>
        <meta name="description" content="Grow your brand in West Hollywood and La Brea with SEO, SEM, and web design." />
      </Head>
      <main>
        <h1>Grow Your Brand with Menrva Marketing</h1>
        <p>We specialize in SEO, SEM, and custom web design. Based in West Hollywood and La Brea, serving surrounding areas.</p>
        <nav>
          <Link href="/about">About</Link> | <Link href="/contact">Contact</Link> | <Link href="/services">What We Do</Link>
        </nav>
      </main>
    </div>
  )
}
