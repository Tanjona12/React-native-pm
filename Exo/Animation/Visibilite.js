import { Button, LayoutAnimation, Platform, UIManager, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

if (Platform.OS === 'android') {
    if(UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

const boxWidth = 100;

export default function Visibilite () {
  const [visible, setVisible] = useState(false);
  const animate = () => {
    LayoutAnimation.easeInEaseOut();
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {visible && <View style={styles.innerbox} />}
      </View>
      <View style={styles.btn}>
        <Button onPress={animate} title={visible ? 'Opacity out' : 'Opacity in'}/>
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
    height: boxWidth,
    width: boxWidth,
    alignSelf: 'center'
  },
  innerbox: {
    height: '100%',
    width: '100%',
    backgroundColor: "#456788"
  },
  btn: {
    paddingHorizontal: 50,
  },
});
