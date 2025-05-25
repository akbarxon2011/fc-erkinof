import './App.css';
import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../navbar/navbar";
import Main from "../main/main";
import {Route} from "react-router";
import {Routes} from "react-router";
import Search from "../search/search";
import VideoDetail from "../vidio-detail/vedio-detail";
import ChanelSd from "../channel-sd/chanel-sd";


const App = () => {
    return (
        <Box>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/search/:id' element={<Search/>}/>
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/channel/:id' element={<ChanelSd/>}/>

            </Routes>

        </Box>


    );
};

export default App;




















