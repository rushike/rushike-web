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

export function RightContentEducationItem({title, iconImage, period, under, descriptionList, children, noaction = false}){
    return (
      <Card className="resume-right-content-education-institute-item">
        <CardHeader
          avatar={
            <Avatar 
              aria-label={title} 
              className="{classes.avatar}" 
              style = {{width : "3rem", height : "3rem"}}
              src = {iconImage}
            >
            </Avatar>
          }
          action={
            noaction ? null : period 
          }
          className = "resume-right-content-education-institute-header-text"
          title={title}
          subheader={<span className = "resume-right-content-subheader-text">{under}</span>}
        />
        <CardContent
          className = "resume-right-content-education-institute-text"
        >
          <ul>
            { noaction ?
              <li>
                {period}
              </li>
              : null
            }
          {descriptionList.map(text=> (
              <li key = {Math.random()} className ="text-left">
                  {text}
              </li>
            )
          )}
          </ul>
        </CardContent>
      </Card>
    )
  }
  
  export function RightContentExperienceItem({title, iconImage, period, descriptionList,children}){
    return (
      <Card className="resume-right-content-experience-company-item">
        <CardHeader
          avatar={
            <Avatar 
              aria-label={title} 
              className="{classes.avatar}" 
              style = {{width : "3rem", height : "3rem"}}
              src = {iconImage}
            >
            </Avatar>
          }
          className = "resume-right-content-experience-company-header-text"
          title={title}
          subheader={<span className = "resume-right-content-subheader-text">{period}</span>}
        />
        <CardContent
          className = "resume-right-content-experience-company-text"
        >
          <ul>
          {descriptionList.map(text=> (
              <li key = {Math.random()} className ="text-left">
                  {text}
              </li>
            )
          )}
          </ul>
        </CardContent>
      </Card>
    )
  }
  