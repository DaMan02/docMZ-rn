import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { Chip } from 'react-native-paper';
import {connect} from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class ChipGroup extends React.Component {

    chipToggle(isDoc){
        if(isDoc !== this.props.isDoctor)
        this.props.isDoctorUpdate()
    }

    render() {
        return (
            <View style={styles.master}>
                <Chip
                    selected={this.props.isDoctor}
                    mode={this.props.isDoctor ? 'flat' : 'outlined'}
                    icon='stethoscope'
                    style={styles.chip}
                    onPress={() => this.chipToggle(true)}>Doctor</Chip>
                <Chip
                    selected={!this.props.isDoctor}
                    mode={!this.props.isDoctor ? 'flat' : 'outlined'}
                    icon='hospital'
                    style={styles.chip}
                    onPress={() => this.chipToggle(false)}>Patient</Chip>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    master: {
        padding: hp('2%'),
        flexDirection: 'row',
        alignSelf: 'center',
    },
    chip: {
        paddingEnd: wp('2%'),
        paddingStart: wp('2%'),
        marginStart: wp('3%'),
        marginEnd: wp('3%'),
    }
});

const mapStateToProps = state => ({
    isDoctor: state.isDoctor
  });
  
  const mapDispatchToProps = dispatch => ({
    isDoctorUpdate:() => dispatch({ type: 'TOGGLE_DOCTOR' }),
  });
  
 export default connect(mapStateToProps, mapDispatchToProps)(ChipGroup);
