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

import "../../../static/styles/global.scss"
import bioPdf from "../../../static/pdfs/bio-data.pdf"

function getObjectFromData(data, name){
    // console.log("data: ", data.allDataJson.edges);
	var a = data.allDataJson.edges.filter(v=>v.node.type === name)[0];
    // console.log("a : ", a.node.data, name);
    return a.node.data
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
    console.log("sites array :" , sites);
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
		<Grid container sx={{ flexGrow: 1 }} className = "container px-4" style = {{padding : "0 1000"}} >
					<div style = {{position : "absolute"}}>
						<a href = {bioPdf} download> 
							{/* <Avatar 
								alt="rushikesh" src={getIconPath("download.png") 
								} 
											
							>Download Bio</Avatar> */}
						</a>
					</div>
					<Grid item xs = {12}>
						<Grid container className = "text-center" spacing = {3}>
							{/* Photo */}
							<Grid item xs = {12}>
								<Avatar onClick={(e)=>openLightbox("profile2")} alt="rushikesh" src="../../images/my-photos/Profile4.jpeg" 
											className = "resume-profile-photo mx-center medium-img"
								></Avatar>
							</Grid>
							
						</Grid>
						<Grid container>
							<Grid item xs = {12} className = "text-center fw-bold-more content-head border">
								<span>
										वैयक्तिक  माहिती
								</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>नाव</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
									<span>ऋषिकेश</span>
									&nbsp;
									<span>बांगर​</span>
							</Grid>
							
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>जन्म दिनांक</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border ">
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
							{/* <Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
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
													label="१२:४२ दुपारी"
													variant="outlined"
											/>
											</span>
							</Grid> */}
							{/* <Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
									<span>जन्म नाव </span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
									<span>
											<Chip
													avatar={
															<Avatar 
																	alt="📛"
																	// src= {getIconPath("clock.png")}
															/>
													}
													label="योगेश"
													variant="outlined"
											/>
											</span>
							</Grid> */}
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
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
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
									<span>शिक्षण​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
									<span>
										<Chip
											avatar={
												<Avatar 
														alt="B"
														src= {getIconPath("cs-logo.png")}
												/>
											}
											label="कॉम्पुटर इंजिनीरिंग B.E."
											variant="outlined"
										/>
											
									</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>नोकरी ​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border">
								<span>
								<Chip
									avatar={
										<Avatar 
												alt="B"
												src= {getIconPath("deutsche-bank.png")}
										/>
									}
									label="Deutsche Bank"
									variant="outlined"
								/>
								</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>वार्षिक उत्पन्न ​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border">
								<span>
								<Chip
									avatar={
										<Avatar 
										>💸</Avatar>
									}
									label="₹ १७ लाख"
									variant="outlined"
								/>
									</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
									<span>उंची​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
								<span>
									<Chip
											avatar={
													<Avatar 
															alt="B"
															src= {getIconPath("height.png")}
													/>
											}
											label={"५'७\""}
											variant="outlined"
									/>
										
								</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
									<span>वजन</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
								<span>
									<Chip
											avatar={
													<Avatar 
															alt="B"
															src= {getIconPath("weight.png")}
													/>
											}
											label={"७० किलो"}
											variant="outlined"
									/>
										
								</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
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
													console.log("witing chip v : ", v);
													return (
														<Grid item xs = {6} md = {3} className = "text-center">
															<a
																href={v.link}
																target="_blank"
																rel="noopener noreferrer"
																key = {`${Math.random()}`}
																className = "px-auto"
															>
																	<Chip
																		avatar={
																				<FontAwesomeIcon
																						icon={["fab", v.fab_icon]}
																						className={`icons ${v.class_name || v.fab_icon}`}
																						title={v.name}
																				/>
																		}
																		label={v.label}
																		variant="outlined"
																/>
																
															</a>
														</Grid>
													)
												})
											}
										
									</Grid>
								</div>
							</Grid>
							{/* <Grid item xs = {12}>
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
							</Grid> */}
						</Grid>
						<Grid container>
							<Grid item xs = {12} className = "text-center fw-bold-more content-head border">
								{/* शिक्षण */}
								शिक्षण
							</Grid>
							<Grid item xs = {12} md = {6} className = "text-right mobile-left-stack px-2 border fw-bold-more">
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
							<Grid item xs = {12} md = {6} className = "text-right mobile-left-stack px-2 border fw-bold-more ">
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
							<Grid item xs = {12} md = {6} className = "text-right mobile-left-stack px-2 border fw-bold-more">
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
							<Grid item xs = {12} className = "text-center fw-bold-more content-head border" 
								style = {{marginTop : "10rem !important"}}
							>
								{/* नोकरी  */}
								नोकरी
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
										"Job Role : Software Developer",
										"Location : Magarpatta Pune, (Currently Hybrid Working Model)",
										"Tech Stack : Spark, Scala, DevOps, Python"
									]}
									>
									</RightContentExperienceItem>
								</Grid>
								<Grid item xs = {12}  className = "text-center px-2 border ">
									<RightContentExperienceItem
									className = "resume-right-content-experience-company-item"
									title = "Algonauts Technologies"
									iconImage = "../../images/logos/algonauts.png"
									period = "Jan, 2020 -- July, 2020"
									category = "internship"
									time = "full-time"
									descriptionList = {[
										"Job Role : Web / Software Developer",
										"Location : Andheri, Mumbai",
										"Tech Stack : Python, Django, Azure"
									]}
									>
									</RightContentExperienceItem>
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs = {12} className = "text-center fw-bold-more content-head border">
								{/* छंद */}
								छंद
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
									label="Playing Music Instruments"
									variant="outlined"
								/>
								{/* <Chip
									avatar={
										<Avatar
											alt = "🎸"
											src = {getIconPath("guitar.png")}
										/>
									}
									label="Playing Guitar"
									variant="outlined"
								/> */}
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
						<Grid container>
							<Grid item xs = {12} className = "text-center fw-bold-more content-head border">
								{/* छंद */}
								कौटुंबिक माहिती
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>वडिलांचे नाव ​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
								<span>
									अर्जुन मारोती बांगर 
								</span><br></br>
								<span>9922923872</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>आईचे नाव ​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
								<span>
									कै.मीरा अर्जुन बांगर 
								</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>बहीण नाव ​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
								<span>
									नुतन बांगर (B.Sc Animation) (Married)
								</span>
							</Grid>
							{/* <Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>मामा ​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
								<span>
								 रवींद्र Jaybhay
								</span>
								 <br></br> 
								<span></span>
							</Grid> */}
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>सध्याचा  पत्ता​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
								<span>
									प्लॉट न. १८, शिवनगर, शिवनिकेतन टॉवर जवळ, पाईपलाईन रोड, सावेडी, अहमदनगर, ४१४००३
								</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>गाव​</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
								<span>
									वाघीरा 
								</span>
							</Grid>
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>तालूका </span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
								<span>
									पाटोदा 
								</span>
							</Grid>
							
							<Grid item xs = {4} md = {6} className = "text-right px-2 border fw-bold-more">
								<span>जिल्हा</span>
							</Grid>
							<Grid item xs = {8} md = {6} className = "text-left px-2 border fw-bold">
								<span>
									बीड 
								</span>
							</Grid>
						</Grid>
					</Grid>
					<a className= "mt-2" href = "https://rushike-site.web.app/mr/bio">https://rushike-site.web.app/mr/bio</a>
					<br/>
					<a className= "mt-2" href = "https://rushike-site.web.app/gallery">https://rushike-site.web.app/gallery</a>

			</PageLayout>
	)
}

export const query = graphql`
	query {
		allDataJson{
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
							label
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
