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
  Box, Chip, CardMedia, CardActions,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent
} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import Rating from '@material-ui/lab/Rating';
import Photo, { PhotoRounded } from "../components/Photo"
// import { ModalGateway, Modal } from "react-images"
import { RightContentEducationItem, RightContentExperienceItem } from "../sections/ResumeRightContent"
import { RatingBar } from "../components/Ratings"
import { LeftSidebarContent, LeftSidebarSubContent } from "../sections/ResumeLeftSidebar"
import { SkillChip, TagChip } from "../components/Chips"
import Carousel from "react-images"
import { useSwipeable } from "react-swipeable"
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from 'react-carousel-minimal';



function getObjectFromData(data, name){
  return data.allDataJson.edges.filter(v=>v.node.type === name)[0].node.data;
}

export default ({ data }) => {

  const history = data.allMarkdownRemark.edges || []
  // const images = data.allFile.edges || []
  const images = getObjectFromData(data, "my-photos").photos.filter(v=>!v.hidden).map(v=>({...v, images : v.src}));
  const skills = getObjectFromData(data, "skills").skills;
  console.log("skills  ; ", skills);
  console.log("images  ; ", images);
  // const imageMap = Utils.getImageMap(images, /\/[work].*\/|$/)
  const [value, setValue] = React.useState(0);
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
  // const openLightbox = ()=>{
  //   console.log("photo clivked");
  //   setCurrentImage(0);
  //   setViewerIsOpen(true);
  // }

  return (
    <PageLayout>
      <SEO title="Resume" />
          
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
      <Grid container>
        <Grid item xs = "12" md = "4">
          {/* Left Siderbar */}

          <Grid container>
            <Grid item xs= "12" id = "name-heading">
              <CardHeader
                avatar={
                  <Avatar onClick={(e)=>openLightbox("profile2")} alt="rushikesh" src="../../images/my-photos/Profile2.jpg" 
                    className = "resume-profile-photo"
                  ></Avatar>
                  // <Gallery photos={[{
                  //     "src": "../../images/my-photos/Profile2.jpg",
                  //     "width": 70,
                  //     "height": 70,
                  //     "type" : "formal"
                  // }]} onClick={openLightbox} renderImage = {PhotoRounded} />
                  // <Avatar aria-label="recipe" className={classes.avatar}>
                  //   R
                  // </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    
                  </IconButton>
                }
                title={
                  <Typography 
                    gutterBottom variant="h5" component="h2"
                    className = "first-name">
                    Rushikesh A B
                  </Typography>
                }
                subheader={
                  <Typography 
                    className = "secondary-title">
                      Software Engineer
                  </Typography>
                } 
              />
              <hr></hr>
            </Grid>
            <LeftSidebarContent 
              title = "Personal Details"
              >
              <LeftSidebarSubContent
                title = "Address"
              >
                Plot 18, Shivnagar, Near Shivniketan Tower, Pipeline Rd. Savedi Ahmednagar
              </LeftSidebarSubContent>
              {/* <LeftSidebarSubContent
                title = "Contact"
              >
                7745023872
              </LeftSidebarSubContent> */}
              <LeftSidebarSubContent
                title = "Email"
              >
                rushikeslr@gmail.com
              </LeftSidebarSubContent>
              <LeftSidebarSubContent
                title = "Linkden"
              >
                linkedin.com/in/rushike
              </LeftSidebarSubContent>
            </LeftSidebarContent>
            <LeftSidebarContent
              title = "Skills"
            >
              <LeftSidebarSubContent
                title = "Languages"
              >
                <TagChip
                  label = "Java"
                  size = {70}
                  iconImage = "http://assets.stickpng.com/images/58480979cef1014c0b5e4901.png"
                ></TagChip>

                <TagChip
                  label = "Oracle SQL"
                  size = {50}
                  iconImage = "https://i.pinimg.com/564x/c0/b8/97/c0b897d42de369a2d65c213c64dc5c5c.jpg"
                ></TagChip>

                <TagChip
                  label = "Python"
                  size = {80}
                  iconImage = "http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"
                  >
                </TagChip>

                <TagChip
                  label = "Javascript"
                  size = {90}
                  iconImage = "https://www.vhv.rs/dpng/d/313-3133777_javascript-transparent-background-svg-hd-png-download.png"
                  >
                </TagChip>
              </LeftSidebarSubContent>
              <LeftSidebarSubContent
                title = "Framework"
              >
                <TagChip
                  label = "Django"
                  size = {60}
                  iconImage = "data:image/png;base64,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"
                >
                </TagChip>
                <TagChip
                  label = "NodeJs"
                  size = {70}
                  iconImage = "../../images/logos/nodejs.jpg"
                >
                </TagChip>
                <TagChip
                  label = "ReactJs"
                  size = {90}
                  iconImage = "data:image/png;base64,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"
                >
                </TagChip>
                <TagChip
                  label = "SpringBoot"
                  size = {60}
                  iconImage = "data:image/png;base64,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"
                >
                </TagChip>
              </LeftSidebarSubContent>
            </LeftSidebarContent>
            <LeftSidebarContent
              title = "Languages"
            >
              <LeftSidebarSubContent
                title = "English"
              >
                <RatingBar
                  value = {8}
                ></RatingBar>
              </LeftSidebarSubContent>
                <LeftSidebarSubContent
                  title = "Marathi"
                >
                  <RatingBar
                    value = {10}
                  ></RatingBar>
                </LeftSidebarSubContent>
              <LeftSidebarSubContent
                title = "Hindi"
              >
                <RatingBar
                  value = {7}
                ></RatingBar>
              </LeftSidebarSubContent>
            </LeftSidebarContent>
          </Grid>
          <div>
            Rushikesh A B
          </div>
          <div>
            Software Engineer
          </div>
        </Grid>
        <Grid item 
          xs = "12" 
          md = "8" 
          // className = "resume-right-content"
        >
          {/* Right Sidebar */}
          <Grid container>
            <Grid item xs = "12" className = "resume-right-content-self-description">
              I am computer engineer, passed out in 2020 from Sardar Patel Institute
              of Technology, Mumbai. Since 2020 I am currently working with Deutsche Bank
              as software developer
            </Grid>
            <Grid item 
              xs = "12" 
              className = "resume-right-content">
              <Typography 
                variant="h6"
                className = "resume-right-content-head"
              >
                  Experience
              </Typography>
                <RightContentExperienceItem
                  className = "resume-right-content-experience-company-item"
                  title = "Deutsche Bank"
                  iconImage = "../../images/logos/deutsche-bank.png"
                  period = "Aug, 2020 -- Present"
                  category = "internship"
                  time = "full-time"
                  descriptionList = {[
                    <p>Joined in Aug, 2020 as grad, worked on 2 projects which includes DevOps Automation, and Spring API</p>,
                    <p>Automated manual build jobs / deploy steps with <SkillChip name = "teamcity" skills = {skills}/></p>,
                    "Worked over Spring API capable to streaming messages",
                    "Worked with apache freemarker to transform the messages in between"
                  ]}
                >
                </RightContentExperienceItem>
                <RightContentExperienceItem
                  className = "resume-right-content-experience-company-item"
                  title = "Algonauts Technologies"
                  iconImage = "../../images/logos/algonauts.png"
                  period = "Jan, 2020 -- July, 2020"
                  category = "internship"
                  time = "full-time"
                  descriptionList = {[
                    "Joined in Jan, 2020 as web developer intern in  Algo Trading firm",
                    "Developed Django based website with Vue js for data tables",
                    "Worked with websockets, and redis-channel to fetch trade messages",
                    "Also deployed dev version of website on Microsoft Azure"
                  ]}
                >
                </RightContentExperienceItem>


                <Typography 
                  variant="h6"
                  className = "resume-right-content-head"
                >
                    Education
                </Typography>
                <RightContentEducationItem
                  title = "Sardar Patel Institute of Technology, Mumbai"
                  under = "University of Mumbai"
                  edTitle = "BE Computer Engineering"
                  iconImage = "../../images/logos/spit.jfif"
                  period = "2016 - 2020"
                  descriptionList = {[
                    "CGPA : 8.01"
                  ]}
                >
                </RightContentEducationItem>

                <RightContentEducationItem
                  title = "Residential Jr. College, Ahmednagar"
                  under = "Savitribai Phule Pune University"
                  edTitle = "HSC Science"
                  iconImage = "../../images/logos/residential-jr-college.jfif"
                  period = "2014 - 2016"
                  descriptionList = {[
                    "Percentage : 84.30%"
                  ]}
                ></RightContentEducationItem>

                <RightContentEducationItem
                  title = "Oxford English Medium School, Nanded"
                  under = "Maharashtra State Board, Latur Division"
                  edTitle = "SSC"
                  iconImage = "../../images/logos/oems.jpg"
                  period = "2014"
                  descriptionList = {[
                    "Percentage : 94.30%"
                  ]}
                ></RightContentEducationItem>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <PageTitle title="Resume">
        &nbsp;
        <a href="../../resume.pdf" target="_blank" download>
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={["fas", "file-download"]}
            className="icons file"
          />
        </a>
      </PageTitle>
      <Container className="mt-5 pt-3" fluid>
        {history.map(({ node }) => (
          <div key={node.id}>
            <WorkHistory
              frontmatter={node.frontmatter}
              image={imageMap[node.fields.slug]}
              html={node.html}
            />
            <hr className="w-75" />
          </div>
        ))}
      </Container> */}
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___startDate], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            company
            location
            position
            tags
            startDate(formatString: "MMMM")
            endDate(formatString: "MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "png" }
        relativePath: { regex: "/company/" }
        relativeDirectory: { regex: "/content/work/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
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
