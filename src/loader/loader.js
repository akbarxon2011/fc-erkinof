import React from 'react';
import {Box, Stack} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';


function Loader() {
    return (
        <Box>
            <Stack style ={{marginTop:"25px"}} alignItems={'center'} height={'80vh'}>
                <CircularProgress />
            </Stack>

        </Box>
    );
}

export default Loader;