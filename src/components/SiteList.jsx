import React from 'react'

function SiteList({site}) {
  return (
    <div><h1>I am {site.siteName} and I am a {site.desc}</h1></div>
  )
}

export default SiteList