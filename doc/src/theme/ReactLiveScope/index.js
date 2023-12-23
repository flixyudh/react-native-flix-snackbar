import React from 'react';
import { SnackbarProvider, useSnackbar } from 'react-native-flix-snackbar';
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Text,
  SnackbarProvider,
  useSnackbar,
};
export default ReactLiveScope;
