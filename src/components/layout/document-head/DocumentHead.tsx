import * as React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

const titleQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`

interface SeoProps {
    title?: string;
}

const DocumentHead = ({title}: SeoProps): JSX.Element => {
    const data = useStaticQuery(titleQuery)

    return !!title
        ? <title>{data.site.siteMetadata.title} | {title}</title>
        : <title>{data.site.siteMetadata.title}</title>;
}

export default DocumentHead;
