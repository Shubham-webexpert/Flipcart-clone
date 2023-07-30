import React from 'react'
import { Box,Typography,styled } from '@mui/material';
import { navData } from '../constants/data';

const HomeNavBar=styled(Box)`
    display:flex;
    justify-content:space-between;
    margin:55px 130px 0px 130px;
`;

const HomeNavBarItems=styled(Box)`
    padding:12px 8px;
    text-align:center;
`

const Text=styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
`

const NavBar = () => {
  return (
    <HomeNavBar>
        {
            navData.map(({url,text},index)=>(
                <HomeNavBarItems key={index}>
                    <img src={url} alt={text} style={{width:64}}/>
                    <Text>{text}</Text>
                </HomeNavBarItems>
            ))
        }
    </HomeNavBar>
  )
}

export default NavBar;