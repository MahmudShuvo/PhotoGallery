import React from 'react'
import NavBar from '../components/NavBar'
import UploadForm from '../components/UploadForm'
import ImageGallery from '../components/ImageGallery'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <UploadForm/>
        <ImageGallery/>
    </div>
  )
}

export default Home