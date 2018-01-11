import { StackNavigator } from 'react-navigation';
import Users from './screens/users/users';
import { HomeTabNavigation } from './screens/home/homeNavigator';

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