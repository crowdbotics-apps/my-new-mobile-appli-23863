import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile4201410Navigator from '../features/UserProfile4201410/navigator';
import CbSplashScreen1193573Navigator from '../features/CbSplashScreen1193573/navigator';
import OnboardingSlideScreen2193572Navigator from '../features/OnboardingSlideScreen2193572/navigator';
import Text-OnlyWelcomeScreen3193571Navigator from '../features/Text-OnlyWelcomeScreen3193571/navigator';
/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile4201410: { screen: UserProfile4201410Navigator },
    CbSplashScreen1193573: { screen: CbSplashScreen1193573Navigator },
    OnboardingSlideScreen2193572: { screen: OnboardingSlideScreen2193572Navigator },
    Text-OnlyWelcomeScreen3193571: { screen: Text-OnlyWelcomeScreen3193571Navigator },
    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: "CbSplashScreen1193573", // Splash Screen
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
