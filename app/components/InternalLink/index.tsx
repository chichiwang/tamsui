import React from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import { ResetScrollKey } from 'app/hooks/useResetScroll';

interface InternalLinkProps extends Omit<LinkProps, 'state'> {
  state?: { [key: string]: any };
}

function InternalLink(props: InternalLinkProps) {
  const { state } = props;

  const propsWithState = {
    ...props,
    state: {
      ...(typeof state !== 'undefined' ? state : {}),
      [ResetScrollKey]: true,
    },
  };

  return (
    <Link {...propsWithState} />
  );
}

export default InternalLink;
