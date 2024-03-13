import { Animated, Button, LayoutAnimation, Platform, UIManager, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

if (Platform.OS === 'android') {
    if(UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const boxWidth = 100;

export default function Echelle () {
  const [scaled, setScale] = useState(false);
  const animate = () => {
    LayoutAnimation.easeInEaseOut();
    setScale(!scaled);
  };
  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
            styles.box, {
                height: scaled ? boxWidth * 2 : boxWidth,
                width: scaled ? boxWidth * 2 : boxWidth, 
            },
        ]} 
      />
      <View style={styles.btn}>
        <Button 
        onPress={animate}
        title={scaled? 'Scale out' : 'Scale'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly'
  },
  box: {
    backgroundColor: '#444',
    alignSelf: 'center'
  },
  btn: {
    paddingHorizontal: 50,
  },
});
