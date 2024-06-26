import { ThemeProvider } from "@/components/providers/theme-provider"
import { RouterProvider } from "react-router-dom"

import { Helmet, HelmetProvider } from "react-helmet-async"

import { router } from "./routes"

export function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet titleTemplate="Kroma | %s"/>
        <RouterProvider router={router}/>
      </HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" children={undefined}/>
    </>
  )
}


{/*<div className="flex flex-col">
  <img src="https://i.pinimg.com/564x/43/bf/c1/43bfc1a6bfe8ce2a933cc3bdcdee45d4.jpg" className="w-[1920px]"/>
  <img src="https://i.pinimg.com/564x/50/01/f2/5001f24ee5de4da07e955e66c33e668d.jpg" />
  <img src="https://i.pinimg.com/564x/d6/23/19/d623199b4965941d8c9f63a4eda20de8.jpg" />
</div>*/}