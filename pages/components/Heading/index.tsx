import React from 'react';
import classNames from 'classnames';

import { HeadingLevel } from 'app/types';

interface HeadingProps extends React.PropsWithChildren {
  level: HeadingLevel,
  className?: string,
}

function Heading({
  level,
  children,
  className,
}: HeadingProps) {
  return React.createElement(
    `h${level}`,
    {
      className: classNames(
        className,
      ),
    },
    children,
  );
}

export default Heading;
