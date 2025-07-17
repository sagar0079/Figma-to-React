import { deleteDoc } from "firebase/firestore";
import {db} from "../config/firebase";
import {doc} from "firebase/firestore";

const ContactCard = ({val}) => {

  const deleteContact = async (id) => {
    try {
      const delContact = doc(db,'contacts',id);
      await deleteDoc(delContact, id);
    } catch(error) {
      console.log(error);
      
    }
  } 

    return <div key={val.id} className="h-16 bg-yellowdark flex rounded-[10px] items-center justify-between mt-3">
    <div className="ml-1 my-2 flex items-center h-12">
  <img className="ml-3 h-10" src="/images/person.png" alt="" />
  <div className="ml-3">
    <h3 className="font-medium text-base">{val.name}</h3>
    <span className="text-sm font-normal">{val.email}</span>
  </div>
</div>
  <div className="flex h-8 gap-4 mr-5 items-center">
    <img className="" src="/images/edit.png" alt="" />
    <img onClick={() => deleteContact(val.id)} src="/images/delete.png" alt="" />
  </div>
</div>
};

export default ContactCard;