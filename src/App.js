import React, {useEffect} from 'react';
import Row from "./components/Row";
import Col from "./components/Col";
import Header from "./Header";
import SideBar from "./SideBar";
import Divider from "@mui/material/Divider";
import Footer from "./Footer";
import Main from "./Main";

const App = () => {
    return (
        <div >
            <Header />
            <Divider orientation={"horizontal"}/>
            <Main />
            <Divider orientation={"horizontal"}/>
            <Footer />
        </div>
    );
};

export default App;