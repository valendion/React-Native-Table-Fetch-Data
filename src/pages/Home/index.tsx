import {View, StatusBar, SafeAreaView} from 'react-native'
import React from 'react'
import TabelComponent from '../../component/TabelComponent'

const Home = () => {
   return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
         <StatusBar backgroundColor="black" barStyle="light-content" />
         <View>
            <TabelComponent />
         </View>
      </SafeAreaView>
   )
}

export default Home
