import React from 'react';


const TableData = (props) => {


    const editItem = (item) => {       
       props.editItem(item)
     }
 
     const deleteItem = (id) => {
       props.deleteItem(id)
     }

    const tableView = () => {
        return props.tab && props.tab.map((item) => {           
             return <tr key = {item.id}>
                 <td>{Math.round(item.id)}</td>
                 <td>{item.userName}</td>
                 <td>{item.firstName}</td>
                 <td>{item.lastName}</td>
                 <td>{item.gender}</td>
                 <td>{item.emailId}</td>
                 <td>{item.mobileNo}</td>
                 <td><img src = {item.profileImage && URL.createObjectURL(item.profileImage)} width="50" height="50" alt='img'/></td>
                 <td>
                 <button type = 'button' className='btn btn-success' onClick= {()=>editItem(item)}>Edit</button> &nbsp; 
                 <button type='button' className='btn btn-danger' onClick= {()=>deleteItem(item.id)}>Delete</button>
                 </td>
                 </tr>
         })
     }   
    return (
        <>
         <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>UserName</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Gender</th>
                            <th>Email ID</th>
                            <th>Mobile No</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableView()}
                    </tbody>
                </table>
        </>
    )
}


export default TableData