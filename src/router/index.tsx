import React, {FC} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/effect';
import Navbar from '../layout/index';
import Memo from '../pages/memo'
 const  Index:FC = () => {

    return(
        <>
          <BrowserRouter>
          <Navbar />
            <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/memo" element={<Memo />} />
            </Routes>
            </main>

          </BrowserRouter>
            {/* <Home /> */}
        </>
    )


}
export default Index;