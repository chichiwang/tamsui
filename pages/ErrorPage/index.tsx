import React from 'react';
import { Link } from 'react-router-dom';

import Layout from 'pages/Layout';

export default function ErrorPage() {
  return (
    <Layout>
      <h1>An Error Occurred!</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
}
