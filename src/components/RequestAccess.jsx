import React, { useCallback, useState } from "react"
import { graphql, useStaticQuery} from "gatsby"
import { Grid, Typography } from "@material-ui/core"

export function SignInToRequestAccessBanner({access_type}) {
    return (
        <Grid container>
            <Grid item xs = {12}>
                <Typography>
                    Sign with 
                    <FontAwesomeIcon
                        icon={["fab", "google"]}
                        className={`icons`}
                        title="Google"
                    /> 
                    to request access for {access_type}
                </Typography>
            </Grid>
        </Grid>
    )
}