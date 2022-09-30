import {configureStore} from "@reduxjs/toolkit"; //1

import dataSlice from "./other/slice"; //6

export const store = configureStore({
//2
    reducer:{
        veriAl:dataSlice//7
    },


})