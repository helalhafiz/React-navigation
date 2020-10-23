import { Body, Left, Thumbnail ,Text, Right,Button, ListItem} from 'native-base'
import React from 'react'

function NewsItem({item}) {
    return (
        <>
        <ListItem thumbnail >
            <Left>
                <Thumbnail square source={{ uri: item.urlToImage }} />
              </Left>
              <Body>
                <Text numberOfLines={2}>{item.title}</Text>
                    <Text note numberOfLines={2}>{item.title}</Text>
              </Body>
              
              </ListItem>
        </>
    )
}

export default NewsItem
