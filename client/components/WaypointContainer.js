import { useSelector } from "react-redux"
import React from 'react'


const WaypointContainer = () => {
    const waypoints = useSelector((state)=> state.genSettings.waypoints)
    return (
        <div>
        <h3>Waypoint List:</h3>
            <ul>
            {waypoints.length === 0 ? 
            (<li>No Waypoints Yet</li>) : (
                waypoints.map((waypoint, index) => (
                <li key={index}>{waypoint}</li>
                ))
            )}
            </ul>
        </div>
    )
}

export default WaypointContainer