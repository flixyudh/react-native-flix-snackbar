import * as React from 'react';

import { SnackbarProvider } from 'react-native-flix-snackbar';
import Example from './Example';

export default function App() {
  return (
    <SnackbarProvider>
      <Example />
    </SnackbarProvider>
  );
}
