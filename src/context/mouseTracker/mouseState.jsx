import React from 'react'
import MousePostionContext from './mouseContext'

const MousePositionState = (props) => {
    const [mousePosition, setMousePosition] = React.useState({
        x : null,
        y : null
    })

    const handleMouseMove = (event) => {
        setMousePosition({x : event.clientX , y : event.clientY})
    
    }
    React.useEffect(() => {
        document.addEventListener('mousemove' , handleMouseMove)

        return() => {
            document.removeEventListener('mousemove' , handleMouseMove)
        }
    }, [])
    return(
        <MousePostionContext.Provider value={[mousePosition, setMousePosition]}>
            {props.children}
        </MousePostionContext.Provider>
    )
}

export default MousePositionState;