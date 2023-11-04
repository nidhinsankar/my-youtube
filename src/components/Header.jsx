import { useDispatch } from "react-redux"
import { toggleMenu } from "../assets/appSlice"


const Header = () => {

    const dispatch = useDispatch()

    const handleMenuToggle = () =>{
        dispatch(toggleMenu())
    }

    return (
        <div className="grid grid-flow-col py-3 px-2 shadow-lg items-center">
            <div className="flex col-span-1 items-center">
                <img
                    className="h-8 mx-3"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
                    alt="menu"
                    onClick={()=>handleMenuToggle()}
                />
                <img
                    className="h-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-oItycwznL-_N-twiWaT3y3m8lonfj6xjA&usqp=CAU"
                    alt="youtube"
                />
            </div>
            <div className="col-span-10 text-center">
                <input
                    className="border border-gray-300 w-1/3 px-3 py-2 rounded-l-full"
                    type="text"
                    name="search"
                    id="search-input"
                />
                <button className="px-3 py-2 border border-gray-300 bg-gray-300 rounded-r-full">search</button>
            </div>
            <div className="col-span-1">
                <img 
                    className="h-8"
                    src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
                    alt="user-icon"
                 />
            </div>
        </div>
    )
}

export default Header