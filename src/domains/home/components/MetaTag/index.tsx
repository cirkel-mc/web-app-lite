import { Fragment } from 'react'

function MetaTags() {
  return (
    <>
      {/* <Primary Meta Tags */}
      <title>Cirkel - Play Together</title>
      <meta name="title" content="Cirkel - Play Together" />
      <meta
        name="description"
        content="Widen your skills, widen your friends. "
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://comrades-webapp.vercel.app/" />
      <meta property="og:title" content="Cirkel - Play Together" />
      <meta
        property="og:description"
        content="Widen your skills, widen your friends. "
      />
      <meta
        property="og:image"
        content="https://metatags.io/images/meta-tags.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://comrades-webapp.vercel.app/"
      />
      <meta property="twitter:title" content="Cirkel - Play Together" />
      <meta
        property="twitter:description"
        content="Widen your skills, widen your friends. "
      />
      <meta
        property="twitter:image"
        content="https://metatags.io/images/meta-tags.png"
      />

      {/* Meta Tags Generated with https://metatags.io */}
    </>
  )
}

export default MetaTags
