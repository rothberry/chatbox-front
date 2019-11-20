import React, { Component } from "react";

class ChatComponent extends Component {
  state = {
    style: {
      textAlign: "left"
    }
  };
  render() {
    const { style } = this.state;
    const { chat } = this.props
    return (
      <div style={style} className="chat-component">
        <li>{chat.username}: {chat.chat_input}</li>
      </div>
    );
  }
}

export default ChatComponent;
