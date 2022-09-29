import React from 'react'
import { Grid } from '@mui/material'

function Adventure() {
  let adventure={
    advName:"Sign Up",
    advDesc:"To preserve your identity, your full advName and company won't be shared with other remote workers until the exchange is agreed."
  }
  return (
    <>
         <Grid container spacing={2} className="flex justify-evenly ">
        <Grid item xs={12} lg={3} className="drop-shadow-2xl">
          <div>
            <div className="icon flex justify-center relative top-11  ">
              <i class="fab fa-linkedin bg-white border-2 border-black rounded-full px-8 py-8 text-red-700 text-xl"></i>
            </div>
            <div className="card-items rounded-md px-2 py-12 bg-white">
              <h1 className="text-center font-bold  text-2xl mt-2">{adventure.advName}</h1>
              <p className="text-center text-xl">
                {adventure.advDesc}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} className="drop-shadow-2xl">
          <div>
            <div className="icon flex justify-center relative top-11">
              <i class="fab fa-linkedin bg-white border-2 border-black rounded-full px-8 py-8 text-red-700 text-xl"></i>
            </div>
            <div className="card-items  rounded-md px-2 py-12 bg-white ">
              <h1 className="text-center font-bold  text-2xl mt-2">{adventure.advName}</h1>
              <p className="text-center text-xl">
              {adventure.advDesc}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} className="drop-shadow-2xl">
          <div>
            <div className="icon flex justify-center relative top-11">
              <i class="fab fa-linkedin bg-white border-2 border-black rounded-full px-8 py-8 text-red-700 text-xl"></i>
            </div>
            <div className="card-items  rounded-md px-2 py-12 bg-white">
              <h1 className="text-center font-bold  text-2xl mt-2">{adventure.advName}</h1>
              <p className="text-center text-xl">
              {adventure.advDesc}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2} className="flex justify-evenly ">
      <Grid item xs={12} lg={3} className="drop-shadow-2xl">
          <div>
            <div className="icon flex justify-center relative top-11  ">
              <i class="fab fa-linkedin bg-white border-2 border-black rounded-full px-8 py-8 text-red-700 text-xl"></i>
            </div>
            <div className="card-items  rounded-md px-2 py-12 bg-white">
              <h1 className="text-center font-bold  text-2xl mt-2">{adventure.advName}</h1>
              <p className="text-center text-xl">
              {adventure.advDesc}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} className="drop-shadow-2xl">
          <div>
            <div className="icon flex justify-center relative top-11">
              <i class="fab fa-linkedin bg-white border-2 border-black rounded-full px-8 py-8 text-red-700 text-xl"></i>
            </div>
            <div className="card-items  rounded-md px-2 py-12 bg-white ">
              <h1 className="text-center font-bold  text-2xl mt-2">{adventure.advName}</h1>
              <p className="text-center text-xl">
                 {adventure.advDesc}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} className="drop-shadow-2xl">
          <div>
            <div className="icon flex justify-center relative top-11">
              <i class="fab fa-linkedin bg-white border-2 border-black rounded-full px-8 py-8 text-red-700 text-xl"></i>
            </div>
            <div className="card-items  rounded-md px-2 py-12 bg-white">
              <h1 className="text-center font-bold  text-2xl mt-2">{adventure.advName}</h1>
              <p className="text-center text-xl">
                 {adventure.advDesc}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Adventure
