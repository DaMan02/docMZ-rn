import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput  } from "react-native";
import fonts from '../assets/fonts';
import colors from '../assets/colors';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

// props: onChangeText, value,  hint

const Searchbar = (props) => (
    <View style={styles.search}>
        <TextInput
            style={styles.searchbar}
            onChangeText={text => props.onChangeText(text)}
            value={props.value}
            placeholder={props.hint}
        />
        <TouchableOpacity activeOpacity={0.4} onPress={props.onSearch} style={styles.searchIcon}><Icon name='ios-search' size={18} color='white' /></TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    searchIcon: {
        backgroundColor: colors.button,
        borderRadius: 50,
        height: 46,
        width: 46,
        alignItems: 'center',
        justifyContent: 'center'
      },
      searchbar: {
        height: 46,
        marginStart: 10,
        marginEnd: 10,
        paddingEnd: 110
      },
      search: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 14,
        paddingEnd: 0,
        justifyContent: 'space-between',
        marginStart: 28,
        marginEnd: 16,
        marginTop: heightPercentageToDP('2%'),
        marginBottom: 8,
        backgroundColor: 'white',
        borderRadius: 8
      },
});

export default Searchbar;