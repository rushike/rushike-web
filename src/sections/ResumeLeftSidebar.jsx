import React, { useCallback, useState } from "react"
import { graphql, useStaticQuery} from "gatsby"
import { PageLayout, PageTitle, WorkHistory } from "../components"
import { SEO, Utils } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, Grid, Card, 
  CardContent, Typography, Avatar, 
  IconButton, Paper, LinearProgress,
  Box, Chip, CardMedia, CardActions
} from "@material-ui/core"
import Rating from '@material-ui/lab/Rating';
import Photo from "../components/Photo"
import Carousel, { ModalGateway, Modal } from "react-images"

export function LeftSidebarContent({data, title, children}){
    return (
      <Grid item xs= "12" id = "resume-left-sidebar-content" 
      >
          <Typography 
          variant="h6"
          className = "resume-left-sidebar-content-head"
          >
              {title}
          </Typography>
          {children}
          <hr></hr>
      </Grid>
    )
  }
  
  export function LeftSidebarSubContent({data, title, children}){
    return (    
      <Paper
        className = "resume-left-sidebar-content"
        square
        >
        <Typography variant="h6" component="h5" 
          className = "resume-left-sidebar-content-subhead"
        >
          {title}
        </Typography>
          <Typography 
                    className = "resume-left-sidebar-content-text" 
                    variant="body2" 
                    color="textSecondary" 
                    component="p"
                    >
              {children}
          </Typography>
      </Paper>    
      
    )
  }
  