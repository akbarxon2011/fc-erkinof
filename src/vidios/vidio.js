import React from 'react';
import { Stack, Box } from "@mui/material";
import VideoCard from "../vedio-card/vedio-card";
import ChannelCard from "../ channel/channnel";
import Loader from "../loader/loader";

function Videos({videos}) {
    if (videos.length===0) {Loader}
    return (
        <Stack
            width={'100%'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={1}
        >
            {videos.map((item) => (
                <Box key={item?.id?.videoId}>
                    {item.id.videoId && <VideoCard video={item}/>}
                    {item.id.channelId && <ChannelCard video={item}/>}
                </Box>
            ))}
        </Stack>
    );
}
export default Videos;