import React, {useState, useEffect} from 'react';

const SavedTrips = () => {
    const [saved, setSaved] = useState([]);
    return(
        <div style={styles.savedBox}>
            Saved Trips:
        </div>
    )
}


const styles = {
    savedBox: {
        border: '1px solid black',
        width: '300px',
        height: '530px',
        margin: 'auto 0'

    }
}

export default SavedTrips;