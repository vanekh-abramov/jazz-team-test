import { CALENDAR_ROUTE, DATA_ROUTE, HOME_ROUTE, INFO_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from "./constants/routerLinks";

import Calendar from "./components/pages/Calendar";
import Data from "./components/pages/Data";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";

export const routes = [
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: PROFILE_ROUTE,
    Component: Profile
  },
  {
    path: CALENDAR_ROUTE,
    Component: Calendar
  },
  {
    path: DATA_ROUTE,
    Component: Data
  },
  {
    path: INFO_ROUTE,
    Component: Info
  },
  {
    path: LOGIN_ROUTE,
    Component: Login
  },
]