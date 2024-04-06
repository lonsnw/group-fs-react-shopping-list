import axios from 'axios'; 
import './Buttons.css';
import Button from '@mui/material/Button';

function Buttons ({getList, ThemeProvider, theme}) {
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
            alert('Something went wrong deleting the list!');
        })
    }

    return (
        <div className="buttons-section">
            <ThemeProvider theme={theme}>
                <Button color="secondary" variant="contained" onClick={resetList}>Reset</Button>
                <Button color="secondary" variant="contained" onClick={deleteList}>Delete</Button>
            </ThemeProvider>
        </div>
    )
};

export default Buttons;