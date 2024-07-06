import React, { useState } from 'react';
import classNames from 'classnames';

import { HeadingLevel } from 'app/types';
import LinkIcon from 'app/components/LinkIcon';

import styles from './styles.module.scss';

interface HeadingProps extends React.PropsWithChildren {
  center?: boolean,
  children: string,
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
              <a
                id={id}
                className={styles.link}
                href={`#${id}`}
                aria-label={`URL of this section: ${children}`}
              >
                <LinkIcon width="1.75rem" height="1.75rem" />
              </a>
            )
        }
      </div>
    </div>
  );
}

export default Heading;
