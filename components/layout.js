import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Layout({ children, title = '' }) {
  const router = useRouter();
  return <>
    <Head>
      <title>{'lucko.me' + (title && ' | ' + title)}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
    </Head>
    <div className="sidebar">
      <div className="container sidebar-sticky">
        <div className="sidebar-about">
          <img src="/assets/me.jpg" alt="Me" />
          {router.pathname === '/'
            ? <h1>lucko.me</h1>
            : <h1><Link href="/">lucko.me</Link></h1>
          }
          <p>Hey! 👋</p>
          <p>This is a personal homepage, intended to serve as a brief intro and as an index for the other services available on this domain.</p>
        </div>
      </div>
      <div className="container sidebar-sticky footer">
        <p>&copy; 2020-21 <a href="https://github.com/lucko/lucko.github.io">lucko</a></p>
      </div>
    </div>
    <div className="content container">
      <div className="page">
        {children}
      </div>
    </div>
  </>
}