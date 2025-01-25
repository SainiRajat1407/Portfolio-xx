import React from 'react'
import DeviceContext from './deviceContext'

const DeviceState = (props) => {
    const [deviceWidth, setDeviceWidth] = React.useState(window.innerWidth);
    const [deviceHeight, setDeviceHeight] = React.useState(window.innerHeight);
    React.useEffect(() => {
        const handleResize = () => {
            setDeviceWidth(window.innerWidth)
            setDeviceHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    
    },[])
    return(
        <DeviceContext.Provider value={[deviceWidth ,deviceHeight] } >
            {props.children} 
            </DeviceContext.Provider>
    )
}

export default DeviceState;