import { StyleSheet, Text, View,  TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback, Dimensions, Image, ImageBackground,  } from 'react-native'
    import Feather from "react-native-vector-icons/Feather"
  import Foundation from "react-native-vector-icons/Foundation"
  import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
  
  import React from 'react'
  
  export default function Afficher({navigation}) {
  
    return (
      <View style={styles.container}>
       
       
        <Text style={styles.titre}> Musée  </Text>
       
        <View>
          
       
            <TouchableOpacity onPress={() => navigation.navigate("Accueil")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Accueil</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Formulaire")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Formulaire</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Gestion")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}> Gestion</Text>
            </View>
          </TouchableOpacity>
          
         
            
          </View>
          <View style={styles.boutons}>
          <View style={styles.btn1}>
              
              <Text style={styles.titre}>Connextion</Text>
          </View>
         
        </View>
         
      </View>
    )
  }
  
  const styles = StyleSheet.create({
  
   
    container: {
      paddingTop: 80,
      alignItems: 'center',
     
      flex: -2
    },
    boutons: {
      flex : 3 , 
    
      flexDirection : "row",
      flexWrap : "wrap", 
      justifyContent: "space-between",
      padding : 30, 
   
      
  }, 
  btn1 : {
      /* width : "49%", */
      width : 355,
      backgroundColor : "green" ,
      height : "49%" ,
      marginBottom : 5,
  
  },
    button: {
      marginBottom: 36,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3',
      
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white',
    },
    titre : { fontSize : 30 },
   
   
    
  })