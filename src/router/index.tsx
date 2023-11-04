import React, {FC} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/effect';
import Navbar from '../layout/index';
import Memo from '../pages/memo'
import Reducer from '../pages/reducer'
import Ref from '../pages/ref';
 const  Index:FC = () => {

    return(
        <>
          <BrowserRouter>
          <Navbar />
            <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/memo" element={<Memo />} />
                <Route path="/reducer" element={<Reducer />} />
                <Route path="/ref" element={<Ref />} />
            </Routes>
            </main>

          </BrowserRouter>
            {/* <Home /> */}
        </>
    )


}
export default Index;