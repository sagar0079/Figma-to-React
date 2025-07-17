import { addDoc, collection } from "firebase/firestore";
import MyModal from "./Modal";
import { Formik, Form, Field } from "formik";
import {db} from "../config/firebase";

const AddUpdateContact = ({ isOpen, closeModal }) => {

    const AddContact = async (val) => {
        try {
            const contactRef = collection(db,'contacts');
            await addDoc(contactRef, val);
        } catch(error) {
            console.log(error);
        }
    }
  return (
    <div>
      <MyModal onOpen={isOpen} isclose={closeModal}>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(val) => {
            AddContact(val);
          }}
        >
          <Form className="flex flex-col">
            <div className="flex flex-col pt-5 px-4">
              <label htmlFor="fname">Name</label>
              <Field className="h-10 border text-black pl-4" name="name" />
            </div>
            <div className="flex flex-col pt-5 px-4">
              <label htmlFor="femail">Email</label>
              <Field className="h-10 border text-black pl-4" name="email" />
            </div>
            <button className="bg-yellowlight py-[6px] px-[6px] rounded-[5px] border self-end mr-4 mt-4">
              Add Contact
            </button>
          </Form>
        </Formik>
      </MyModal>
    </div>
  );
};

export default AddUpdateContact;
