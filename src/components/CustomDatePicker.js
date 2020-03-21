import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import colors from '../assets/colors'
import CalendarView from './CalendarView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

export default class CustomDatePicker extends React.Component {

  state = {
    visible: false,
  };

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  setDate(date) {
    // console.log('Picker.js')
    // console.log(date)
    this.props.callback(date);
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.cal} onPress={this._showDialog} activeOpacity={0.7}>
          <Icon name='calendar' size={20} color='white' />
        </TouchableOpacity>
        <Portal>
          <Dialog
            visible={this.state.visible}
            onDismiss={this._hideDialog}>
            <Dialog.Content>
              <CalendarView callback={this.setDate.bind(this)}/>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this._hideDialog}>DONE</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    padding: 16,
    marginTop: 10,
  },
  cal: {
    backgroundColor: colors.button,
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});