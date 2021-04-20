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
      <p>I use the nickname "<b>lucko</b>" or sometimes just "<b>Luck</b>" for most of my online profiles and accounts.</p>
      <p>Among other things, I'm a <b>software developer</b> and maintain/contribute to a number of <b>open
        source</b> projects in my spare time.</p>
      <p>If you'd like to contact me, you can find how to reach me on my <Link href="/contact">contact page</Link>.</p>
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
        <li><a href="https://paste.lucko.me/">Paste</a> (pastebin, see below)</li>
        <li><a href="https://bytebin.lucko.me/">Bytebin</a> (content storage web service, see below)</li>
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
      <p>I work on a number of open source projects in my spare time.</p>

      <Project repo="lucko/LuckPerms">
        <li>LuckPerms is a <b>permission</b> plugin for Minecraft servers, written in Java.</li>
        <li>At time of writing, it's been downloaded ~1.5M times, has ~250,000 monthly active users,
          and a Discord community of ~12,000 people.</li>
        <li>The project also has a website, <a href="https://github.com/lucko/LuckPermsWeb">LuckPermsWeb</a>,
          which includes web apps for viewing/editing/managing permission setups, written using Vue.js.</li>
        <li>More information can be found on the project homepage at <a href="https://luckperms.net/">luckperms.net</a>.</li>
      </Project>

      <Project repo="lucko/spark">
        <li>spark is a <b>performance profiling</b> plugin/mod for Minecraft clients, servers and proxies,
          written in Java.</li>
        <li>The project also has a website, <a href="https://github.com/lucko/spark-viewer">spark-viewer</a>,
          which includes functionality for inspecting profiles as stack trees and flame graphs, written using React.</li>
        <li>More information can be found on the project homepage at <a href="https://spark.lucko.me/">spark.lucko.me</a>.</li>
      </Project>

      <Project repo="lucko/helper">
        <li>helper is a <b>development toolkit / library</b> for Bukkit plugin developers. It provides a number of utilities
          and extended APIs which help to reduce boilerplate code and offer alternative paradigms for creating content.</li>
        <li>I'm no longer actively working on further API additions, but the project is still being used
          frequntly by various development teams, and I accept pull requests!</li>
      </Project>

      <Project repo="lucko/bytebin">
        <li>bytebin is a fast & lightweight <b>content storage</b> web service, written in Java.</li>
        <li>You can think of it a bit like a pastebin, except that it accepts any kind of
          data (not just plain text!)</li>
        <li>It has a straightforward HTTP API that supports CORS.</li>
      </Project>

      <Project repo="lucko/paste">
        <li>paste (my own attempt at a <b>pastebin</b>) is a simple, "code friendly" web frontend for bytebin.</li>
        <li>It is written using React, react-simple-code-editor and Prism.</li>
      </Project>

      <Project repo="lucko/BungeeGuard">
        <li>BungeeGuard is a plugin-based <b>security/firewall</b> solution for BungeeCord and Velocity proxies.</li>
      </Project>
      
      <section>
        <h3>Other</h3>
        <p>I've also created and made significant contributions to a number of other projects.</p>
        <ul>
          <BriefProject repo="lucko/shadow" desc="annotation based Java reflection library" />
          <BriefProject repo="lucko/jar-relocator" desc="program to relocate packages within .jar files" />
          <BriefProject repo="lucko/commodore" desc="brigadier API for Bukkit" />
          <BriefProject repo="lucko/fabric-permissions-api" desc="simple permissions API for Fabric" />
          <BriefProject repo="lucko/ScriptController" desc="javax.script wrapper API" />
          <BriefProject repo="lucko/tapir" desc="JavaScript plugin loader for Sponge" />
          <BriefProject repo="lucko/synapse" desc="WIP Bukkit permissions API" />
          <BriefProject repo="lucko/lucko.github.io" desc="personal website, written using Next.js" />
          <BriefProject repo="KyoriPowered/adventure" desc="user-interface library for Minecraft plugins/mods" />
          <BriefProject repo="KyoriPowered/event" desc="Java event bus library" />
          <BriefProject repo="KyoriPowered/blossom" desc="Gradle plugin for replacing tokens in source code" />
          <BriefProject repo="SpongePowered/Configurate" desc="Java configuration library" />
          <li>... and more! You can find all of my public repositories on my <a href="https://github.com/lucko">GitHub profile</a>.</li>
        </ul>
        <p>I'm a member of a couple of organisations.</p>
        <ul>
          <li><a href="https://kyori.net/">Kyori</a> - I've been primarily working on adventure lately (listed above)</li>
          <li><a href="https://www.spongepowered.org/">Sponge</a> - I wrote parts of / maintain the Permissions Service in
            SpongeAPI, and was previously a maintainer of Configurate (listed above).</li>
        </ul>
      </section>
    </article>
  )
}

const Project = ({ repo, children }) => {
  return (
    <section>
      <h3><a href={'https://github.com/' + repo}>{repo}</a></h3>
      <ul>
        {children}
      </ul>
    </section>
  )
}

const BriefProject = ({ repo, desc }) => {
  return <li><a href={'https://github.com/' + repo}>{repo}</a> ({desc})</li>;
}

export const config = { amp: 'hybrid' }