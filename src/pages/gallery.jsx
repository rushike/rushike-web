import React, { useContext, useCallback, useState } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import { Container} from "react-bootstrap"
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Photo from "../components/Photo";

const photos = [
    {
      src: '../../images/my-photos/afternoon-local-harbour-line-2.jpg',
      width: 1,
      height: 1
    },
    {
      src: '../../images/my-photos/afternoon-local-harbour-line.jpg',
      width: 1,
      height: 1
    },
    {
      src: '../../images/my-photos/ajit-dada-lagna.jpg',
      width: 1,
      height: 1
    },
    {
        src: '../../images/my-photos/azad-nagar-metro-station-formal-day.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../../images/my-photos/college-library.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../../images/my-photos/daana-paani-beach-cleanup.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../../images/my-photos/moot-court-day.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../../images/my-photos/morning-local-harbour-line.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../../images/my-photos/Profile.jpg',
        width: 1,
        height: 1
    },
    {
        src: '../../images/my-photos/visapur-trek.jpg',
        width: 1,
        height: 1
    },
  ];
   
export default ({data = {photos : photos}})=>{
  const photos = data.photos;
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

  return (
		<PageLayout>
      <SEO title="Home" />		
      <PageTitle title="Gallery" />
      <Container className="text-center mt-4" fluid>
      <Gallery photos={photos} onClick={openLightbox} renderImage = {Photo} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
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