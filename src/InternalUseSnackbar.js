import React from 'react';

const InternalUseSnackbar = () => {
  const [SnackbarData, setSnackbarList] = React.useState(null);

  const hide = React.useCallback(() => {
    setSnackbarList(null);
  }, []);

  const show = React.useCallback((message, options) => {
    const id = Date.now().toString(36);
    requestAnimationFrame(() => {
      setSnackbarList({ message, id, hide, ...options });
    });
  }, []);

  return {
    SnackbarData,
    show,
    hide,
  };
};

export default InternalUseSnackbar;
