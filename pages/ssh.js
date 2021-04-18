import { promises as fs } from 'fs';
import path from 'path';

import Layout from '../components/layout';

export default function Ssh({ ed25519Key, rsaKey }) {
  return (
    <Layout title="ssh">
      <article>
        <h1>SSH key</h1>
        <br />
        <p>This is my SSH key.</p>
        <pre><code>{ed25519Key}</code></pre>
        <p>It has the fingerprint <code>08:64:2f:da:cf:c1:b8:64:04:bb:d3:08:08:05:11:2a</code>.</p>
        <p>As a <a href="id_ed25519.pub">raw file</a> (<a href="id_ed25519.pub.asc">signature</a>):</p>
        <pre><code>curl https://lucko.me/id_ed25519.pub &gt;&gt; ~/.ssh/authorized_keys</code></pre>
      </article>
      <br />
      <aside>
        <h3>RSA key</h3>
        <p>I also have an RSA key which I used before Ed25519 was introduced to OpenSSH.</p>
        <details>
          <summary>Click to expand</summary>
          <pre><code>{rsaKey}</code></pre>
          <p>It has the fingerprint <code>08:ae:22:b2:48:b4:b8:b6:9c:be:76:39:9f:b3:53:1f</code>.</p>
          <p>As a <a href="id_rsa.pub">raw file</a> (<a href="id_rsa.pub.asc">signature</a>):</p>
          <pre><code>curl https://lucko.me/id_rsa.pub &gt;&gt; ~/.ssh/authorized_keys</code></pre>
        </details>
      </aside>
    </Layout>
  )
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'public');
  const ed25519Key = (await fs.readFile(path.join(dir, 'id_ed25519.pub'), 'utf8')).trim();
  const rsaKey = (await fs.readFile(path.join(dir, 'id_rsa.pub'), 'utf8')).trim();
  return {
    props: { ed25519Key, rsaKey }
  }
}
