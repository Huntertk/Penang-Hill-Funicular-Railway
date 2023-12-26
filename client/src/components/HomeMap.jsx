import React from 'react'

const HomeMap = () => {
  return (
    <div style={{margin:'2rem  auto', width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>

      <h1 style={{margin:'1rem'}}>Penang Hill</h1>
      
      <iframe width="360" height="400" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=11500%20Bukit%20Bendera,%20Penang,%20Malaysia+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe>
    </div>

  )
}

export default HomeMap