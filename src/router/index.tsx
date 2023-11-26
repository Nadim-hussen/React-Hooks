import React, {FC} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/effect';
import Navbar from '../layout/index';
import Memo from '../pages/memo'
import Reducer from '../pages/reducer'
import Ref from '../pages/ref';
import Callback from '../pages/callback';
import Context from '../pages/context/context';
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
                <Route path="/callback" element={<Callback />} />
                <Route path="/context" element={<Context />} />
            </Routes>
            </main>

          </BrowserRouter>
            {/* <Home /> */}
        </>
    )


}
export default Index;