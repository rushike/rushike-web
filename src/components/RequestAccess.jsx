import React, { useCallback, useState } from "react"
import { graphql, useStaticQuery} from "gatsby"
import { Avatar, Grid, Typography } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getIconPath } from "../utils/image-repo"
import { Firebase } from "../firebase/Firebase"

export function SignInToRequestAccessBanner({access_type}) {
    return (
        <Grid container>
            <Grid item xs = {12}>
                <Typography onClick = {Firebase.doSignInWithGoogle}>
                    Sign with 
                    <Avatar
                        alt = "sign with google on rushikesh bangar website"
                        src = {getIconPath("google.png")}
                        style = {{display : "inline-block", cursor : "pointer",margin : "5px 0"}}
                        
                    /> 
                    to request access as {access_type}
                </Typography>
            </Grid>
        </Grid>
    )
}