import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout title="contact">
      <h1>Contacting me</h1>
      <p>I try my best to reply to all messages, but unfortunately I often don't have enough time respond to everything.</p>
      <p>If you have a question about one of my projects, please use the following support systems before attempting to contact me directly!</p>
      <ul>
        <li>Questions / help with <b>LuckPerms</b> - use the <a href="https://discord.gg/luckperms">LuckPerms Discord</a>.</li>
        <li>Questions / help with <b>spark</b> - use the <a href="https://discord.gg/PAGT2fu">spark Discord</a>.</li>
        <li>Questions / help with <b>any of my other plugins</b> - use my <a href="https://discord.gg/Rnbpc7s">personal Discord</a>.</li>
      </ul>
      <h3>Other</h3>
      <p>If your question / message doesn't fall into any of the categories above, feel free to reach out via <a href="mailto:hey@lucko.me">email</a> or <a href="https://discord.gg/Rnbpc7s">Discord</a>.</p>
    </Layout>
  )
}
