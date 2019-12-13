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

    boxQuestion:{
      fontSize:20,
    },
    title:
    {
      fontSize: 40,
      textAlign: 'center',
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

class Frequent extends React.Component{

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
            title={"שאלות נפוצות"}
          />
          <CardContent>
            <Typography className={classes.textField}>
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                 האם האתר הזה נוצר בתור ניסיון להגחיך את הבחירות לנשיאות האגודה ו/או המועמדים לנשיאות?
              </Box>
              לא! אנחנו לא נשקר - אנחנו סאטירה לבחירות לנשיאות, אבל המטרה בפרסום האתר היא להגביר את השיחה על הבחירות לנשיאות ולחשוף אותה לעוד אנשים.
              <br />
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                האם המצב כזה גרוע?
              </Box>
              לא, באגודה עוד לא הגענו לבחירות שלישיות
              <br />
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                מה עמדתכם בנושא הבחירות לנשיאות?
              </Box>
              חלקנו תומכים בזוג האחד וחלקנו בשני, חלקנו תומכים בהצבעה ריקה. האתר לא נבנה בצורה חד צדדית
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                 אני צריך עזרה עם
                 ה
                 <a className="ml-auto" href="http://www.store.asat.org.il/" style={{ color: "inherit" } }>
                    רכישה שלי
                 </a>
              </Box>
              מה?
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                 מי אתם?
              </Box>
              אנחנו תא הדימוסים באסט
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                 למי אתם ממליצים להצביע?
              </Box>
              באמא שלכם, צירפנו את המצעים של המתמודדים ואת הדייביט. שבו על זה, תקראו, תראו, תשכילו, ותצביעו כמו שצריך לזוג שלדעתכם ראוי יותר.
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                 האם זיו ואיליה באמת מתמודדים לנשיאות?
              </Box>
              לא (?)
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                האם איתי ושקד באמת מתמודדים לנשיאות?
              </Box>
              לא (?)
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                הגעתי לפה בטעות איך קונים כרטיסים למסיבה?
              </Box>
              זה לא אנחנו דבר עם אס"ט
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                עץ אשוח?
              </Box>
              לא יודע, אולי. נעדכן.
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                אחי אפשר רפרנס לביולוגיה?
              </Box>
              אני מעדיף שלא, הם ממש בודקים בסמסטר הזה
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                למה קוראים לך בחירוטומטור?
              </Box>
              כי זה עושה את הבחירות אוטומטית והיה לנו רעיון ללוגו עם העגבניה - ראיתם שזה לוגו אסט שם?
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                האם אתם קשורים לאסט?
              </Box>
              כולנו עבדנו או עדיין עובדים באגודה, אבל הדבר הזה לא שייך לאף גורם אגודתי והוא מיזם פרטי
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                איך ניתן ליצור איתכם קשר כדי להציב פרסומות באתר?
              </Box>
              אנחנו נמצאים כל יום בין 12:00-12:05 ליד הזין של אולמן ומתרשמים מהיצירה, תגיעו לשם
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                מה לדעתכם צריך להיות הדבר הראשון שהמועמדים יעשו אם יבחרו?
              </Box>
              ריבר בבית הסטודנט
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                בורקס?
              </Box>
              בורקס
              <br />
              <Box fontWeight="fontWeightBold" textAlign="right" fontSize="30" className={classes.boxQuestion}>
                רוני?
              </Box>
              זייצב
              <br />



            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Frequent.propTypes = {
  classes:PropTypes.object.isRequired,
};


export default withStyles(styles)(Frequent);
