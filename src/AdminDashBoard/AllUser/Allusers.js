import React, { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { toast } from "react-hot-toast";
import ConfirmationModal from './../../Components/Share/ConfirmationModal/ConfirmationModal';

const Allusers = () => {
  const [deletingUser, setDeletingUser] = useState(null);

  const closeModal = () => {
    setDeletingUser(null);
  };

   
  const {data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async() =>{
        const res = await fetch('https://file-upload-server-gitfair.glitch.me/users');
        const data = await res.json();
        return data;
    }
});


const handleDeleteUser = user =>{
  console.log(user);
  fetch(`https://file-upload-server-gitfair.glitch.me/user/${user?._id}`, {
          method: 'DELETE', 
          headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res => res.json())
      .then(data => {

        if(data.deletedCount > 0){
          
          toast.success(`User ${user.name} deleted successfully`)
          refetch();
      }
        
      })
}



  return (
    <div className="bg-white  lg:ml-10 lg:mr-10">
      <h2 className="text-3xl text-black mb-4  font-semibold">
        All Users
      </h2>
      <div className=" bg-white  overflow-x-scroll lg:overflow-x-hidden rounded-md ">
        <table className="table w-full ">
          <thead >
            <tr >
              <th className="text-xl">No</th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Email</th>
              <th className="text-xl">Status</th>
              <th className="text-xl" >Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i ) => <tr key={user._id}>
                <th>{i+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.premiumUser ? 'premium user' : ' UnPaid user'}</td>
                {/* <td>{pro.premiumUser ? 'premium user' : 'user'}</td> */}
                <td>
                <label  onClick={() =>setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-danger  text-[20px] text-center rounded-md pb-3">
                Delete
                </label>               
                    
                 

                </td>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
      {deletingUser && (
        <ConfirmationModal
        title={`Are you sure you want to delete`}
        message={`If you Delete ${deletingUser.name}. it cannot be undone`}
        successAction = {handleDeleteUser}
        successButtonName="Delete"
        modalData = {deletingUser}
        closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div> 

    
  );
};

export default Allusers;
