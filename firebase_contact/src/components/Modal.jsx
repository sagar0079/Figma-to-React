import { IoMdClose } from "react-icons/io";

const MyModal = ({onOpen, isclose, children}) => {
    return <>
    {onOpen && (
        <div className="fixed z-60 bg-red-800 max-w-[348px] w-full h-48">
           <div className="relative h-60 bg-white z-60 mt-[-270px] ml-3">
    <IoMdClose onClick={isclose} className="absolute right-2 top-2 cursor-pointer text-xl"/>
        {children}
    </div>
        
        </div>
    )}
    </>
}

export default MyModal;