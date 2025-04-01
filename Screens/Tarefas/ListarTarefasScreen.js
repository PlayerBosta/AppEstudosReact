import { StyleSheet, FlatList, Text, View } from 'react-native';
 
export default function ListarTarefasScreen({tarefas}) {
  return (
    <View >
      <FlatList
        data={tarefas}
        renderItem={
          ({item}) =>
            <View style={styles.container}>
              <Text>{item.tarefa}</Text>
              <Text>{item.data}</Text>
            </View>
        }
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
});