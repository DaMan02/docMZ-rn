import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import colors from '../assets/colors'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import fonts from '../assets/fonts';
import OutlineButton from './OutlineButton';

export default class CustomAlert extends React.Component {

    constructor(props){
        super(props)
    }

    //    props: titleColor, title, msg

    _hideDialog = () => this.props.callback();

    render() {
        return (
            <View>
                <Portal>
                    <Dialog style={{ borderRadius: 16 }}
                        visible={this.props.visible}
                        onDismiss={this._hideDialog}>
                        <Dialog.Title style={{ ...styles.title, color: this.props.titleColor }}>{this.props.title}</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph style={styles.msg}>{this.props.msg}</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions style={styles.btn}>
                            <OutlineButton text='OKAY' h={30} w={60} tColor={colors.button} onPress={() => this.props.callback()} />
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        ...fonts.large,
        alignSelf: 'center'
    },
    msg: {
        ...fonts.h3_thin,
        textAlign: 'center'
    },
    btn: {
        marginEnd: widthPercentageToDP('8%'),
        marginBottom: heightPercentageToDP('2%')
    }
});