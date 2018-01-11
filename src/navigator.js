import { StackNavigator } from 'react-navigation';
import Home from './Screens/home/home';
import Users from './Screens/users/users';
import { HomeTabNavigation } from './Screens/home/navigator';

export const NavigationApp = StackNavigator(
    {
        Home: { screen: HomeTabNavigation, navigationOptions: { title: 'Home' } },
        Users: { screen: Users, navigationOptions: { title: 'Users' } }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'white',
            }
        }
    })