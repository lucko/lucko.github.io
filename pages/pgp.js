import { promises as fs } from 'fs';
import path from 'path';

import Layout from '../components/layout';

export default function Pgp({ pgpKey }) {
  return (
    <Layout title="pgp">
      <article>
        <h1>PGP key</h1>
        <br />
        <p>This is my PGP key.</p>
        <pre><code>{pgpKey}</code></pre>
        <p>As a <a href="./lucko_pgp.asc">raw file</a>:</p>
        <pre><code>curl https://lucko.me/lucko_pgp.asc | gpg --import</code></pre>
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'public');
  const pgpKey = (await fs.readFile(path.join(dir, 'lucko_pgp.asc'), 'utf8')).trim();
  return {
    props: { pgpKey }
  }
}
