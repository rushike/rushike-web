import { useStaticQuery, graphql } from "gatsby"

export const getSkillsDetails = (name)=>{
	console.log("GetSkillls Details");
	const data = useStaticQuery(graphql`
		query{
			allDataJson(filter: {type: {eq: "skills"}}) {
				edges {
					node {
						data {
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
		}`)
		console.log("data : ", data);
    return {}
}