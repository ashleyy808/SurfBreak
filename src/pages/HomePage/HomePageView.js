import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from '../../img/louis-hansel-shotsoflouis-93C4ZkOB-3I-unsplash.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    card: {
      width: "40vw",
      // align:"center"
  }, 
  media: {
    height: 100,
  },
 
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card align="center"  className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}
          component="img"
          image={logo}
          height="440"
          title="SurfBreak"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome to Surf Break
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
          Welcome to Surf Break! This app allows users to see general weather information
          along with  current tide, wind, and swell conditions about various surf spots worth checking out. 
          Users can review spots to fill in any information about the beach not provided in the database, and can also like their surf sessions, allowing them to go back and remember past surfs.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
