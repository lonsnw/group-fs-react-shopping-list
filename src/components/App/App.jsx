import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Header from '../Header/Header.jsx';
import List from '../List/List.jsx';
import Add from '../Add/Add.jsx';
import Buttons from '../Buttons/Buttons.jsx';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

    const theme = createTheme({
        palette: {
            primary: {
                main: '#a30a92',
            },
            secondary: {
                main: '#0aa319',
            },
        },
      });

useEffect(() => {
    getList();
}, []);

    return (
        <div className="App">
            <Header getList={getList} />
            <Add item={item} setItem={setItem} quantity={quantity} setQuantity={setQuantity} unit={unit} setUnit={setUnit} image={image} setImage={setImage} getList={getList} theme={theme} ThemeProvider={ThemeProvider} />
            <div>
                <Buttons getList={getList} theme={theme} ThemeProvider={ThemeProvider} />
            </div>
            <main>
                <List listArray={listArray} getList={getList} theme={theme} ThemeProvider={ThemeProvider} />
            </main>
        </div>
    );
}

export default App;
