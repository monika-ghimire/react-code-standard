import React from 'react'
import { BrowserRouter, Route,Routes} from "react-router-dom";
import  {APP_ROUTES } from "./Routesholder";
import Home from '../Pages/Home/Index'

export default function Routers() {
 
  return (
   
<BrowserRouter>
        <Routes>
        {APP_ROUTES.map((x) => (
            <Route
           key={x.key}
              path={x.path}
              element={x.Element}
           ></Route>
           ))}
         
        </Routes>
      </BrowserRouter>
   
  )
}
