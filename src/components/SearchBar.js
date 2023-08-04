import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style = {styles.iconStyle}/>
      <TextInput 
      placeholder="Search" 
      style={styles.inputStyle}
      value = {term} 
      onChangeText={onTermChange}
      autoCapitalize="none"
      autoCorrect ={false}
      onEndEditing={onTermSubmit}>
       </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle : {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10
  },
  inputStyle : {
    // borderBlockColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18
  },
  iconStyle : {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
