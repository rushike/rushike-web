import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation, sites : mysites } = data.site.siteMetadata
  const personal_info = data.allDataJson.edges[0].node.data.personal_info || data.allDataJson.edges[1].node.data.personal_info;
  const sites = data.allDataJson.edges[0].node.data.sites  || data.allDataJson.edges[1].node.data.sites;
  const sites_filtered = sites.filter(v=>v.show)
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center mt-4" fluid>
        <Image
          width="150"
          height="150"
          fluid
          src={dark ? `../../icons/darth-vader.png` : `../../icons/r2-d2.png`}
          alt={dark ? "Darth Vader" : "R2-D2"}
        />
        {unemployed && (
          <p className="mt-2">
            <b> Hey! I am looking for new opportunities :)</b>
          </p>
        )}
        <Container className="py-0 my-0">
          <h1
            // style={{
            //   fontSize: "5rem",
            //   color: "black",
            // }}
            className = "index-page-head-name"
          >
            <span className="first-name">{personal_info.identity.firstname}</span>&nbsp;
            <span className="last-name">{personal_info.identity.lastname}</span>
          </h1>
          <p>
            <i>
              {occupation},&nbsp;
              {dark ? `working for better designs and functions.` : `Engineered for excellence`}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <div className="d-md-inline-flex icons-container">
          {
            sites_filtered.map(v=>{
              return (
                <a
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={["fab", v.fab_icon]}
                    className={`icons ${v.class_name || v.fab_icon}`}
                    title={v.name}
                  />
                </a>
                )
            })
          }
          <a
            href="mailto:rushikeslr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          {/* <a href="../../resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a> */}
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
    allDataJson(filter: {type: {in: ["personal-info", "external-sites"]}}) {
      edges {
        node {
          data {
            personal_info {
              identity {
                name
                pet_name
                firstname
                lastname
              }
              contact_details {
                email
                mobile
                address
                current_city
                pincode
              }
            }
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
          }
        }
      }
    }
  }  
`
