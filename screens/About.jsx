import React from 'react'
import {Text,Button} from 'react-native'

function About({navigation}) {
    
    return (
        <>
            <Text>About Screen</Text>
            
            <Button 
                title='Go Back'
                onPress={()=> navigation.goBack()}
            />
        </>
    )
}

export default About
