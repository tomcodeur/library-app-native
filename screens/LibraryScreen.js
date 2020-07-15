import React, {useState, useEffect} from 'react';
import {StyleSheet, Text,View, Input} from 'react-native';
import books from '../books.json';
import { ListItem } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';

function LibraryScreen({navigation}) {

    const [search,setSearch] = useState("")

    // function LibraryScreen() {
    //     useEffect(() => {
    //         axios.get("https://www.googleapis.com/books/v1/volumes?q=")
    //         .then(res => {
    //             setBooks(res.data);
    //         })
    //     }, [])
    // }

    // const [contacts,setBooks]= useState([])

    function updateSearch(search) {
        setSearch(search);
        console.log(search)
    };

    console.log(books);

    return(
        <View style={styles.container}>
            {/* <Text onPress={() => navigation.navigate("book", {title: "SDA - Commu"})}>
                Seigneur des anneaux: La communauté de l'anneau
               </Text> */}
               <SearchBar
                    placeholder=""
                    onChangeText={updateSearch}
                    value={search}
                    styles={styles.borderSearch}
                />
            {
                books.map((item, i) => (
                <ListItem 
                key={i} 
                title={item.title}
                bottomDivider 
                chevron 
                onPress={() => navigation.navigate("book", {item})}/>
                ))
            }
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
      borderSearch: {
          borderRadius: 3
      }
})

export default LibraryScreen;