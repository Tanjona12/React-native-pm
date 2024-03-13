import { View } from 'react-native';
import React from 'react';
import Deplacement from './Exo/Animation/Deplacement';
import Echelle from './Exo/Animation/Echelle';
import Visibilite from './Exo/Animation/Visibilite';
import Rotation from './Exo/Animation/Rotation';

import Carte1 from './Exo/Carte/Carte1';
import Carte2 from './Exo/Carte/Carte2';

export default function App () {
  return (
    <View>
      <Carte1/>
      <Carte2 />
    </View>
  );
};

