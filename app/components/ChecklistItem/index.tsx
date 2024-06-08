import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface ChecklistItemProps extends React.PropsWithChildren {
  className?: string;
}

function ChecklistItem({
  children,
  className,
}: ChecklistItemProps) {
  const [checked, setChecked] = useState(false);

  function onChange() {
    setChecked(!checked);
  }

  const inputProps = {
    className: styles.checkboxInput,
    type: 'checkbox',
    checked,
    onChange,
  };

  return (
    <div className={classNames(styles.checklistItem, className)}>
      <label>
        <input {...inputProps} />
        <div className={styles.checkboxContainer}>
          <div className={styles.checkbox}>
            <div className={styles.top}>
              <div className={styles.back} />
              <div className={styles.front} />
            </div>
            <div className={styles.bottom}>
              <div className={styles.back} />
              <div className={styles.front} />
            </div>
          </div>
        </div>
        <span className={styles.labelContent}>{children}</span>
      </label>
    </div>
  );
}

export default ChecklistItem;
