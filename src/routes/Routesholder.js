import React from 'react'
import { routes } from "../constants/routes";
import Home from '../Pages/Home/Index'
import Contact from '../Pages/Contact/Index'
import AboutUs from '../Pages/AboutUs/Index'

    export const APP_ROUTES = [
        {
          key:"/",
          path: routes.homePage,
          Element:Home,
        },
        {
            key:"/contact",
            path: routes.contactPage,
            Element:Contact,
          },
          {
            key:"/aboutUs",
            path: routes.aboutUsPage,
            Element:AboutUs,
          },
      
      ];
 