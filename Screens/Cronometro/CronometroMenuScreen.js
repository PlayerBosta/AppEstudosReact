import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CronometroPomodoreScreen from "./CronometroPomodoreScreen";
import CronometroSimplesScreen from "./CronometroSimplesScreen";
 
const Tab = createBottomTabNavigator();
 
export default function CronometroMenuScreen() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Cronometro" component={CronometroSimplesScreen} />
        <Tab.Screen name="Pomodore" component={CronometroPomodoreScreen}/>
      </Tab.Navigator>
  )
} 