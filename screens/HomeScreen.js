import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, Text} from 'react-native-elements';
import { Icon } from 'react-native-elements';

function HomeScreen({navigation}) {
    function navigateToLibrary() {
        navigation.reset({
            index: 0,
            routes: [
                {name: "library"}
            ]   
        });
    }

    return(
        <View style={styles.container}>
            <Icon name='book' style={styles.iconBook}/>
            <Text h1 style={styles.titleApp}>Mes livres</Text>
            <Button title="Commencer la visite" onPress={navigateToLibrary} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleApp : {
        marginBottom: 20
    },
    iconBook : {
        marginBottom: 20
    }
  });

  
export default HomeScreen;