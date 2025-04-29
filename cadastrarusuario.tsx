import { Usuarios } from '@/constants/Usuario';
import { Image, StyleSheet, Platform, View, Button, ScrollView, Text, FlatList, Pressable, TextInput } from 'react-native';
import { Link } from 'expo-router';
import {Picker} from '@react-native-picker/picker';

// import DateTimerPicker from '@react-native-comumunity/dateimpicker';
import { useState } from 'react';
export default function HomeScreen() {
    const [form, setForm] = useState({
      name: '',
      email: '',
      celular: '',
      password: '',
      documento: '',
      id_grupo: 'cliente',
      cargo: 'cabeleiro',
      status: 'ativo',
      data_nascimento: new Date(),
      avatar: null,
    });

    const [showdatePicker, setshowDatePicker] = useState(false);
    return (
    
    
      
    <View style={{}}>
      <Text> Casdastro Usuário</Text>

      <View style={{marginTop: 10}}>
        <Text>Nome</Text>
        <TextInput style={{backgroundColor: 'lightgray', padding: 10}}></TextInput>
      </View>

      <View style={{marginTop: 10, flexDirection:'column  '}}>
        <Text>E-mail</Text>
        <TextInput style={{backgroundColor: 'lightgray', padding: 10}}></TextInput>
      </View>

      <View style={{marginTop: 10, flexDirection:'column  '}}>
        <Text>Celular</Text>
        <TextInput style={{backgroundColor: 'lightgray', padding: 10}}></TextInput>
      </View>
      
      
      <View style={{marginTop: 10, flexDirection:'column  '}}>
        <Text>Senha</Text>
        <TextInput style={{backgroundColor: 'lightgray', padding: 10}}></TextInput>
      </View>

      
      <View style={{marginTop: 10, flexDirection:'column  '}}>
        <Text>Documento</Text>
        <TextInput style={{backgroundColor: 'lightgray', padding: 10}}></TextInput>
      </View>

      
      <View style={{marginTop: 10, flexDirection:'column  '}}>
        <Text>Grupo</Text>
        <TextInput style={{backgroundColor: 'lightgray', padding: 10}}></TextInput>
      </View>

      
      <View style={{marginTop: 10, flexDirection:'column  '}}>
        <Text>Cargo</Text>
        <TextInput style={{backgroundColor: 'lightgray', padding: 10}}></TextInput>
      </View>
      
      <View style={{marginTop: 10, flexDirection:'column  '}}>
        <Text>Status</Text>
        <TextInput style={{backgroundColor: 'lightgray', padding: 10}}></TextInput>
      </View>

      <Text>Grupo</Text>
      <Picker
        selectedValue={form.id_grupo}
        onValueChange={(itemValue) => setForm({ ...form, id_grupo: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="Profissional" value="profissional" />
        <Picker.Item label="Cliente" value="cliente" />
        <Picker.Item label="Gerente" value="gerente" />
      </Picker>

      <Text>Cargo</Text>
      <Picker
        selectedValue={form.cargo}
        onValueChange={(itemValue) => setForm({ ...form, cargo: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Cabeleireiro" value="cabeleiro" />
        <Picker.Item label="Manicure" value="manicure" />
        <Picker.Item label="Pedicure" value="pedicure" />
      </Picker>

      <Text>Status</Text>
      <Picker
        selectedValue={form.status}
        onValueChange={(itemValue) => setForm({ ...form, status: itemValue })}
        style={styles.input}
      >
        <Picker.Item label="Ativo" value="ativo" />
        <Picker.Item label="Inativo" value="inativo" />
      </Picker>

      <Text>Data de Nascimento</Text>
     
    </View>
  );
}
   
    
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

