import React, { useState } from 'react';
import classNames from 'classnames';

import CopyIcon from 'app/components/CopyIcon';

import styles from './styles.module.scss';

enum CopyStates {
  ready,
  copying,
  copied,
  errored
}

export enum ColorModes {
  dark = 'dark',
  default = 'dark',
  light = 'light',
}

type CopyButtonProps = {
  className?: string;
  colorMode?: ColorModes,
  textToCopy: string;
};

const ButtonContent = {
  [CopyStates.ready]: (<CopyIcon className={styles.copyIcon} />),
  [CopyStates.copying]: (<div className={styles.buttonContent}>⋯</div>),
  [CopyStates.copied]: (<div className={styles.buttonContent}>✓</div>),
  [CopyStates.errored]: (<div className={styles.buttonContent}>!</div>),
};

const messageDisplayTime = 2000;

function CopyButton({
  className,
  colorMode = ColorModes.default,
  textToCopy,
}: CopyButtonProps) {
  const [copyState, setCopyState] = useState(CopyStates.ready);

  const isButtonDisabled = copyState !== CopyStates.ready;

  function resetButton() {
    setCopyState(CopyStates.ready);
  }

  function writeToClipboard() {
    setCopyState(CopyStates.copying);

    const writePromise = navigator.clipboard.writeText(textToCopy);

    writePromise
      .then(function writeComplete() {
        setCopyState(CopyStates.copied);
        setTimeout(resetButton, messageDisplayTime);
      })
      .catch(function writeFailed(err) {
        console.error(err);
        setCopyState(CopyStates.errored);
        setTimeout(resetButton, messageDisplayTime);
      });
  }

  const wrapperClassName = classNames({
    [styles.copyWrapper]: true,
    [styles.lightMode]: colorMode === ColorModes.light,
    [styles.disabled]: copyState === CopyStates.copying,
    [styles.copied]: copyState === CopyStates.copied,
    [styles.error]: copyState === CopyStates.errored,
  });

  const buttonProps = {
    className: styles.copyButton,
    'aria-label': 'Copy text',
    ...(isButtonDisabled ? {} : {
      onClick: writeToClipboard,
    }),
  };

  return (
    <div className={classNames(styles.copyContainer, className)}>
      <div className={wrapperClassName}>
        <div className={styles.message}>
          <div className={styles.successMessage}>
            <span>Copied!</span>
          </div>
          <div className={styles.errorMessage}>
            <span>Failed!</span>
          </div>
        </div>
        <button type="button" {...buttonProps}>
          { ButtonContent[copyState] }
        </button>
      </div>
    </div>
  );
}

export default CopyButton;
