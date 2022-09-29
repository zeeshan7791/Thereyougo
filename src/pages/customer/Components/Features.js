import React from 'react'
import { Grid } from '@mui/material'

function Features() {
  return (
    <>
       <Grid container spacing={1} className=" flex justify-evenly p-8 ">
        <Grid item xs={12} lg={3} className="bg-white p-6 flex justify-center drop-shadow-2xl">
          <div>
            <div className="flex justify-center">
              <i class="fas fa-check-double bg-white border-2 border-black rounded-full px-8 py-8 text-red-700 text-xl"></i>
            </div>

            <h3 className="text-center text-xl font-bold mt-2">Convenience</h3>
            <p className="text-center text-xl mt-2">
              Easily connect with other remote workers who wish to travel to
              your area, so your home never stays empty while you’re away and
              you save money on accommodations.{" "}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} className="bg-white p-6 flex justify-center drop-shadow-2xl">
          <div>
            <div className="flex justify-center">
              <i class="fas fa-check-double bg-white border-2 border-black rounded-full px-8 py-8 text-red-700 text-xl"></i>
            </div>

            <h3 className="text-center text-xl font-bold mt-2">Convenience</h3>
            <p className="text-center text-xl mt-2">
              Easily connect with other remote workers who wish to travel to
              your area, so your home never stays empty while you’re away and
              you save money on accommodations.{" "}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} lg={3} className="bg-white p-6 flex justify-center drop-shadow-2xl">
          <div>
            <div className="flex justify-center">
              <i class="fas fa-check-double bg-white border-2 border-black rounded-full px-8 py-8 text-red-700 text-xl"></i>
            </div>

            <h3 className="text-center text-xl font-bold mt-2">Convenience</h3>
            <p className="text-center text-xl mt-2">
              Easily connect with other remote workers who wish to travel to
              your area, so your home never stays empty while you’re away and
              you save money on accommodations.{" "}
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default Features
