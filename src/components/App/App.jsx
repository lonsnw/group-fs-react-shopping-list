import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [item, setItem] = useState('');
    const [listArray, setListArray] = useState([]);

    const getList = () => {
        axios.get('api/groceries').then((response) => {
            console.log('Data:', response.data);
            setListArray(response.data);
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong loading your list!');
        });
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>

            </main>
        </div>
    );
}

export default App;
