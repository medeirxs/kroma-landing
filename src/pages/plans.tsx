import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { Footer } from '@/components/ui/footer'

import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Helmet } from 'react-helmet-async'

import { VscVerifiedFilled } from "react-icons/vsc"
import { FaCcMastercard, FaCcVisa } from "react-icons/fa"

export function Plans(){
  return(
    <>
      <div className="flex flex-col justify-center">
        <div className='mt-32'>
          <div className='flex flex-col items-center'>
            <h1 className='text-5xl font-semibold'>Planos Kroma</h1>
            <p className='text-sm text-muted-foreground'>Escolha o plano que mais combina com voce!</p>
          </div>

          <div className='flex flex-row gap-5 justify-center items-center mt-6'>
            <div className=' w-72 h-[500px] border border-muted rounded-xl p-6 flex flex-col items-center gap-5 drop-shadow-2xl'>
              <div className='flex items-center flex-col'>
                <h1 className='text-2xl font-bold'>Kroma The One</h1>
                <p className='text-sm tracking-widest'>Pack</p>
              </div>

              <div className='flex items-center flex-col'>
                <p className='text-xs text-muted-foreground'>de R$59,90 por:</p>
                <h1 className='text-4xl font-extrabold'>R$17,00</h1>
                <p className='text-xs text-muted-foreground'>Acesso vitalicio</p>
              </div>

              <div className='flex items-center gap-2 justify-center text-xs text-muted w-24'>
                <Separator/>
                <span>Vantagens</span>
                <Separator/>
              </div>

              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center flex-col gap-3'>
                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Pack com +200GB</span>
                </div>

                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Softwares + Plugins</span>
                </div>

                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Mockups</span>
                </div>

                </div>

                <Dialog>
                  <DialogTrigger>
                    <Button className='w-full hover:bg-zinc-900' variant='secondary'>Adquirir</Button>
                  </DialogTrigger>
                  <DialogContent className='h-96'>
                    <div className='flex gap-5 w-full justify-center'>
                      <div className='w-48 flex flex-col justify-around items-center'>

                        <div className='flex items-center flex-col'>
                          <h1 className='text-2xl tracking-tighter font-bold'>Kroma The One</h1>
                          <p className='text-xs text-muted-foreground'>Pagamento via cartão de </p>
                          <p className='text-xs text-muted-foreground'>crédito ou débito.</p>

                          <div className='flex gap-2 mt-2'>
                            <FaCcMastercard className='w-6 h-6'/>
                            <FaCcVisa className='w-6 h-6'/>
                          </div>
                        </div>

                        <div className='flex items-center flex-col'>
                          <a href="https://buy.stripe.com/00g00M8Mq0oF77y6oo">
                            <Button className='mt-2 hover:bg-zinc-400'>Assinar Plano</Button>
                          </a>

                          <p className='mt-2 text-xs text-muted-foreground'>Pagamento Único</p>
                        </div>
                      </div>
                      <Separator orientation='vertical'/>
                      <div className='w-48 flex justify-center'>
                        <div className='flex items-center justify-around flex-col gap-2'>
                          <div className='w-44 h-44'>
                            <img src="https://lh3.google.com/u/1/d/1osfocCyZKG5-T-gqTzM1Avuly5G04umA=w1084-h902-iv1"/>
                          </div>
                          <div className='text-xs text-muted-foreground flex flex-col items-center justify-center '>
                            <p>Chave Pix</p>
                            <div className='text-white p-2 bg-white/10 rounded-lg mt-2'>kromaproducer@gmail.com</div>
                            <div className='mt-1 flex items-center flex-col'>
                              <p>Após efetuar o pagamento</p>
                              <p>envie o comprovante para o</p>
                              <p>e-mail da chave.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>


            </div>

            <div className=' w-80 h-[550px] bg-zinc-800/30 rounded-xl p-6 flex flex-col items-center gap-5 drop-shadow-3xl'>
              <div className='flex items-center flex-col'>
                <h1 className='text-2xl font-bold'>All for One</h1>
                <p className='text-sm tracking-widest'>Pack + Aulas</p>
              </div>

              <div className='flex items-center flex-col'>
                <p className='text-xs text-muted-foreground'>de R149,90 por:</p>
                <h1 className='text-4xl font-extrabold'>R$37,00</h1>
                <p className='text-xs text-muted-foreground'>Acesso vitalicio</p>
              </div>

              <div className='flex items-center gap-2 justify-center text-xs text-muted w-24'>
                <Separator/>
                <span>Vantagens</span>
                <Separator/>
              </div>

              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center flex-col gap-3'>
                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Pack com +200GB</span>
                </div>

                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Aulas ao vivo + Gravadas</span>
                </div>

                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Projetos Finalizados</span>
                </div>

                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Mockups</span>
                </div>

                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Softwares + Plugins</span>
                </div>

                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Pagamento Unico</span>
                </div>

                </div>

                <Dialog>
                  <DialogTrigger>
                    <Button className='w-full hover:bg-zinc-400'>Adquirir</Button>
                  </DialogTrigger>
                  <DialogContent className='h-96'>
                    <div className='flex gap-5 w-full justify-center'>
                      <div className='w-48 flex flex-col justify-around items-center'>

                        <div className='flex items-center flex-col'>
                          <h1 className='text-2xl tracking-tighter font-bold'>All For One</h1>
                          <p className='text-xs text-muted-foreground'>Pagamento via cartão de </p>
                          <p className='text-xs text-muted-foreground'>crédito ou débito.</p>

                          <div className='flex gap-2 mt-2'>
                            <FaCcMastercard className='w-6 h-6'/>
                            <FaCcVisa className='w-6 h-6'/>
                          </div>
                        </div>

                        <div className='flex items-center flex-col'>
                          <a href="https://buy.stripe.com/5kAbJue6K5IZfE49AB">
                            <Button className='mt-2 hover:bg-zinc-400'>Assinar Plano</Button>
                          </a>

                          <p className='mt-2 text-xs text-muted-foreground'>Pagamento Único</p>
                        </div>
                      </div>
                      <Separator orientation='vertical'/>
                      <div className='w-48 flex justify-center'>
                        <div className='flex items-center justify-around flex-col gap-2'>
                          <div className='w-44 h-44'>
                            <img src="https://lh3.google.com/u/1/d/1iHL1IC7xMv1fOlOyOterjY8hZ4sxha63=w1084-h902-iv1"/>
                          </div>
                          <div className='text-xs text-muted-foreground flex flex-col items-center justify-center '>
                            <p>Chave Pix</p>
                            <div className='text-white p-2 bg-white/10 rounded-lg mt-2'>kromaproducer@gmail.com</div>
                            <div className='mt-1 flex items-center flex-col'>
                              <p>Após efetuar o pagamento</p>
                              <p>envie o comprovante para o</p>
                              <p>e-mail da chave.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>


            </div>

            <div className=' w-72 h-[500px] border border-muted rounded-xl p-6 flex flex-col items-center gap-5 drop-shadow-2xl'>
              <div className='flex items-center flex-col'>
                <h1 className='text-2xl font-bold'>Classic</h1>
                <p className='text-sm tracking-widest'>Aulas</p>
              </div>

              <div className='flex items-center flex-col'>
                <p className='text-xs text-muted-foreground'>de R$89,90 por:</p>
                <h1 className='text-4xl font-extrabold'>R$27,00</h1>
                <p className='text-xs text-muted-foreground'>Acesso vitalicio</p>
              </div>

              <div className='flex items-center gap-2 justify-center text-xs text-muted w-24'>
                <Separator/>
                <span>Vantagens</span>
                <Separator/>
              </div>

              <div className='flex flex-col justify-between h-full'>
                <div className='flex items-center flex-col gap-3'>
                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Aulas ao vivo + gravadas </span>
                </div>

                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Projetos Finalizados</span>
                </div>

                <div className='flex items-center gap-1 text-sm'>
                  <VscVerifiedFilled/>
                  <span>Mockups</span>
                </div>

                </div>

                <Dialog>
                  <DialogTrigger>
                    <Button className='w-full hover:bg-zinc-900' variant='secondary'>Adquirir</Button>
                  </DialogTrigger>
                  <DialogContent className='h-96'>
                    <div className='flex gap-5 w-full justify-center'>
                      <div className='w-48 flex flex-col justify-around items-center'>

                        <div className='flex items-center flex-col'>
                          <h1 className='text-2xl tracking-tighter font-bold'>Classic</h1>
                          <p className='text-xs text-muted-foreground'>Pagamento via cartão de </p>
                          <p className='text-xs text-muted-foreground'>crédito ou débito.</p>

                          <div className='flex gap-2 mt-2'>
                            <FaCcMastercard className='w-6 h-6'/>
                            <FaCcVisa className='w-6 h-6'/>
                          </div>
                        </div>

                        <div className='flex items-center flex-col'>
                          <a href="https://buy.stripe.com/bIY8xie6K3AR8bC5km">
                            <Button className='mt-2 hover:bg-zinc-400'>Assinar Plano</Button>
                          </a>

                          <p className='mt-2 text-xs text-muted-foreground'>Pagamento Único</p>
                        </div>
                      </div>
                      <Separator orientation='vertical'/>
                      <div className='w-48 flex justify-center'>
                        <div className='flex items-center justify-around flex-col gap-2'>
                          <div className='w-44 h-44'>
                            <img src="https://lh3.google.com/u/1/d/1EqQuiJGzj3fD7Eob2QhK3QLgS8NrsWfl=w1659-h1008-iv1"/>
                          </div>
                          <div className='text-xs text-muted-foreground flex flex-col items-center justify-center '>
                            <p>Chave Pix</p>
                            <div className='text-white p-2 bg-white/10 rounded-lg mt-2'>kromaproducer@gmail.com</div>
                            <div className='mt-1 flex items-center flex-col'>
                              <p>Após efetuar o pagamento</p>
                              <p>envie o comprovante para o</p>
                              <p>e-mail da chave.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center jusitfy-center'>
            <div className='w-[1024px] flex items-center flex-col mt-12 border-t p-12'>
              <span className='text-4xl font-semibold' style={{fontFamily:'courier prime'}}>PROMOCAO DE LANCAMENTO</span>
              <p className='text-sm text-muted-foreground'>Nao perca a oportunidade, com um mega desconto em todos os planos!</p>
            </div>
          </div>
        </div>

        <div className='w-screen flex justify-center'>
            <div className='flex gap-5 w-[1024px] bg-zinc-800/30 p-6 rounded-xl drop-shadow-xl'>
              <div>
                <Table className='w-36 p-6'>
                  <TableHeader>
                    <TableRow>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Pack</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Softwares + Plugins</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Aulas</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Projetos Finalizados</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mockups</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <Table className='p-6'>
                <TableHeader>
                  <TableRow>
                    <TableHead className='text-center'>
                      <span className='font-extrabold'>Kroma The One</span>
                    </TableHead>
                    <TableHead className='text-center'>
                      <span className='font-extrabold'>All for One</span>
                    </TableHead>
                    <TableHead className='text-center'>
                      <span className='font-extrabold'>Classic</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className='text-center'>✓</TableCell>
                    <TableCell className='text-center'>✓</TableCell>
                    <TableCell className='text-center'>x</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className='text-center'>✓</TableCell>
                    <TableCell className='text-center'>✓</TableCell>
                    <TableCell className='text-center'>x</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className='text-center'>x</TableCell>
                    <TableCell className='text-center'>✓</TableCell>
                    <TableCell className='text-center'>✓</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className='text-center'>x</TableCell>
                    <TableCell className='text-center'>✓</TableCell>
                    <TableCell className='text-center'>✓</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell className='text-center'>✓</TableCell>
                    <TableCell className='text-center'>✓</TableCell>
                    <TableCell className='text-center'>✓</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
        </div>

        <div className='w-screen flex gap-5 justify-center mt-12 items-center'>
          <div className='text-right'>
            <h1 className='text-4xl tracking-tighter font-semibold'>Empty Title</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br/>
              industry. Lorem Ipsum has been the industry's standard dummy text ever<br/>
              since the 1500s, when an unknown printer took a galley of type and<br/>
              scrambled it to make a type specimen book. It has survived not only five centuries,<br/> 
              but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className='bg-zinc-800 rounded-2xl w-[728px] h-72 p-3'/>
        </div>
      </div>
      <Footer/>
      <Helmet title='Planos'/>
    </>
  )
}