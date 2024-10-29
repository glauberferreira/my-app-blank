import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Button } from 'react-native-paper'

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      <Link href='/cadastro'>Nova Roupa</Link>
      
      <Link href='/cadastro' asChild>
        <Button mode='contained'>Nova Roupa</Button>
      </Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})