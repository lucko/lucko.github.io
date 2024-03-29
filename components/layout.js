import NextLink from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Layout({ children, title = '' }) {
  return <>
    <Head>
      <title>{'lucko.me' + (title && ' | ' + title)}</title>
    </Head>
    <Sidebar />
    <Content>
      {children}
    </Content>
  </>
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Header />
      <Nav />
      <Footer />
    </div>
  )
}

const Header = () => {
  return (
    <header className="container">
      <img src="/assets/me.jpg" alt="Me" />
      <h1>lucko.me</h1>
    </header>
  )
}

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link name="/home" url="/" />
        <Link name="/contact" url="/contact" />
        <Link name="/status" url="/status" />
        <Link name="/ssh" url="/ssh" />
        <Link name="/pgp" url="/pgp" />
      </ul>
    </nav>
  )
}

const Link = ({ name, url }) => {
  const router = useRouter();
  if (url === router.pathname) {
    return (
      <li className="current-page">
        {name}
      </li>
    )
  } else {
    return (
      <li className="other-page">
        <NextLink href={url}>
          {name}
        </NextLink>
      </li>
    )
  }
}

const Footer = () => {
  const year = new Date().getFullYear().toString().substring(2);
  return (
    <footer className="container">
      <p>&copy; 2015-{year} <a href="https://github.com/lucko/lucko.github.io">lucko</a></p>
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
