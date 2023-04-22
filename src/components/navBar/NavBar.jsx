import React, { useContext } from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';
import './navBar.scss'
import { DarkModeContext } from '../../context/darkModeContext';

const NavBar = () => {

  const {darkMode,toggle} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="left">
      <Link to='/' style={{textDecoration:'none',color:"inherit"}} >
      <span>lamasocial</span> 
      </Link>  
      <HomeOutlinedIcon />
      <div onClick={toggle}>
        {
         darkMode ? <WbSunnyOutlinedIcon /> :<DarkModeOutlinedIcon />
        }  
      </div>
      
      <GridViewOutlinedIcon />
      <div className="search">
         <SearchOutlinedIcon />
         <input type="text" />
      </div>
      </div> 
      
      <div className="right">
      <PersonOutlinedIcon />
      <EmailOutlinedIcon />
      <NotificationsOutlinedIcon />
      <div className="user">
       <img src="https://images.pexels.com/photos/1316484/pexels-photo-1316484.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
     <span>John Doe</span>
      </div>
      </div>
    </div>
  )
}

export default NavBar
