import React from "react";
import {
  Container,
  Row,
  Col,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Delete from '@material-ui/icons/Delete';
import SpeakerImage from "../components/common/SpeakerImage";

const axios = require('axios');

const styles = theme => ({
  card: {
    maxWidth: 500,
    margin: 'auto ',
  },

  button:{
    width:"100%",
    marginTop: '28px ',
    marginBottom: '28px ',
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%",
    margin: "auto",
    textAlign: 'right',
    alignSelf: 'stretch'
  },
  title:
  {
    textAlign: 'right',
    alignSelf: 'stretch',
  },
  chooseSpeaker:
  {
    textAlign: 'right',
    alignSelf: 'stretch',
    marginRight: "1em",
    marginTop: "1em",
    marginTop: "1em",
  },
  cardContent: {
    margin:"auto"
  },

  speakerChoice: {
    margin:"auto",
  },

  image: {
    textAlign:"center"
  },

});



class AnswerGenerator extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      current_text: "",
      answer_text: "",
      speaker: "mosa",
      answer_generated: false,
      button_pushed: false,
      button_again_pushed:false,
    };


    this.setText = this.setText.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.setSpeaker = this.setSpeaker.bind(this)
    this.handleSpeakerChange = this.handleSpeakerChange.bind(this)
    this.setAnswerGenerated = this.setAnswerGenerated.bind(this)
    this.handleAnswerGeneratedChange = this.handleAnswerGeneratedChange.bind(this)

    this.submit = this.submit.bind(this)
    this.again = this.again.bind(this)

  }

  setText(value)
  {
    this.setState({current_text: value});
  }
  handleTextChange(evnt)
  {
    this.setText(evnt.target.value);
  }
  setSpeaker(value)
  {
    this.setState({speaker: value});
  }
  handleSpeakerChange(evnt)
  {
    this.setSpeaker(evnt.target.value);
  }
  setAnswerGenerated(value)
  {
    this.setState({answer_generated: value});
  }
  handleAnswerGeneratedChange(evnt)
  {
    console.log(evnt.target.value);
    this.setAnswerGenerated(evnt.target.value);
  }

  submit(event){
    event.preventDefault();
    this.setState({button_pushed:true});
    var get_string = "";
    get_string+=`http://localhost:8080/genAnswer?`;
    get_string+="subject="+this.state.current_text;
    get_string+="&speaker="+this.state.speaker;
    var encoded_get_string=encodeURI(get_string);
    var self =this;
    axios.get(encoded_get_string)
    .then(
      function(response)
        {
          self.setState({answer_text:response.data});
          self.setAnswerGenerated(true);

          self.setState({button_pushed:false});
        }
    )
    .catch(
      function(error)
        {
          console.log("Error in submitForm in AnswerGenerator", error);
          self.setState({button_pushed:false});
        }
    )

  }

  again()
  {
    this.setState({
      button_again_pushed:true,
      button_pushed:false,
      current_text:"",
      answer_text:"",
      answer_generated:false,
    });
  }

  render()
  {
    const classes = this.props.classes;
    var images =
    [
      require("../images/moussa_smile.png"),
      require("../images/moussa.png"),
      require("../images/linoy_b_smile.png"),
      require("../images/linoy_b.png"),
      require("../images/ido_smile.png"),
      require("../images/ido.png"),
      require("../images/costa_smile.png"),
      require("../images/costa.png"),
    ];
    var gifs =
    [
      require("../images/moussa.gif"),
      require("../images/linoy.gif"),
      require("../images/ido.gif"),
      require("../images/costa.gif"),
    ];

    return(
      <div dir="rtl">
        { !this.state.answer_generated &&
          <Card className={classes.card}>
            <CardHeader
              classes={{
                title: classes.title,
              }}
              title={"הכנס נושא עליו תרצה לשמוע את דעתו של המתמודד!" }
            />
            <CardContent className={classes.cardContent}>
              <form className={classes.container}
              action="#"
              onSubmit={this.submit}>
                <Row>
                  <TextField
                    required
                    id="standard-required"
                    type="text"
                    onChange={this.handleTextChange}
                    value={this.state.current_text}
                    className={classes.textField}
                    placeholder="לדוגמא: שימור ידע, שיער של זיו, או ועדת העומס"
                    margin="normal"
                    align="right"
                  />
                </Row>
                <Row>
                  <Typography className={classes.chooseSpeaker}>
                    בחר את המתמודד אותו תרצה לשאול!
                  </Typography>
                  <RadioGroup
                  className={classes.speakerChoice}
                  aria-label="speaker"
                  name="speaker"
                  value={this.state.speaker}
                  defaultValue="mosa"
                  onChange={this.handleSpeakerChange} row>
                    <div>
                      <div className={classes.image}>
                      {this.state.speaker=="mosa" &&
                          <img
                            id="mosa-image"
                            className="d-inline-block align-top mr-1"
                            style={{ maxWidth: "50px" }}
                            src={images[0]}
                            alt="mosa"
                          />
                      }
                      { this.state.speaker!="mosa" &&
                          <img
                            id="mosa-image"
                            className="d-inline-block align-top mr-1"
                            style={{ maxWidth: "50px" }}
                            src={images[1]}
                            alt="mosa"
                          />
                      }
                    </div>

                      <FormControlLabel
                        value="mosa"
                        control={<Radio color="primary" />}
                        label="מוסא"
                        labelPlacement="top"
                      />
                    </div>
                    <div>
                      <div className={classes.image}>
                        {this.state.speaker=="linoy" &&
                            <img
                              id="linoy-image"
                              className="d-inline-block align-top mr-1"
                              style={{ maxWidth: "50px" }}
                              src={images[2]}
                              alt="linoy"
                            />
                        }
                        { this.state.speaker!="linoy" &&
                            <img
                              id="mosa-image"
                              className="d-inline-block align-top mr-1"
                              style={{ maxWidth: "50px" }}
                              src={images[3]}
                              alt="linoy"
                            />
                        }
                      </div>

                      <FormControlLabel
                        value="linoy"
                        control={<Radio color="primary" />}
                        label="לינוי"
                        labelPlacement="top"
                      />
                    </div>
                    <div>
                      <div className={classes.image}>
                        {this.state.speaker=="ido" &&
                            <img
                              id="ido-image"
                              className="d-inline-block align-top mr-1"
                              style={{ maxWidth: "50px" }}
                              src={images[4]}
                              alt="ido"
                            />
                        }
                        { this.state.speaker!="ido" &&
                            <img
                              id="ido-image"
                              className="d-inline-block align-top mr-1"
                              style={{ maxWidth: "50px" }}
                              src={images[5]}
                              alt="ido"
                            />
                        }
                      </div>
                      <FormControlLabel
                        value="ido"
                        control={<Radio color="primary" />}
                        label="עידו"
                        labelPlacement="top"
                      />
                    </div>
                    <div>
                      <div className={classes.image}>
                        {this.state.speaker=="kosta" &&
                            <img
                              id="kosta-image"
                              className="d-inline-block align-top mr-1"
                              style={{ maxWidth: "50px" }}
                              src={images[6]}
                              alt="kosta"
                            />
                        }
                        { this.state.speaker!="kosta" &&
                            <img
                              id="kosta-image"
                              className="d-inline-block align-top mr-1"
                              style={{ maxWidth: "50px" }}
                              src={images[7]}
                              alt="kosta"
                            />
                        }
                      </div>
                      <FormControlLabel
                        value="kosta"
                        control={<Radio color="primary" />}
                        icon={<Delete />}
                        label="קוסטה"
                        labelPlacement="top"
                      />
                    </div>
                  </RadioGroup>
                </Row>
                <Row>
                  <Button
                  disabled={this.state.button_pushed}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="submit"
                  >
                    שאל את המתמודד על הנושא!
                  </Button>
                </Row>
              </form>
            </CardContent>
          </Card>}

        { this.state.answer_generated &&

          <Card className={classes.card}>
            <CardContent>
              {this.state.speaker=="mosa" &&
                <div className={classes.image}>
                  <img
                    id="mosa-image"
                    className="d-inline-block align-top mr-1"
                    style={{ maxWidth: "150px" }}
                    src={gifs[0]}
                    alt="mosa"
                  />
                </div>
              }
              {this.state.speaker=="linoy" &&
                <div className={classes.image}>
                  <img
                    id="mosa-image"
                    className="d-inline-block align-top mr-1"
                    style={{ maxWidth: "150px" }}
                    src={gifs[1]}
                    alt="linoy"
                  />
                </div>
              }
              {this.state.speaker=="ido" &&
                <div className={classes.image}>
                  <img
                    id="mosa-image"
                    className="d-inline-block align-top mr-1"
                    style={{ maxWidth: "150px" }}
                    src={gifs[2]}
                    alt="ido"
                  />
                </div>
              }
              {this.state.speaker=="kosta" &&
                <div className={classes.image}>
                  <img
                    id="mosa-image"
                    className="d-inline-block align-top mr-1"
                    style={{ maxWidth: "150px" }}
                    src={gifs[3]}
                    alt="kosta"
                  />
                </div>
              }
              <Typography className={classes.textField}>
                {"\""+this.state.answer_text + "\""}
              </Typography>
              <Button
              disabled={this.state.button_again_pushed}
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={this.again}
              >
                שאל עוד שאלה!
              </Button>
            </CardContent>
          </Card>
        }

      </div>
    );
  }
}

AnswerGenerator.propTypes = {
  classes:PropTypes.object.isRequired,
};


export default withStyles(styles)(AnswerGenerator);
