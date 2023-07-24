import React from 'react';
import { InputBase, Box, styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
    background:#FFF;
    width:38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
`;

const SearchIconWrapper = styled(Box)`
    color:blue;
    padding:5px;
`
const Search = () => {
    return (
        <>
            <SearchContainer>
                <InputSearchBase
                    placeholder='Search for products,brands,more'
                />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
            </SearchContainer>
        </>
    )
}

export default Search;