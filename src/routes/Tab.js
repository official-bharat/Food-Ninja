import React from "react";
import {View , Text ,StyleSheet ,TouchableOpacity ,Image} from 'react-native'

const Tab = ({color, tab , icon,onPress })=>{
    return(
       <TouchableOpacity onPress={onPress} style={{flexDirection:'row'}}>
          {icon && <Image style={{height:25,width:30}} source={icon}/>}
           <Text style={{color}}>{tab.name}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})
export default Tab;