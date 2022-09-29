import React from 'react'
import { Grid } from '@mui/material'



function Team() {
  let cardImg="https://img.freepik.com/premium-photo/university-park-beautiful-old-buildings-urban-landscape_666008-255.jpg?w=1060"
  
  let cardProImg="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"
  let teamData={
    cardImage:cardImg,
    cardProfile:cardProImg,
    userName:"Serena P.",
    jobTitle:'Business Development',
    jobDesc:"Our flexibility increased but our salaries didn't. Amazing to be able to travel anytime in a cost-effective way."
  }

  return (
    <>
      
      <Grid container spacing={2} className="flex justify-evenly">
  <Grid item xs={12} sm={4} lg={3} className="drop-shadow-2xl">
   <div className="profile-home-cards">
    <div className="card">
      <img src={teamData.cardImage} alt="" />
    </div>
    <div className=" flex">
      <div className='card-ProPic ml-2 '>
      <img src={teamData.cardProfile} alt="" />
      </div>
      <div className="w-11/12  ml-1 mt-1  card-text">
      <p className="ml-4 font-bold">{teamData.userName}</p>

      <p className="ml-4">{teamData.jobTitle} </p>
      </div>
    </div>
    <div>
      <p className="text-center">{teamData.jobDesc}</p>
    </div>
   </div>
  </Grid>
  <Grid item xs={12} sm={4} lg={3} className="drop-shadow-2xl">
  <div className="profile-home-cards">
    <div className="card">
      <img src={teamData.cardImage} alt="" />
    </div>
    <div className=" flex">
      <div className='card-ProPic ml-2 '>
      <img src={teamData.cardProfile} alt="" />
      </div>
      <div className="w-11/12  ml-1 mt-1  card-text">
      <p className="ml-4 font-bold">{teamData.userName}</p>

      <p className="ml-4">{teamData.jobTitle} </p>
      </div>
    </div>
    <div>
      <p className="text-center">{teamData.jobDesc}</p>
    </div>
   </div>
  </Grid>
  <Grid item xs={12} sm={8} lg={3} className="drop-shadow-2xl">
  <div className="profile-home-cards">
    <div className="card">
      <img src={teamData.cardImage} alt="" />
    </div>
    <div className=" flex">
      <div className='card-ProPic ml-2 '>
      <img src={teamData.cardProfile} alt="" />
      </div>
      <div className="w-11/12  ml-1 mt-1  card-text">
      <p className="ml-4 font-bold">{teamData.userName}</p>

      <p className="ml-4">{teamData.jobTitle} </p>
      </div>
    </div>
    <div>
      <p className="text-center">{teamData.jobDesc}</p>
    </div>
   </div>
  </Grid>
  
  
</Grid>
    </>
  )
}

export default Team
