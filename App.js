import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TailwindProvider, useTailwind } from "tailwind-rn";
import utilities from './tailwind.json'

async function processTailwindCSS() {
  const processedCss = await tailwind('flex-1 bg-cyan-300 items-center justify-center');
  return processedCss;
}

export default function App() {
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    processTailwindCSS().then((css) => {
      setStyle(css);
    });
  }, []);
  const tailwind = useTailwind();
  return (
    <TailwindProvider utilities={utilities}>
    <View style={style}>
      <StatusBar style="auto" />
      <View style={tailwind('w-80 h-80 bg-white rounded-xl')}>
        <View style={tailwind('items-center justify-center relative')}>
          <ImageBackground
            source={require("./assets/7.jpeg")}
            style={tailwind('h-44 w-72 rounded-xl absolute shadow-lg shadow-gray-500 p-3')}
            imageStyle={{ borderRadius: 15 }}
          >
            <View style={tailwind('flex-row justify-between')}>
              <Image
                source={require("./assets/chip.png")}
                style={tailwind('h-8 w-10 rounded-md')}
              />
              <Image
                source={require("./assets/discover.png")}
                style={tailwind('h-4 w-20')}
              />
            </View>
            <View style={tailwind('h-5')}></View>
            <View style={tailwind('h-10 w-full border-2 self-center border-white rounded-md flex justify-center items-center')}>
              <Text style={tailwind('text-lg font-bold text-white')}>
                1234-4678-9012-3456
              </Text>
            </View>
            <View style={tailwind('flex-1 flex-row justify-between items-end')}>
              <View>
                <Text style={tailwind('text-white text-sm')}>Card Holder</Text>
                <Text style={tailwind('text-white font-bold text-sm')}>
                  ALEXANDER THE GREAT
                </Text>
              </View>
              <View>
                <Text style={tailwind('text-white text-sm')}>Expires</Text>
                <Text style={tailwind('text-white font-bold text-sm')}>MM/YY</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <TextInput />
      </View>
    </View>
    </TailwindProvider>
  );
}
