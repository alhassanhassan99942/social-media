import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'
import { AuthProvider, useAuth } from '../context/AuthContext'
import {supabase} from '../lib/supabase'
import { getUserData } from '../services/userService'

const _layout = () => (
  <AuthProvider>
    <MainLayout />
  </AuthProvider>
)
 
const MainLayout = () => {
  const {setAuth, setUserData} = useAuth()

  const router = useRouter()

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(`session user : ${session?.user?.id}`);

      if (session) {
        setAuth(session.user)
        UpdateUserData(session?.user)
        router.replace('/home')
        
      }else {
        setAuth(null)
        router.replace('/welcome')
      }
      
    })
  
    
  }, [])

  const UpdateUserData = async (user) => {
    let res = await getUserData(user?.id)
    if (res.success) setUserData(res.data)

    // console.log('got user data ', res);
    
  }
  
  return (
    <Stack 
    screenOptions={
        {headerShown: false }
    }
    />
  )
}

export default _layout

const styles = StyleSheet.create({})