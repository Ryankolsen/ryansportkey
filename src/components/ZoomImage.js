import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom'; //npm install react-inner-image-zoom

export default function ZoomImage({imageSm, imageLg}) {
  return (
      <div>
      <InnerImageZoom  
          src= {imageSm}
          zoomSrc= {imageLg}
          style={{ width:'500px' }}
       >         
      </InnerImageZoom >
    
      </div>
  )
}