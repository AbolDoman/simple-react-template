import React, {useEffect, useState} from 'react';
import Col from "./components/Col";
import Divider from "@mui/material/Divider";
import Row from "./components/Row";
import SideBar from "./SideBar";
import TemporaryDrawer from "./components/RightDrawer";

const Main = () => {
    const [second,setSecond] = useState(0);

    useEffect(()=>{

        setInterval(()=>{
            setSecond(prevState => prevState+0.5)
        },1000);

    },[]);

    return (
        <Col style={{height : "70vh"}}>
            <Row style={{alignItems : "center",justifyContent : "center"}}>
                <Col style={{flex : "1"}}><TemporaryDrawer/></Col>
                <Col style={{fontSize : "3rem",flex:"9",alignItems : "center"}}>
                    {second}
                </Col>
            </Row>
        </Col>
    );
};

export default Main;