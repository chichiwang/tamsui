import React from 'react';
import 'app/global.module.scss';

type AppProps = React.PropsWithChildren;

export default function App({ children }: AppProps): React.ReactElement {
  return (
    <React.StrictMode>
      <html lang="en">
        <head>
          <title>Hello, React SSR!</title>
        </head>
        <body>
          { children }
        </body>
      </html>
    </React.StrictMode>
  );
}
