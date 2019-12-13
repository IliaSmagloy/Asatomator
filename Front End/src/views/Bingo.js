import React from "react";
import {
  Container,
  Row,
  Col,
  CardBody,
  CardFooter,
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
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


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
      alignSelf: 'stretch',
      padding: "5px 5px"
    },


    textFieldChosen: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%",
      margin: "auto",
      textAlign: 'right',
      alignSelf: 'stretch',
      padding: "5px 5px",
      textDecorationLine: 'line-through',
    },


    title:
    {
      color: "LimeGreen",
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
    tableCellWin:{
      border: '2px solid #000',
      backgroundColor:"Gold !important",
      hoverBackGrounColor: "Grey",
      borderColor: "Black"
    },

    tableCell:{
      border: '2px solid #000',
      backgroundColor:"White",
      hoverBackGrounColor: "Grey",
      borderColor: "Black"
    },
    tableCellChosen:{
      border: '2px solid #000',
      backgroundColor:"Grey",
      hoverBackGrounColor: "Grey",
      borderColor: "Black"
    },

    button:{
      width:"100%",
      height:"100%",
      display: "inline-block"
    },
    paper_modal: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

});

function createData(a, b, c, d, e) {
  return { a, b, c, d, e };
}

const rows = [
  createData("מוסא אומר שהוא היה רכז רשויות",
              "קוסטה מגייס הון אנושי",
              "לינוי מבקשת לפרק את התשובה שלה למספר חלקים",
              "מישהו מזכיר את השיח בפייסבוק לטובה",
              "עידו חורג מזמנים לתשובה"
            ),
  createData("קוסטה ומוסא מוסיפים חניות בקמפוס",
      "קוסטה ומוסא מתבלבלים באקדמיה ותארים מתקדמים",
      "לינוי מזכירה שניהלה את המקמ",
      "מישהו מזכיר את דני מגנר",
      "נציג נראה עייף בצורה מוגזמת"
  ),
  createData("אף אחד לא מתייחס לכל מה שיש בישיבה ולא נוגע לבחירות נשיאות",
  "עידו ולינוי מדברים על הצבא",
  "יש סתירה בין שני הזוגות",
  "דן נראה לחוץ",
  "עידו ולינוי מדברים על הגנת הסטודנטים"
  ),
  createData("מישהו מזכיר את ועדת העומס",
  "מישהו מזכיר את אמיר גרטי",
  "מישהו חושב שהוא מציל את משרד פרסום",
  "לינוי ועידו מתבלבלים בקמפוס או תרבות",
  "קוסטה מזכיר חוזה"
  ),
  createData("מוסא מצטט שיחה של עובד אסט לדוגמה",
    "הבחירות מסתיימות באיחור",
    "מישהו מזכיר את השיח בפייסבוק לרעה",
    "עידו מזכיר שהיה יו\"ר ועדת בחירות",
    "מישהו מזכיר את עומר עמית"
  )
];

class Bingo extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      bingo: [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
      ],
      win_row:-1,
      win_col:-1,
      win_diag:-1,
      win:false,
      modal_open:false,
    }
    this.checkWin = this.checkWin.bind(this)
    this.handleDeleteModalClose = this.handleDeleteModalClose.bind(this);
    this.setDeleteModalChange = this.setDeleteModalChange.bind(this)
    this.handleDeleteModalOpen = this.handleDeleteModalOpen.bind(this)

  }
  setDeleteModalChange(value)
  {
    this.setState({modal_open: value})
  }

  handleDeleteModalOpen = () => {
    this.setDeleteModalChange(true);
  };

  handleDeleteModalClose = () => {
    this.setDeleteModalChange(false);
  };

  checkWin()
  {
    var col = 0;
    var row=0;
    for(col=0; col<5; col++)
    {
      var true_in_a_row=true;
      for(row=0;row<5;row++)
      {
        if (this.state.bingo[row][col]==0)
        {
          true_in_a_row=false;
        }
      }
      if(true_in_a_row)
      {
        this.setState({win_col:col});
        this.setState({win:true});
        this.setState({modal_open:true});
      }
    }
    for(row=0; row<5; row++)
    {
      var true_in_a_row=true;
      for(col=0;col<5;col++)
      {
        if (this.state.bingo[row][col]==0)
        {
          true_in_a_row=false;
        }
      }
      if(true_in_a_row)
      {
        this.setState({win_row:row});
        this.setState({win:true});
        this.setState({modal_open:true});
      }
    }
    var index = 0;
    var true_diag = true;
    var true_other_diag = true;
    for (index = 0 ;index<5; index++)
    {
      if(this.state.bingo[index][index]==0)
      {
        true_diag=false;
      }
      if(this.state.bingo[index][4-index]==0)
      {
        true_other_diag=false;
      }
    }
    if(true_diag)
    {
      this.setState({win_diag:0});
      this.setState({win:true});
      this.setState({modal_open:true});
    }
    if(true_other_diag)
    {
      this.setState({win_diag:1});
      this.setState({win:true});
      this.setState({modal_open:true});
    }

    console.log("CheckWin");
    console.log(this.state);


  }

  render(){
    const classes = this.props.classes;
    return(
      <div dir="rtl">
      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={this.state.modal_open}
          onClose={this.handleDeleteModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.modal_open}>
            <div className={classes.paper_modal}>
              <h3 style={{"text-align":"center"}}>ברכותי! זכית! צוות בדימוס@אסט מודה לך על ההשתתפות<br/> ומבקש שתתרכז בבחירות, הן מכריעות את עתיד האגודה</h3>
            </div>
          </Fade>
        </Modal>
        <Card className={classes.card}>
          <CardHeader
            classes={{
              title: classes.title,
            }}
            title={"בינגו בחירות! סמנו מה ששמתם לב אליו והתחרו עם חבריכם!"}
          />
          <CardContent>
            <Table>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow>
                    <TableCell padding="checkbox"
                    className={

                      clsx([classes.tableCell],
                          {
                            [ classes.tableCellChosen]:
                            this.state.bingo[idx][0]==1,
                            [ classes.tableCellWin]:
                            this.state.win_row==idx || this.state.win_col==0
                            || (this.state.win_diag==0 && idx==0) || (this.state.win_diag==1 && idx==4),
                          },)
                    }>
                      <Button
                      disabled={this.state.win}
                      className={classes.button}
                      onClick={()=>
                        {
                          var newbingo = this.state.bingo;
                          newbingo[idx][0]=1-newbingo[idx][0];
                          this.setState({bingo:newbingo});
                          this.checkWin();
                        }
                        }
                      >
                        <Typography
                          className={
                            clsx([classes.textField],
                                {
                                  [ classes.textFieldChosen]:
                                  this.state.bingo[idx][0]==1,
                                },)
                          }>
                          {row["a"]}
                        </Typography>
                      </Button>
                    </TableCell>
                    <TableCell padding="checkbox"
                    className={

                      clsx([classes.tableCell],
                          {
                            [ classes.tableCellChosen]:
                            this.state.bingo[idx][1]==1,
                            [ classes.tableCellWin]:
                            this.state.win_row==idx || this.state.win_col==1
                            || (this.state.win_diag==0 && idx==1) || (this.state.win_diag==1 && idx==3),
                          },)
                    }>
                      <Button
                      disabled={this.state.win}
                      className={classes.button}
                      onClick={()=>
                        {
                          var newbingo = this.state.bingo;
                          newbingo[idx][1]=1-newbingo[idx][1];
                          this.setState({bingo:newbingo});
                          this.checkWin();
                        }
                        }>
                        <Typography
                        className={
                          clsx([classes.textField],
                              {
                                [ classes.textFieldChosen]:
                                this.state.bingo[idx][1]==1,
                              },)
                        }
                        >
                          {row["b"]}
                        </Typography>
                      </Button>
                    </TableCell>
                    <TableCell padding="checkbox"
                    className={

                      clsx([classes.tableCell],
                          {
                            [ classes.tableCellChosen]:
                            this.state.bingo[idx][2]==1,
                            [ classes.tableCellWin]:
                            this.state.win_row==idx || this.state.win_col==2
                            || (this.state.win_diag==0 && idx==2) || (this.state.win_diag==1 && idx==2),

                          },)
                    }>
                      <Button
                      disabled={this.state.win}
                      className={classes.button}
                      onClick={()=>
                        {
                          var newbingo = this.state.bingo;
                          newbingo[idx][2]=1-newbingo[idx][2];
                          this.setState({bingo:newbingo});
                          this.checkWin();
                        }
                        }>
                        <Typography
                        className={
                          clsx([classes.textField],
                              {
                                [ classes.textFieldChosen]:
                                this.state.bingo[idx][2]==1,
                              },)
                        }
                        >

                          {row["c"]}
                        </Typography>
                      </Button>
                    </TableCell>
                    <TableCell padding="checkbox"
                    className={

                      clsx([classes.tableCell],
                          {
                            [ classes.tableCellChosen]:
                            this.state.bingo[idx][3]==1,
                            [ classes.tableCellWin]:
                            this.state.win_row==idx || this.state.win_col==3
                            || (this.state.win_diag==0 && idx==3) || (this.state.win_diag==1 && idx==1),

                          },)
                    }>
                      <Button
                      disabled={this.state.win}
                      className={classes.button}
                      onClick={()=>
                        {
                          var newbingo = this.state.bingo;
                          newbingo[idx][3]=1-newbingo[idx][3];
                          this.setState({bingo:newbingo});
                          this.checkWin();
                        }
                        }>
                        <Typography
                        className={
                          clsx([classes.textField],
                              {
                                [ classes.textFieldChosen]:
                                this.state.bingo[idx][3]==1,
                              },)
                        }
                        >

                          {row["d"]}
                        </Typography>
                      </Button>
                    </TableCell>
                    <TableCell padding="checkbox"
                    className={

                      clsx([classes.tableCell],
                          {
                            [ classes.tableCellChosen]:
                            this.state.bingo[idx][4]==1,
                            [ classes.tableCellWin]:
                            this.state.win_row==idx || this.state.win_col==4
                            || (this.state.win_diag==0 && idx==4) || (this.state.win_diag==1 && idx==0),


                          },)
                    }>
                      <Button
                      disabled={this.state.win}
                      className={classes.button}
                      onClick={()=>
                        {
                          var newbingo = this.state.bingo;
                          newbingo[idx][4]=1-newbingo[idx][4];
                          this.setState({bingo:newbingo});
                          this.checkWin();
                        }
                        }>
                        <Typography
                        className={
                          clsx([classes.textField],
                              {
                                [ classes.textFieldChosen]:
                                this.state.bingo[idx][4]==1,
                              },)
                        }
                        >

                          {row["e"]}
                        </Typography>
                      </Button>
                    </TableCell>
                  </TableRow>
                  ))
                }

              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    )
  }

}

Bingo.propTypes = {
  classes:PropTypes.object.isRequired,
};


export default withStyles(styles)(Bingo);
