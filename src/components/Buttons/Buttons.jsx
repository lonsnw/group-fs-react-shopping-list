import axios from 'axios'; 

function Buttons ({getList}) {
    const resetList = () => {
        axios.put('/api/grocery').then((response) => {
            getList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong resetting your list!');
        })
    };

    const deleteList = () => {
        axios.delete('/api/grocery').then((response) => {
            getList();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong removing the list!');
        })
    }

    return (
        <div>
            <button onClick={resetList}>Reset</button>
            <button onClick={deleteList}>Delete</button>
        </div>
    )
};

export default Buttons;