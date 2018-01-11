import { AppRegistry } from "react-native";
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationApp } from './src/navigator';

const AppContainer = () =>
    <Provider store={store}>
        <NavigationApp />
    </Provider>

AppRegistry.registerComponent("reduxlearningstarter", () => AppContainer);
