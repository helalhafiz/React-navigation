import React from 'react'
import {Text} from 'react-native'
import News from '../News'
function Sports(nav) {
    return (
        <>
            <News category='sports' nav={nav}/>
        </>
    )
}

export default Sports