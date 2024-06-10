import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 bg-cyan-300 items-center justify-center'>
      <StatusBar style="auto" />
      <View className='w-80 h-80 bg-white rounded-xl'>
        <View className='items-center justify-center relative'>
          <View className='h-44 w-72 rounded-xl absolute shadow-lg shadow-gray-400'>
          <Image source={require('./assets/7.jpeg')} className='h-full w-full rounded-xl'/>
          </View>
          
        </View>
      </View>
    </View>
  );
}

 
