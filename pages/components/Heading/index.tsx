import React, { useState } from 'react';
import classNames from 'classnames';

import { HeadingLevel } from 'app/types';
import LinkIcon from 'pages/components/LinkIcon';

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
        [styles.hover]: hovered,
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
          typeof id === 'undefined'
            ? null
            : (
              <a className={styles.link} href={`#${id}`} aria-labelledby={id}>
                <LinkIcon width="1.75rem" height="1.75rem" />
              </a>
            )
        }
      </div>
    </div>
  );
}

export default Heading;
