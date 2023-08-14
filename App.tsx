import React from 'react'
import { Animated, SafeAreaView, StatusBar, View, useColorScheme } from 'react-native'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import useThemedStyles from './src/utils/useThemedStyles'
import Home from './src/pages/Home/Home'
import { LocationProvider } from './src/utils/useLocation'

const queryClient = new QueryClient()

function App() {
  const colorScheme = useColorScheme()
  const styles = useThemedStyles(({ themePallete }) => ({
    globalSafeArea: { flex: 1 },
    innerWrapper: { backgroundColor: themePallete.background, flex: 1 },
    offsetView: { paddingTop: StatusBar.currentHeight, flex: 1 },
  }))

  return (
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <SafeAreaView style={styles.globalSafeArea}>
          <Animated.View style={styles.innerWrapper}>
            <View style={styles.offsetView}>
              <Home />
            </View>
          </Animated.View>
        </SafeAreaView>
      </LocationProvider>
    </QueryClientProvider>
  )
}

export default App
