import React, { Component } from "react"

class ChatForm extends Component {
  state = {
    username: "",
    chat_input: ""
  }

  handleChange = e => {
    const inputValue = e.target.value
    const name = e.target.name
    this.setState({ [name]: inputValue })
  }
  render() {
    const { handleSubmit } = this.props
    // const { chat_input, username } = this.state
    // console.log(this.state);

    return (
      <form onSubmit={event => handleSubmit(event, this.state)}>
        <input
          type="text"
          onChange={this.handleChange}
          name="username"
          placeholder="username"
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="chat_input"
          placeholder="text"
        />
        <input type="submit" value="Send" />
      </form>
    )
  }
}

export default ChatForm
