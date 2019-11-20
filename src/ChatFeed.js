import React, { Component } from 'react';
import ChatComponent from './ChatComponent'

class ChatFeed extends Component {

    reverseArr = arr => {
        return arr.sort((a,b) => {
          return a < b ? 1 : -1
        })
      }
      

    render() { 
        // const {style} = this.state
        const { chatList } = this.props
        const revesedChatList = this.reverseArr(chatList)
        const mappedChats = revesedChatList.length > 0 ? chatList.map(chat =><ChatComponent chat={chat} />) : null
        return ( 
            <div className='chat-feed'>
                {mappedChats}
            </div>
         );
    }
}
 
export default ChatFeed;