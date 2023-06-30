import { StyleSheet, Text, View , FlatList, Image, Dimensions, ScrollView, Button} from 'react-native'
import React , {useState , useEffect} from 'react'
import { db } from '../config/firebase'
import {getDocs , collection, doc, deleteDoc } from "firebase/firestore"
import Gestion from './Gestion'
import Confirm from './Confirm'
export default function ListeArticle({update , setUpdate}) {

    const [oeuvre, setOeuvre] = useState([])
    const [id, setId] = useState("");
    useEffect( function(){
        getDocs(collection(db, "oeuvres"))
            .then(function(reponse){ 
                const resultat = reponse.docs.map(function(doc){
                  return {...doc.data(), id : doc.id }
                })
                setOeuvre(resultat)
            })
    } , [update])

    function supprimer( id ){
      deleteDoc(doc(db, "oeuvre", id))
          .then(function(){
              setUpdate(function(update){ return !update })
              alert("l'oeuvre a bien été supprimé de la bdd")
          })
  }

  return (
   
    <View style={{flex:1}}>
      <ScrollView>
      <Text>Liste des ouevres</Text>
      <FlatList 
        data={oeuvre}
        renderItem={function({item}){
            return <View>
               { item.id === id 
                ? 
                <Gestion item={item} setUpdate={setUpdate} setId={setId}/>
                :
              <View>
                <Text style={{fontSize : 25}}>{item.text}</Text>
                <Text>{item.description}</Text>
                <Image 
                        source={{ 
                            uri : item.image, 
                            width: 40 , 
                            height : 100 
                        }} 
                        fadeDuration={2000}
                        />
                         <Text>auteur : {item.auteur}</Text>
                         <View style={{ flexDirection : "row" }}>
                        <Button title={'Gestion'} onPress={function(){
                            setId(item.id)
                        }} color={'red'} />
                        <Button title={'supprimer'} onPress={function(){
                            Confirm(function(){ supprimer( item.id ) })  
                        }} color={'gray'} />
              
                    </View>
                 </View>  
        } 
            </View>
            
        }}
        keyExtractor={function(){ return Math.random().toString()}}
      />
      </ScrollView>
      
      
    </View>
  )
}

const styles = StyleSheet.create({})