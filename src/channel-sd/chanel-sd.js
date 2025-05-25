import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import {CardContent, CardMedia, Stack} from "@mui/material";
import {useParams} from "react-router";
import { ApiServise } from "../apiservise/apiservise";
import Videos from "../vidios/vidio";

const ChanelSd = () => {
    const { id } = useParams();
    const [channell, setChannell] = useState(null);
        const [videos, setVideos] = useState([]);


    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiServise.fetching(`channels?part=snippet&id=${id}`);
                setChannell(data.items[0]);

                const relateData = await ApiServise.fetching(`search?part=snippet&channelId=${id}&order=date`);
                setVideos(relateData.items);


            } catch (error) {
                console.log('error:', error);
            }
        };

        getData();
    }, [id]);
    return (
        <Box style={{ paddingTop: '7px' ,position: 'relative' }}>
            <Stack>

                    <CardMedia
                        image={channell?.snippet?.thumbnails?.high.url}
                        alt={channell?.snippet?.title}
                        sx={{  width: '100%',
                            height: { xs: 140, md: 200 },}}
                    />
                <Box
                    sx={{
                        margin:"0 Auto",
                        position: 'absolute',
                        top: { xs: 100, md: 100 },
                        boxShadow: 'none',
                        borderRadius: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: { xs: '356px', md: '310px' },
                        height: '326px',
                        background: 'linear-gradient(190deg, rgba(152,3,142,1) 5%, rgba(53,41,201,1) 76%)',
                        paddingTop:"7px"
                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'white'
                        }}
                    >

                            <CardMedia
                                image={channell?.snippet?.thumbnails?.high?.url}
                                alt={channell?.snippet?.title}
                                sx={{
                                    borderRadius: '50%',
                                    height: '180px',
                                    width: '180px',
                                    mb: 2,
                                }}
                            />
                    </CardContent>
                </Box>


                <Box mt={5}  sx={{ paddingLeft: '16px', paddingRight: '16px' , marginTop: '260px'}}>
                    <Stack gap={2}>
                        <Videos videos={videos}/>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default ChanelSd;