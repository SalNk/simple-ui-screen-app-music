import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/solid'
import GradientButton from '../components/gradientButton';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
    return (

        <View style={{ height: height + 50, width: width }}>
            <SafeAreaView>
                <StatusBar style='light' />
            </SafeAreaView>


            <ImageBackground
                source={require('../assets/images/cover.jpg')}
                resizeMode="cover"
            >
                <LinearGradient
                    colors={['transparent', 'black']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={{ height: height + 50, paddingVertical: 50, paddingHorizontal: 20 }}
                >
                    <View style={styles.containerTexts}>
                        <TouchableOpacity>
                            <XMarkIcon size={20} color='gray' />
                        </TouchableOpacity>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.advantageBloc}>
                                <Text style={styles.headTitle}>Musique illimitée</Text>
                                <Text style={styles.text}>
                                    Supprime les publicités | Fondu enchaîné | Lecteurs premium | Thèmes illimités
                                </Text>
                                <View>
                                    <Text style={styles.text}>Profitez de 3 jours d'essai gratuit</Text>
                                    <Text style={styles.text}>Puis 5,99 $ par semaine</Text>
                                </View>
                            </View>
                            <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginVertical: 20 }}>
                                <GradientButton title="Commencer l'essai gratuit" />
                            </View>
                            <Text style={styles.smallText}>Renouvellement automatique. Annulez à tout moment</Text>
                            <View>
                                <Text style={styles.text}>Conditions    |    Confidentialité    |    Restaurer</Text>
                            </View>
                        </View>
                    </View>

                </LinearGradient>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    containerTexts: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1
    },
    headTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'regular',
    },
    smallText: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 15, fontSize: 12,
        fontWeight: 'thin'
    },
    advantageBloc: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})