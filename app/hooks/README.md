# Hooks
This directory houses [custom React hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) created for the boilerplate.

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
