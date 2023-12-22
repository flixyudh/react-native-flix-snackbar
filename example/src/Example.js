import React from 'react';
import { Button, Text, View } from 'react-native';
import { useSnackbar } from 'react-native-flix-snackbar';

const Example = (props) => {
  const show = useSnackbar();

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ marginBottom: 24, textAlign: 'center', fontSize: 18 }}>
        Example usage for Snackbar
      </Text>
      <Button title="Snackbar" onPress={() => show('Coba dihome')} />
      <Button
        title="Snackbar longer"
        onPress={() =>
          show(
            'Its a longer text to test if snackbar has two line or not, if you see its two line then its safe'
          )
        }
      />
      <Button
        title="Snackbar with action"
        onPress={() =>
          show('Failed save image to gallery', {
            label: 'Try Again',
            onPress: () => show('Image saved successfully'),
          })
        }
      />
      <Button
        title="Snackbar longer with action"
        onPress={() =>
          show(
            'Its a longer text to test if snackbar has two line or not, if you see its two line then its safe',
            {
              label: 'Try Again',
              onPress: () => show('Image saved successfully'),
            }
          )
        }
      />
      <Button
        title="Snackbar Error"
        onPress={() => show('404 Not Found', { isError: true })}
      />
    </View>
  );
};

export default Example;
