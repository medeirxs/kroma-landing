import { createBrowserRouter } from "react-router-dom";

import { NavLayout } from "@/_layouts/navlayout";

import { KromaTheOne } from "@/pages/kroma-the-one";
import { Homepage } from "@/pages/homepage";
import { Plans } from "./pages/plans";
import { Changelogs } from "./pages/changelogs";
import { Creators } from "./pages/creators";
import { FAQ } from "./pages/FAQ";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout/>,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/kromatheone', element: <KromaTheOne /> },
      { path: '/plans', element: <Plans /> },
      { path: '/changelogs', element: <Changelogs /> },
      { path: '/creators', element: <Creators /> },
      { path: '/faq', element: <FAQ /> },
    ],
  },
])