import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    BackHandler,
    StatusBar,
    Keyboard,
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
import { connect } from 'react-redux';

class AllSpecialities extends Component {
    state = {
        selectedOption: 1,
        specialityList: [],
        isLoading: true,
        search: ''
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
            // alert(error.message);
        }
    }

   // search 

  onChangeText(text) {
    this.setState({ search: text })
    if (text == '') {
      this.setState({ specialityList: specs.specialities })
    }
  }

  goClick() {
    Keyboard.dismiss()
    this.handleSearch(this.state.search)
  }

  async handleSearch(text) {
    console.log('Searching: ' + text)
    let data = this.state.specialityList;
    data = data.filter(function (d) {
      return (
        d.name.toLowerCase().match(text.toLowerCase())
      );
    });
    this.setState({ specialityList: data });
  }

  onSpecialityClick(sp){
    this.props.searchUpdateSp(sp.name)
    this.props.navigation.navigate('AllDoctors', { docType: sp.name })
  }

    renderGrid(item) {
        return (
            <View style={styles.item}>
                <Speciality onPress={() => this.onSpecialityClick(item)}
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
                <Titlebar title='All Specialities' back onPress={() => this.backAction()}/>
                <Searchbar onChangeText={(text) => this.onChangeText(text)} onSearch={() => this.goClick()}
                    hint='Search Specialities' />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                    style={styles.catMain}>
                    <FlatList style={styles.list}
                        data={this.state.specialityList}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => this.renderGrid(item)}
                        keyExtractor={item => item.id}
                        removeClippedSubviews={true} // Unmount components when outside of window 
                        initialNumToRender={21} // Reduce initial render amount
                        maxToRenderPerBatch={1} // Reduce number in each render batch
                        updateCellsBatchingPeriod={100} // Increase time between renders
                        windowSize={7} // Reduce the window size
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
  
const mapDispatchToProps = dispatch => ({
    searchUpdateSp: val => dispatch({ type: 'UPDATE_SEARCH_SP', searchSp: val }),
  });
  
export default connect(null, mapDispatchToProps)(AllSpecialities);
  