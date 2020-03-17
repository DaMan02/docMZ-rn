import React from 'react';
import { View, Text, BackHandler, ToastAndroid, ScrollView } from 'react-native';
import HeaderSearch from '../../components/HeaderSearch'
import { TabView, TabBar, TabViewPage, TabBarTop } from 'react-native-tab-view';
import styles from './styles';
// import Info from './searchTabs/Info'
import { FAB } from 'react-native-paper';
// import News from './searchTabs/News';
// import Tips from './searchTabs/Tips';
// import Prices from './searchTabs/Prices';
import fonts from '../../assets/fonts';
import { heightPercentageToDP } from 'react-native-responsive-screen';

class SearchResult extends React.Component {

    state: State = {
        // index: 0,
        // routes: [
        //     { key: 1, title: 'Prices' },
        //     { key: 2, title: 'Tips' },
        //     { key: 3, title: 'News' },
        //     { key: 4, title: 'Info' },
        // ],
    };

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

    _renderTabBar = (
        props: SceneRendererProps & { navigationState: State }
    ) => (
            <TabBar
                {...props}
                indicatorStyle={styles.indicator}
                // tabStyle={styles.tabbar}
                labelStyle={styles.label}
                style={styles.tab}
            />
        );

    handleIndexChange = (index: number) =>
        this.setState({
            index,
        });

    // _renderScene = ({ route }) => {
    //     const { med } = this.props.route.params;
    //     console.log(med.Brands.)
    //     switch (route.key) {
    //         case 1:
    //             return <Prices price={med.Brands.}/>;
    //         case 2:
    //             return <Tips/>;
    //         case 3:
    //             return <News />;
    //         case 4: 
    //             return <Info/>;
    //         default:
    //             return null;
    //     }
    // };

    renderList(data) {
        return data.Brands.map(item =>
            <View style={styles.textMain} key={item.brand_name}>
                <Text style={styles.font2}>Brand:  {item.brand_name}</Text>
                <Text style={styles.font2}>Price:  ₹ {item.Price}</Text>
                <Text style={styles.font2}>Manufacturer: {item.manufacturer}</Text>
            </View>
        )
    }

    addFav() {
        ToastAndroid.show('Coming soon...', ToastAndroid.SHORT);
    }

    render() {
        const { navigation } = this.props;
        const { med } = this.props.route.params;
        console.log(med.Brands.Price)
        return (
            <View style={styles.container}>
                <HeaderSearch onBack={() => this.backAction()} />
                <Text style={styles.name}>{med.salt_name}</Text>
                <ScrollView overScrollMode='always'>
                    {this.renderList(med)}
                </ScrollView>
                {/* <TabView
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={this.handleIndexChange}
                /> */}
                <FAB
                    style={styles.fab}
                    color='white'
                    icon="heart"
                    onPress={() => this.addFav()}
                />
            </View>
        );
    }
}

export default SearchResult;