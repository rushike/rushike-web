import React, { useCallback, useState } from "react"
import { graphql } from "gatsby"

import { 
	Accordion, AccordionDetails, AccordionSummary, 
	Typography, Avatar, Chip, 
	Grid, Modal 
} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CodeIcon from '@material-ui/icons/Code';

import Carousel from "react-images"
import { useSwipeable } from "react-swipeable"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { getIconPath } from "../../utils/image-repo";
import { PageLayout } from "../../components"
import { SEO } from "../../utils"
import { RightContentEducationItem, RightContentExperienceItem } from "../../sections/ResumeRightContent"
// import "firebase/auth"
// import "firebase/firestore"
// import "firebase/functions"
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { initializeApp } from 'firebase/app';
	
// import firebase from "gatsby-plugin-firebase"

// var admin = require("firebase-admin");
// require("dotenv").config()

// var serviceAccount = require("D:\\rushike\\secrets\\rushike-site-firebase-adminsdk-a3czq-a38bbb69e6.json");
// console.log("creds : ", admin.credential.cert(serviceAccount));
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
// console.log("API KEY : ", process.env.GATSBY_FIREBASE_API_KEY);
// const app = initializeApp({
//   });
function getObjectFromData(data, name){
	return data.allDataJson.edges.filter(v=>v.node.type === name)[0].node.data;
}


export default ({data})=>{
	// Initial data reads and other var declaration
	const images = getObjectFromData(data, "my-photos").photos.filter(v=>!v.hidden).map(v=>({...v, images : v.src}));
	const skills = getObjectFromData(data, "skills").skills;
	// const auth = getAuth();
	// const provider = new GoogleAuthProvider();
	
	// console.log("auth : ", auth);

	const includeSite = ["facebook", "whatsapp", "instagram", "linkden"]
	const sites = getObjectFromData(data, "external-sites").sites.filter(v=>includeSite.includes(v.name));

	// States Vars
	const [currentImage, setCurrentImage] = useState(0);
	const [morePersonalDetails, setMorePersonalDetails] = useState(false);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);  

	// Handlers 
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

	const handleMorePersonalDetail = (panel) => (e, isExpanded)=>setMorePersonalDetails(isExpanded ? panel : false);
	
	// Firebase Google Sign In pop up
	// signInWithPopup(auth, provider)
	// 	.then((result) => {
	// 		// This gives you a Google Access Token. You can use it to access the Google API.
	// 		const credential = GoogleAuthProvider.credentialFromResult(result);
	// 		const token = credential.accessToken;
	// 		// The signed-in user info.
	// 		const user = result.user;
	// 		// ...
	// 	}).catch((error) => {
	// 		// Handle Errors here.
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 		// The email of the user's account used.
	// 		const email = error.email;
	// 		// The AuthCredential type that was used.
	// 		const credential = GoogleAuthProvider.credentialFromError(error);
	// 		// ...
	// 	});
	
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
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
									<span>ऋषिकेश</span>
									&nbsp;
									<span>बांगर​</span>
							</Grid>
							
							<Grid item xs = {4} md = {6} className = "text-right px-2 border">
								<span>जन्म तारिख​ </span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border">
									<span>
										<Chip
											avatar={
												<Avatar 
													alt="१७" 
													src={getIconPath("calender.png")} 
												/>}
											label={<span className = "fw-bold">१७/०७/१९९७</span>}
											variant="outlined"
										/>
									</span>
									
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border">
								<span>मोबाईल नंबर​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border">
								<span><a href = "tel:+919309490571"> 9309490571 </a></span>
							</Grid>
							<Grid item xs = {12} md = {12} className = "text-left px-2 border">
								{/* <span className = "content-subhead">कॉन्टॅक्ट</span> */}
								<br></br>
								<div>
									<Grid container className = "px-2">
											{
												sites.map(v=>{
													return (
														<Grid item xs = {6} md = {3} className = "text-center">
															<a
																href={v.link}
																target="_blank"
																rel="noopener noreferrer"
																key = {`${Math.random()}`}
																className = "px-auto"
															>
																<FontAwesomeIcon
																	icon={["fab", v.fab_icon]}
																	className={`icons ${v.class_name || v.fab_icon}`}
																	title={v.name}
																/>
															</a>
														</Grid>
													)
												})
											}
										
									</Grid>
								</div>
							</Grid>
							<Grid item xs = {12}>
								<Accordion expanded={morePersonalDetails === 'PANEL-1'} onChange={handleMorePersonalDetail('PANEL-1')}>
									<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1bh-content"
									id="panel1bh-header"
									>
									<Typography sx={{ width: '33%', flexShrink: 0 }}>
										More Details
									</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Grid container>
											<Grid item xs = {4} md = {6} className = "text-right px-2 border">
												<span>जन्म वेळ </span>
											</Grid>
											<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
												<span>
													<Chip
														avatar={
															<Avatar 
																alt="🕑"
																src= {getIconPath("clock.png")}
															/>
														}
														label="१० : ४२"
														variant="outlined"
													/>
													</span>
											</Grid>
											<Grid item xs = {4} md = {6} className = "text-right px-2 border">
												<span>जन्म स्थल​</span>
											</Grid>
											<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
												<span>
													<Chip
														avatar={
															<Avatar 
																alt="B"
																src= {getIconPath("beed.jfif")}
															/>
														}
														label="बीड"
														variant="outlined"
													/>
													
													</span>
											</Grid>
										</Grid>
									</AccordionDetails>
								</Accordion>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs = {12} className = "fw-bold content-head border">
								{/* शिक्षण */}
								Education
							</Grid>
							<Grid item xs = {12} md = {6} className = "text-right mobile-left-stack px-2 border ">
								<span>इंजीनियरिंग​</span>
							</Grid>
							<Grid item xs = {12} md = {6} className = "text-left px-2 border">
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
							<Grid item xs = {12} md = {6} className = "text-right mobile-left-stack px-2 border ">
								<span>HSC​ / एच. यस. सी</span>
							</Grid>
							<Grid item xs = {12} md = {6} className = "text-left px-2 border">
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
							<Grid item xs = {12} md = {6} className = "text-right mobile-left-stack px-2 border ">
								<span>SSC​ / यस. यस. सी</span>
							</Grid>
							<Grid item xs = {12} md = {6} className = "text-left px-2 border">
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
						<Grid container>
							<Grid item xs = {12} className = "fw-bold content-head border">
								{/* Hobbies */}
								Hobbies
							</Grid>
							<Grid item xs = {12} className = "fw-bold border">
								<Chip
									avatar={
										<Avatar alt="<>">
											<CodeIcon></CodeIcon>
										</Avatar>
									}
									label="Coding"
									variant="outlined"
								/>
								<Chip
									avatar={
										<Avatar
											alt = "♘"
											src = {getIconPath("board-games.jpg")}
										/>
									}
									label="Board Games"
									variant="outlined"
								/>
								<Chip
									avatar={
										<Avatar
											alt = "🎹"
											src = {getIconPath("piano.png")}
										/>
									}
									label="Playing Paino"
									variant="outlined"
								/>
								<Chip
									avatar={
										<Avatar
											alt = "🎸"
											src = {getIconPath("guitar.png")}
										/>
									}
									label="Playing Guitar"
									variant="outlined"
								/>
								<Chip
									avatar={
										<Avatar
											alt = "“∫”"
											src = {getIconPath("mathematics.png")}
										/>
									}
									label="Mathematics"
									variant="outlined"
								/>
							</Grid>
							</Grid>
						</Grid>
					</Grid>
			</PageLayout>
	)
}

export const query = graphql`
	query {
		allDataJson(filter: {type: {in: ["skills", "my-photos", "external-sites"]}}) {
			edges {
				node {
					type
					data {
						sites {
							link
							email
							name
							site
							type
							username
							fab_icon
							show
							class_name
						}
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
