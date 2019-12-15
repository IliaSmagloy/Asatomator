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
import YouTube from 'react-youtube';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    card: {
      maxWidth: 700,
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
      color: "#38b342",
      fontSize: 40,
      textAlign: 'center',
      alignSelf: 'stretch',
    },
    boxQuestion:{
      fontSize:20,
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
      margin:"auto",
    },

    speakerChoice: {
      margin:"auto",
    },

    image: {
      marginTop: "5%",
      textAlign:"center"
    },
});

class Debate extends React.Component {
  constructor(props){
    super(props);
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render(){
    const classes = this.props.classes;
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div dir="rtl">
        <Card className={classes.card}>
          <CardHeader
            classes={{
              title: classes.title,
            }}
            title={"צפו בעימות הבחירות עליו בוססו חלקים ניכרים מאתר זה!" }
          />
          <CardContent>
            <Typography className={classes.textField}>
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                 תודה רבה לאליאס בשאארת על צילום ועריכה של העימות באיכות נהדרת.
              </Box>
            </Typography>
            <div className={classes.image}>
              <YouTube
              videoId="yHVjcN4cQjw"
              opts={opts}
              onReady={this._onReady}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Debate.propTypes = {
  classes:PropTypes.object.isRequired,
};


export default withStyles(styles)(Debate);
