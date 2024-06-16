import { Separator } from "./separator"
import { Link } from "react-router-dom"

export function Footer(){
  return(
    <>
      <div className="flex flex-col w-screen mt-12 mb-12 justify-center items-center">

        <div className="border-t border-muted w-[1024px] pt-12">

          <div className="flex justify-around items-center">
            <div className="flex flex-col gap-2">
              <span className="font-semibold tracking-tighter">Kroma</span>
              <Separator/>
              <Link to='/creators'>
                <p>Criadores</p>
              </Link>

              <Link to='/faq'>
                <p>FAQ</p>
              </Link>
              
            </div>

            <Link to='/'>
              <div className="flex items-center flex-col justify-center border border-white/30 text-5xl h-24 w-24 rounded-xl hover:scale-105 transition-all cursor-pointer" style={{fontFamily: 'courier prime'}}>
                KR
                <span className="text-xs text-muted-foreground">&copy;2024</span>
              </div>
            </Link>

            <div className="flex flex-col gap-2">
              <span className="font-semibold">Kroma The One</span>
              <Separator/>
              <Link to='/plans'>
                <p>Planos</p>
              </Link>
              
              <Link to='/kromatheone'>
                <p>Pack</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}