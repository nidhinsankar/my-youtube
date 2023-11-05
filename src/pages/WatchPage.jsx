import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { closeMenu } from "../assets/appSlice";
import { useDispatch } from "react-redux";


const WatchPage = () => {

    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()
    console.log(searchParams.get('v'));


    useEffect(()=>{
        dispatch(closeMenu())
    },[])

    return (
        <div className="w-[1200px]  m-3">
            <iframe
                width="100%"
                height="600px"
                src={"https://www.youtube.com/embed/"+searchParams.get('v')}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </div>
    )
}

export default WatchPage