import axios from 'axios'; 
import './List.css';
import Button from '@mui/material/Button';

function List({listArray, getList, theme, ThemeProvider}) {
    const buyItem = (itemId) => {
        axios.put(`/api/grocery/buy/${itemId}`).then((response) => {
            getList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong marking your item as purchased!');
        })
    };

    const removeItem = (itemId) => {
        axios.delete(`/api/grocery/${itemId}`).then((response) => {
            getList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong removing this item!');
        })
    };

    return (
        <>
            {listArray.map((item) => {
                // ternary operator to change styling if an item is purchased or not
                return <div key={item.id} className={item.purchased ? "bought" : "not-bought"}>
                    <h3>{item.name}</h3>
                    <div className="item-content">
                        {item.displayimage ? (
                            <img src={item.displayimage} alt={item.name} style={{ width : 200, padding : 20 }} />
                        ) : (
                            <div className='no-image'>
                                <span>No Image</span>
                            </div>
                        )}
                        <h4 className='item-details'>{item.quantity} {item.unit}</h4>
                    </div>
                    <div className="item-status">
                        {item.purchased ? (
                            <div className="bought">
                            <span>Purchased</span>
                            </div>
                        ) : (
                            <div className="not-bought">
                                <ThemeProvider theme={theme}>
                                <span><Button color="primary" variant="contained" onClick={() => buyItem(item.id)}>Buy</Button> <Button variant="contained" onClick={() => removeItem(item.id)}>Remove</Button></span>
                                </ThemeProvider>
                            </div>
                        )}
                    </div>
                </div>
            })}
        </>
    )
};

export default List;