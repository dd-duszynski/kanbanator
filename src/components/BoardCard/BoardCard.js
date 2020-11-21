import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: '300px',
      marginRight: '15px',
      marginBottom: '15px',
      backgroundColor: '#333',
      color: '#fff'
   },
   media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
   },
   //ok
   avatar: {
      backgroundColor: theme.palette.primary.main,
   },
   cardHeader: {
      color: '#fff',
   },
   whiteIcon: {
      color: '#fff',
   },
   redIcon: {
      color: '#e11',
   },
}));

export default function BoardCard({ title, starred, image, description, link }) {
   const classes = useStyles();
   const [isStarred, setIsStarred] = useState(starred);
   const [anchorEl, setAnchorEl] = useState(null);

   const handleIsStarred = () => {
      setIsStarred(!isStarred);
   };

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <Card className={classes.root}>
         <CardHeader
            avatar={
               <Avatar aria-label="recipe" className={classes.avatar}>
                  K
               </Avatar>
            }
            action={
               <>

                  <IconButton aria-label="settings" onClick={handleClick}>
                     <MoreVertIcon className={classes.whiteIcon} />
                  </IconButton>
                  <Popover
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                     }}
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     // id="simple-menu"
                     anchorEl={anchorEl}
                     open={Boolean(anchorEl)}
                     onClose={handleClose}
                  >
                     <List>
                        <ListItem button>
                           <ListItemText primary="option 1" onClick={handleClose} />
                        </ListItem>
                        <ListItem button>
                           <ListItemText primary="option 2" onClick={handleClose} />
                        </ListItem>
                        <ListItem button>
                           <ListItemText primary="option 3" onClick={handleClose} />
                        </ListItem>
                     </List>
                     {/* Poniżej przykład - pamiętaj o handleClose */}
                     {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                  </Popover>
               </>
            }
            title={title}
            subheader="November 01, 2020"
            subheaderTypographyProps={{ 'color': 'white' }}
            className={classes.cardHeader}
         />
         <Link to={link ? `templates/${link}` : "/"}>
            <CardMedia
               className={classes.media}
               image={image}
               title="Paella dish"
            />

         </Link>

         <CardContent>
            <Typography
               variant="body2"
               // color="textSecondary"
               component="p"
            >
               {description}
            </Typography>
         </CardContent>

         <CardActions disableSpacing>
            <IconButton
               aria-label="add to favorites"
               onClick={handleIsStarred}
            >
               <FavoriteIcon
                  className={isStarred ? classes.redIcon : classes.whiteIcon}
               />
            </IconButton>
            <IconButton aria-label="share">
               <ShareIcon className={classes.whiteIcon} />
            </IconButton>
         </CardActions>
      </Card>
   );
}
