let Student2 = [
        {
            name: 'abhay singj',
            key:1,
            class:'4'
        },
        {
            name: 'sdsdsds',
            key:1,
            class:'a'
        }
]


const Student = (props)=>{
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.key2}</td>
            <td>{props.class}</td>
        </tr>
        
    )
}

function AD(){
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
            <tr></tr>
        </tbody>
    </table>
        {Student2.map((nam)=>{
            return <Student name={nam.name} key2={nam.key} class = {nam.class}/>
        })}
    
    </>)
}


export default AD;