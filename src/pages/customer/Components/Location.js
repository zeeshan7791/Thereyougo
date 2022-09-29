import React from 'react'
import { Grid } from '@mui/material'

function Location() {
    let imgUrl='https://img.freepik.com/free-photo/milan-cathedral-duomo-vittorio-emanuele-ii-gallery-piazza-del-duomo-lombardy-italy_268835-724.jpg?w=900&t=st=1664359898~exp=1664360498~hmac=f6c93983239abc31d93c0422c233860653a9fcb2c35b505aee2911e03c4f1db2'
    let cityLocation={
        image:imgUrl,
        text:"London"
    }
  return (
    <>
       <br />
      <br />

      <div className="btm-border mt-8 "></div>

      {/* BEST LOCATIONS */}
      <h1 className="location-heading text-center font-bold text-2xl mt-10">BEST LOCATIONS</h1>

      <Grid container spacing={0} className="mt-10">
        <div className=" loc-City w-full flex justify-evenly">
          <Grid item xs={12} lg={2}>
            <div className="imgCity flex justify-center items-center"
             style={{
                backgroundImage: 'url(' + cityLocation.image + ')',
                // backgroundImage:
                //   url("+{cityLocation.image}+"),
              }}
            
            >
              <p className="text-white text-xl">{cityLocation.text}</p>
            </div>
          </Grid>
          <Grid item xs={12} lg={2}>
            <div className="imgCity flex justify-center items-center "
            style={{
                backgroundImage: 'url(' + cityLocation.image + ')',
                // backgroundImage:
                //   url("+{cityLocation.image}+"),
              }}
            >
            <p className="text-white text-xl">{cityLocation.text}</p>
            </div>
          </Grid>
          <Grid item xs={12} lg={2}>

            <div className="imgCity flex justify-center items-center"
             style={{
                backgroundImage: 'url(' + cityLocation.image + ')',
                // backgroundImage:
                //   url("+{cityLocation.image}+"),
              }}
            
            >
            <p className="text-white text-xl">{cityLocation.text}</p>
            </div>
          </Grid>
          <Grid item xs={12} lg={2}>
            <div className="imgCity flex justify-center items-center"
             style={{
                backgroundImage: 'url(' + cityLocation.image + ')',
                // backgroundImage:
                //   url("+{cityLocation.image}+"),
              }}
            
            >
            <p className="text-white text-xl">{cityLocation.text}</p>
            </div>
          </Grid>
          <Grid item xs={12} lg={2}>
            <div className="imgCity flex justify-center items-center"
             style={{
                backgroundImage: 'url(' + cityLocation.image + ')',
                // backgroundImage:
                //   url("+{cityLocation.image}+"),
              }}
            >
            <p className="text-white text-xl">{cityLocation.text}</p>
            </div>
          </Grid>
        </div>
      </Grid>

      <br />
      <br />
      <div className="btm-border"></div>
    </>
  )
}

export default Location
