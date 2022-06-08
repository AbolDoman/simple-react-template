import React from 'react'
import {buyMob} from "./redux/mob/action";
import {connect} from "react-redux";
function MobContainer(props) {
    const ClickHandler = () => {
        props.buyMob();

    };
    return (
        <div>
            <div>
                counter is: {props.num}
            </div>
            <button type = { "button" } onClick = {() => ClickHandler() }> Click </button>
        </div>
    )

}
    const mapDispatchToProps = (dispatch) =>{
          return{
              buyMob : ()=> dispatch(buyMob())
          }

    };
    const mapStateToProps = (state) => {
        return{
            num : state.counterMob
        }
    };

export default connect(mapStateToProps,mapDispatchToProps)(MobContainer);