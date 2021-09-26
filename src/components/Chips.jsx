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

function getObject(array = [], name = "test"){
    return array.filter(v=>v.name === name)[0]
  }

export function TagChip({data, label, size, iconImage}) {
    return (
      <Chip 
        className = "resume-skill-chip"
        size="small" 
        style = {{fontSize : `${.015 * size}rem`}}
        icon 
        avatar={
          <Avatar alt={label || label.substring(0, 1)} src={iconImage}/>
        } 
        label={<span className = "">{label}</span>} 
        onClick={()=>null} />
      )
  }
  
  export function SkillChip({name, skills = {}}){
    const {name : label, skill : size, img_url : iconImage} = getObject(skills.technical, name)
    return (
      <TagChip
        label = {label || "NodeJs"}
        size = {70}
        iconImage = {iconImage || "../../images/logos/nodejs.jpg"}
      ></TagChip>
    )
  }