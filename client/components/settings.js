import React, {useState, useEffect} from 'react';


const Settings = () => {
    return (
        <div style={styles.settings}>
            
            <div>
                <form style={styles.top}>
                    <label htmlFor='from'>From:</label>
                    <input id='from' type='text'></input>

                    <label htmlFor='to'>To:</label>
                    <input id='to' type='text'></input>

                    <label htmlFor='stops'>Stops:</label>
                    <input id='stops' type='text'></input>
                </form>
            </div>

            <div>
                <form style={styles.bottom}>
                    <label htmlFor='from'>Chunk Trip By:</label>
                    <select name='milesTime'>
                        <option>Select One</option>
                        <option>Miles</option>
                        <option>Duration</option>
                    </select>
                
                    <label htmlFor='miles'>Miles:</label>
                    <input id='miles' type='text'></input>

                    <label htmlFor='duration'>Duration:</label>
                    <input id='duration' type='text'></input>
                </form>
            </div>

        </div>
    )
}

const styles = { 
    settings: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    top: {
        display: 'flex',
        gap: '5px'
    },
    bottom: {
        display: 'flex',
        gap: '5px'
    }
}

export default Settings