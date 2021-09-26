import React, { useCallback, useState } from "react"
import { Avatar, Grid } from "@material-ui/core"
import { PageLayout, PageTitle } from "../../components"
import { SEO } from "../../utils"
import { RightContentEducationItem, RightContentExperienceItem } from "../../sections/ResumeRightContent"
import { Modal } from "@material-ui/core"


import Carousel from "react-images"
import { useSwipeable } from "react-swipeable"


function getObjectFromData(data, name){
  return data.allDataJson.edges.filter(v=>v.node.type === name)[0].node.data;
}

export default ({data})=>{
	const images = getObjectFromData(data, "my-photos").photos.filter(v=>!v.hidden).map(v=>({...v, images : v.src}));
  const skills = getObjectFromData(data, "skills").skills;
	const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);  
  const swipeHandlers = useSwipeable({
    onSwipedUp : (eventData) => {
      console.log("swipe up");
      setViewerIsOpen(false)
    },
    onSwipedDown : (eventData)=> {
      console.log("swipe down");
      setViewerIsOpen(false)
    }
  });
  
  const closeLightbox = () => {
    setCurrentImage(images.length - 1);
    setViewerIsOpen(false);
  };

  const openLightbox = useCallback((event) => {
    setCurrentImage(0);
    setViewerIsOpen(true);
  }, []);
    return (
			<PageLayout>
      <SEO title="Projects" />
			<Modal
				onClose={closeLightbox}
				open={viewerIsOpen}
				{...swipeHandlers}
				>
					
				<div >
					<Carousel
						currentIndex={currentImage}
					
						views={images.map(x => ({
							...x,
							srcset: x.srcSet,
							caption: x.title
						}))}
					/>
				</div>
			</Modal>
      {/* <PageTitle title="Bio Marathi" /> */}
        <Grid container>
					<Grid item xs = {12}>
						<Grid container className = "text-center" spacing = {3}>
							{/* Photo */}
							<Grid item xs = {12}>
								<Avatar onClick={(e)=>openLightbox("profile2")} alt="rushikesh" src="../../images/my-photos/Profile2.jpg" 
											className = "resume-profile-photo mx-center medium-img"
								></Avatar>
							</Grid>
							
						</Grid>
						<Grid container>
							<Grid item xs = {12} className = "fw-bold content-head border">
								<span>
									Personal Details
								</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border">
								<span>नाव</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border">
									<span>ऋषिकेश</span>
									&nbsp;
									<span>बांगर​</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border">
								<span>जन्म तारिख​ </span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border">
									<span>१७/०७/१९९७</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border">
								<span>जन्म स्थल​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border">
								<span>बीड</span>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs = {12} className = "fw-bold content-head border">
								{/* शिक्षण */}
								Education
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border ">
								<span>इंजीनियरिंग​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border">
								<RightContentEducationItem
										title = "सरदार पटेल इंस्टिट्यूट आँफ​ टेक्नॉलॉजी, मुंबई "
										under = "यूनिवर्सिटी आँफ​ मुंबई"
										edTitle = "BE Computer Engineering"
										iconImage = "../../images/logos/spit.jfif"
										period = "२०१६ - २०२०"
										descriptionList = {[
											"CGPA : ८.०१"
										]}
										noaction
									>
								</RightContentEducationItem>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border ">
								<span>HSC​ / एच. यस. सी</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border">
								<RightContentEducationItem
										title = "रेसिडेनश्ल​ जुनियर​ क्वॉलेज​, अहमदनगर"
										under = "पुणे यूनिवर्सिटी"
										edTitle = "HSC"
										iconImage = "../../images/logos/residential-jr-college.jfif"
										period = "२०१४ - २०१६"
										descriptionList = {[
											"टक्के : ८४.३०%"
										]}
										noaction
									>
								</RightContentEducationItem>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border ">
								<span>SSC​ / यस. यस. सी</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border">
								<RightContentEducationItem
										title = "आँक्सफ़र्ड इंग्लिश मेडीयम स्कूल, नांदेड"
										under = "लातूर विभाग"
										edTitle = "SSC"
										iconImage = "../../images/logos/oems.jpg"
										period = "२०१४"
										descriptionList = {[
											"टक्के : ९४.४०%"
										]}
										noaction
									>
								</RightContentEducationItem>
							</Grid>
						</Grid>

						<Grid>
							<Grid item xs = {12} className = "fw-bold content-head border">
								{/* काम  */}
								Work
							</Grid>
							<Grid item xs = {12} className = "text-center px-2 border ">
								<RightContentExperienceItem
                  className = "resume-right-content-experience-company-item"
                  title = "Deutsche Bank"
                  iconImage = "../../images/logos/deutsche-bank.png"
                  period = "Aug, 2020 -- Present"
                  category = "internship"
                  time = "full-time"
                  descriptionList = {[
										"Full Time job based in Magarpatta, Pune",
										"Currently Working From Home"
                  ]}
                >
                </RightContentExperienceItem>
							</Grid>
							<Grid item xs = {12}>
								<RightContentExperienceItem
                  className = "resume-right-content-experience-company-item"
                  title = "Algonauts Technologies"
                  iconImage = "../../images/logos/algonauts.png"
                  period = "Jan, 2020 -- July, 2020"
                  category = "internship"
                  time = "full-time"
                  descriptionList = {[
                    "Full Time intership persuied in final year of BE",
										"Worked on web development with Django"
                  ]}
                >
                </RightContentExperienceItem>
							</Grid>
						</Grid>
					</Grid>
        </Grid>
			</PageLayout>
    )
}

export const query = graphql`
  query {
		allDataJson(filter: {type: {in: ["skills", "my-photos"]}}) {
			edges {
				node {
					type
					data {
						photos {
							src
							width
							height
							type
							hidden
						}
						skills {
							technical {
								type
								name
								skill
								img_url
							}
						}
					}
				}
			}
		}
	}
`
