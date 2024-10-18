import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      feed:[
        {id:1 ,nome: "Higor", idade: 18, email: "higor@higor.com"},
        {id:2 ,nome: "João", idade: 22, email: "joao@joao.com"},
        {id:3 ,nome: "Henrique", idade: 39, email: "henrique@henrique.com"},
        {id:4 ,nome: "Paulo", idade: 50, email: "paulo@paulo.com"},
        {id:5 ,nome: "José", idade: 12, email: "jose@jose.com"}
      ]
    }
  }

  render(){
    return(
      <View style={styles.container}>

      <FlatList 
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoa data={item} /> }
      />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  areaPessoa:{
    backgroundColor: "#222",
    height: 200,
    marginBottom: 15
  },
  textoPessoa:{
    color: "#FFF",
    fontSize: 20,
  }
});

export default App;

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email} </Text>
      </View>
    );
  }
}