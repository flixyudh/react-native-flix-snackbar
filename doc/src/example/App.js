import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SnackbarProvider, useSnackbar } from 'react-native-flix-snackbar';

const Example = (props) => {
  const show = useSnackbar();

  const listButton = [
    {
      title: 'Snackbar Simple',
      onPress: () => show('Simple Snackbar'),
    },
    {
      title: 'Snackbar Success',
      style: { backgroundColor: '#94f99080' },
      onPress: () => show('Item added to cart', { backgroundColor: '#006e1c' }),
    },
    {
      title: 'Snackbar Error',
      style: { backgroundColor: '#ba1a1a80' },
      onPress: () =>
        show('Failed add item to cart', { backgroundColor: '#ba1a1a' }),
    },
    {
      title: 'Snackbar with action',
      onPress: () =>
        show('Failed add item to cart', {
          backgroundColor: '#ba1a1a',
          label: 'Try Again',
          onPress: () =>
            show('Item added to cart', { backgroundColor: '#006e1c' }),
        }),
    },
  ];

  return (
    <View
      style={{ flex: 1, backgroundColor: '#fff', padding: 24, borderRadius: 4 }}
    >
      {listButton.map((x, i) => (
        <TouchableOpacity
          onPress={x.onPress}
          key={x.title + i}
          style={[
            {
              marginBottom: 8,
              padding: 14,
              borderRadius: 4,
              backgroundColor: 'rgba(145, 159, 207, 0.2)',
            },
            x.style,
          ]}
        >
          <Text>{x.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function App() {
  return (
    <SnackbarProvider>
      <Example />
    </SnackbarProvider>
  );
}
