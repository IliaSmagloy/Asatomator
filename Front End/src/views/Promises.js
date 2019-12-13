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

class Promises extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    const classes = this.props.classes;
    return(
      <div dir="rtl">
        <Card className={classes.card}>
          <CardHeader
            classes={{
              title: classes.title,
            }}
            title={"מצעי המתמודדים ודרכי התקשרות" }
          />
          <CardContent>
            <Typography className={classes.textField}>
              ממליצים לכולם לגשת ולקרוא את מצעי המתמודדים, לשאול אותם כמה שיותר שאלות ולבוא להשפיע ביום הבחירות!
              <br />
              קבוצה רלוונטית לשאלות ישירות עם המתמודדים:
              <br />
              <a className="ml-auto" href="https://bit.ly/2EbgpfC">
                בחירות אסט 2020 - שיח בלתי אמצעי עם המתמודדים
              </a>
              <br />
              <br />
              <br />
              <a className="ml-auto" href="https://bit.ly/2PE7pFa">
              קבוצה רלוונטית למחאה המוצדקת ביותר שאי פעם הייתה בטכניון:
              </a>
              <br />
              <br />

              מידע לגבי מוסא וקוסטה:
              <br />
              <a className="ml-auto" href="https://tinyurl.com/uyzbw4m">
                לפוסט ההתמודדות
              </a>
              <br />
              <a className="ml-auto" href="https://bit.ly/2Pe75Od">
                למצע
              </a>
              <br />
              <br />

              מידע לגבי לינוי ועידו
              <br />
              <a className="ml-auto" href="https://tinyurl.com/r2tv4yo">
                לפוסט ההתמודדות
              </a>
              <br />
              <a className="ml-auto" href="https://bit.ly/34bQKxX">
                למצע
              </a>

            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Promises.propTypes = {
  classes:PropTypes.object.isRequired,
};


export default withStyles(styles)(Promises);
