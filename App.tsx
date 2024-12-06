import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppLayout from './src/module/applayout'

const App = () => {
  return (
    <SafeAreaProvider>
      <AppLayout />
    </SafeAreaProvider>
  )
}

export default App
