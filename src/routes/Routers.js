import React from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import  Routes  from './Routes';


import {APP_ROUTES } from "./routes";

export default function Routers() {
  return (
   <>
<BrowserRouter>
        <Routes>
        {APP_ROUTES.map((x) => (
            <Route
            //   key={x.key}
              path={x.path}
              element={x.Element}
           />
           ))}
         
        </Routes>
      </BrowserRouter>
   </>
  )
}
