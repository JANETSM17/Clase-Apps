import useSingularFetch from '@/hooks/useSingularFetch';
import { StyleSheet, Text, TouchableOpacity, ViewProps, View } from 'react-native';
import { useEffect } from 'react';

export function Details({navigation, route}) {

  const {height, weight, name, loading, error} = useSingularFetch(route.params.url)
  useEffect(() => {
     console.log(height, weight, name, loading, error?.message)
  }, [loading])
    console.log(route?.params)
    useSingularFetch(route?.params)

  return (

    <View >
        <Text>Name: {name}</Text>
        <Text>Height: {height}m</Text>
        <Text>Weight: {weight}kg</Text>

    </View>
    
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});