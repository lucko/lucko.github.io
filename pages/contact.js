import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout title="contact">
      <article>
        <h1>Contacting me</h1>
        <p>I try my best to reply to all messages, but unfortunately I often don't have enough time
          to respond to everything.</p>

        <Section title="Questions about or requesting help with my projects">
          <p>If you have a question about one of my projects, please use the following support
            systems before attempting to contact me directly!</p>
          <ul>
            <li>Questions / help with <b>LuckPerms</b> - use the <a href="https://discord.gg/luckperms">LuckPerms Discord</a>.</li>
            <li>Questions / help with <b>spark</b> - use the <a href="https://discord.gg/PAGT2fu">spark Discord</a>.</li>
            <li>Questions / help with <b>any of my other projects</b> - use my <a href="https://discord.gg/Rnbpc7s">personal Discord</a>.</li>
          </ul>
        </Section>

        <Section title="Requests or offers for paid work">
          <p>Unfortunately I'm not able to take on any new paid work/projects at the moment.
            If this changes, I will update this page.</p>
          <p>Until then, <b>please do not contact me about paid projects</b>.</p>
        </Section>

        <Section title="Sponsorship or advertising queries">
          <p>We already have a long-term sponsor for LuckPerms, and are not looking to take on any more at this time.</p>
        </Section>

        <Section title="Other">
          <p>If you are sure that your question / message doesn't fall into any of the categories above, feel free to
            reach out using the contact methods listed below.</p>
          <details>
            <summary>Click to expand</summary>
              <h4>Email</h4>
              <p>I can be reached via email at <a href="mailto:hey@lucko.me">hey@lucko.me</a>.</p>
              <h4>Discord</h4>
              <p>My Discord user id is <code>241666402639937538</code>. However, I have direct messages disabled and generally
                do not accept friend requests from people I don't already know.</p>
              <p>Instead, feel free to join my <a href="https://discord.gg/Rnbpc7s">personal Discord server</a> and chat to me there.</p>
              <p>Please be sensible, don't "ask to ask" or "ask to DM" and instead, just ask your question in the #general channel
                and wait patiently for a reply.</p>
              <p>I'll try get back to you as soon as possible. 😊</p>
          </details>
        </Section>

      </article>
    </Layout>
  )
}

const Section = ({ title, children }) => {
  return (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  )
}
