import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

interface HeadingBlockProps extends React.PropsWithChildren {
  heading: string,
  level: HeadingLevel,
  center?: boolean,
}

function createHeading(heading: string, level: HeadingLevel, center: boolean) {
  return function DynamicHeading() {
    return React.createElement(
      `h${level}`,
      {
        className: classNames({
          [styles.center]: center,
        }),
      },
      heading,
    );
  };
}

function HeadingBlock({
  heading,
  level,
  center = false,
  children,
}: HeadingBlockProps) {
  const SectionHeading = createHeading(heading, level, center);

  return (
    <section className={styles.headingBlock}>
      <SectionHeading />
      <article>
        {children}
      </article>
    </section>
  );
}

export default HeadingBlock;
