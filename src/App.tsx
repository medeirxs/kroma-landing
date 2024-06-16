import { ThemeProvider } from "@/components/providers/theme-provider"
import { NavBar } from "@/components/navbar"
import { Separator } from "./components/ui/separator"
import { Button } from "./components/ui/button"

export function App() {
  return (
    <>
      <NavBar/>

      <div className="flex h-screen justify-center">
        <div>
          <div className="flex flex-col justify-center items-center w-screen h-full drop-shadow-lg z-0">

            <h1 className="text-5xl font-bold">Tudo que voce precisa</h1>
            <h1 className="text-5xl font-bold"> em um lugar só.</h1>

            <p className="text-sm text-muted-foreground">Feito por designers, para designers.</p>

            <div className="flex flex-col items-center gap-2 mt-5 text-sm">
              <div className="flex gap-2">
                <span><span className="font-extrabold">+200GB</span> Arquivos</span>
                <Separator orientation="vertical"/>
                <span>Softwares Atualizados</span>
              </div>
              <Separator orientation="horizontal"/>
              <span>Aulas e Conteúdos <span className="font-extrabold">Exclusivos</span></span>
            </div>

          </div>
          <div>
            <h1>adssd</h1>
            <h1>bb</h1>
          </div>
          <img src="https://i.pinimg.com/564x/43/bf/c1/43bfc1a6bfe8ce2a933cc3bdcdee45d4.jpg" className="w-[1920px]"/>
        </div>
      </div>

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" children={undefined}/>
    </>
  )
}


{/*<div className="flex flex-col">
  <img src="https://i.pinimg.com/564x/43/bf/c1/43bfc1a6bfe8ce2a933cc3bdcdee45d4.jpg" className="w-[1920px]"/>
  <img src="https://i.pinimg.com/564x/50/01/f2/5001f24ee5de4da07e955e66c33e668d.jpg" />
  <img src="https://i.pinimg.com/564x/d6/23/19/d623199b4965941d8c9f63a4eda20de8.jpg" />
</div>*/}