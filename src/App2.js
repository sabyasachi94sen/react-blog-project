import React from "react";
import store from "./Redux3/store.js"
import DoMultiply from "./Redux3/DoMultiply";
import { Provider } from "react-redux";

export const App2=()=>{

    return (
     <Provider store={store} >
         <DoMultiply />
         </Provider>
    )
}