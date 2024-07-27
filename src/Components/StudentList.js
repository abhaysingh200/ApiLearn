import Student from "./AddUser";


function Students(){
    return (<>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Key</th>
                <th>Class</th>
            </tr>
        </thead>
        <tbody>
        {Student.Student2.map((nam)=>{
            return <Student.Student name={nam.name} key2={nam.key} class = {nam.class}/>
        })}
        </tbody>
    </table>
       
    
    </>)
}

export default Students;