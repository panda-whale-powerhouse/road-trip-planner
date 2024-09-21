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
        width: '15%',
        height: '50%'

    }
}

export default SavedTrips;