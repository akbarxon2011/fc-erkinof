import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {ApiServise} from "../apiservise/apiservise";
import Box from "@mui/material/Box";
import ReactPlayer from 'react-player';
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {CheckCircle, FavoriteOutlined, MarkChatRead, Visibility} from "@mui/icons-material";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Videos from "../vidios/vidio";
const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null)
    const [relatedvideo, setRelatedvideo] = useState([])
    const {id} = useParams()
    console.log(videoDetail)

    useEffect(() => {
        const getData = async () => {
            try {
                const Data = await ApiServise.fetching(`videos?part=snippet,statistics&id=${id}`);
                setVideoDetail(Data.items[0]);

                const relateData = await ApiServise.fetching(`search?part=snippet&relatedVideoId=${id}&type=video`);
                setRelatedvideo(relateData.items);

            } catch (error) {
                console.log('error');
            }
        };

        getData();
    }, [id]);

    return (
        <Box minHeight={'90vh'} mb={10}>
            <Box display='flex' sx={{flexDirection: {xs: 'column', md: 'row'}}}>
                <Box width={{xs: '100%', md: '75%'}}>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${id}`}
                        className='react-player'
                        controls
                    />

                    {videoDetail?.snippet?.tags?.map((item, idx) => (
                        <Chip
                            label={item}
                            key={idx}
                            sx={{marginTop: '10px', cursor: 'pointer', ml: '10px'}}
                            variant='outlined'
                        />
                    ))}

                    <Typography variant='h5' fontWeight='bold' p={2}>
                        {videoDetail?.snippet?.title}
                    </Typography>
                    <Typography variant='subtitle2' p={2} sx={{opacity: 0.7}}>
                        {videoDetail?.snippet?.description}
                    </Typography>

                    <Stack direction='row' gap='20px' alignItems='center' py={1} px={2}>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <Visibility/>
                            {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                        </Stack>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <FavoriteOutlined/>
                            {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                        </Stack>
                        <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                            <MarkChatRead/>
                            {parseInt(videoDetail?.statistics?.commentCount).toLocaleString()} comments
                        </Stack>
                    </Stack>

                    <Stack direction='row' py={1} px={2}>
                        <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                            <Stack direction='row' alignItems='center' gap='5px' mt='5px'>
                                <Avatar
                                    alt={videoDetail?.snippet?.channelTitle}
                                    src={videoDetail?.snippet?.thumbnails?.default?.url}
                                />
                                <Typography variant='subtitle2' color='gray'>
                                    {videoDetail?.snippet?.channelTitle}
                                    <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                                </Typography>
                            </Stack>
                        </Link>
                    </Stack>
                </Box>

                <Box
                    width={{xs: '100%', md: '25%'}}
                    px={2}
                    py={{md: 1, xs: 5}}
                    justifyContent='center'
                    alignItems='center'
                    overflow={'scroll'}


                    maxHeight={'120vh'}
                >
                    <Videos videos={relatedvideo}/>
                </Box>
            </Box>
        </Box>

    );
}

export default VideoDetail;