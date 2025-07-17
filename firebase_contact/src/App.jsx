import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { IoMdSearch } from "react-icons/io";
import {collection, getDocs} from "firebase/firestore";
import {db} from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddUpdateContact from "./components/ContactData";

const App = () => {

  const [data,setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }


  useEffect(() => {
    const contactData = async () => {
      try {
        const getContact = collection(db, "contacts");
        const contactRef = await getDocs(getContact);
        const getList = contactRef.docs.map((val) => {
          return {
            id: val.id,
            ...val.data(),
          }
        });
        
        setData(getList);
        


      } catch (error) {
        console.log(error);
        
      };
    }

    contactData();
  },[])



  return <>
  <div className="mx-auto mt-[8px] max-w-[360px]">
        <Navbar />
        <div className="flex items-center gap-[12px] mt-5">
            <div className="relative flex items-center">
            <IoMdSearch  className="text-white text-3xl absolute ml-2"/>
            <input placeholder="Search Contact" 
            className="border-white bg-transparent border-[1px] rounded-md h-10 w-[295px] pl-10 text-white"/>
            </div>
            <div className=""> 
            <img onClick={openModal} src="/images/group.png" alt="" className="cursor-pointer" />
            </div>
        </div>
        <div className="mt-[18px]">
            {
              data.map((val) => (
                <ContactCard key={val.id} val={val}/>
              ))
            }
        </div>
        <AddUpdateContact
          isOpen = {isOpen}
          closeModal = {closeModal}
        />
  </div>
  </>
};

export default App;
