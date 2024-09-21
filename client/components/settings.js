import React, {useState, useEffect} from 'react';


const Settings = () => {
    return (
        <div>
            
            <form>
                <label htmlFor='from'>From:</label>
                <input id='from' type='text'></input>

                <label htmlFor='to'>To:</label>
                <input id='to' type='text'></input>

                <label htmlFor='stops'>Stops:</label>
                <input id='stops' type='text'></input>
            </form>

            <form>
                <label htmlFor='from'>Chunk Trip By:</label>
                <select name='milesTime'>
                    <option>Select One</option>
                    <option>Miles</option>
                    <option>Duration</option>
                </select>
            </form>




        </div>
    )
}

const styles = { 
    chunkOptions: {
        margin: '30px'
    }
}

export default Settings