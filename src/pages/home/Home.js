import {useState } from 'react';
import TableItem from '../../components/tableItem/TableItem';
import AddStudent from '../../components/addStudent/AddStudent';
import './home.css'


export default function Home() {
    const [ data, setData] = useState([
        {
            id: 1,
            name: "Umer",
            rollNo: "101",
            email: "umer@gmail.com",
        },
        {
            id: 2,
            name: "Ali",
            rollNo: "102",
            email: "ali@gmail.com",
        },
        {
            id: 3,
            name: "Ahmed",
            rollNo: "103",
            email: "ahmed@gmail.com",

        },
    ])

    
     
    const onClickHanlder = (id) => {
        console.log("id in parent home", id);
        
       let  newdata =  data.filter(item => item.id !== id)
         setData(newdata)
        
    }

    const onAddHandler = (student) =>{
        console.log("student in home", student);
       setData([...data, {
              id: data.length + 1,
              name: student.name,
              rollNo: student.rollNo,
              email: student.email
       }]) 
    }

    return (
        <div className='home'>
            <AddStudent onAddHandler={onAddHandler} />
            <table >
                <tr>
                    <th>Id:</th>
                    <th>
                        Name:
                    </th>
                    <th>
                        Roll No:
                    </th>
                    <th>
                        Email:
                    </th>
                    <th>
                        Action
                    </th>
                </tr>

                {data.map((item) => {
                    return (
                        <TableItem item={item} onClickHanlder={onClickHanlder} />
                    )
                })}

            </table>

        </div>
    )
}
