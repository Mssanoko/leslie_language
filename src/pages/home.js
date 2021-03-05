import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Infosection from '../components/HomeSection';
import { homeObjOne } from '../components/HomeSection/Data';
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Infosection {...homeObjOne}/>
            <Footer/>
        </>
    )
}

export default Home;