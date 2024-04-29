import React from 'react';
import { Link } from 'react-router-dom';

import Layout from 'pages/Layout';

export default function NotFound(): React.ReactElement {
  return (
    <Layout>
      <h1>Page Not Found!</h1>
      <Link to="/">Return to Home</Link>
    </Layout>
  );
}
