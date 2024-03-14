import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson, deletePerson, updatePerson } from './actions';

const MainScreen = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleAddPerson = () => {
    dispatch(addPerson(firstName, lastName, age));
    setFirstName('');
    setLastName('');
    setAge('');
  };

  const handleDeletePerson = () => {
    if (selectedPersonId) {
      dispatch(deletePerson(selectedPersonId));
      setSelectedPersonId(null);
      setFirstName('');
      setLastName('');
      setAge('');
    }
  };

  const handleUpdatePerson = () => {
    if (selectedPersonId) {
      dispatch(updatePerson(selectedPersonId, firstName, lastName, age));
      setSelectedPersonId(null);
      setFirstName('');
      setLastName('');
      setAge('');
    }
  };

  const handleSelectPerson = (id) => {
    setSelectedPersonId(id);
    const person = people.find((person) => person.id === id);
    if (person) {
      setFirstName(person.firstName);
      setLastName(person.lastName);
      setAge(person.age.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text>Ajouter une personne :</Text>
      <Text>Firstname: <TextInput
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={styles.input}
      /></Text>
      
      <Text>Name: <TextInput
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        style={styles.input}
      /></Text>
      
      <Text>Age: <TextInput
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
        style={styles.input}
      /></Text>
      
      <Button title="Ajouter" onPress={handleAddPerson} />
      <Button title="Modifier" onPress={handleUpdatePerson} />
      <Button title="Supprimer" onPress={handleDeletePerson} />
      <FlatList
        data={people}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.firstName} {item.lastName}, Age: {item.age}</Text>
            <Button title="Sélectionner" onPress={() => handleSelectPerson(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  },
  input: {
    margin: 10,
    borderColor: '#ab0b00',
    backgroundColor: 'grey'
  }
});