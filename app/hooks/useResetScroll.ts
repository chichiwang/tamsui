import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const ResetScrollKey = 'resetScroll';

function useResetScroll() {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(function resetScrollPosition() {
    if (location.state?.[ResetScrollKey]) {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });

      navigate(location.pathname, { replace: true });
    }
  }, [location.pathname]);
}

export default useResetScroll;
