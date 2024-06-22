import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

class App extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>TargetSum...</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#ddd',
        flex:1,
    },

    paragraph:{
        margin: 150,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default App;
