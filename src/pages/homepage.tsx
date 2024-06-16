import { Separator } from "@/components/ui/separator";

export function Homepage(){
  return(
    <>
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

    </>
  )
}