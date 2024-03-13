import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const carreau = require('../../assets/carreau.png'); 
const pique = require('../../assets/pique.png');
const trefle = require('../../assets/trefle.png');
const coeur = require('../../assets/coeur.jpeg');


export default function CarteComponent() {
  const [cartes, setCartes] = useState([
    { id: '', famille: ''},
    { id: 'C0', famille: carreau, valeur: 2 },
    { id: 'C1', famille: pique, valeur: 3 },
    { id: 'C2', famille: trefle, valeur: 4 },
    { id: 'C3', famille: coeur, valeur: 5 },
    { id: 'C4', famille: coeur, valeur: 6 },
    { id: 'C5', famille: carreau, valeur: 7 },
    { id: 'C6', famille: trefle, valeur: 8 },
    { id: 'C7', famille: pique, valeur: 9 },
  ]);

  const modifierCarte = (id) => {
    setCartes(cartes.map((carte) => {
      if (carte.id === id) {
        switch (carte.famille) {
          case carreau:
            return { ...carte, famille: coeur };
          case coeur:
            return { ...carte, famille: pique };
          case pique:
            return { ...carte, famille: trefle };
          case trefle:
            return { ...carte, famille: carreau };
          default:
            return carte;
        }
      } else if (id === '') {
        return { ...carte, valeur: carte.valeur + 1 === 1 ? 7 : carte.valeur + 1 };
      } else {
        return carte;
      }
    }));
  };

  return (
    <View style={styles.container}>
      {[['C0', 'C1', 'C2'], ['C7', '', 'C3'], ['C6', 'C5', 'C4']].map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, cellIndex) => (
            <TouchableOpacity key={`${rowIndex}-${cellIndex}`} onPress={() => modifierCarte(cell)}>
              <View style={styles.cellule}>
                <Text>{cartes.find(carte => carte.id === cell)?.valeur}</Text>
                <Image source={cartes.find(carte => carte.id === cell)?.famille} style={styles.image} />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellule: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    width: 20,
    height: 20
  }
});

 
