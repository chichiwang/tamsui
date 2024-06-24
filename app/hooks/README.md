# Hooks
This directory houses [custom React hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) created for the boilerplate.

* [useResetScroll](#useresetscroll)
* [useRouteHead](#useroutehead)

## useResetScroll

[useResetScroll](./useResetScroll.ts) is a hook created specifically for Layout components that utilize the [React Router Outlet](https://reactrouter.com/en/main/components/outlet). [Links](https://reactrouter.com/en/main/components/link) that navigate between pages under the same layout do not reset the browser window's scroll position upon navigation. To remedy this, this hook will be used to explicitly trigger a scroll reset back to the top-left of the browser window upon route change.

This scroll reset only triggers when a location change carries with it a specific flag in a location [state](https://reactrouter.com/en/main/components/link#state) object:

```javascript
import { Link } from 'react-router-dom';

<Link to="/internal-path" state={{ resetScroll: true }}>Reset scroll on navigation</Link>
```

This state object flag, `resetScroll`, can be applied automatically by using the reusable component [app/components/InternalLink](../components/InternalLink):

```javascript
import InternalLink from 'app/components/InternalLink';

<InternalLink to="/internal-path">Reset scroll on Navigation</InternalLink>
```

After resetting the scroll, this hook will replace the current [location state](https://reactrouter.com/en/main/start/concepts#definitions) with the same path removing the `resetScroll` state. The result of this is:
* Upon clicking a link with the `resetScroll` state will navigate the page and reset the page scroll.
* Using browser navigation (back/forward buttons) to return to a page that had its scroll reset will not reset the scroll, preserving the user's scroll position on the page.

### Hash Links
`useResetScroll` will behave differently when the `resetScroll` flag is present in the location state if the location contains a hash: instead of scrolling to the top-left of the window, it will instead scroll the element whose `id` attribute matches the hash into view.

```javascript
import InternalLink from 'app/components/InternalLink';

<InternalLink to="/internal-path#page-section">
  Scroll to element with id "page-section" on navigation
</InternalLink>
```

If the target page does not contain an element whose `id` attribute matches the location hash, this hook will scroll the browser to the top-left of the window instead.

## useRouteHead

[useRouteHead](./useRouteHead.ts) is a hook created to retrieve the property `head` inside of a [route handle](https://reactrouter.com/en/main/route/route#handle). The purpose is to allow developers the ability to set head tags on a per-page basis. Under the hood, `useRouteHead` leverages React Router's [useMatches](https://reactrouter.com/en/main/hooks/use-matches) and [useLocation](https://reactrouter.com/en/main/hooks/use-location) hooks.

If a handle for a route exists, and if it is a `PageHandle` (defined in [app/types.ts](../types.ts)), the `head` attribute of the PageHandle is returned. Otherwise, an empty object is returned.

To add a PageHandle to a data route, define an object in the `handle` property of a route definition and give it a `head` property:

```javascript
// dataRoutes.jsx

import Home from 'pages/Home';
import Documentation from 'pages/Documentation';
import BrowserDocumentation from 'pages/Documentation/BrowserDocumentation';
import NativeDocumentation from 'pages/Documentation/NativeDocumentation';
import ErrorPage from 'pages/ErrorPage';
import NotFound from 'pages/NotFound';

const dataRoutes = [{
  path: '/',
  Component: Home,
  handle: {
    head: {
      title: 'Home Page',
      tags: (
        <>
          <meta name="description" content="Awesome Product!" />
          <meta name="robots" content="all" />
        </>
      ),
    },
  },
}, {
  path: '/documentation',
  Component: Documentation,
  handle: {
    head: {
      title: 'Developer Documentation',
      tags: (
        <>
          <meta name="description" content="Developer documentation for this product" />
          <meta name="robots" content="all" />
        </>
      ),
    },
  },
  children: [{
    path: '/browser',
    Component: BrowserDocumentation,
  }, {
    path: '/native',
    Component: NativeDocumentation,
  }],
}, {
  path: '/error',
  Component: ErrorPage,
  handle: {
    head: {
      title: 'Oopsie!',
      tags: (
        <>
          <meta name="robots" content="none" />
        </>
      ),
    },
  },
}, {
  path: '*',
  Component: NotFound,
  handle: {
    head: {
      title: 'Page Not Found!',
      tags: (
        <>
          <meta name="robots" content="none" />
        </>
      ),
    },
  },
}];

export default dataRoutes;
```

`useRouteHead()` will return the `head` property of the nearest PageHandler in a route tree. In the above example, if the router location is `/documentation/browser`, it will return the `head` tag from the PageHandler defined in the `/documentation` route.

This hook, in the boilerplate UI, is used in the [app/Head](../Head/index.tsx) component to apply a page title and custom page-level tags.
