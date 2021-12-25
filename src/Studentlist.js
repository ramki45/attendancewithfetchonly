import React from 'react'
import { useEffect, useState } from "react";

import { Link } from 'react-router-dom';


function Studentlist() {
    const [students,setStudents] = useState([])

    useEffect(async() => {
        try {
            let studentData = await fetch("https://61c3d54df1af4a0017d990b1.mockapi.io/StudentData")
            let studentReport = await studentData.json();
            setStudents(studentReport)
        } catch (error) {
            console.log('error');
        }
        
    }, [])

    return (
        <>
    
         <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Student List</h1>
                        <a href=" " className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
        
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Avatar</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Avatar</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </tfoot>
                                    <tbody>{
                                       
                                            students.map((student)=> {
                                               return <tr>
                                                <td>{student.name}</td>
                                                <td><img src= {student.avatar}/></td>
                                                <td>
                                                   
                                                    <button className='btn btn-primary'>View</button>
                                                
                                                    </td>
                                                </tr>
                                            })
                                            
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

        
        
        
        
        </>
    )
}

export default Studentlist
