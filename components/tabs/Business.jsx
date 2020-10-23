import React from 'react'
import {Text} from 'react-native'
import News from '../News'
function Business(nav) {
    return (
        <>
            <News category='business' nav={nav}/>
        </>
    )
}

export default Business
