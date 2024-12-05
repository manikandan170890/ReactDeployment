import React from 'react';
import TableData from '../common/TableData';
import FormData from '../common/FormData';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            id:'',
            firstName:'',
            lastName:'',
            userName:'',
            emailId:'',
            gender:'',
            mobileNo:'',
            profileImage:'',
            userDetails:[],
            fieldEdit: false
            
        }
    }

     onChangeHandler = (formData) => {
       
       
       const { name, value } = formData.target       
       this.setState({ [name] : value })
       
    }
    editItem = (item) => {
        this.setState({fieldEdit:true, ...item})
    }

    deleteItem = (id) => {
       const userDetails = this.state.userDetails.filter((item) =>(item.id !== id))
       this.setState({userDetails})
    }
    resetHandler = () => {
       // e.preventDefault();
        this.valueEmpty()   
    }

    valueEmpty = () => {
        this.setState({
            id:'',
            firstName:'',
            lastName:'',
            userName:'',
            emailId:'',
            gender:'',
            mobileNo:'',
            profileImage:'',
            fieldEdit:false,
            editId:''
    }) 
    }

    submitHandler = () => {
       // e.preventDefault();
        let userDetails = this.state.userDetails
        let newList = {
            id: 1 + Math.random(),
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            userName:this.state.userName,
            emailId:this.state.emailId,
            gender:this.state.gender,
            mobileNo:this.state.mobileNo,
            profileImage:this.state.profileImage
        } 
     userDetails.push(newList)
   // const userDetails = [...this.state.userDetails, newList]    
     this.setState({userDetails})
   // this.setState({updateList},() => console.log(this.state.userDetails))
   this.valueEmpty()
    }

    editHandler = () => {
       // e.preventDefault();
       const oldusers = [...this.state.userDetails]
       const id = this.state.id
       console.log('oldusers', oldusers, id)
        oldusers.map((item) => (item.id === this.state.id)?[        
            item.firstName=this.state.firstName,
            item.lastName=this.state.lastName,
            item.userName=this.state.userName,
            item.emailId=this.state.emailId,
            item.gender=this.state.gender,
            item.mobileNo=this.state.mobileNo,
            item.profileImage=this.state.profileImage
       ]:oldusers)
       this.setState({userDetails: [ ...this.state.userDetails]}); 
       this.valueEmpty()
    }

    // tableView = () => {
    //    return this.state.userDetails && this.state.userDetails.map((item) => {           
    //         return <tr key = {item.id}>
    //             <td>{Math.round(item.id)}</td>
    //             <td>{item.userName}</td>
    //             <td>{item.firstName}</td>
    //             <td>{item.lastName}</td>
    //             <td>{item.gender}</td>
    //             <td>{item.emailId}</td>
    //             <td>{item.mobileNo}</td>
    //             <td>
    //             <button type = 'button' className={'btn btn-success'} onClick= {()=>this.editItem(item)}>Edit</button> &nbsp; 
    //             <button type='button' className={'btn btn-danger'} onClick= {()=>this.deleteItem(item.id)}>Delete</button>
    //             </td>
    //             </tr>
    //     })
    // }
   

   
    render() {        
       
        return (
            <>
            <div style={{margin:'5%'}} >
                <h5>Class Component</h5>
            <FormData 
                state = {this.state}
                onChangeHandler = {this.onChangeHandler}
                resetHandler = {this.resetHandler}
                submitHandler = {this.submitHandler}
                editHandler = {this.editHandler}
                 />
                <TableData  tab = {this.state.userDetails} editItem = {this.editItem} deleteItem = {this.deleteItem} />
                </div>
            </>
        )
    }
}


export default App;