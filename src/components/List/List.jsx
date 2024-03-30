function List({listArray}) {
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
                    <h4>{item.quantity} {item.unit}</h4>
                </div>
            })}
        </>
    )
};

export default List;