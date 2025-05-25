import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {ApiServise} from "../apiservise/apiservise";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Videos from "../vidios/vidio";
import Box from "@mui/material/Box";

const Search = () => {
    const [videos, setVideos] = useState([])
    const {id} = useParams()
    console.log(videos)
    useEffect(() => {
        ApiServise.fetching(`search?part=snippet&q=${id}`)
            .then(data => setVideos(data.items))
    }, [id]);
    return (
        <Box p={2} mt={'50px'} sx={{height:'120vh'}}
        >
            <Container maxWidth={'90%'}>
                <Typography variant={'h4'} sx={{fontWeight:'bold'}}>
                    Search for result <span style={{color:"darkblue"}}>{id}</span>
                </Typography>
                <Videos videos={videos}/>
            </Container>
        </Box>

    );
}

export default Search;