import React from 'react';
import { Box, CardContent, CardMedia, Card} from "@mui/material";
import {Link} from "react-router";

function ChannelCard({ video }) {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '10px',
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

                <Link to={`/channel/${video.id.channelId}`}>
                    <CardMedia
                        image={video?.snippet?.thumbnails?.high?.url}
                        alt={video?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            height: '180px',
                            width: '180px',
                            mb: 2,
                        }}
                    />
                </Link>



            </CardContent>
        </Box>
    );
}

export default ChannelCard;
