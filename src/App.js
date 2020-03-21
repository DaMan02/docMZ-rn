import React from 'react';
import TabsHome from './screens/TabsHome';
import { Provider as PaperProvider } from 'react-native-paper';

class App extends React.Component {

  render() {
    return (
      <PaperProvider>
        <TabsHome />
        </PaperProvider>
    );
  }
};

export default App
