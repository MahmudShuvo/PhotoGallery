import React from 'react'

const ImageGallery = () => {
  return (
    <div className='grid md:grid-cols-3 justify-center gap-4 mt-10'>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p>Upload By:</p>
    <span>Created on:</span>
    
  </div>
</div>
    </div>
  )
}

export default ImageGallery