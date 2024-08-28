import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import './index.ts';
import './app/global.css';

AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
