import React, { useState } from 'react';


const FormData = (props) => {

    const [errMsg, setErrMsg] = useState([{}])

    const onChangeHandler = (e) => {
       // const { name, value } = e.target
        props.onChangeHandler(e)             
    }


    const validation = () => { 
        let error = true 
        let msg = {} 
        console.log('data', props.state.firstName)
             
        if(props.state.firstName === '' || props.state.firstName ===  undefined) {           
            msg.firstName= 'Enter your FirstName'
                error = false
        }  
        if(props.state.lastName === '' || props.state.lastName ===  undefined) {            
            msg.lastName= 'Enter your LastName'
                error = false
        }  
        if(props.state.userName === '' || props.state.userName ===  undefined) {            
            msg.userName= 'Enter your UserName'
                error = false
        } 
        if(props.state.emailId === '' || props.state.emailId ===  undefined) {            
            msg.emailId= 'Enter your Email Id'
                error = false
        } 
        if(props.state.gender === '' || props.state.gender ===  undefined) {            
            msg.gender= 'Enter your Gender'
                error = false
        } 
        if(props.state.mobileNo === '' || props.state.mobileNo ===  undefined) {            
            msg.mobileNo= 'Enter your Mobile No'
                error = false
        } 
        if(props.state.profileImage === '' || props.state.profileImage ===  undefined) {            
            msg.profileImage= 'Upload Profile Image'
                error = false
        } 
        
        setErrMsg([msg]) 
        return error
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('validatiohn', validation())
        if(validation()){
            setErrMsg([{}])
            props.submitHandler()   
        } 
    }

    const editHandler = (e) => {
        e.preventDefault(); 
        if(validation()){
            setErrMsg([{}])           
            props.editHandler()
        }
    }

    const resetHandler = (e) => {
        e.preventDefault();
        props.resetHandler()   
    }
console.log(errMsg)
    return (
        <>
        <form>
                <div className={"mb-3 row"}>
                    <label   className={"col-sm-2 col-form-label"}>First Name</label>
                    <div className="col-sm-5">
                    <input type='text'  required className={"form-control-plaintext"} name='firstName' placeholder='First Name' value={props.state.firstName || ''} onChange={(e) => onChangeHandler(e)} />
                   {errMsg[0].firstName && <span className={"text-danger"}>{errMsg[0].firstName}</span>}
                    </div>
                    
                </div>
                <div className={"mb-3 row"}>
                    <label className={"col-sm-2 col-form-label"}>Last Name</label>
                    <div className="col-sm-2">
                    <input type='text' className={"form-control-plaintext"} name='lastName' placeholder='Last Name' value={props.state.lastName || ''} onChange={onChangeHandler}/>
                    {errMsg[0].lastName && <span className={"text-danger"}>{errMsg[0].lastName}</span>}
                    </div>
                </div>
                <div className={"mb-3 row"}>
                    <label className={"col-sm-2 col-form-label"}>Username</label>
                    <div className="col-sm-2">
                    <input type='text' className={"form-control-plaintext"} name='userName' placeholder='Username' value={props.state.userName || ''} onChange={onChangeHandler}/>
                    {errMsg[0].userName && <span className={"text-danger"}>{errMsg[0].userName}</span>}
                    </div>
                </div>
                <div className={"mb-3 row"}>
                    <label className={"col-sm-2 col-form-label"}>Email ID</label>
                    <div className="col-sm-2">
                    <input type='text' className={"form-control-plaintext"} name='emailId' placeholder='Email ID' value={props.state.emailId || ''} onChange={onChangeHandler}/>
                    {errMsg[0].emailId && <span className={"text-danger"}>{errMsg[0].emailId}</span>}
                    </div>
                </div>
                <div className={"mb-3 row"}>
                    <label className={"col-sm-2 col-form-label"}>Gender</label>
                    <div className="col-sm-2">
                    <select className={'form-select'} value={props.state.gender || ''} name='gender' onChange={onChangeHandler}>
                    <option value="" >Select</option>
                        <option value="male" >Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errMsg[0].gender && <span className={"text-danger"}>{errMsg[0].gender}</span>}
                    </div>
                </div>
                <div className={"mb-3 row"}>
                    <label className={"col-sm-2 col-form-label"}>Mobile No</label>
                    <div className="col-sm-2">
                    <input type='text' className={"form-control-plaintext"} name='mobileNo' placeholder='Mobile No' value={props.state.mobileNo || ''} onChange={onChangeHandler}/>
                    {errMsg[0].mobileNo && <span className={"text-danger"}>{errMsg[0].mobileNo}</span>}
                    </div>
                </div>
                <div className={"mb-3 row"}>
                    <label className={"col-sm-2 col-form-label"}>Profile Photo</label>
                    <div className="col-sm-2">
                    <input type='file' className={"form-control-plaintext"} name='profileImage' placeholder='Upload image' value={''} onChange={onChangeHandler}/>
                    {errMsg[0].profileImage && <span className={"text-danger"}>{errMsg[0].profileImage}</span>}
                    </div>
                </div>
                <div className={"offset-md-2"}>
                    { (props.state.fieldEdit) ? 
                    <button type="submit" className={"btn btn-primary mb-3"} onClick= {(e)=>editHandler(e)}>Edit User</button> 
                   : 
                    <button type="submit"  className={"btn btn-primary mb-3"} onClick= {(e)=>submitHandler(e)}>Add User</button>
                    }
                   
                   &nbsp; <button type="submit" className={"btn btn-primary mb-3"} onClick= {(e)=>resetHandler(e)}>Reset</button>
                </div>
                </form>
        </>
    )
}


export default FormData