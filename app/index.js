import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { Button, IconButton, List } from 'react-native-paper'

const Roupa = ({ id, descricao, valor }) => {
  
  const handleExcluir = async (id) => {
    console.log(id);

    // setCadastrando(true);

    await fetch(`https://668d6800099db4c579f2dcc2.mockapi.io/roupas/${id}`, {
      method: 'DELETE',
    });

    // setCadastrando(false);
  }

  return (
    <List.Item  title={descricao}
                description={valor}
                right={() => <IconButton icon="trash-can-outline" onPress={() => handleExcluir(id)} />}
    />
  );
}

const Index = () => {
  const [roupas, setRoupas] = useState([]);

  const getRoupas = async () => {
    console.log('getRoupas');

    // setCadastrando(true);

    const response = await fetch('https://668d6800099db4c579f2dcc2.mockapi.io/roupas');
    const json = await response.json();
    setRoupas(json);

    // setCadastrando(false);
  }

  useEffect(() => {
    getRoupas();
  }, []);

  return (
    <View>
      <Link href='/cadastro'>Nova Roupa</Link>

      <Link href='/cadastro' asChild>
        <Button mode='contained'>Nova Roupa</Button>
      </Link>

      <FlatList data={roupas} renderItem={({ item }) => <Roupa id={item.id} descricao={item.descricao} valor={item.valor} />} />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})