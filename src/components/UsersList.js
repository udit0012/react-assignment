import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Users from './Users'

const UsersList = ({ users,currentPage,setCurrentPage }) => {
    // const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [currentUsers, setCurrentUsers] = React.useState([])

    const indexOfLastUser = currentPage * postsPerPage;
    const indexOfFirstUser = indexOfLastUser - postsPerPage;

    React.useEffect(() => {
        const returnusers = () => {
            const temp = []
            if(users){
                for (let i = indexOfFirstUser;( i < indexOfLastUser && i<users.length); i++) {
                    temp.push(users[i])
                }
                setCurrentUsers(temp)
            }
        }
        returnusers()
    }, [currentPage, users])


    useEffect(() => {
        if (users) {
            console.log(Math.ceil(users.length / 10), users.length,currentUsers.length);
        }
    }, [users,currentPage])


    const FunctionSort = (name) => {
        return (a, b) => {
            if (a[name] > b[name]) {
                console.log(1);
                return 1;
            }
            else if (a[name] < b[name]) {
                return -1;
            }
            return 0;
        }
    }

    const handleSort = (name) => {
        console.log(name, "sort");
        // setUsers(users.sort(FunctionSort(name)))
    }
    const handleReverseSort = (name) => {
        console.log(name, "reverssort");
        // setUsers(users.sort(FunctionSort(name)))
        // setUsers(users.reverse())
    }

    const tableHeading = (name, id) => {
        return <div>
            {name}
            <div className='filter-icons'>
                <div onClick={() => handleSort(id)} className="arrow arrow-up"></div>
                <div onClick={() => handleReverseSort(id)} className="arrow arrow-down"></div>
            </div>
        </div>
    }

    return (
        <div>
            <table className='users-table'>
                <thead>
                    <tr>
                        <th>{tableHeading("First Name", "first_name")}</th>
                        <th>{tableHeading("Last Name", "last_name")}</th>
                        <th>{tableHeading("Age", "age")}</th>
                        <th>{tableHeading("Email", "email")}</th>
                        <th>{tableHeading("Website", "web")}</th>
                    </tr>
                </thead>
                <Users users={currentUsers} />
            </table>
            <Pagination postsPerPage={postsPerPage} totalpages={Math.ceil(users.length / postsPerPage)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default UsersList