import axios from 'axios';
import React from 'react';

function Add({item, setItem, image, setImage, unit, setUnit, quantity, setQuantity, getList}) {
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
        <>
        <h2>Add to list</h2>
        <form onSubmit={submitItem}>
        <label>
            Item:
        </label>
        <input
            type="text"
            placeholder="Item"
            value={item}
            onChange={(evt) => setItem(evt.target.value)}
        />
        <br />
        <label>
            Image URL:
        </label>
        <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(evt) => setImage(evt.target.value)}
        />
        <br />
        <label>
            Unit:
        </label>
        <input
            type="text"
            placeholder="Unit"
            value={unit}
            onChange={(evt) => setUnit(evt.target.value)}
        />
        <br />
        <label>
            Quantity:
        </label>
        <input
            type="text"
            placeholder="Quantity"
            value={quantity}
            onChange={(evt) => setQuantity(evt.target.value)}
        />
        <br />
        <button type="submit">Add to list</button>
        </form>
        </>
    )
}

export default Add;