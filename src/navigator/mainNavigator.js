import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging7708Navigator from '../features/Messaging7708/navigator';
import EmailAuth7707Navigator from '../features/EmailAuth7707/navigator';
import CalendarView7706Navigator from '../features/CalendarView7706/navigator';
import BlankScreen47705Navigator from '../features/BlankScreen47705/navigator';
import BlankScreen57699Navigator from '../features/BlankScreen57699/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging7708: { screen: Messaging7708Navigator },
EmailAuth7707: { screen: EmailAuth7707Navigator },
CalendarView7706: { screen: CalendarView7706Navigator },
BlankScreen47705: { screen: BlankScreen47705Navigator },
BlankScreen57699: { screen: BlankScreen57699Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
