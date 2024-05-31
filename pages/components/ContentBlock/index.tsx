import React from 'react';

import styles from './styles.module.scss';

interface ContentBlockProps extends React.PropsWithChildren {
}

function ContentBlock({ children }: ContentBlockProps) {
  return (
    <div className={styles.contentBlock}>
      {children}
    </div>
  );
}

export default ContentBlock;
