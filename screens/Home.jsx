import React from 'react'
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import {Text,View,Button} from 'react-native'
import Programming from '../components/tabs/Programming'
import Business from '../components/tabs/Business'
import Sports from '../components/tabs/Sports'

function Home({navigation}) {
    return (
        <Container>
            <Button
                title='Click'
                onPress={() => navigation.navigate('About')}
            />
            <Tabs>
            <Tab heading="Technology">
                <Programming nav={navigation}/>
            </Tab>
            <Tab heading="Business" nav={navigation}>
                <Business />
            </Tab>
            <Tab heading="Sports">
                <Sports nav={navigation}/>
            </Tab>
            </Tabs>
      </Container>
    )
}

export default Home
