import React from 'react'
import Grid from "@mui/material/Grid";

function User() {
    let imgUrl =
    "https://img.freepik.com/free-photo/group-asia-young-creative-people-smart-casual-wear-discussing-business-brainstorming_7861-3066.jpg?w=1060&t=st=1663754483~exp=1663755083~hmac=81a602e3584ed752ce5ecf47593772e3257e75c22f9e854f41135ddf49e166e5";

  let proUrl =
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1663758693~exp=1663759293~hmac=48b90d32fd51fbe4370a9eacf9cbcebdf26064e4a7970ada31c283003f7a40a4";
  let card = {
    image: imgUrl,
    profile: proUrl,
    name: "Nicolas",
    profile_desc: "Account Executive   |    Barcelona, Spain",
  };
  console.log(card);

  return (
    <>
      <div className="btm-border "></div>
       <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1 className="text-center font-bold text-2xl mt-8">
            RECOMMENDED FOR YOU
          </h1>
        </Grid>
        <div className="mt-4"></div>
        <Grid item xs={12} lg={4}>
          <div className="card-img ml-5">
            <img src={card.image} alt="" />
            <div className="profile-img">
              <img src={card.profile} alt="" />
              <p className="ml-4">{card.name}</p>
              <p className="ml-4">{card.profile_desc}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className="card-img ml-5">
            <img src={card.image} alt="" />
            <div className="profile-img">
              <img src={card.profile} alt="" />
              <p className="ml-4">{card.name}</p>
              <p className="ml-4">{card.profile_desc}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}>
          <div className="card-img ml-5">
            <img src={card.image} alt="" />
            <div className="profile-img">
         

              <img src={card.profile} alt="" />
              <p className="ml-4">{card.name}</p>
              <p className="ml-4">{card.profile_desc}</p>
             
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default User
