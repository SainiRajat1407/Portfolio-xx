import React from 'react'
import MousePostionContext from './mouseContext'

const MousePostionState = (props) => {
    const [mousePostion, setMousePostion] = React.useState({
        x : null,
        y : null
    })

    const handleMouseMove = (event) => {
        setMousePostion({x : event.clientX , y : event.clientY})
    
    }
    React.useEffect(() => {
        document.addEventListener('mousemove' , handleMouseMove)

        return() => {
            document.removeEventListener('mousemove' , handleMouseMove)
        }
    }, [])
    return(
        <MousePostionContext.Provider value={[mousePostion, setMousePostion]}>
            {props.children}
        </MousePostionContext.Provider>
    )
}