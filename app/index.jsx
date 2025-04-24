import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useRouter } from 'expo-router'
import Welcome from './welcome'
import ScreenWrapper from '../components/ScreenWrapper'
import Loading from '../components/Loading'

const index = () => {
    const router = useRouter()
  return (
    // <ScreenWrapper>
    //   <Text>index</Text>
    //   <Button title='welcome' onPress={() => router.push('welcome')}/>
    // </ScreenWrapper>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <Loading />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})