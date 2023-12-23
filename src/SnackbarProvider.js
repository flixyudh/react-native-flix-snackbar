import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import InternalUseSnackbar from './InternalUseSnackbar';
import Snackbar from './Snackbar';

export const SnackbarContext = React.createContext({
  /**
   * @typedef {object} OptionsType
   * @prop {number} [duration=2000] - duration of snackbar or to show
   * @prop {string} label - button text of snackbar
   * @prop {boolean} isError - button text of snackbar
   * @prop {string} backgroundColor - Snackbar background color container view
   * @prop {string} color - Snackbar color text
   * @prop {function} onPress - function to pass when snackbar button pressed
   *
   * @param {String} message
   * @param {OptionsType} options
   */
  show: (message, options) => null,
});

export const SnackbarProvider = ({ children, style }) => {
  const { SnackbarData, show, hide } = InternalUseSnackbar();
  const contextValue = React.useMemo(() => ({ show, hide }), [show]);

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        style={[styles.containerView, style]}
        pointerEvents="box-none"
      >
        {SnackbarData && <Snackbar key={SnackbarData?.id} {...SnackbarData} />}
      </KeyboardAvoidingView>
    </SnackbarContext.Provider>
  );
};

const styles = StyleSheet.create({
  containerView: {
    position: 'absolute',
    bottom: 20,
    zIndex: 999,
    left: 8,
    right: 8,
    // justifyContent: 'flex-end',
  },
});
