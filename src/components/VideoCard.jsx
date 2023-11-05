import { useEffect, useState } from "react"
import { YOUTUBE_API_URL } from "../assets/constants"
import { Link } from "react-router-dom"



const Card = ({info}) => {

    console.log(info)
    const {id,snippet,statistics} = info

    return (
        <div className="w-72 shadow-xl">
            <img className="w-full" src={snippet.thumbnails.medium.url} />
            <div className="p-3">
            <p>{snippet.title}</p>
            <p className="my-3">{snippet.channelTitle}</p>
            <p>{statistics.viewCount} views</p>
            </div>
        </div>
    )
}



const VideoCard = () => {

    const [videos,setVideos] = useState([])

    const getVideos = async() =>{
        const data = await fetch(YOUTUBE_API_URL)
        const json = await data.json()
        setVideos(json.items)
    }

    useEffect(()=>{
        getVideos()
    },[])

    return (
        <div className="flex flex-wrap justify-between gap-y-4">
            {videos?.map(video => (
                <Link to={`/watch?v=${video.id}`}>
                    <Card key={video.id} info={video} />
                </Link>
            ))}
        </div>
    )
}

export default VideoCard