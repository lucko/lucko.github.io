import { useEffect, useState } from 'react';

import Layout from '../components/layout';

export default function Status() {
  const [status, setStatus] = useState();

  useEffect(() => {
    pollStatus().then(status => {
      setStatus(status);
    })
  }, [setStatus])

  return (
    <Layout title="status">
      <article>
        <h1>Status</h1>
        {status ? (
          <>
            <p>The table below shows the status of the self-hosted services available
              on this domain.</p>
            <p>Most of my websites (including this one) are static sites hosted on a CDN
              (usually Vercel, GitHub Pages, Cloudflare Pages), so their statuses are not
              tracked here.</p>
            <p></p>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(status).map(([name, status], i) => (
                  <tr key={i}>
                    <td><ServiceTag id={name} /></td>
                    <td>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>The availability of each service in the table above is polled from
              Cloudflare's Health Check API.</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </article>
    </Layout>
  )
}

const ServiceTag = ({ id }) => {
  const [name, domain] = {
    'jenkins': ['Jenkins', 'ci.lucko.me'],
    'nexus': ['Nexus', 'nexus.lucko.me'],
    'bytebin': ['Bytebin', 'bytebin.lucko.me'],
    'bytesocks': ['Bytesocks', 'luckperms.net - editor websocket service'],
    'lp-metadata': ['LuckPerms Metadata API', 'metadata.luckperms.net'],
    'spark-metadata': ['spark API', 'sparkapi.lucko.me'],
  }[id] || [];

  if (name) {
    return (
      <>
        <b>{name}</b>
        <br />
        <span style={{ color: 'gray' }}>{domain}</span>
      </>
    );
  }

  return <>{id}</>;
}

async function pollStatus() {
  const resp = await fetch('https://status.lucko.workers.dev/');
  if (!resp.ok) {
    // how meta
    return { api: '⚠️ returned status ' + resp.status };
  }
  const json = await resp.json();

  const status = {};
  for (const [name, data] of Object.entries(json)) {
    if (data.ok) {
      status[name] = '✅'
    } else {
      status[name] = '⚠️ ' + data.msg;
    }
  }

  return status;
}
