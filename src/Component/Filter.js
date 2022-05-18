import React, { useState } from 'react';

import '../Css/Filter.css';



const USERS = [
    { id: 1, name: 'Mỹ Hoài', age: 20 },
    { id: 2, name: 'Ngọc Linh', age: 19 },
    { id: 3, name: 'Thị Phượng', age: 21 },
    { id: 4, name: 'Tuyết Giang', age: 20 },
    { id: 5, name: 'Ngô Luyên', age: 21 },
    { id: 6, name: 'Mỹ Tâm', age: 20 },
    { id: 7, name: 'Thị Duyệt', age: 19 },
    { id: 8, name: 'Diệu', age: 20 },
];

function Filter() {
    // the value of the search field 
    const [name, setName] = useState('');

    // the search result
    const [foundUsers, setFoundUsers] = useState(USERS);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = USERS.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(USERS);
            // If the text field is empty, show all users
        }

        setName(keyword);
    };

    return (
        <div className="container">
            <input
                type="search"
                value={name}
                onChange={filter}
                className="input"
                placeholder="Filter"
            />

            <div className="user-list">
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((user) => (
                        <li key={user.id} className="user">
                            <span className="user-id">{user.id}</span>
                            <span className="user-name">{user.name}</span>
                            <span className="user-age">{user.age} year old</span>
                        </li>
                    ))
                ) : (
                    <h1>No results found!</h1>
                )}
            </div>
        </div>
    );
}

export default Filter;