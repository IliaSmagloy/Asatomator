import React from "react";



class HoverableComponent extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       text : this.props.text,
       seen_text: this.props.text,
       hidden_text: this.props.hidden_text,
     }
   }
   //set the text
   onMouseover (e) {
     this.setState({text : this.state.hidden_text})
   }
   //clear the text
   onMouseout (e) {
     this.setState({text : this.state.seen_text})
   }
   render () {
      return (
        <div
          style={{display:"inline"}}
          onMouseEnter={this.onMouseover.bind(this)}
          onMouseLeave={this.onMouseout.bind(this)}>{this.state.text}</div>
      )
   }
}

export default HoverableComponent;
