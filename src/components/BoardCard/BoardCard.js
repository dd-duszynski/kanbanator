import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const im = "https://images.pexels.com/photos/3046632/pexels-photo-3046632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: '300px',
      marginRight: '15px',
      marginBottom: '15px',
      backgroundColor: '#444',
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
      color: '#eee',
   },
   whiteIcon: {
      color: '#eee',
   },
   redIcon: {
      color: '#e11',
   },
}));

export default function BoardCard({ title, starred, image, description, link }) {
   const classes = useStyles();
   const [isStarred, setIsStarred] = useState(starred);

   const handleIsStarred = () => {
      setIsStarred(!isStarred);
   };

   return (

      <Card className={classes.root}>
         <CardHeader
            avatar={
               <Avatar aria-label="recipe" className={classes.avatar}>
                  D
               </Avatar>
            }
            action={
               <IconButton aria-label="settings">
                  <MoreVertIcon className={classes.whiteIcon}/>
               </IconButton>
            }
            title={title}
            subheader="November 01, 2020"
            subheaderTypographyProps={{ 'color': 'white' }}
            className={classes.cardHeader}
         />
         <Link to={link ? link : "/"}>
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
