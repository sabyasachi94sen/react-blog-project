import React from "react";

import AddStudent from "./Redux2/addStudent";
import {Provider} from "react-redux";
import sport from './Redux2/store copy.js';
import store from './Redux2/store copy.js';


const App1=()=>{

    return(

        <Provider store={store} >
        <AddStudent />
        </Provider>
    )
}

export default App1;