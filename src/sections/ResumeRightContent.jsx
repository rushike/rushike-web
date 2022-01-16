import React, { useCallback, useState } from "react"
import { graphql, useStaticQuery} from "gatsby"
import { CardHeader, Grid, Card, 
  CardContent, Typography, Avatar,
} from "@material-ui/core"

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
  