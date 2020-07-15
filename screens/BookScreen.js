import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { Card, ListItem, Button, Icon, Text} from 'react-native-elements';

import {StyleSheet, View} from 'react-native';

const BookScreen = ({navigation, route}) => {

    console.log(route);

    const book = route.params.item;

    return(
        <Card containerStyle={{padding: 0}} >
            <View style={styles.container}>
                <Image
                    source={{ uri: book.img }}
                    style={{ width: 300, height: 400,}}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Text h3 style={styles.textTitle}>{book.title}</Text>
                <Text style={styles.textAuthor}>{book.author}</Text>
                <Text style={styles.textCategories}>{book.categorie}</Text>
            </View>
        </Card>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    textTitle : {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },

    textAuthor: {
        fontWeight: 'bold',
        marginBottom: 20
    },

    textCategories : {
        marginBottom: 20,
        fontStyle: "italic"
    }
})


export default BookScreen;