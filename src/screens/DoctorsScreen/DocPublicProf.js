import React from 'react';
import { View, Text, StyleSheet, Image, BackHandler, StatusBar } from 'react-native';
import fonts from '../../assets/fonts';
import { connect } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../assets/colors';
import NormalButton from '../../components/NormalButton';
import dimen from '../../assets/dimen';
import Rating from '../../components/Rating';
import ResizableButton from '../../components/ResizableButton';
import LinearGradient from 'react-native-linear-gradient';

class DocPublicProf extends React.Component {

    backAction = () => {
        this.props.navigation.goBack()
        return true;
    };

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }

    nextScreen(navigation, doc) {
        // doc.available_in_min == 0 ? navigation.navigate('Visit') : navigation.navigate('ConsultOptions')
        navigation.navigate('SignedOut')
    }

    renderBackgroundGradient() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={grayShades.one} barStyle="dark-content" />
                <Image source={require('../../assets/images/clinic.png')}
                        style={styles.bg} />
                <LinearGradient colors={[grayShades.one, grayShades.two, grayShades.three, '#FFFFFF']} style={styles.linearGradient}/>
            </View>
        )
    }

    render() {
        const { navigation } = this.props;
        const { doc } = this.props.route.params;
        // const  now  = this.props.consultNow;
        let avail = doc.available_in_min == 0;

        let btnText = avail ? 'VISIT NOW' : 'CONSULT';
        let available = avail ? 'Available' : 'Available in ' + doc.available_in_min + ' min';
        return (
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                {this.renderBackgroundGradient()}
                <View style={styles.dp}>
                    <Image source={require('../../assets/images/doc.jpg')}
                        style={styles.image} />
                    <View style={styles.btn}>
                        <ResizableButton onPress={() => this.nextScreen(navigation, doc)}
                            text={btnText} height={40} width={140}></ResizableButton>
                    </View>
                </View>
                <Text style={{ ...fonts.large, alignSelf: 'flex-start', marginStart: wp('10%'), marginTop: hp('2%') }}>Dr. {doc.name}</Text>
                <Text style={{ ...fonts.h3_thin, marginStart: dimen.ms, alignSelf: 'flex-start', marginBottom: hp('2%') }}>{doc.speciality}</Text>
                <View style={styles.rate}><Rating rate={doc.rating} /></View>
                <Text style={styles.txt}>
                    <Text style={{ color: colors.darkgray }}>Status:   </Text>
                    <Text style={{ color: colors.darkgreen }}>{available}</Text>
                </Text>
                <Text style={styles.txt}>{doc.exp} years of experience</Text>
                <View style={{ flexDirection: 'row', marginTop: hp('2%'), alignItems: 'center' }}>
                    <Image source={require('../../assets/images/map.jpg')}
                        style={styles.map} />
                    <View>
                        <Text style={styles.addr}>Address:   </Text>
                        <Text style={{ ...styles.addr, color: colors.darkgray }}>{doc.location.street}</Text>
                        <Text style={{ ...styles.addr, color: colors.darkgray }}>{doc.location.city}, {doc.location.country}</Text>
                    </View>
                </View>
                <Text style={{ ...styles.txt, color: colors.darkgray }}>About:   </Text>
                <Text style={styles.txt}>{doc.about}</Text>
            </ScrollView>

        )
    }
}

const grayShades = {
    one: '#D5D5D5',
    two: '#EAEAEA',
    three: '#F5F5F5'
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    linearGradient: {
        position: 'absolute',
        top: hp('19%'),
        height: hp('12%'),
        width: '100%'
    },
    bg: {
        resizeMode: 'stretch',
        width: '100%',
        height: hp('19%'),
        position: 'absolute',
        top: 0,
        backgroundColor: grayShades.one,
    },
    rate: {
        position: 'absolute',
        right: wp('2%'),
        top: hp('36%')
    },
    dp: {
        marginTop: hp('1%'),
        flexDirection: 'row',
    },
    btn: {
        position: 'absolute',
        top: hp('24%'),
        right: wp('10%'),
    },
    image: {
        marginTop: hp('10%'),
        marginStart: wp('10%'),
        height: hp('24%'),
        alignSelf: 'flex-start',
        width: 100,
        borderRadius: 10,
    },
    map: {
        marginStart: wp('10%'),
        height: hp('22%'),
        alignSelf: 'flex-start',
        width: 100,
        borderRadius: 10,
    },
    txt: {
        ...fonts.h3_thin,
        marginStart: dimen.ms,
        marginTop: 10
    },
    addr: {
        ...fonts.h3_thin,
        marginStart: 14,
        marginTop: 4,
        marginEnd: 10
    },
});

const mapStateToProps = state => ({
    consultNow: state.consultNow,
});


export default connect(mapStateToProps, null)(DocPublicProf);