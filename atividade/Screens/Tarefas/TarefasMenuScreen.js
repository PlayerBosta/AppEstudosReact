import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TarefasCadastrarScreen from "./TarefasCadastrarScreen";
import ListarTarefasScreen from "./ListarTarefasScreen";
import { useState } from "react";
 
const Tab = createBottomTabNavigator();
 
export default function TarefasMenuScreen() {
  const [tarefas, setTarefas] = useState([])
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Cadastrar"
          children={props => <TarefasCadastrarScreen {...props} setTarefas={setTarefas} />}
        />
        <Tab.Screen
          name="Listar"
          children={props => <ListarTarefasScreen {...props} tarefas={tarefas} />}
        />
      </Tab.Navigator>
  )
}