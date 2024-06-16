import { ThemeProvider } from "@/components/providers/theme-provider"

export function App() {
  return (
    <>
      <div>
        <h1>hello world!</h1>
      </div>

      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" children={undefined}/>
    </>
  )
}

