import React, { useState } from 'react'
import UsersList from './UsersList'

const Home = ({users,loading,setLoading}) => {
    
    const [filterUsers, setFilterUsers] = useState(users)
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [resetbtn, setResetbtn] = useState(false)

    const handleSearch = () => {
        if (search.length) {
            setLoading(true)
            const filteredUsers = users.filter(c => { return c.first_name.toLowerCase().includes(search.toLowerCase()) || c.last_name.toLowerCase().includes(search.toLowerCase()) })

            setFilterUsers(filteredUsers)
            setCurrentPage(1)
            setResetbtn(true)
            setLoading(false)
        }
        else{
            setFilterUsers(users)
        }
    }
    const resetFilters = ()=>{
        setLoading(true)
        setSearch("")
        setFilterUsers(users)
        setResetbtn(false)
        setCurrentPage(1)
        setLoading(false)
    }

    React.useEffect(()=>{
        setFilterUsers(users)
    },[users])

    return (
        <div className='homepage'>
            <div className='head1'>Users</div>
            <div className='search-bar'>
                <div className='search-input'><input type="text" placeholder='Search by first or last name' value={search} onChange={(e) => { setSearch(e.target.value) }} /></div>
                <div className='material-icons' onClick={handleSearch}>search</div>
                <div className='resetbtn' onClick={resetFilters}>{!resetbtn?"":"Reset Filter"}</div>
            </div>
            {loading ? <div style={{padding:"2rem 0"}}>Loading...</div> : <UsersList users={filterUsers} currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
        </div>
    )
}

export default Home