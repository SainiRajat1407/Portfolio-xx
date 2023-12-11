import React from 'react'
import DeviceContext from './deviceContext'

const DeviceState = (props) => {
    
    return(
        <DeviceContext.Provider >
            {props.children} 
            </DeviceContext.Provider>
    )
}

export default DeviceState;