import React from 'react';
import { View, Text, StyleSheet, Image, BackHandler } from 'react-native';
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

    render() {
        const { navigation } = this.props;
        const { doc } = this.props.route.params;
        // const  now  = this.props.consultNow;
        let avail = doc.available_in_min == 0;

        let btnText = avail ? 'VISIT NOW' : 'CONSULT';
        let available = avail ? 'Available' : 'Available in ' + doc.available_in_min + ' min';
        return (
            <ScrollView style={styles.main}>
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
                        <Text style={{...styles.txt, color: colors.darkgray }}>Address:   </Text>
                        <Text style={styles.txt}>{doc.location.street}</Text>
                        <Text style={styles.txt}>{doc.location.city}</Text>
                        <Text style={{...styles.txt, color: colors.darkgray }}>About:   </Text>
                        <Text style={styles.txt}>{doc.about}</Text>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    rate: {
        position: 'absolute',
        right: wp('2%'),
        top: hp('36%')
    },
    dp: {
        marginTop: hp('1%'),
        flexDirection: 'row'
    },
    btn: {
        position: 'absolute',
        top: hp('24%'),
        right: wp('10%')
    },
    image: {
        marginTop: hp('10%'),
        marginStart: wp('10%'),
        height: hp('24%'),
        alignSelf: 'flex-start',
        width: 100,
        borderRadius: 10,
    },
    txt: {
        ...fonts.h3_thin,
        marginStart: dimen.ms,
        marginTop: 10
    }
});

const mapStateToProps = state => ({
    consultNow: state.consultNow,
});


export default connect(mapStateToProps, null)(DocPublicProf);