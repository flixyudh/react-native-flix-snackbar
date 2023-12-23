import React from 'react';

import clsx from 'clsx';

import BrowserOnly from '@docusaurus/BrowserOnly';
import CodeBlock from '@theme/CodeBlock';

import styles from './styles.module.css';

export default function InteractiveExample({
  src,
  component,
  showCode = false,
}) {
  const [showPreview, setShowPreview] = React.useState(!showCode);

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <div className={styles.container} data-ispreview={showPreview}>
          <div
            className={clsx(
              styles.buttonsContainer,
              styles.upperButtonsContainer
            )}
          >
            <div className={styles.actionButtonsContainer}>
              <button
                className={clsx(
                  styles.actionButton,
                  showPreview ? styles.actionButtonActive : ''
                )}
                onClick={() => setShowPreview(true)}
              >
                Preview
              </button>
              <button
                className={clsx(
                  styles.actionButton,
                  !showPreview ? styles.actionButtonActive : ''
                )}
                onClick={() => setShowPreview(false)}
              >
                Code
              </button>
            </div>
          </div>
          <div className={styles.previewContainer}>
            {showPreview ? (
              <>
                <CodeBlock language="jsx">
                  <React.Fragment>{component}</React.Fragment>
                </CodeBlock>
              </>
            ) : (
              <div className={styles.interactiveCodeBlock}>
                <CodeBlock language="jsx" showLineNumbers>
                  {src}
                </CodeBlock>
              </div>
            )}
          </div>
        </div>
      )}
    </BrowserOnly>
  );
}
