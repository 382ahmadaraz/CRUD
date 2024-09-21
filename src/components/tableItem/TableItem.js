import './table.css'

export default function TableItem(props) {
  
    let mydata = "my data in child"
    return (
        <tr>
        
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.rollNo}</td>
            <td>{props.item.email}</td>
            <button onClick={()=>props.onClickHanlder(props.item.id)} className="btn">Delete</button>
        </tr>
    )
}
