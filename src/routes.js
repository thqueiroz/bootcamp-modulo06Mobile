import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import User from './pages/user';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main: {
                screen: Main,
                navigationOptions: {
                    title: 'Usuários'
                }
            },
            User: {
                screen: User,
                navigationOptions: {
                    title: ''
                }
            }
        },
        {
            defaultNavigationOptions: {
                headerTintColor: '#FFF',
                headerBackTitleVisible: false,
                headerStyle: {
                    backgroundColor: '#7159c1'
                }
            }
        }
    )
);

export default Routes;
