import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    BackHandler,
    StatusBar,
    Image,
    FlatList,
    ScrollView
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import { Api } from '../../constants';
// import { Axios } from '../../config';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import Speciality from '../../components/Speciality';
import specs from '../../database/specialityDemo.json'
import Searchbar from '../../components/Searchbar';
import Titlebar from '../../components/Titlebar';
import { ScrollPager } from 'react-native-tab-view';

class AllSpecialities extends Component {
    state = {
        selectedOption: 1,
        specialityList: [],
        isLoading: true,
    };

    backAction = () => {
        this.props.navigation.goBack()
        return true;
    };

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    async componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
        try {
            this.setState({
                specialityList: specs.specialities,
                isLoading: false,
            });
        } catch (error) {
            console.log(error);
            this.setState({ isLoading: false });
            alert(error.message);
        }
    }

    onChangeText() {

    }

    renderGrid(item) {
        return (
            <View style={styles.item}>
                <Speciality onPress={() => console.log('click')}
                    title={item.name} uri={require('../../assets/images/stetho.png')} />
            </View>
        );
    }

    renderLoad() {
        if (!this.state.specialityList > 0)
            return (
                <View>
                    {this.state.isLoading ? (
                        <ActivityIndicator size="large" color={colors.primary2} />
                    ) : (
                            <Text>No speciality found</Text>
                        )}
                </View>
            )
    }

    render() {
        return (
            <View
                onStartShouldSetResponderCapture={() => { this.setState({ enableScrollViewScroll: true }); }}
                style={styles.container}>
                <StatusBar backgroundColor={colors.primary1} barStyle="light-content" />
                <Titlebar title='All Specialities' />
                <Searchbar onChangeText={(text) => this.onChangeText(text)}
                    hint='Search Specialities' />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                    style={styles.catMain}>
                    <FlatList style={styles.list}
                        data={this.state.specialityList}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => this.renderGrid(item)}
                        keyExtractor={this._keyExtractor}
                    />
                    <View style={{height: hp('20%')}}></View>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg
    },
    catMain: {
        minHeight: hp('25%'),
        backgroundColor: colors.bg
    },
    item: {
        paddingBottom: 4,
    },
    list: {
        
    },
    title: {
        ...fonts.para,
        marginStart: 18,
        marginBottom: hp('1%'),
        marginTop: hp('4%')
    },
    scroll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AllSpecialities;
