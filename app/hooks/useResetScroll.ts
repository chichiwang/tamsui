import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ResetScrollKey = 'resetScroll';

function useResetScroll() {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(function resetScrollPosition() {
    if (location.state?.[ResetScrollKey]) {
      const IdFromHash = location.hash.slice(1);
      const $hashEl = document.getElementById(IdFromHash);

      if ($hashEl) {
        $hashEl.scrollIntoView(true);
      } else {
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });
      }

      navigate(`${location.pathname}${location.hash}`, {
        replace: true,
      });
    }
  }, [location.pathname, location.hash]);
}

export default useResetScroll;
