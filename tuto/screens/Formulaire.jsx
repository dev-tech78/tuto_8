import { StyleSheet, Text, View , TextInput , TouchableOpacity  } from 'react-native'
import React , {useState} from 'react'
import { db } from '../config/firebase'
import { addDoc , collection } from "firebase/firestore"

export default function Formulaire() {

    const [oeuvre, setOeuvre] = useState({ text : "" , description : "" , image: "", auteur: "", dt_creation : ""})
    const [message , setMessage] = useState(false);

    function submit(){
        addDoc(collection(db, "oeuvres"), oeuvre )
            .then(function(){
                setMessage(true);
                setTimeout(function(){
                    setMessage(false);
                } , 1500)
                setOeuvre({ text : "" , description : "" , image: "", auteur: "", dt_creation : "" })
            })
    }
    

   function remplir( t , nom ){
    const cloneOeuvre = {...oeuvre};
    cloneOeuvre[nom] = t ;
    setOeuvre(cloneOeuvre)
   }
  return (
    <View style={styles.box}>
      <Text>Ajouter une oeuvre</Text>
      <TextInput placeholder='text' style={styles.input} onChangeText={function(texteSaisi){ remplir(texteSaisi , "text") }} value={oeuvre.text} />
      <TextInput placeholder='description' style={styles.input} 
        multiline={true} numberOfLines={5}
        value={oeuvre.description} onChangeText={function(textSaisi){ remplir(textSaisi , "description") }}
        />
        <TextInput 
        placeholder={'url image'} 
        style={styles.input} 
        onChangeText={function(textSaisie){  remplir(textSaisie , "image") }} 
        value={oeuvre.image}/>
          <TextInput placeholder='auteur' style={styles.input} onChangeText={function(texteSaisi){ remplir(texteSaisi , "auteur") }} value={oeuvre.auteur} />
          <TextInput placeholder='date' style={styles.input} onChangeText={function(texteSaisi){ remplir(texteSaisi , "date de creation") }} value={oeuvre.date} />
      <TouchableOpacity style={styles.boxBtn} onPress={submit}>
            <Text style={styles.btn}>ajouter</Text>
      </TouchableOpacity>
      {message && <View>
        <Text style={ styles.success }>Créer une nouvelle oeuvre</Text>
    </View>}
    </View>
  )
}
const styles = StyleSheet.create({
    success : { padding : 10 , backgroundColor : "green" , textAlign : "center", marginTop : 20  }, 
    box : { marginHorizontal : 20 },
    input : { borderColor : "black" , borderWidth : 1 , padding : 10 , marginBottom : 10 , borderRadius : 10 },
    boxBtn : { flexDirection : "row" , justifyContent : "center"},
    btn : { backgroundColor : "blue" , padding : 10 , width : "50%" , borderRadius : 10 , textAlign : "center" , fontSize : 22 }
})