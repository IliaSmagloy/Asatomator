import React from "react";

class SpeakerImage extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    var smile = "";
    if (this.props.smile)
    {
      smile="_smile";
    }
    return (
      <div>
        <img
          id="mousa-image"
          className="d-inline-block align-top mr-1"
          style={{ maxWidth: "50px" }}
          src={require("../../images/" + this.props.name + smile+ ".png")}
          alt="Mousa"
        />
      </div>
    )
  }
}

export default SpeakerImage;
