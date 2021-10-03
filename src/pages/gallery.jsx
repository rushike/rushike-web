import React, { useContext, useCallback, useState, useEffect } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import { Container} from "react-bootstrap"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Photo from "../components/Photo";
import {Tab, Tabs, Box, Typography} from "@material-ui/core"
import PropTypes from 'prop-types';
import { PrivateComponent } from "../components/PrivateComponent"
import { Firebase } from "../firebase/Firebase"


export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
   
export default ({data})=>{
  const [value, setValue] = React.useState(0);
	const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);  
  
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const photos = data.allDataJson.edges[0].node.data.photos
  const formal = photos.filter(v=>v.type === 'formal')
  const with_friends = photos.filter(v=>v.type === 'with-friends')
  const self = photos.filter(v=>v.type === 'self')
  const currentArray = [formal, with_friends, self]
  
  return (
		<PageLayout>
      <SEO title="Gallery" />		
      <PageTitle title="Gallery" />
      <Container className="text-center mt-4" fluid>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Formal" />
          <Tab label="With Friends" />
          <Tab label="Self" />
        </Tabs>
        <TabPanel value = {value} index = {0}>
          <Gallery photos={formal} onClick={openLightbox} renderImage = {Photo} />
        </TabPanel>
        
        <TabPanel value = {value} index = {1}>
          <PrivateComponent access_type = "friend">
            <Gallery photos={with_friends} onClick={openLightbox} renderImage = {Photo} />
          </PrivateComponent>
        </TabPanel>

        <TabPanel value = {value} index = {2}>
          <PrivateComponent access_type = "friend">
            <Gallery photos={self} onClick={openLightbox} renderImage = {Photo} />
          </PrivateComponent>
        </TabPanel>
          
        
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={currentArray[value].map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
			</Container>
    </PageLayout>
  );
}

export const query = graphql`
  query {
    allDataJson(filter: {type: {eq: "my-photos"}}) {
      edges {
        node {
          data {
            photos {
              src
              width
              height
              type
            }
          }
        }
      }
    }
  }  
`