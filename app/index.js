import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Button, List } from 'react-native-paper'

const Roupa = ({ descricao, valor }) => {
  return (
    <List.Item title={descricao} description={valor} />
  );
}

const Index = () => {
  const roupas = [
    {
      descricao: "Roupa 1",
      valor: 50
    },
    {
      descricao: "Roupa 2",
      valor: 80
    },
    {
      descricao: "Roupa 3",
      valor: 100
    }
  ];

  return (
    <View>
      <FlatList data={roupas} renderItem={({ item }) => <Roupa descricao={item.descricao} valor={item.valor} />} />

      <Link href='/cadastro'>Nova Roupa</Link>

      <Link href='/cadastro' asChild>
        <Button mode='contained'>Nova Roupa</Button>
      </Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})