 import * as React from "react";
import Grid from "@mui/material/Grid";
import Signin from "./auth/Signin";
import User from "./customer/Components/User";
import Location from "./customer/Components/Location";
import Adventure from "./customer/Components/Adventure";
import Features from "./customer/Components/Features";
import Team from "./customer/Components/Team";

function Landing() {

  return (
    <>
    {/* NAVBAR */}
      <Grid className="navBar" container spacing={0}>
        <Grid className="flex  items-center" item xs={4}>
          <button className="ml-10">Login</button>
        </Grid>
        <Grid className=" navBar-text-wrapper flex justify-center items-center" item xs={4}>
          <p className="text-4xl">
            There
            <span className="text-red-600 text-4xl">you</span>
            go
            <span className=" span-text text-red-600 text-xs" >o</span>
          </p>
        </Grid>
        <Grid className=" navbar-btn-wrapper flex justify-end items-center" item xs={4}>
          <button className="btn-register btn-reg-border rounded-3xl bg-red-400 px-8 py-2 mr-10  text-white">
            <i class="fa-brands fa-linkedin mr-2"></i>
            REGISTER
            <i class="fa fa-arrow-right ml-2 " aria-hidden="true"></i>
          </button>
        </Grid>
      </Grid>


      {/* Hero Section */}
      <Grid className="hero-wrapper" container spacing={0}>
        <Grid item xs={12}>
          <div className=" hero-content-wrapper">
            <div className="text-wrapper text-white flex justify-center items-center">
              <div className="res-text-wrapper">
                <h1 className="text-6xl font-bold ">Remote Workers</h1>
                <h1 className="text-4xl font-bold text-center">
                  Home Exchange
                </h1>
                <p className="text-center text-white font-light">
                  Travel Anytime, Work from Anywhere
                </p>
              </div>
            </div>
            <div className=" hero-btn-wrapper flex justify-center">
              <button className="btn-reg-border rounded-3xl bg-red-400 px-8 py-1 mr-10  text-white">
                <i class="fa-brands fa-linkedin mr-2"></i>
                REGISTER
                <i class="fa fa-arrow-right ml-2 " aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </Grid>
      </Grid>




      {/* text */}

      <Grid className="here-sec-btext" container spacing={0}>
        <Grid className=" hero-sub-text-wrapper flex justify-end" item xs={12} lg={5}>
          <div className=" text-2xl mt-7">
            <h1 className="text-right">You’ve dreamed it.</h1>
            <h1 className="text-left">We’ve made it possible.</h1>
          </div>
        </Grid>
        <Grid className=" hero-parent-wrapper flex justify-start" item xs={12} lg={5}>
          <div className="hero-child-2-wrapper sub mt-7 ml-7">
            <p className="text-left">
              Tired of spending budget for expensive Airbnb or Booking? With
              Thereyougo, now you can safely and securely travel by exchanging
              your accommodation with other remote workers. How? You go at
              theirs, they come to yours.
            </p>
          </div>
        </Grid>
      </Grid>
{/* Recommend for you */}

<User/>
    {/*Location  */}
    
<Location/>


     {/* 6 easy step */}
      <h1 className="text-center font-bold uppercase text-3xl mt-10">
        6 easy steps to Plan Your Next Adventure
      </h1>
      <p className="text-center ">
        With Thereyougo, planning your exchange accommodations is easier and
        cost-effective:
      </p>
      <br />

      {/* Today Work */}
      {/* <div className=" ml-20	absolute -mt-10 border-8 border-white w-60 h-60 rounded-full bg-cover bg-white"
            id="userImg"
            style={{
              // backgroundImage: 'url(' + userImage + ')',
              backgroundImage:
                'url("https://scontent.fisb12-1.fna.fbcdn.net/v/t39.30808-6/306656449_1562317424170944_2849272535241967053_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Q-ebhRmN1zwAX9VNIke&_nc_ht=scontent.fisb12-1.fna&oh=00_AT9hvwRo0gdp2r7EHyPS9jpcByZI5rS0vDlnj8R2B9UF_g&oe=632FB3F3")',
            }}
          ></div> */}
          {/* Sign Up profile cards */}
   <Adventure/>

      <p className="text-center underline mt-4">Swap Guidelines</p>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid className="flex justify-center items-center" item xs={12}>
          <button className="btn-reg-border rounded-3xl bg-red-400 px-8 py-2 mr-10  text-white">
            <i class="fa-brands fa-linkedin mr-2"></i>
            REGISTER AND GET APPROVED
            <i class="fa fa-arrow-right ml-2 " aria-hidden="true"></i>
          </button>
        </Grid>
      </Grid>
      <br />
      <div className="btm-border"></div>
      <h1 className="text-center font-bold mt-6 text-2xl">
        WHY SWAP YOUR PLACE WITH THEREYOUGO
      </h1>
      <br />
      <br />
     <Features/>
      <br /> <br />
      <div className="btm-border "></div>
        <h1 className="text-center text-2xl mt-5">WHAT REMOTE WORKERS SAY ABOUT US</h1>
      <br /> <br />

<Team/>
<br /><br />
      <div className="btm-border "></div>
      <h1 className="text-center font-bold text-2xl uppercase mt-6">Travel for Less With Thereyougo</h1>
      <p className="text-center">Thereyougo is specifically connecting remote workers who wish to travel without having to allocate extra budget for accommodations.
With our platform, you can easily communicate with other like-minded people and travel for less.
</p>
<br /><br />
<Grid container spacing={2}>
  <Grid item xs={12} className="flex justify-center">
  <div>
    <p> 
      <i class="fas fa-check mr-2 bg-white border-2 border-black rounded-full px-2 py-2 text-red-700 text-xl"></i>
      No annual or hidden fees </p>
    <p className="mt-2">
      <i class="fas fa-check mr-2 bg-white border-2 border-black rounded-full px-2 py-2 text-red-700 text-xl">
        </i>
        Deposits from both parties for mutual protection </p>
    <p className="mt-2">
      <i class="fas fa-check mr-2 bg-white border-2 border-black rounded-full px-2 py-2 text-red-700 text-xl"></i>
      Success-based business model: flat deposit fee (20%)
      </p>
  </div>
  </Grid>
  <Grid className="flex justify-center items-center " item xs={12}>
          <button className=" mt-8 btn-reg-border rounded-3xl bg-red-400 px-8 py-2 mr-10  text-white">
            <i class="fa-brands fa-linkedin mr-2"></i>
            START SAVING
            <i class="fa fa-arrow-right ml-2 " aria-hidden="true"></i>
          </button>
        </Grid>
</Grid>
<br /><br/>
<div className="full-border"></div>
<br />
  <Grid container spacing={2}>
<Grid className="flex justify-center items-center" item xs={12}>
          <p className="text-4xl">
            There
            <span className="text-red-600 text-4xl">you</span>
            go
            <span className="text-red-600 text-xs">o</span>
          </p>
        </Grid>
</Grid>
<br /><br />
<div className="btm-border"></div>
<br />
<Grid container spacing={2}>
<Grid className="flex justify-center items-center" item xs={12}>
        <ul className="flex footer-menu" >
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Terms&Conditions</a></li>
          <li><a href="">Swap Guidelines</a></li>
        </ul>
        </Grid>
</Grid>

{/* Profilee */}




    </>
  );
}

export default Landing;
