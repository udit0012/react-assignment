import React from 'react'
import { Link, useParams } from 'react-router-dom'

const User = ({ users }) => {
    const [loading, setLoading] = React.useState(false)
    const { id } = useParams()
    console.log(id);
    const [user, setUser] = React.useState({})
    console.log(users[id]);
    React.useEffect(() => {
        const fetchuser = ()=>{
            setLoading(true)
            setUser(users[id])
            if(users[id]){
                setLoading(false)
            }
        }
        fetchuser()
    }, [users])
    return (
        <>
            {loading ? <div>Loading...</div> :
                <div>
                    <div className='user_head'><span className="material-icons">arrow_back</span><div className='head1'>Details: {user.first_name} {user.last_name}</div></div>
                    <div className='details'>
                        <div className='details_info'><span className='info_title'>First name:</span>  {user.first_name}</div>
                        <div className='details_info'><span className='info_title'>Last name:</span>  {user.last_name}</div>
                        <div className='details_info'><span className='info_title'>Company name:</span>  {user.company_name}</div>
                        <div className='details_info'><span className='info_title'>City:</span>  {user.city}</div>
                        <div className='details_info'><span className='info_title'>State:</span>  {user.state}</div>
                        <div className='details_info'><span className='info_title'>Zip:</span> {user.zip}</div>
                        <div className='details_info'><span className='info_title'>Email:</span>  {user.email}</div>
                        <div className='details_info'><span className='info_title'>Web:</span> <a href={user.web} target="_blank">{user.web}</a> </div>
                        <div className='details_info border_none'><span className='info_title'>Age:</span>  {user.age}</div>
                    </div>
                </div>}
        </>

    )
}

export default User