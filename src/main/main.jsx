import React, {useEffect, useState} from 'react';
import Category from "../Category/Category";
import Box from "@mui/material/Box";
import {Container, Stack, Typography} from "@mui/material";
import {colors} from "../constants";
import {ApiServise} from "../apiservise/apiservise";
import Videos from "../vidios/vidio";



function Main() {
    const [selectCategory, setSelectCategory] = useState('Sport')
    const [videos, setVideos] = useState([]);
    const selectedcategory = category =>{setSelectCategory(category)}

    console.log(selectCategory)
    useEffect(() => {

        ApiServise.fetching(`search?part=snippet&q=${selectCategory}`)
            .then(data => setVideos(data.items))
    }, [selectCategory]);

    return (

        <Stack>
            <Category selectCategory={selectCategory} selectedcategory={selectedcategory} />
            <Box p='2' sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant='h4' style={{fontWeight: 'bold', marginTop: '15px'}}>
                        {selectCategory} <span style={{color: colors.fontColor}}>videos</span>
                    </Typography>
                </Container>

                <Videos videos={videos}/>

            </Box>
        </Stack>
    );
}

export default Main;