import React, { useState } from 'react';
import classNames from 'classnames';

import { HeadingLevel } from 'app/types';

import styles from './styles.module.scss';

interface HeadingProps extends React.PropsWithChildren {
  center?: boolean,
  className?: string,
  id?: string,
  level: HeadingLevel,
}

function Heading({
  level,
  center = false,
  children,
  className,
  id,
}: HeadingProps) {
  const [hovered, setHovered] = useState(false);

  function onMouseEnter() {
    setHovered(true);
  }

  function onMouseLeave() {
    setHovered(false);
  }

  const containerProps = {
    className: classNames(
      styles.container,
      {
        [styles.center]: center,
      },
    ),
    ...(typeof id === 'undefined' ? {} : {
      onMouseEnter,
      onMouseLeave,
    }),
  };

  return (
    <div {...containerProps}>
      <div className={styles.wrapper}>
        {
          React.createElement(
            `h${level}`,
            {
              ...(typeof id === 'undefined' ? {} : { id }),
              className: classNames(
                styles.tag,
                className,
              ),
            },
            children,
          )
        }
        {
          typeof id === 'undefined' || !hovered
            ? null
            : <a className={styles.link} href={`#${id}`}>🔗</a>
        }
      </div>
    </div>
  );
}

export default Heading;
