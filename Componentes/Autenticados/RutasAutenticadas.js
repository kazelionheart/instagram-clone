import { TabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import Search from './Search';
import Add from './Add';
import Profile from './Profile';
import { StackFollow } from './StackFollow';

const RutasAutenticadas = TabNavigator({
    Home:{
        screen: StackHome
    },
    Search: {
        screen: StackSearch
    },
    Add: {
        screen: Add
    },
    Follow: {
        screen: StackFollow
    },
    Profile: {
        screen: Profile
    }
}, {
    tabBarPosition: 'bottom'
}
);

export { RutasAutenticadas };
