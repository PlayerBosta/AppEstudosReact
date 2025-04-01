import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/Home/HomeScreen';
import CronometroMenuScreen from './Screens/Cronometro/CronometroMenuScreen';
import TarefasMenuScreen from './Screens/Tarefas/TarefasMenuScreen';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Temporizador" component={CronometroMenuScreen} />
        <Drawer.Screen name="Tarefas" component={TarefasMenuScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
