import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './screens/Accueil';
import Formulaire from './screens/Formulaire';
import Afficher from './screens/Afficher';
import Gestion from './screens/Gestion';
const stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
    
<NavigationContainer>

         <stack.Navigator>
        
            <stack.Screen name='Afficher' component={Afficher}/>
            <stack.Screen name='Accueil' component={Accueil}/>
            <stack.Screen name='Formulaire' component={Formulaire}/>
            <stack.Screen name='Gestion' component={Gestion}/>
           
          </stack.Navigator>

        
 
  </NavigationContainer>
  
  <StatusBar style="auto" />
  
    </View>
    
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
