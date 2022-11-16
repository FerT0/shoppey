import SideBar from "../components/SideBar"
import axios from "axios"
import React, { useState, useEffect } from "react"


export default function AdminUsers() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [randomLatest, setRandomLatest] = useState([])
    const [randomOldest, setRandomOldest] = useState([])
    const [usersData, setUsersData] = useState([])
    let actualLimit
    const [search, setSearch] = useState('')
    const [actualCategory, setActualCategory] = useState("");
    const [limit, setLimit] = useState();
    
    useEffect(() => {
        let randomLatestNum = Math.floor(Math.random() * 100);
        let randomOldestNum = Math.floor(Math.random() * 100);
        setLoading(true)
        axios({
            method:"GET",
            url:"https://dummyjson.com/users?limit=12"
        }).then(res => {
            setData(res.data)
            setUsersData(res.data.users)
            setLimit(res.data.limit)
            setActualCategory("first-page")
            
            
        }).catch(e => console.log(e))
        .finally(() => setLoading(false));

        axios({
            method:"GET",
            url:`https://dummyjson.com/users/${randomLatestNum}`
        }).then(res => {
            setRandomLatest(res.data)
            
            
        }).catch(e => window.location.reload())
        .finally(() => setLoading(false));

        axios({
            method:"GET",
            url:`https://dummyjson.com/users/${randomOldestNum}`
        }).then(res => {
            setRandomOldest(res.data)
            
            
        }).catch(e => window.location.reload())
        .finally(() => setLoading(false));


    
    }, [])


    const test = () => {
        console.log(randomLatest);
        console.log(randomOldest);
        console.log(data);
    }

    const loadMore = () => {
        actualLimit = data.limit
        console.log(actualLimit);
        actualLimit += 12;
        
        axios({
            method:"GET",
            url:`https://dummyjson.com/users?limit=${actualLimit}`
        }).then(res => {
            setData(res.data)
            setUsersData(res.data.users)
            
        }).catch(e => console.log(e))
        .finally(() => setLoading(false));
    }

    const searchUser = event => {
        setActualCategory("another-page")
        event.preventDefault();
        axios({
            method:"GET",
            url:`https://dummyjson.com/users/search?q=${search}`
        }).then(res => {
            setData(res.data)
            setUsersData(res.data.users)
        }).catch(e => console.log(e))

    }

    useEffect(() => {
        if (search === ""){
            axios({
                method:"GET",
                url:"https://dummyjson.com/users?limit=12"
            }).then(res => {
                setData(res.data)
                setUsersData(res.data.users)
                setLimit(res.data.limit)
                setActualCategory("first-page")
                
            }).catch(e => console.log(e))
            .finally(() => setLoading(false));

        } else {
            setActualCategory("another-page")
        }
    }, [search])


    return (
        <div>
            {loading && (
                <div>
                    <h1>Loading...</h1>
                </div>
            )}
            <SideBar />
            <div className="admin-info">
                <h1>Total users</h1>
                <h1>Latest user</h1>
                <h1>Oldest user</h1>
                <h2>{data.total}</h2>
                <h2>{randomLatest.firstName} {randomLatest.lastName}</h2>
                <h2>{randomOldest.firstName} {randomOldest.lastName}</h2>
            </div>

            <h1>Users</h1>
            <form onSubmit={searchUser}>
                <input onChange={event => setSearch(event.target.value)} />
                <button type="submit">Search</button>
            </form>

            {usersData.map((user) => (
                <div key={user.id} className="admin-users-card">
                    <h2>{user.firstName} {user.lastName}</h2>
                    <h3>{user.email}</h3>
                    <img alt="user" src={user.image}></img>
                    
                </div>
            ))}
            
            

            <button onClick={test}>asdas</button>

            {limit < 96 && actualCategory === "first-page" &&
                <button onClick={loadMore}>More</button>
            }

        </div>
    )
}