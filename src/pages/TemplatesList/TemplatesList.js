import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import SchoolIcon from '@material-ui/icons/School';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HighlightIcon from '@material-ui/icons/Highlight';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Layout from '../../components/Layout/Layout';
import TemplatesRow from '../../components/TemplatesRow/TemplatesRow';
import * as actions from '../../store/actions/templates'
import Spinner from '../../components/Spinner/Spinner'

const useStyles = makeStyles(() => ({
   root: {
      padding: '20px 20px 0',
   },
   icon: {
      marginRight: '10px',
      fontSize: '32px'
   },
}))

const TemplatesList = ({ templates, getTemplates }) => {
   const classes = useStyles();
   console.log('TemplatesList', templates);

   useEffect(() => {
      getTemplates()
   }, [getTemplates])

   return (
      <Layout>
         {templates ? (
            <Grid
               container
               direction="column"
               justify="center"
               alignItems="flex-start"
               className={classes.root}
            >
               <Grid item >
                  <Typography variant="h5">
                     Get going faster with one of the ready-to-use predefined templates.
                  </Typography>
               </Grid>
               <TemplatesRow
                  category="Business"
                  loadedTemplates={templates.filter(item => item.category === "Business")}
                  icon={<BusinessCenterIcon className={classes.icon} />}
               />
               <TemplatesRow
                  category="Design"
                  loadedTemplates={templates.filter(item => item.category === "Design")}
                  icon={<ColorLensIcon className={classes.icon} />}
               />
               <TemplatesRow
                  category="Education"
                  loadedTemplates={templates.filter(item => item.category === "Education")}
                  icon={<SchoolIcon className={classes.icon} />}
               />
               <TemplatesRow
                  category={`Personal & Productivity`}
                  loadedTemplates={templates.filter(item => item.category === "Personal & Productivity")}
                  icon={<DirectionsRunIcon className={classes.icon} />}
               />
               <TemplatesRow
                  category="Marketing"
                  loadedTemplates={templates.filter(item => item.category === "Marketing")}
                  icon={<HighlightIcon className={classes.icon} />}
               />
               <TemplatesRow
                  category="Project Management"
                  loadedTemplates={templates.filter(item => item.category === "Project Management")}
                  icon={<AccountTreeIcon className={classes.icon} />}
               />
               <TemplatesRow
                  category="Remote Work"
                  loadedTemplates={templates.filter(item => item.category === "Remote Work")}
                  icon={<HomeWorkIcon className={classes.icon} />}
               />
            </Grid>
         ) : <Spinner />}
      </Layout >
   )
}


const mapStateToProps = (state) => {
   return {
      loading: state.templates.loading,
      error: state.templates.error,
      templates: state.templates.templates,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getTemplates: () => dispatch(actions.getTemplates())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesList)