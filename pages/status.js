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
            <p>The table below shows the status of the self-hosted services I host
              on this domain.</p>
            <p>Most websites (including this one) are static sites which are hosted
              using a mixture of Netlify, GitHub or CloudFlare Pages, so their statuses
              will depend on their respective provider and therefore are not tracked here.</p>
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
            <p>The availability of each self-service in the table above is polled from
              the CloudFlare Health Check API via a worker on CF's edge.</p>
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
    'lp-metadata': ['LuckPerms Metadata API', 'metadata.luckperms.net'],
  }[id];

  if (name && domain) {
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
  const resp = await fetch('https://lucko.me/api/status');
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