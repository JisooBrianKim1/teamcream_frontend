import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './src/screens/SignInScreen';
import SignUp from './src/screens/SignUpScreen';
import Username from './src/screens/UsernameScreen';
import ResetPw from './src/screens/ResetPwScreen';
import DietaryRestrictions from './src/screens/DietaryRestrictions';
import EmailSent from './src/screens/EmailSent';
import ProfilePic from './src/screens/ProfilePic';

const navigator = createStackNavigator(
  {
    SignIn,
    SignUp,
    Username,
    ResetPw,
    DietaryRestrictions,
    EmailSent,
    ProfilePic
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      title: 'Cooking with Crumbs',
    },
  },
);

export default createAppContainer(navigator);
