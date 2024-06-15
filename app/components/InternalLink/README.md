# InternalLink
A simple higher-order component that wraps the [React Router Link](https://reactrouter.com/en/main/components/link) component, ensuring that a [state](https://reactrouter.com/en/main/components/link#state) object property `resetScroll` is set to `true` on the Link component.

This is a convenience component to ensure client-side navigation will reset the browser window scroll on page navigation. This issue is discussed in greater detail in the hook [app/hooks/useResetScroll](app/hooks/README.md#useResetScroll).
