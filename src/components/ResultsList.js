import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultsDetail from './ResultsDetail'


const ResultsList = ({title, results}) => {
    return (
        <View>
        <Text style = {styles.titleStyle} >{title}</Text>
        <Text>Results: {results.length} </Text>
        <FlatList
            horizontal
            data = {results}
            keyExtractor={ (results) => results.id}
            renderItem={({item}) => {return (<ResultsDetail result = {item} /> ) }}
        />
        </View>
    )
}

const styles = StyleSheet.create ({
    titleStyle : {
       fontSize: 18,
       fontWeight: 'bold'
    }
})

export default ResultsList