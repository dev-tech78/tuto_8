import { StyleSheet,  View , TextInput , Button } from 'react-native'
import React , {useState} from 'react'
import { db } from '../config/firebase'
import {doc , updateDoc } from "firebase/firestore"

export default function Gestion({item , setId, setUpdate}) {
    const [oeuvre , setOeuvre] = useState([])

    function remplirOeuvre ( valeurSaisie , nom){
        const cloneOeuvre = {...oeuvre};
        cloneOeuvre[nom] = valeurSaisie;
        setOeuvre(cloneOeuvre)
    }

    function submit( id ){
        updateDoc(doc(db , "oeuvre" , id), oeuvre)
            .then(function(){
              setOeuvre({})
                setId("")
                setUpdate(function(update){ return !update})
            })
    }
    return (
    <View>
        <TextInput 
            placeholder={'text oeuvre'} 
            style={styles.input} 
            onChangeText={function(textSaisie){ remplirOeuvre(textSaisie , "text") } }
            value={oeuvre.text}
            />
            <TextInput placeholder='description' style={styles.input} 
        multiline={true} numberOfLines={5}
        value={oeuvre.description} onChangeText={function(textSaisi){remplirOeuvre(textSaisi , "description") }}
        />
        <TextInput 
            placeholder={'url ouevre'} 
            style={styles.input} 
            onChangeText={function(textSaisie){ remplirOeuvre(textSaisie , "image") } }
            value={oeuvre.image}
            />
        <TextInput 
            placeholder={'auteur '} 
            style={styles.input}  
            onChangeText={function(textSaisie){ remplirOeuvre(textSaisie , "auteur") } }
            value={oeuvre.auteur}
            />
        <View>
            <Button title={'go'} onPress={function(){
                submit( oeuvre.id )
            }} color={'#A7EDE7'} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    input : { borderColor : "black" , borderWidth :1 , marginBottom : 20 , padding : 10 , borderRadius : 10 }
})