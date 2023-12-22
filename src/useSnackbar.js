import { useContext } from 'react';
import { SnackbarContext } from './SnackbarProvider';

const useSnackbar = () => {
  const SnackbarCTX = useContext(SnackbarContext);
  if (!SnackbarCTX) {
    throw new Error('useSnackbar must be defined.');
  }

  return SnackbarCTX.show;
};

export default useSnackbar;
