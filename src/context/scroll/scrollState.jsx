import ScrollContext from './scrollContext';
import React from 'react'


const ScrollState = (props) => {

    const [scrollY, setScrollY] = React.useState(0);
    const [scrollInVh , setScrollInVh] = React.useState(0);
    React.useEffect(() => {

        const handleScroll = () => {
            setScrollY(window.scrollY);
            const windowHeight = window.innerHeight;
            const scrollValueInVh = (window.scrollY / windowHeight) * 100;
            setScrollInVh(scrollValueInVh);
        };
        

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <ScrollContext.Provider value={[scrollY, setScrollY, scrollInVh , setScrollInVh]}>
            {props.children}
        </ScrollContext.Provider>
    );
}

export default ScrollState;