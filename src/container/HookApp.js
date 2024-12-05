import React, { useState } from "react";
import TableData from "../common/TableData";
import FormData from "../common/FormData";
const HookApp = () => {
  const [state, setState] = useState([
    {
      id: "",
      firstName: "",
      userName: "",
      emailId: "",
      gender: "",
      mobileNo: "",

      fieldEdit: false,
    },
  ]);
  const [userDetails, setUserDetails] = useState([]);
  // const onChangeHandler = (formData) => {
  //     // console.log('test', name)
  //     // let sat = state
  //     //      setState({...sat, [name] : value })
  //          if(formData.target.files && formData.target.files[0]) {
  //             let name=formData.target.name
  //             let img = URL.createObjectURL(formData.target.files[0])
  //             setState({ [name] : formData.target.files[0] })
  //         }else{
  //        const { name, value } = formData.target
  //        setState({ [name] : value })
  //         }

  // }
  const onChangeHandler = (formData) => {
    let sat = state;
   
      const { name, value } = formData.target;
      setState({ ...sat, [name]: value });
    
  };
  const editItem = (item) => {
    setState({ fieldEdit: true, ...item });
  };

  const deleteItem = (id) => {
    const deleteuserDetails = userDetails.filter((item) => item.id !== id);
    setUserDetails(deleteuserDetails);
  };
  const resetHandler = () => {
    valueEmpty();
  };

  const valueEmpty = () => {
    setState({
      id: "",
      firstName: "",
      lastName: "",
      userName: "",
      emailId: "",
      gender: "",
      mobileNo: "",
      fieldEdit: false,
      editId: "",
    });
  };

  // const submitHandler = () => {
  //     let newList = {
  //         id: 1 + Math.random(),
  //         firstName:state.firstName,
  //         lastName:state.lastName,
  //         userName:state.userName,
  //         emailId:state.emailId,
  //         gender:state.gender,
  //         mobileNo:state.mobileNo,
  //     }
  //  setUserDetails([...userDetails, newList])
  //     valueEmpty()
  // }

  const submitHandler = () => {
    // e.preventDefault();

    let newList = {
      id: 1 + Math.random(),
      firstName: state.firstName,
      lastName: state.lastName,
      userName: state.userName,
      emailId: state.emailId,
      gender: state.gender,
      mobileNo: state.mobileNo,
      profileImage: state.profileImage,
    };
    //userDetails.push(newList)
    // const userDetails = [...this.state.userDetails, newList]
    // setState({userDetails})
    setUserDetails([...userDetails, newList]);
    // this.setState({updateList},() => console.log(this.state.userDetails))
    valueEmpty();
  };

  const editHandler1 = () => {
    const oldusers = [...userDetails];
    const id = state.id;
    console.log("oldusers", oldusers, id);
    oldusers.map((item) =>
      item.id === state.id
        ? [
            (item.firstName = state.firstName),
            (item.lastName = state.lastName),
            (item.userName = state.userName),
            (item.emailId = state.emailId),
            (item.gender = state.gender),
            (item.mobileNo = state.mobileNo),
          ]
        : oldusers
    );
    setUserDetails([...userDetails]);
    valueEmpty();
  };

  const editHandler = () => {
   // event.preventDefault();

    const oldUsers = [...userDetails];

    const id = state.id;

    console.log("id", id);

    oldUsers.map((item) =>
      item.id === id
        ? [
            item.userName = state.userName,

            item.firstName = state.firstName,

            item.lastName = state.lastName,

            item.gender = state.gender,

            item.emailId = state.emailId,

            item.mobileNo = state.mobileNo,
          ]
        : oldUsers
    );

    console.log("old", oldUsers);

    setUserDetails([...userDetails]);
    
    valueEmpty();
  };

  return (
    <>
      <div style={{ margin: "5%" }}>
        <h5>Function / Hook Component</h5>
        <FormData
          state={state}
          onChangeHandler={onChangeHandler}
          resetHandler={resetHandler}
          submitHandler={submitHandler}
          editHandler={editHandler}
        />
        <TableData
          tab={userDetails}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      </div>
    </>
  );
};

export default HookApp;
