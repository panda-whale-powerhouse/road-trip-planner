import React from 'react'

const Map = () => {
    return(
        <iframe style={styles.map}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDfu41MAL-CMSPLn66VRX0uuc9TWIBFQGE&q=Space+Needle,Seattle+WA">
        </iframe>
    )
}

const styles = {
    map: {
        width: "600",
        height: "450",
    }
}

export default Map