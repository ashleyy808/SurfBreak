import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';


const SurfSpot = ({coordinates}) => {
  useEffect(()=>{
    //api call to grab the beach info
    //and then put in a setstate that'll be used for display
    
  }, [coordinates])

  const useStyles = makeStyles((theme)=>({
    card: {
        width: "30vw"
    },
    media: {
      height: 140,
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
    image="https://cdn.shopify.com/s/files/1/1061/1924/products/Crying_Emoji_Icon_2_grande.png?v=1571606091"
    title="CRY"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
        Beach Name
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
        Stuff about beach
    </Typography>
    </CardContent>
  <CardActions>
  <Typography variant="body2" color="textSecondary" component="p">
    Review
  </Typography>
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
      // onSubmit={handleRegister} 
      >
        <div className="form-group">
          <div className="col-sm-12">
            <input type="text" className="form-control" placeholder="Quality and Consistency"  name="qualityAndConsistency" 
            // onChange={handleChange} 
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="text" className="form-control" placeholder="Difficulty Level" name="difficultyLevel" 
            // onChange={handleChange} 
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="text" className="form-control" placeholder="Crowds"  name="crowds" 
            // onChange={handleChange} 
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="text" className="form-control" placeholder="Comment"  name="Comment" 
            // onChange={handleChange} 
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
    </div>
  );
}

