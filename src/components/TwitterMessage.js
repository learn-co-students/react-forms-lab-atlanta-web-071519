import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: this.props.maxChars
    };
  }

  // countBack = (e) => {
  //   e.persist()
  //   console.log(e)
  //   debugger;
  // }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
      maxChars: 140 - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message}
        onChange={this.handleChange}

        />
        <h1>
          How many characters remaining? {this.state.maxChars}
        </h1>
      </div>
    );
  }
}

export default TwitterMessage;
