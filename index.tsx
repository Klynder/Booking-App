import { Usuarios } from '@/constants/Usuario';
import { Image, StyleSheet, Platform, View, Text, FlatList, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Agendamentos } from '@/constants/Agendamento';

export default function HomeScreen() {
  return (
    <View style={{margin: 10, backgroundColor: 'ligtgray', padding: 10, flexDirection: 'row'}}>
      <View style={{width: '50%'}}>
        <Link href ="/servicos" asChild>
        <Pressable>
          <Text>Servicos</Text>
        </Pressable>
            </Link>
      
      </View>

     
      <View style={{width: '50%'}}>
        <Link href ="/agendamentos" asChild>
        <Pressable>
          <Text>agendamentos</Text>
        </Pressable>
            </Link>
            </View>


      <Text style={{}}> Perfil Clientes</Text>
      <View style={{margin: 10, backgroundColor: 'ligtgray', padding: 10, flexDirection: 'row'}}>
      <Text style={{width: '33%'}}>Id</Text>
      <Text style={{width: '33%'}}>Nome do cliente</Text>
      <Text style={{width: '33%'}}>Nome do grupo</Text>
      </View>

      <FlatList
      data={Usuarios()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={{margin: 10, backgroundColor: 'ligtgray', padding: 10, flexDirection: 'row'}}>
          <Text style={{width: '33%'}}>{item.id}</Text>
          <Text style={{width: '33%'}}>{item.nome}</Text>
          <Text style={{width: '33%'}}>{item.nome_grupo}</Text>
          </View>
      )}

      />

     
      </View>
  )

}