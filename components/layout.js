import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAmp } from 'next/amp';

export default function Layout({ children, title = '' }) {
  return <>
    <Head>
      <title>{'lucko.me' + (title && ' | ' + title)}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
    </Head>
    <Sidebar />
    <Content children={children} />
  </>
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Header />
      <Footer />
    </div>
  )
}

const Header = () => {
  const router = useRouter();
  const isAmp = useAmp();

  return (
    <header className="container">
      {!isAmp && <img src="/assets/me.jpg" alt="Me" />}
      {router.pathname === '/'
        ? <h1>lucko.me</h1>
        : <h1><Link href="/">lucko.me</Link></h1>
      }
      <p>Hey! 👋</p>
      <p>I'm lucko, a software developer from London, UK.</p>
      <p>This is a personal website and domain that I use for the various open-source projects I work on.</p>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="container">
      <p>&copy; 2020-21 <a href="https://github.com/lucko/lucko.github.io">lucko</a></p>
    </footer>
  )
}

const Content = ({ children }) => {
  return (
    <main className="content container page">
      {children}
    </main>
  )
}
