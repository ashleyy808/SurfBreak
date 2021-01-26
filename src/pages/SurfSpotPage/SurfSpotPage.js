import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import SurfSpot from '../../components/SurfSpot/SurfSpot'
import './SurfSpotPage.css';



const SurfSpotPage = () => {
    const drawerWidth = 240;

    const useStyles = makeStyles((theme)=>({
        root:{
            display:"flex",
            width: '100%',
            textField: {
              width: 300,
              margin: 100,
            }
            // backgroundColor: theme.palette.background.paper,
        },
        content:{
            margin: "80px 0px 0px 290px"
        },
          drawer: {
            width: drawerWidth,
            flexShrink: 0,
          },
          drawerPaper: {
            width: drawerWidth,
          },
          drawerContainer: {
            overflow: 'auto',
          },
    }));
    
    const classes = useStyles();
    
    const [open, setOpen] = useState(false)
    const [stateName, setStateName] = useState(null);
    const [beach, setBeach] = useState(null)

    const handleOpen = (beach) => {
        setOpen(true);
        setBeach(beach)
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const setChosenState = (name) => {
        setStateName(name)
    }

    const states = ['Alaska', 'Hawaii', 'California', 'Oregon', 'Washington','Texas','Florida','North Carolina','Virginia','New Jersey','New York','Rhode Island','New Hampshire','Maine']
    const stateBeaches = { 
        'Alaska': ['Yakutat'], 'Hawaii': ['Maalaea Bay (Maui)','Punalau Beach (Maui)','Hanalei Bay(Kauai)','Log Cabins (Oahu)','Makaha Point (Oahu)'],
        'California': ['Trestle (San Clemente)', 'Lost Coast','Huntington Beach', 'Sunset Cliffs (San Diego)','Rincon Point (Santa Barbara)'],
        'Oregon': ['Smuggler Cove', 'Cape Lookout'], 'Washington': ['Westport','La Push'], 'Texas': ['South Padre Island'], 'Florida': ['New Smyrna Island'],
        'North Carolina': ['Kitty Hawk'], 'Virginia': ['Assateague Island', 'Virginia Beach'], 'New Jersey': ['Ocean City'], 'New york': ['Montauk Point'],
        'Rhode Island':['Ruggles (Newport'], 'New Hampshire': ['Hampton Beach'], 'Maine': ['Long Sands(York'] 
    };
    const beachList = (stateName) => { 
        return stateName !== null && Object.keys(stateBeaches).includes(stateName) ? (            
        <List component="nav">
            {stateBeaches[stateName].map(beach => {
                return(
                <ListItem button divider key={beach} onClick={()=>handleOpen(beach)}>
                    <ListItemText primary={beach} />
                </ListItem>
                )})}
        </List>
        ) :<h3>NO SURF SPOTS CURRENTLY SELECTED</h3>   }
    
    const beachCoordinates = {
        'Yakutat' : ['59.66','-140.69'], 'Maalaea Bay (Maui)': ['20.76','-156.49'], 'Punalau Beach (Maui)': ['21.02', '-156.49'], 'Hanalei Bay(Kauai)': ['22.2','-159.5'],
        'Log Cabins (Oahu)': ['21.65', '-158.05'],'Makaha Point (Oahu)': ['22.14', '-159.73'], 'Trestle (San Clemente)':['33.38','-117.59'], 'Lost Coast':['40.03','-124.07'],
        'Huntington Beach':['33.69','-118.01'], 'Sunset Cliffs (San Diego)': ['32.72','-117.25'], 'Rincon Point (Santa Barbara)': ['34.37','-119.47'], 'Smuggler Cove':['45.75','-123.97'],
        'Cape Lookout': ['45.38','-123.97'],'Westport': ['46.89','-124.11'], 'La Push': ['47.9','-124.63'], 'South Padre Island':['26.11','-97.16'], 'New Smyrna Island': ['29.02', '-80.95'],
        'Kitty Hawk':['36.07','-75.71'], 'Assateague Island': ['37.91','-75.35'], 'Virgnia Beach': ['36.76','-76.04'], 'Ocean City':['39.25','-74.60'], 'Montauk Point':['41.07','-71.85'],
        'Ruggles (Newport)': ['41.46','-71.29'], 'Hampton Beach': ['42.91','-70.80'], 'Long Sands(York)': ['43.16','-70.61']
    }

   
    const coordinatesToReturn = (beach) => {return(beachCoordinates[beach])} //add cehcking for when beach not in beachcoords (reference line 55)

    return(
        <div className={classes.root}>
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
        >
              <Toolbar/>
            <div className={classes.drawerContainer}>
              <List>
                {states.map((state, index) => (
                  <ListItem button key={index} onClick={()=>setChosenState(state)}>
                    <ListItemText primary={state} />
                  </ListItem>
                ))}
              </List>
             
            </div>
          </Drawer>
        <div className={classes.content}>
            {beachList(stateName)}
            <Dialog onClose={handleClose} aria-labelledby="beach" open={open} scroll="paper">
                <SurfSpot coordinates={coordinatesToReturn(beach)}/>
            </Dialog>
        </div>
        </div>
    )
} 


export default SurfSpotPage;