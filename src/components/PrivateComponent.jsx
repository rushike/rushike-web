import React, {useEffect} from "react"
import { Firebase } from "../firebase/Firebase"
import { isAuthenticated } from "../utils/auth"


import { SignInToRequestAccessBanner } from "./RequestAccess"

export const PrivateComponent = ({ access_type, children }) => {
  
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     console.log("INIT METHOD CALLED");
  //     Firebase.init()
  //   }
  // }, [])
  if (
    !Firebase.isAuthenticated() &&
    typeof window !== 'undefined'
  ) {
    // If we’re not logged in, redirect to the home page.
    // navigate(`/app/login`)
    return <div>
      <SignInToRequestAccessBanner access_type = {access_type}></SignInToRequestAccessBanner>
    </div>
  }
  return (      
      <div>
        {children}
      </div>
  )
}