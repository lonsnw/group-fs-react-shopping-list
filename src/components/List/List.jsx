import axios from 'axios'; 

function List({listArray, getList}) {
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
                    {item.displayimage ? (
                        <img src={item.displayimage} alt={item.name} width="200px" />
                    ) : (
                        <div className='no-image'>
                            <span>No Image</span>
                        </div>
                    )}
                    {item.purchased ? (
                        <div className="bought">
                        <span>Purchased</span>
                        </div>
                    ) : (
                        <div className="not-bought">
                            <span><button onClick={() => buyItem(item.id)}>Buy</button> <button onClick={() => removeItem(item.id)}>Remove</button></span>
                        </div>
                    )}
                    <h4>{item.quantity} {item.unit}</h4>
                </div>
            })}
        </>
    )
};

export default List;