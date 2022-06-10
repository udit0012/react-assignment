import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({users}) => {
    
    return (
        <tbody>
            {users?.map((user) => {
                return <tr key={user.id}>
                    <td className='firstName'><Link to={`${user.id}`}>{user.first_name}</Link></td>
                    <td>{user.last_name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td><a href={user.web} target="_blank">{user.web}</a></td>
                </tr>
            })}
        </tbody>
    )
}

export default Users