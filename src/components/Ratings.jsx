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

export function RatingBar({value}) {
    return (
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="customized-10" defaultValue={value} max={10} readOnly size="small"/>
      </Box>
    );
  }
  