import React from 'react';

import Head from 'app/Head';

interface HTMLBodyProps extends React.PropsWithChildren {}

function HTMLBody({ children }: HTMLBodyProps) {
  return (
    <html lang="en">
      <Head />
      <body>
        { children }
      </body>
    </html>
  );
}

export default HTMLBody;
