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
      <h1>Hello! 👋</h1>
      <p>
        I'm <b>lucko</b> (or sometimes I use the nickname "Luck").
        <br />
        I'm a software developer from London, UK.
      </p>
      <p>This is a personal website and domain that I use for the various open-source projects I work on.</p>
      <p>
        If you'd like to contact me, you can find how to reach me on my <Link href="/contact">contact page</Link>.
        <br />
        You can also find me on GitHub, <a href="https://github.com/lucko">@lucko</a>.
      </p>
    </article>
  )
}

const Domain = () => {
  return (
    <article>
      <h1>This domain</h1>
      <p>A number of other sites and services are available under this domain.</p>
      <ul>
        <li><a href="https://ci.lucko.me/"><b>ci.</b>lucko.me</a> - continuous integration & downloads</li>
        <li><a href="https://nexus.lucko.me/"><b>nexus.</b>lucko.me</a> - maven repository</li>
        <li><a href="https://paste.lucko.me/"><b>paste.</b>lucko.me</a> - pastebin</li>
        <li><a href="https://spark.lucko.me/"><b>spark.</b>lucko.me</a> - spark website</li>
      </ul>
      <p>I try my best to keep these services available. Most have been online and had good uptime
        for the past ~7 years at least. The hosting configs can be found on GitHub
        at <a href="https://github.com/lucko/infra">lucko/infra</a>.</p>
    </article>
  )
}

const Projects = () => {
  return (
    <article>
      <h1>My projects</h1>
      <p>I work on a number of open source projects in my spare time.</p>

      <Project repo="lucko/LuckPerms">
        <li>LuckPerms is a <b>permissions</b> management system for Minecraft servers.</li>
        <li>At time of writing, it's been downloaded ~7M times, has ~400,000 monthly active users,
          and a Discord community of ~19,000 people.</li>
        <li>The project also has a website, <a href="https://github.com/lucko/LuckPermsWeb">LuckPermsWeb</a>,
          which includes web apps for viewing/editing/managing permission setups, written using Vue.js.</li>
        <li>More information can be found on the project homepage at <a href="https://luckperms.net/">luckperms.net</a>.</li>
      </Project>

      <Project repo="lucko/spark">
        <li>spark is a <b>performance profiler</b> for Minecraft clients, servers and proxies.</li>
        <li>At time of writing, it's been downloaded ~25M times and has ~20,000 monthly active users.</li>
        <li>The project also has a website, <a href="https://github.com/lucko/spark-viewer">spark-viewer</a>,
          which includes functionality for inspecting profiles as stack trees and flame graphs, written using React/Next.js.</li>
        <li>More information can be found on the project homepage at <a href="https://spark.lucko.me/">spark.lucko.me</a>.</li>
      </Project>

      <Project repo="lucko/paste">
        <li>paste is a simple web app for writing & sharing code. It's my own take on conventional
          pastebin sites like pastebin.com or hastebin.</li>
        <li>The frontend is written using React, and based on the Monaco Editor.</li>
        <li>There is a public instance I host at <a href="https://pastes.dev/">pastes.dev</a>.</li>
      </Project>

      <Project repo="lucko/bytebin">
        <li>bytebin is a fast & lightweight <b>content storage</b> web service, written in Java.</li>
        <li>You can think of it a bit like a pastebin, except that it accepts any kind of
          data (not just plain text!)</li>
        <li>It has a straightforward HTTP API that supports CORS.</li>
      </Project>

      <Project repo="lucko/bytesocks">
        <li>bytesocks is a fast & lightweight <b>WebSocket server</b>, written in Java.</li>
        <li>It allows clients to create "channels", connect using the WebSocket protocol and
          exchange messages with other clients in the same channel.</li>
      </Project>

      <Project repo="lucko/helper">
        <li>helper is a <b>development toolkit / library</b> for Bukkit plugin developers. It provides a number of utilities
          and extended APIs which help to reduce boilerplate code and offer alternative paradigms for creating content.</li>
        <li>I'm no longer actively working on further API additions, but the project is still being used
          frequently by various development teams, and I accept pull requests!</li>
      </Project>

      <section>
        <h3>Other</h3>
        <p>I've also created and made significant contributions to a number of other projects.</p>
        <ul>
          <BriefProject repo="lucko/shadow" desc="annotation based Java reflection library" />
          <BriefProject repo="lucko/jar-relocator" desc="program to relocate packages within .jar files" />
          <BriefProject repo="lucko/commodore" desc="brigadier API for Bukkit" />
          <BriefProject repo="lucko/BungeeGuard" desc="security/firewall solution for Minecraft proxies" />
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
