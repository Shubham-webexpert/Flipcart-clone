import React from 'react'
import { Box,styled } from '@mui/material';
import { navData } from '../constants/data';

const HomeNavBar=styled(Box)`
    display:flex;
    justify-content:space-between;
    margin:55px 130px 0px 130px;
`;

const HomeNavBarItems=styled(Box)`
    padding:12px 8px;
`

const NavBar = () => {
console.log("navber rendered");
  return (
    <HomeNavBar>
        {
            navData.map(({url,text})=>(
                <HomeNavBarItems>
                    <img src={url} alt={text} style={{width:50,height:50}}/>
                    <p>{text}</p>
                </HomeNavBarItems>
            ))
        }
    </HomeNavBar>
  )
}

export default NavBar;