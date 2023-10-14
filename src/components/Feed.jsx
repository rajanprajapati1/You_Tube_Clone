import React, { useContext, useEffect } from 'react'
import { Context } from '../Context/contextApi';
import LeftNav from './LeftNav';
import VideoCard from './VideoCard';
const Feed = ({video}) => {
  const {Loading,SearchResult} =   useContext(Context);
  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
  },[])
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
    <LeftNav/>
    <div className="grow w-[clac(100%-240px)] h-full overflow-y-auto bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
        {!Loading  && SearchResult && SearchResult?.map((item)=>{
          if(item?.type !== "video") return false;
          return (<React.Fragment>
               <VideoCard key={item?.video?.videoId}
                video={item?.video}
               />
          </React.Fragment>)
        })}
      </div>
    </div>
    </div>
  )
}

export default Feed
