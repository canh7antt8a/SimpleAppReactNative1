/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import { Client } from 'bugsnag-react-native';
const bugsnag = new Client('43f60c3c46b4c722fb8bbc8c65125957');

AppRegistry.registerComponent(appName, () => App);
