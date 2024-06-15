import React from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import { ResetScrollKey } from 'app/hooks/useResetScroll';

interface InternalLinkProps extends Omit<LinkProps, 'state'> {
  state?: { [key: string]: any };
}

function InternalLink(props: InternalLinkProps) {
  const resetScrollState = {
    [ResetScrollKey]: true,
  };

  const { state } = props;

  const propsWithState = {
    ...props,
    ...(typeof state === 'undefined' ? {
      state: resetScrollState,
    } : {
      state: {
        ...state,
        ...resetScrollState,
      },
    }),
  };

  return (
    <Link {...propsWithState} />
  );
}

export default InternalLink;
