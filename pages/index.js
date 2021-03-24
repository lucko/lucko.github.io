import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <Domain />
      <Projects />
    </Layout>
  )
}

const AboutMe = () => {
  return (
    <article>
      <h1>About me</h1>
      <p>I use the nickname "lucko" or sometimes just "Luck" for most of my online profiles and accounts.</p>
      <p>Among other things, I'm a software developer and maintain/contribute to a number of open
        source projects in my spare time.</p>
      <p>If you'd like to contact me, you can reach out via <a href="mailto:hey@lucko.me">email</a>{' '}
        or <a href="https://discord.gg/Rnbpc7s">Discord</a>.</p>
      <p className="message">I try my best to reply to all messages, but unfortunately I often
        don't have enough time respond to everything. If you have a question about one of my
        projects, please use the <Link href="/contact">advertised support systems</Link> before
        attempting to contact me directly!</p>
      <p>My <Link href="/pgp">PGP key</Link> has the fingerprint <code>EFA9 B3EC 5FD9 0F8B</code> and
        my <Link href="/ssh">SSH key</Link> has the fingerprint <code>08:64:2f:da:cf:c1:b8:64:04:bb:d3:08:08:05:11:2a</code>.</p>
      <p>You can find me (most actively) on GitHub, <a href="https://github.com/lucko">@lucko</a>.</p>
    </article>
  )
}

const Domain = () => {
  return (
    <article>
      <h1>This domain</h1>
      <p>A number of other sites and services are available under this domain.</p>
      <ul>
        <li><a href="https://ci.lucko.me/">Jenkins</a> (continuous integration & downloads)</li>
        <li><a href="https://nexus.lucko.me/">Nexus</a> (maven repository)</li>
        <li><a href="https://paste.lucko.me/">Paste</a> (pastebin)</li>
        <li><a href="https://bytebin.lucko.me/">Bytebin</a> (content storage web service, see below for details)</li>
      </ul>
      <p>I try my best to keep these services available. Most have been online and had good uptime
        for the past ~3 years at least.</p>
    </article>
  )
}

const Projects = () => {
  return (
    <article>
      <h1>My projects</h1>
      <p>An abridged list of my publicly available projects.</p>
      <h3><a href="https://github.com/lucko/LuckPerms">lucko/LuckPerms</a></h3>
      <ul>
        <li>LuckPerms is a permission plugin for Minecraft servers, written in Java.</li>
        <li>At time of writing, it's been downloaded ~1.5M times, has ~250,000 monthly active users,
          and a Discord community of ~12,000 people.</li>
        <li>The project also has a website and a number of web apps written using Vue.js.</li>
        <li>More information can be found on the project homepage at <a href="https://luckperms.net/">luckperms.net</a>.</li>
      </ul>
      <h3><a href="https://github.com/lucko/spark">lucko/spark</a></h3>
      <ul>
        <li>spark is a performance profiling plugin/mod for Minecraft clients, servers and proxies,
          written in Java.</li>
        <li>There is also a web viewer component, <a href="https://github.com/lucko/spark-viewer">spark-viewer</a>,
          written using React.</li>
        <li>More information can be found on the project homepage at <a href="https://spark.lucko.me/">spark.lucko.me</a>.</li>
      </ul>
      <h3><a href="https://github.com/lucko/helper">lucko/helper</a></h3>
      <ul>
        <li>helper is a Bukkit plugin development toolkit/library. It provides a number of utilities
          and extended APIs to support rapid and easy development of plugins.</li>
        <li>I'm not currently working on further API additions, but the project is still being used
          frequntly by various development teams, and I accept pull requests!</li>
      </ul>
      <h3><a href="https://github.com/lucko/bytebin">lucko/bytebin</a></h3>
      <ul>
        <li>bytebin is a fast & lightweight content storage web service.</li>
        <li>You can think of it a bit like a <a href="https://en.wikipedia.org/wiki/Pastebin">pastebin</a>,
          except that it accepts any kind of data (not just plain text!)</li>
      </ul>
      <h3><a href="https://github.com/lucko/BungeeGuard">lucko/BungeeGuard</a></h3>
      <ul>
        <li>BungeeGuard is a plugin-based security/firewall solution for BungeeCord and Velocity proxies.</li>
      </ul>
      <h3>Other</h3>
      <p>Below are some other noteworthy projects I've created or made significant contributions to.</p>
      <ul>
        <li><a href="https://github.com/lucko/shadow">lucko/shadow</a> (annotation based Java reflection library)</li>
        <li><a href="https://github.com/lucko/jar-relocator">lucko/jar-relocator</a> (program to relocate packages within .jar files)</li>
        <li><a href="https://github.com/lucko/commodore">lucko/commodore</a> (brigadier API for Bukkit)</li>
        <li><a href="https://github.com/lucko/fabric-permissions-api">lucko/fabric-permissions-api</a> (simple permissions API for Fabric)</li>
        <li><a href="https://github.com/lucko/ScriptController">lucko/ScriptController</a> (javax.script wrapper API)</li>
        <li><a href="https://github.com/lucko/tapir">lucko/tapir</a> (JavaScript plugin loader for Sponge)</li>
        <li><a href="https://github.com/lucko/synapse">lucko/synapse</a> (WIP Bukkit permissions API)</li>
        <li><a href="https://github.com/lucko/lucko.github.io">lucko/lucko.github.io</a> (personal website, written using Next.js)</li>
        <li><a href="https://github.com/KyoriPowered/adventure">KyoriPowered/adventure</a> (user-interface library for Minecraft plugins/mods)</li>
        <li><a href="https://github.com/KyoriPowered/event">KyoriPowered/event</a> (Java event bus library)</li>
        <li><a href="https://github.com/KyoriPowered/blossom">KyoriPowered/blossom</a> (Gradle plugin for source code tokens)</li>
        <li><a href="https://github.com/SpongePowered/Configurate">SpongePowered/Configurate</a> (Java configuration library)</li>
        <li>... and more! You can find all of my public work on my <a href="https://github.com/lucko">GitHub profile</a>.</li>
      </ul>
    </article>
  )
}

export const config = { amp: 'hybrid' }