import { useLocation, useMatches } from 'react-router-dom';
import type { PageMatch, RouteHead } from 'app/types';

function useRouteHead(): RouteHead {
  const location = useLocation();
  const routeMatches = useMatches();

  const locationMatch = routeMatches.find(
    function matchLocationWithHead(match): match is PageMatch {
      const pathMatches = match.pathname === location.pathname;
      const containsHandle = typeof match.handle === 'object';
      const containsHead = containsHandle
        && Object.prototype.hasOwnProperty.call(match.handle, 'head');

      return pathMatches && containsHead;
    },
  );

  const pathChainMatches = routeMatches.filter(
    function matchesWithHead(match): match is PageMatch {
      const containsHandle = typeof match.handle === 'object';

      return containsHandle && Object.prototype.hasOwnProperty.call(match.handle, 'head');
    },
  );

  const pathChainMatch = pathChainMatches.length
    ? pathChainMatches[pathChainMatches.length - 1]
    : undefined;

  return locationMatch?.handle?.head || pathChainMatch?.handle?.head || {};
}

export default useRouteHead;
