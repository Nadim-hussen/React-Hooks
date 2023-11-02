import React, {FC} from 'react'
import { Link } from "react-router-dom";
import './index.css'
const Index:FC = () => {
    return (
        <nav className="nav">
          <Link className="navbar_links" to="/">
            Home
          </Link>
          <Link className="navbar_links" to="/memo">
            Memo
          </Link>
          {/* <Link className="navbar_links" to="/add_page">Add Page</Link>
          <Link className="navbar_links" to='/fetch_page'>Fetch Page</Link> */}
        </nav>
      );
}
export default Index;