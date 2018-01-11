import { TabNavigator } from 'react-navigation';
import Counter from './../../components/counter';
import TextMagic from './../../components/textMagic';

export const HomeTabNavigation = TabNavigator(
    {
        Counter: { screen: Counter },
        TextMagic: { screen: TextMagic }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#e91e63',
        },
    })