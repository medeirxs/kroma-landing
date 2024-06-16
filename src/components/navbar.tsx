import { Button } from "./ui/button";

export function NavBar(){
  return(
    <div className="fixed flex justify-center p-16 w-screen bg-gradient-to-b from-black/70">
      <div className="flex justify-between items-center -mt-12 w-[1024px] h-12  border-[0.5px] border-white/20 p-3 rounded-2xl backdrop-blur-md">

        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-6 w-6 rounded-md border border-white/50">
            <span style={{fontFamily: 'courier prime'}} className=" tracking-tighter text-xs mt-1">Kr</span>
          </div>
          <span className=" font-bold tracking-tighter text-sm">Kroma</span>
        </div>

        <div className="flex items-center gap-2">
          <Button className="text-sm font-semibold text-white/70 hover:bg-zinc-100/10 " variant="ghost">empty</Button>
          <Button className="text-sm font-semibold text-white/70 hover:bg-zinc-100/10 " variant="ghost">empty</Button>
          <Button className="text-sm font-semibold text-white/70 hover:bg-zinc-100/10 " variant="ghost">empty</Button>
          <Button className="text-sm font-semibold text-white/70 hover:bg-zinc-100/10 " variant="ghost">empty</Button>
        </div>

        <Button className="text-xs w-24 h-8">Plataforma</Button>
      </div>
    </div>
  )
}