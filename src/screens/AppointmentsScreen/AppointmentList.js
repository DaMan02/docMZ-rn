import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, FlatList } from 'react-native';
import colors from '../../assets/colors';
import appnt from '../../database/appointmentsDemo.json'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import fonts from '../../assets/fonts';
import LoginHeader from '../../components/LoginHeader';
import AppointmentPreview from '../../components/AppointmentPreview';

class AppointmentList extends Component {

    state = {
        appointments: []
    }

    async componentDidMount() {
        this.setState({
            appointments: appnt.appointments,
        });
    }

    renderList(item) {
        return (
          <AppointmentPreview
            // onPress={() => this.props.navigation.navigate('DocPublicProf',
            //   { doc: doctor })}
            name={item.dr} 
            spec={item.speciality} 
            time={item.date + ' at ' + item.time} 
            confirm={item.confirm}
            reason={item.reason} />
        )
      }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.primary1} barStyle="light-content" />
                <LoginHeader title='Upcoming Appointments' onPress={() => console.log('Todo')} />
                <FlatList style={styles.list}
                    data={this.state.appointments}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => this.renderList(item)}
                    keyExtractor={item => item.id}
                    // Performance settings
                    removeClippedSubviews={true} // Unmount components when outside of window 
                    initialNumToRender={20} // Reduce initial render amount
                    maxToRenderPerBatch={1} // Reduce number in each render batch
                    updateCellsBatchingPeriod={100} // Increase time between renders
                    windowSize={7} // Reduce the window size
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg
    },
    title: {
        ...fonts.para,
        marginStart: 18,
        marginBottom: hp('1%'),
        marginTop: hp('4%')
    },
    list: {
        marginTop: hp('2%')
    },
});

export default AppointmentList;

