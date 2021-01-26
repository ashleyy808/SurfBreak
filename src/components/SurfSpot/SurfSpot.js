import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import './SurfSpot.css'; 


const SurfSpot = ({coordinates}) => {

const [tempData, setTempData] = useState({});

async function getAppData () {
const url =;
await fetch(url).then((response)=> response.json())
  .then((data)=> {
    console.log(data.data.weather[0])
    const weather = 
      { 
        maxTempF: data.data.weather[0].maxtempF,
        minTempF: data.data.weather[0].mintempF,
        waterTemp_F: data.data.weather[0].hourly[0].waterTemp_F,
        tide: data.data.weather[0].tides[0].tide_data[0].tideHeight_mt,
        tide_type: data.data.weather[0].tides[0].tide_data[0].tide_type,
        windspeedMiles: data.data.weather[0].hourly[0].windspeedMiles,
        WindChillF: data.data.weather[0].hourly[0].WindChillF,
        swellHeight_ft: data.data.weather[0].hourly[0].swellHeight_ft,
        swellDir: data.data.weather[0].hourly[0].swellDir,
        swellPeriod_secs: data.data.weather[0].hourly[0].swellPeriod_secs,
      } 
    setTempData(weather)
  });
}


 useEffect(()=>{
  getAppData();  
}, [coordinates]);

  const useStyles = makeStyles((theme)=>({
    card: {
        width: "60vw"
    }, 
    media: {
      height: 20,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },

}));
const classes = useStyles();
const [expanded, setExpanded] = useState(false);

const handleExpandClick = () => {
    setExpanded(!expanded);
};


  return(
    <Card className={classes.card}>
    <CardMedia
    className={classes.media}
    image={classes}
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
        Surf Spot Weather and Marine Conditions
    </Typography>
    <Grid container spacing={3}>
      <Grid item >
        <List dense>
        {Object.keys(tempData).map((item, index)=>{
          const line = item + ": " +tempData[item]
          if (index < 5) { return ( 
          <ListItem key={index}>
            <ListItemText
              primary={line}
            />
          </ListItem>)}}
        )}
      </List>
      </Grid>
      <Grid item >
      <List dense>
        {Object.keys(tempData).map((item, index)=>{
          const line = item + ": " +tempData[item]
          if (index >= 5) { return(
          <ListItem key={index}>
            <ListItemText
              primary={line}
            />
          </ListItem>)}}
        )}
      </List>
      </Grid>
      </Grid>
    </CardContent>
  <CardActions>
  <Typography variant="body2" color="textSecondary" component="p">
    Review
  </Typography>
  <IconButton aria-label="add to favorite surf spots">
          <FavoriteIcon />
  </IconButton>
    <IconButton
    className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
    })}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
    >
    <ExpandMoreIcon />
    </IconButton>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
            <ReviewForm/>
    </CardContent>
  </Collapse>
  </Card>
  )
}
export default SurfSpot;

// Review Form for Surf Spots
export const ReviewForm =({}) => {

  return (
    <div>
      <header className="header-footer">Write a Review</header>
      <form className="form-horizontal" 
      >
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Quality and Consistency"  name="qualityAndConsistency" 
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Difficulty Level" name="difficultyLevel" 
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Crowds"  name="crowds" 
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Comment"  name="Comment" 
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
}

