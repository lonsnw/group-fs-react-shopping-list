import axios from 'axios';
import React from 'react';
import './Add.css';
import Button from '@mui/material/Button';

function Add({item, setItem, image, setImage, unit, setUnit, quantity, setQuantity, getList, ThemeProvider, theme}) {
    const addItem = () => {
        axios.post('/api/grocery', { name: item, displayimage: image, unit: unit, quantity: quantity })
        .then((response) => {
            // clear inputs
            setItem('');
            setImage('');
            setUnit('');
            setQuantity('');
            // call list
            getList();
        }).catch((error) => {
            console.error(error);
            alert('Error adding item');
        })
    };
    
    const submitItem = (e) => {
        e.preventDefault();
        addItem();
    }

    return(
        <div className="add-div">
            <h2>Add to list</h2>
            <form onSubmit={submitItem}>
            <label className="label">
                Item:
            </label>
            <input
                className="input"
                type="text"
                placeholder="Item"
                value={item}
                onChange={(evt) => setItem(evt.target.value)}
            />
            <br />
            <label className="label">
                Image URL:
            </label>
            <input
                className="input"
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(evt) => setImage(evt.target.value)}
            />
            <br />
            <label className="label">
                Unit:
            </label>
            <input
                className="input"
                type="text"
                placeholder="Unit"
                value={unit}
                onChange={(evt) => setUnit(evt.target.value)}
            />
            <br />
            <label className="label">
                Quantity:
            </label>
            <input
                className="input"
                type="text"
                placeholder="Quantity"
                value={quantity}
                onChange={(evt) => setQuantity(evt.target.value)}
            />
            <br />
            <div className="button-class">
                <ThemeProvider theme={theme}> 
                    <Button variant="contained" color="primary" type="submit" className="add-button">Add to list</Button>
                </ThemeProvider>
            </div>
            </form>
        </div>
    )
}

export default Add;