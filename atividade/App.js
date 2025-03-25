import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/Home/HomeScreen';
import TarefasScreen from './Screens/Tarefas/TarefasScreen';
import CronometroScreen from './Screens/Cronometro/CronometroScreen';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cronometro" component={CronometroScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
