import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

let handleTimeout;

const Snackbar = ({
  message,
  label,
  onPress,
  duration = 2000,
  backgroundColor = '#424940',
  color = '#dee5d8',
  id,
  hide,
  ...props
}) => {
  const animation = React.useRef(new Animated.Value(0)).current;

  const handleDuration = label ? 7000 : duration;

  const styleAnimation = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  };

  const runAnimated = (toValue) => {
    return Animated.timing(animation, {
      toValue,
      useNativeDriver: true,
      duration: 400,
    });
  };

  React.useEffect(() => {
    if (handleTimeout) clearTimeout(handleTimeout);
    runAnimated(1).start();
    if (handleDuration !== 0)
      handleTimeout = setTimeout(onHide, handleDuration);
  }, [handleDuration]);

  const onHide = (cb) => {
    runAnimated(0).start(() => {
      cb?.();
      hide();
    });
    clearTimeout(handleTimeout);
  };

  return (
    <Animated.View
      key={id}
      style={[
        {
          backgroundColor,
          flexDirection: label ? 'row' : 'column',
          borderRadius: 4,
        },
        styleAnimation,
      ]}
    >
      <Text
        style={[
          styles.SnackbarText,
          {
            color,
            paddingRight: label ? 0 : 16,
          },
        ]}
      >
        {message}
      </Text>
      {label && (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => onHide(onPress)}
        >
          <Text style={{ color, fontWeight: '500' }}>{label}</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  SnackbarText: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: { padding: 8, justifyContent: 'center' },
});

export default Snackbar;
