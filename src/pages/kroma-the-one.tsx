import { Helmet } from "react-helmet-async"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import { CiCirclePlus } from "react-icons/ci"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SiAdobeaftereffects, SiAdobepremierepro, SiVegas, SiCinema4D, SiAdobephotoshop } from "react-icons/si"
import { FaBoxOpen } from "react-icons/fa"

import { PiGridFourFill } from "react-icons/pi"
import { BiSolidZap } from "react-icons/bi"
import { FaHeart } from "react-icons/fa"
import { Footer } from "@/components/ui/footer"

export function KromaTheOne(){
  return(
    <>
      <div className="flex h-screen justify-center">
        <div>
          <div className="mt-32 flex flex-col justify-center items-center w-screen drop-shadow-lg z-0">
            <div className="w-[1024px] flex justify-center flex-col mt-24">

              <h1 className="text-5xl font-bold">Quer sentir o gostinho do que você<br/>pode ter com uma assinatura?</h1>
              <p className="text-sm mt-1 text-muted-foreground">Veja os packs disponíveis e preparados totalmente para você!</p>

              <div style={{fontFamily:'courier prime'}} className="flex items-center justify-center mt-4 bg-black/80 w-48 h-8 rounded-lg text-sm">
                <span className="opacity-50">Kroma The One</span>
                <span>/Packs</span>
              </div>
              
            </div>
          </div>

          <div className="flex w-screen justify-center mt-6">
            <Carousel className="w-[1524px]" plugins={[Autoplay({delay: 2000,}),]}>
              <CarouselContent>
                <CarouselItem className="basis-1/4 w-[500px]">
                  <img src="https://lh3.google.com/u/0/d/1lYq4PSimDoeqWor1GsD1inWmN3r7vj58=w1412-h961-iv1" className=" rounded-3xl"/>
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <img src="https://lh3.google.com/u/0/d/1lYq4PSimDoeqWor1GsD1inWmN3r7vj58=w1412-h961-iv1" className=" rounded-3xl"/>
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <img src="https://lh3.google.com/u/0/d/1lYq4PSimDoeqWor1GsD1inWmN3r7vj58=w1412-h961-iv1" className=" rounded-3xl"/>
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <img src="https://lh3.google.com/u/0/d/1lYq4PSimDoeqWor1GsD1inWmN3r7vj58=w1412-h961-iv1" className=" rounded-3xl"/>
                </CarouselItem>
                <CarouselItem className="basis-1/4">
                  <img src="https://lh3.google.com/u/0/d/1lYq4PSimDoeqWor1GsD1inWmN3r7vj58=w1412-h961-iv1" className=" rounded-3xl"/>
                </CarouselItem>
              </CarouselContent>
            </Carousel>   
          </div>

          <div className="flex w-screen pt-12 justify-center items-center mt-12 drop-shadow-2xl flex-col inner-shadow ">
            <div className="flex items-center gap-5">
              <div className="text-4xl font-semibold">Softwares selecionados <br/>  para te levar à excelência.</div>
              <div className="text-1xl font-semibold text-muted-foreground">
              Sabemos o quanto é importante o uso dos melhores softwares,
              <br/>para obter os melhores resultados. E focando nisso, fizemos<br/>
              uma seleção estrita dos softwares que proporcionam o <br/>
              melhor desempenho, visando totalmente a produtividade.
              </div>
            </div>

            <div className="pt-20 pb-12 flex gap-10">
              <div className="bg-zinc-900 w-80 h-96 rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
                <div className="text-muted w-80 h-96 bg-zinc-800"/>

                <div className="flex justify-between items-center w-72">
                  <div className="text-2xl">Editores de Vídeo</div>
                  <Dialog>
                    <DialogTrigger>
                      <CiCirclePlus className="w-10 h-10 text-muted-foreground hover:scale-125 transition-all cursor-pointer"/>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>Editores de Vídeo</DialogTitle>
                      <div className="grid grid-cols-3 gap-5">

                        <div className="border w-36 h-48 rounded-xl flex items-center flex-col justify-center gap-2">
                          <SiAdobeaftereffects className="w-28 h-28"/>
                          <span>After Effects</span>
                        </div>

                        <div className="border w-36 h-48 rounded-xl flex items-center flex-col justify-center gap-2">
                          <SiAdobepremierepro className="w-28 h-28"/>
                          <span>Premiere Pro</span>
                        </div>

                        <div className="border w-36 h-48 rounded-xl flex items-center flex-col justify-center gap-2">
                          <SiVegas className="w-28 h-28"/>
                          <span>Vegas Pro</span>
                        </div>

                        <div className="border w-36 h-48 rounded-xl flex items-center flex-col justify-center gap-2">
                          <SiCinema4D className="w-28 h-28"/>
                          <span>Cinema 4D</span>
                        </div>

                        <div className="border w-36 h-48 rounded-xl flex items-center flex-col justify-center gap-2">
                          <FaBoxOpen className="w-28 h-28"/>
                          <span>PLugins</span>
                        </div>

                      </div>
                    </DialogContent>
                  </Dialog>
                  
                </div>
              </div>

              <div className="bg-zinc-900 w-80 h-96 rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
                <div className="text-muted w-80 h-96 bg-zinc-800"/>

                <div className="flex justify-between items-center w-72">
                  <div className="text-2xl">Editores de Foto</div>
                  <Dialog>
                    <DialogTrigger>
                      <CiCirclePlus className="w-10 h-10 text-muted-foreground hover:scale-125 transition-all cursor-pointer"/>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>Editores de Foto</DialogTitle>
                      <div>
                        <div className="border w-36 h-48 rounded-xl flex items-center flex-col justify-center gap-2">
                          <SiAdobephotoshop className="w-28 h-28"/>
                          <span>Photoshop</span>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                </div>
              </div>

              <div className="bg-zinc-900 w-80 h-96 rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
                <div className="text-muted w-80 h-96 bg-zinc-800"/>

                <div className="flex justify-between items-center w-72">
                  <div className="text-2xl">Apps Mobile</div>
                  <Dialog>
                    <DialogTrigger>
                      <CiCirclePlus className="w-10 h-10 text-muted-foreground hover:scale-125 transition-all cursor-pointer"/>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>Apps Mobile</DialogTitle>
                      <div className="grid grid-cols-3">
                        <div className="border w-36 h-48 rounded-xl flex items-center flex-col justify-center gap-2">
                          <SiAdobephotoshop className="w-28 h-28"/>
                          <span>PSTouch</span>
                        </div>

                        <div className="border w-36 h-48 rounded-xl flex items-center flex-col justify-center gap-2">
                        <div className="w-28 h-28 border rounded-xl flex items-center justify-center text-7xl" style={{fontFamily: 'courier prime'}}>AM</div>
                          <span>Alight Motion</span>
                        </div>
                      </div>
                    </DialogContent>
                    
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-screen justify-center ">
            <div className="border-t border-muted/50 w-[1024px] flex justify-between">

              <div>
                <div className="flex gap-1 items-center pt-12">
                  <PiGridFourFill/>
                  <span className="text-sm font-semibold">Baixe direto da Plataforma</span>
                </div>
                <div className="flex flex-col text-muted-foreground">
                  <span className="text-xs">Todo conteudo e disponibilizado</span>
                  <span className="text-xs">direto da plataforma.</span>
                </div>
              </div>

              <div>
                <div className="flex gap-1 items-center pt-12">
                  <BiSolidZap/>
                  <span className="text-sm font-semibold">Conteudos atualizados semanalmente</span>
                </div>
                <div className="flex flex-col text-muted-foreground">
                  <span className="text-xs">Alem de novos conteudos, focamos tambem</span>
                  <span className="text-xs">em aprimorar os ja implementados!</span>
                </div>
              </div>

              <div>
                <div className="flex gap-1 items-center pt-12">
                  <FaHeart/>
                  <span className="text-sm font-semibold">Feito por designer para Designer</span>
                </div>
                <div className="flex flex-col text-muted-foreground">
                  <span className="text-xs">Sabemos a dificuldade de achar bons conteudos</span>
                  <span className="text-xs">seja de aulas ou que nos ajude no dia a dia, e visando</span>
                  <span className="text-xs">isso decidimos criar a Kroma!</span>
                </div>
              </div>

            </div>
            
          </div>

          <div className="flex w-screen justify-center">
            <div className="w-[1524px] h-[857px] bg-zinc-800 mt-12"/>{/* Foto de dentro da plataforma */}
          </div>

          <Footer/>

          <div className="w-screen h-screen"/>

        </div>
      </div>
      <Helmet title="Kroma The One"/>
    </>
  )
}