import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [item, setItem] = useState('');
    const [listArray, setListArray] = useState([]);

    const getList = () => {
        axios.get('api/grocery').then((response) => {
            console.log('Data:', response.data);
            setListArray(response.data);
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong loading your list!');
        });
    }

useEffect(() => {
    getList();
}, []);

    return (
        <div className="App">
            <Header />
            <main>
                {listArray.map((item) => {
                    // ternary operator to change styling if an item is purchased or not
                    return <div key={item.id} className={item.purchased ? "bought" : "not-bought"}>
                        <h3>{item.name}</h3>
                        {item.displayimage ? (
                            <img src={item.displayimage} alt={item.name} width="200px" />
                        ) : (
                            <div className='no-image'>
                                <span>No Image</span>
                            </div>
                        )}
                        <h4>{item.quantity} {item.unit}</h4>
                    </div>
                })}
            </main>
        </div>
    );
}

export default App;
