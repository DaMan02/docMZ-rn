import React from 'react';
import { View, Text, ScrollView, ToastAndroid } from 'react-native';
import styles from './styles';
import HomeHeader from '../../components/HomeHeader'
import NormalButton from '../../components/NormalButton'
import Ad from '../../components/Ad'
import SwitchMenu from '../../components/SwitchMenu'
import colors from '../../assets/colors';
import {connect} from 'react-redux';

class SettingsScreen extends React.Component {

    state = {
        // toggle1: false
    }
  
    onSwitchToggle(code){
        this.setState({ toggle1: !this.state.toggle1 });
        ToastAndroid.show("Todo", ToastAndroid.SHORT);
    }

    render(){
        return(
            <View style={styles.container}>
            <HomeHeader />
            <Text style={styles.boldtext}>Receive price alerts, savings, and news on your prescriptions.</Text>
             <View style={styles.buttonContainer}>
                 <NormalButton
                 text='GET STARTED'
                 backgroundColor={colors.typography}
                 border={colors.typography}
                 textColor='white'/>
                 <View style={styles.dummy}/>
                  <NormalButton
                 text='LOG IN'
                 backgroundColor='white'
                 border={colors.typography}
                 textColor={colors.typography}/>
               </View> 
               <ScrollView>
               <Ad/>
               <Text style={styles.heading}>SECURITY</Text>
               <SwitchMenu icon='md-lock' text='Passcode' value={this.props.toggle1} onSwitch={() => this.props.toggleUpdate1()}/>
               <Text style={{...styles.heading, marginTop: 10}}>NOTIFICATIONS</Text>
               <SwitchMenu icon='md-calendar' text='Refill Reminders' value={this.props.toggle2} onSwitch={() => this.props.toggleUpdate2()}/>
               <SwitchMenu icon='md-pricetag'  text='My Price alerts' value={this.props.toggle3} onSwitch={() => this.props.toggleUpdate3()}/>
               <SwitchMenu icon='ios-paper' text='My Savings & News' value={this.props.toggle4} onSwitch={() => this.props.toggleUpdate4()}/>
               <SwitchMenu icon='ios-notifications' text='General Notifications' value={this.props.toggle5} onSwitch={() => this.props.toggleUpdate5()}/>
               </ScrollView>    
            </View>
        );
    }
}

const mapStateToProps = state => ({
    toggle1: state.toggle1,
    toggle2: state.toggle2,
    toggle3: state.toggle3,
    toggle4: state.toggle4,
    toggle5: state.toggle5,
  });

const mapDispatchToProps = dispatch => ({
    toggleUpdate1: () => dispatch({type: 'TOGGLE1'}),
    toggleUpdate2: () => dispatch({type: 'TOGGLE2'}),
    toggleUpdate3: () => dispatch({type: 'TOGGLE3'}),
    toggleUpdate4: () => dispatch({type: 'TOGGLE4'}),
    toggleUpdate5: () => dispatch({type: 'TOGGLE5'}),
  });

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);