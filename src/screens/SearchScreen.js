import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";


const SearchScreen = () => {

  const [term, setTerm] = useState('')
  

  return (
    <View>
      <SearchBar  term = {term} onTermChange = {(newterm) => setTerm(newterm)}></SearchBar>
      <Text> Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
