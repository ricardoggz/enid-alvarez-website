'use client'
import '../../globals.css'
import { Header } from "../Header/Header"

export const RootLayout = ({children})=>{
    return (
          <>
            <Header />
            {children}
          </>
      )
}