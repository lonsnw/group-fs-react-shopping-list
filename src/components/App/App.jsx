import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Header from '../Header/Header.jsx';
import List from '../List/List.jsx';
import Add from '../Add/Add.jsx';
import './App.css';


function App() {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');
    const [image, setImage] = useState('');
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
            <Add item={item} setItem={setItem} quantity={quantity} setQuantity={setQuantity} unit={unit} setUnit={setUnit} image={image} setImage={setImage} getList={getList} />
            <List listArray={listArray}/>
            </main>
        </div>
    );
}

export default App;
