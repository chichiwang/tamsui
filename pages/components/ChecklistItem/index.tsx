import React, { useState } from 'react';

import styles from './styles.module.scss';

interface ChecklistItemProps extends React.PropsWithChildren {
}

function ChecklistItem({
  children,
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
    <label className={styles.checklistItem}>
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
  );
}

export default ChecklistItem;
