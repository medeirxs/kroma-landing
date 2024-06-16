import { Button } from "./ui/button";

export function NavBar(){
  return(
    <div className="fixed z-10 flex item-center h-32 justify-center w-screen bg-gradient-to-b from-black/90">
      <div className="mt-3 w-[1024px] h-12 flex justify-between items-center p-3 backdrop-blur-md rounded-2xl border border-white/20">

        {/*Kroma Logo and NavBar Title*/}
        <div className="flex items-center gap-1 hover:scale-105 cursor-pointer">
          <div className="flex items-center justify-center h-6 w-6 rounded-md border border-white/50">
            <span style={{fontFamily: 'courier prime'}} className=" tracking-tighter text-xs mt-1">Kr</span>
          </div>
          <span className=" font-bold tracking-tighter text-sm">Kroma</span>
        </div>

        {/*NavBar options*/}
        <div className="flex items-center gap-2">
          <Button className="text-sm font-semibold text-white/70 hover:bg-zinc-100/10 " variant="ghost">Kroma The One</Button>
          <Button className="text-sm font-semibold text-white/70 hover:bg-zinc-100/10 " variant="ghost">Planos</Button>
          <Button className="text-sm font-semibold text-white/70 hover:bg-zinc-100/10 " variant="ghost">Atualizações</Button>
          <Button className="text-sm font-semibold text-white/70 hover:bg-zinc-100/10 " variant="ghost">Criadores</Button>
          <Button className="text-sm font-semibold text-white/70 hover:bg-zinc-100/10 " variant="ghost">FAQ</Button>
        </div>

        {/*path to Kroma platform*/}
        <Button className="text-xs w-24 h-8">Plataforma</Button>

      </div>
    </div>
  )
}