import React, { useCallback, useState } from "react"
import { graphql, useStaticQuery} from "gatsby"
import { 
  Box, Chip, CardMedia, CardActions
} from "@material-ui/core"
import Rating from '@material-ui/lab/Rating';

export function RatingBar({value}) {
    return (
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="customized-10" defaultValue={value} max={10} readOnly size="small"/>
      </Box>
    );
  }
  