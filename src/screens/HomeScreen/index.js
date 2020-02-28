import React from 'react';
import { View, ScrollView } from 'react-native';
import HomeHeader from '../../components/HomeHeader'
import NormalButton from '../../components/NormalButton'
import PrescriptionItem from '../../components/PrescriptionItem'
import styles from './styles';
import colors from '../../assets/colors';

class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <HomeHeader />

                <View style={styles.normalbutton}>
                    <NormalButton
                        backgroundColor={colors.typography}
                        text='Prescriptions'
                        border={colors.typography}
                        textColor='white' />
                    <NormalButton
                        backgroundColor='white'
                        text='Pharmacies'
                        border='white'
                        textColor='black' />
                </View>

                <ScrollView>
                    <PrescriptionItem
                        name='Bisoprolol'
                        mg={5} tablets={90}
                    />
                    <PrescriptionItem
                        name='Imatinib'
                        mg={400} tablets={30}
                    />
                    <PrescriptionItem
                        name='Bisoprolol'
                        mg={5} tablets={90}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;