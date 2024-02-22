import React from 'react'
import { useState, useEffect } from "react";
import {  ChannelCard } from "./";
const ChannelDetail = () => {
    const [ChannelDetail, setChannelDetail] = useState(null);
    console.log(ChannelDetail);
  return (
    <div>
       <ChannelCard ChannelDetail={ChannelDetail} marginTop="-110px" />
    </div>
  )
}

export default ChannelDetail
