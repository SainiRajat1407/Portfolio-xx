import ScrollContext from './scrollContext';
import React from 'react'


const ScrollState = (props) => {

    const [scrollY, setScrollY] = React.useState(0);
    React.useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <ScrollContext.Provider value={[scrollY, setScrollY]}>
            {props.children}
        </ScrollContext.Provider>
    );
}

export default ScrollState;