import React from 'react';
import { Stack, Box } from '@mui/material';
import { colors, logo } from '../constants';
import {Link} from 'react-router';
import SearchBar from "../search-bar/search-bar";

const Navbar = () =>  {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                position: 'sticky',
                p: 1,
                top: 0,
                zIndex: 999,
                color: 'white',
                background: colors.bgColor,
            }}
        >
            <Link to="/">
                <img
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    src={logo}
                    alt="logo"
                />
            </Link>
            <SearchBar />
            <Box />
        </Stack>
    );
};

export default Navbar;
