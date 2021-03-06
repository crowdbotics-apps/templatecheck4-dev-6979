import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging7718Navigator from '../features/Messaging7718/navigator';
import EmailAuth7717Navigator from '../features/EmailAuth7717/navigator';
import CalendarView7716Navigator from '../features/CalendarView7716/navigator';
import BlankScreen57715Navigator from '../features/BlankScreen57715/navigator';
import BlankScreen47714Navigator from '../features/BlankScreen47714/navigator';
import UserProfile67713Navigator from '../features/UserProfile67713/navigator';
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
Messaging7718: { screen: Messaging7718Navigator },
EmailAuth7717: { screen: EmailAuth7717Navigator },
CalendarView7716: { screen: CalendarView7716Navigator },
BlankScreen57715: { screen: BlankScreen57715Navigator },
BlankScreen47714: { screen: BlankScreen47714Navigator },
UserProfile67713: { screen: UserProfile67713Navigator },
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
