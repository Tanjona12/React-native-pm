import { Animated, Button, StyleSheet, View } from 'react-native';
import React, {useRef} from 'react';

export default function Rotation () {
  const _rotate = useRef(new Animated.Value(0)).current;
  const rotate = _rotate.interpolate({ inputRange: [0, 1],
    outputRange: ['0deg', '90deg'] })
  const animate = () => {
    _rotate.setValue(0)
    Animated.spring(_rotate, {
        toValue: 1,
        useNativeDriver: true,
        bounciness: 0
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, {transform: [{ rotate }] }]} />
      <View style={styles.btn}>
        <Button 
        onPress={animate}
        title="rotate"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: '#ab0b00',
    alignSelf: "center"
  },
  btn: {
    paddingHorizontal: 50,
  }
});
