import React from 'react'
import { useState, useEffect } from "react";
import {  ChannelCard } from "./";
const ChannelDetail = () => {
    const [ChannelDetail, setChannelDetail] = useState(null);
  return (
    <div>
       <ChannelCard ChannelDetail={ChannelDetail} marginTop="-110px" />
    </div>
  )
}

export default ChannelDetail
