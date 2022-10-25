import React from 'react'

function BannerStatic({imgArr, bg}) {
  return (
    <div style={{backgroundColor: bg}} className="banner-static">
        {imgArr && (
            imgArr.map((img,i) => {
                return <img src={img} alt="image" key={i}/>
            })
        )}
    </div>
  )
}

export default BannerStatic