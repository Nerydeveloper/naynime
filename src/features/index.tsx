import { Dimensions, Image, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AppIntroSlider from "react-native-app-intro-slider";
import { useEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, KoHo_700Bold,KoHo_400Regular } from '@expo-google-fonts/koho'
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const slides = [
    {
        id: 1,
        image: require('../assets/images/intro/image01.jpg')
    }, {
        id: 2,
        image: require('../assets/images/intro/image02.jpg')
    }, {
        id: 3,
        image: require('../assets/images/intro/image03.jpg')
    },
]

type RootStackParamList = {
    Inicio: undefined;
    Home: undefined;
  };


  type Props = NativeStackScreenProps<RootStackParamList, 'Inicio'>;


function IndexScreen({ navigation }: Props) {
    const { width, height } = Dimensions.get('screen');
    const [showHomePage, setShowHomePage] = useState(false);
    const [loaded, error] = useFonts({
        KoHo_700Bold,
        KoHo_400Regular
    });


    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    if (!showHomePage) {
        return (
            <AppIntroSlider
                data={slides}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1, alignItems:'center' }}>
                            <Image source={item.image} style={{ width: width, height: 568, }} />
                            <Text style={{color:'#ffffff',zIndex:2,fontSize:48,fontFamily:'KoHo_400Regular',textTransform:'uppercase'}}>Naynime</Text>
                            <LinearGradient
                                // Background Linear Gradient
                                colors={['transparent', 'rgba(0, 210, 255, 0.9)', '#00D2FF']} end={{ x: 0.5, y: 1 }}
                                style={styles.background}
                                
                                
                            />

                        </View>



                    )
                }}
                onDone={() => {
                    navigation.navigate('Home')
                }}
            />
        )
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'KoHo_700Bold', fontSize: 48 }}>Home Screen</Text>
        </View>
    )

}

export default IndexScreen;
