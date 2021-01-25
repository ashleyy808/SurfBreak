import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
        //   alt="Contemplative Reptile"
        //   height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="SurfBreak"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome to Surf Break
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
