import React, { Component } from 'react';
import ChatFeed from './ChatFeed'
import ChatForm from './ChatForm'
// const startChat = [ {username: 'phil', chat_input: 'yo'}, {username: 'graceo', chat_input: 'sup'}, {username: 'phil', chat_input: 'saul goodman'}, {username: 'saul_goodman', chat_input: 'wtf?'}]

// const fetchChatUrl = 'http://localhost:3000/chats'
const fetchChatUrl = 'http://localhost:3000/chats'

class ChatContainer extends Component {
    state = { 
        chatList: []
    }

    fetchData = () => {
        fetch(fetchChatUrl).then(res => res.json())
        .then(chatList => this.setState({chatList}))
    }

    componentDidMount() {
        this.fetchData()
        // this.handleTimer()
    }

    handleTimer = () => {
        // countdown a couple seconds changing the set to pizza: true, card: false and back
        this.intervalID = setInterval(() => {
        //   clearInterval(this.intervalID)
            this.fetchData()
        }, 3000)
      }

    // componentDidUpdate(){
    //     this.fetchData()
    // }


    interval = () => {
        setInterval(() => {
            this.fetchData()
        }, 1000);
    }

    handleSubmit = (e, chatFormReponse) => {
        e.preventDefault()
        // this.setState({chatList: [...this.state.chatList, chatFormReponse]})
        fetch(fetchChatUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            },
            body: JSON.stringify(chatFormReponse)
        })
        .then(res => res.json())
        // .then(chat => this.setState({chatList: [chat, ...this.state.chatList]}))
        .then(chat => this.setState({chatList: [...this.state.chatList, chat]}))
    }
    render() {
        // console.log(this.state);
        const { chatList } = this.state
        return ( 
            <div className="chat-container">
                <ChatForm handleSubmit={this.handleSubmit}/>
                <ChatFeed chatList={chatList}/>
            </div>
         );
    }

}

export default ChatContainer;