import React from 'react';

import { HeadingLevel } from 'app/types';
import Heading from 'pages/components/Heading';

import styles from './styles.module.scss';

interface HeadingBlockProps extends React.PropsWithChildren {
  heading: string,
  id?: string,
  level: HeadingLevel,
  center?: boolean,
}

function HeadingBlock({
  heading,
  id,
  level,
  center = false,
  children,
}: HeadingBlockProps) {
  const headingProps = {
    center,
    id,
    level,
  };

  return (
    <section className={styles.headingBlock}>
      <Heading {...headingProps}>
        {heading}
      </Heading>
      <article>
        {children}
      </article>
    </section>
  );
}

export default HeadingBlock;
