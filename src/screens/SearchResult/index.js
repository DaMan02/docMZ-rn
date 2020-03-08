import React from 'react';
import { View, Text } from 'react-native';
import HeaderSearch from '../../components/HeaderSearch'
import { TabView, TabBar, TabViewPage, TabBarTop } from 'react-native-tab-view';
import styles from './styles';
import Prices from '../searchTabs/Prices'
import Info from '../searchTabs/Info'
import { FAB } from 'react-native-paper';
import Tips from '../searchTabs/Tips';
import News from '../searchTabs/News';

class SearchResult extends React.Component {

    state: State = {
        index: 0,
        routes: [
            { key: 1, title: 'Prices' },
            { key: 2, title: 'Tips' },
            { key: 3, title: 'News' },
            { key: 4, title: 'Info' },
        ],
    };

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

    _renderScene = ({ route }) => {
        switch (route.key) {
            case 1:
                return <Prices/>;
            case 2:
                return <Tips/>;
            case 3:
                return <News />;
            case 4: 
                return <Info/>;
            default:
                return null;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <HeaderSearch />
                <TabView
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={this.handleIndexChange}
                />
                <FAB
                    style={styles.fab}
                    color='white'
                    icon="heart"
                    onPress={() => console.log('Pressed')}
                />
            </View>
        );
    }
}

export default SearchResult;