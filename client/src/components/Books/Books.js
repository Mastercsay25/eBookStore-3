import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const books = [
  {
    title: "Abc",
    totalQty: 0,
  },
  {
    title: "Abc",
    totalQty: 15,
  },
  {
    title: "Abc",
    totalQty: 15,
  },
  {
    title: "Abc",
    totalQty: 0,
  },
  {
    title: "Abc",
    totalQty: 15,
  },
  {
    title: "Abc",
    totalQty: 15,
  },
];

export default function Books() {
  useEffect(() => {
      cronJob();
  }, [])
  const classes = useStyles();
  const history = useHistory();

    console.log("called")

    const cronJob = () => {
      setTimeout(() => {
        fetch("/cron-job").then((res)=>{
              console.log(res)
              cronJob();
            })
      }, 60000)
    }

    // setTimeout(()=> {
    //   
    // }, 3000)

  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap style={{flexGrow:"1"}}>
            Book Store
          </Typography>
          <Button variant="contained" color='secondary' onClick={() => { history.push("/") }} >
              Logout
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {books.map((card, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    {card.totalQty === 0 ? (
                      <Typography gutterBottom variant="h5" component="h2" style={{color:"grey"}} >
                        Out Of Stock
                      </Typography>
                    ) : (
                      <Typography gutterBottom variant="h5" component="h2">
                        Total Quanity {card.totalQty}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
