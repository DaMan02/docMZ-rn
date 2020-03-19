import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import colors from "../assets/colors";
import Icon from 'react-native-vector-icons/Ionicons';
import fonts from "../assets/fonts";
import { heightPercentageToDP } from 'react-native-responsive-screen';
import dimen from '../assets/dimen';

class HeaderSearch extends React.Component {
    render() {
        return (
            <View style={styles.title}>
                <View style={{ flexDirection: 'row', marginTop: heightPercentageToDP('6%') }}>
                    <StatusBar backgroundColor={colors.primary1} barStyle="dark-content" />
                    <TouchableOpacity onPress={this.props.onBack} style={styles.arrow}>
                        <Icon name='md-arrow-back' size={22} color='black' />
                    </TouchableOpacity>
                    <Text style={styles.head}>Medicine Details</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        // flexDirection: 'row',
    },
    arrow: {
        alignSelf: 'center',
        paddingStart: 20,
        paddingEnd: 20,
    },
    head: {
        ...fonts.extraLarge,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    edit: {
        alignSelf: 'center',
        paddingStart: 20,
        paddingEnd: 20,
        marginStart: 60
    },
    search: {
        alignSelf: 'center',
        paddingStart: 10,
        paddingEnd: 20
    }
});

export default HeaderSearch;