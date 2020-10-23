import React,{useState,useEffect} from 'react'
import {Content,List,ListItem,Text} from 'native-base'
import NewsItem from './NewsItem'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
function News({category,nav}) {

    const [News,setNews] = useState(null)
    const [isNews,setIsNews] = useState(false)

    useEffect(()=>{
        function fetchData(){
            fetch(`http://newsapi.org/v2/everything?q=${category}&from=2020-09-23&sortBy=publishedAt&apiKey=1122751e7d3349a89550e90c2166f707`)
            .then((request)=>request.json())
            .then((data)=>{
                setNews(data.articles)
                setIsNews(true)
                console.log(data)
            })
        }
        fetchData()
    },[])
    const handlePress = ()=>{
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed')
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
    }

    if(!isNews){
        return (
            <Text>Loading...</Text>
        )
    } 
    
    return (
        <Content>
            <ScrollView>
                <List>
                    {News.map((news,index)=>{
                        return(
                            <TouchableOpacity key={index} onPress={handlePress}>
                                <NewsItem item={news}/>
                            </TouchableOpacity>
                        )
                    })}
                </List>
            </ScrollView>
        </Content>
    )
}

export default News
