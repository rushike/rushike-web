import React, { useCallback, useState } from "react"
import { Grid, Typography, Paper
} from "@material-ui/core"
import Rating from '@material-ui/lab/Rating';

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
  