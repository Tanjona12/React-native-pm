import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Carte1 () {
  const [retourne, setRetourne] = useState(false);

  const retournerCarte = () => {
    setRetourne(!retourne);
  };

  return (
    <TouchableOpacity onPress={retournerCarte} style={styles.container}>
      <View>
        {retourne ? (
          <Image
            source={require('../../assets/dame_pique.jpg')}
            style={styles.image}
          />
        ) : (
          <Image
            source={require('../../assets/dos_carte.jpg')}
            style={styles.image}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
        width: 200,
        height: 250 
    }
  });
