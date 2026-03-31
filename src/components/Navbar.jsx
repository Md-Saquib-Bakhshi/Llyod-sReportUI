import { Link } from "react-router-dom"

export default function Navbar(){

  return(

    <div className="navbar">

      <Link className="navlink" to="/">
        Report 923
      </Link>

      <Link className="navlink" to="/report12">
        Report 12
      </Link>

      <Link className="navlink" to="/factsheet">
        Factsheet
      </Link>

      <Link className="navlink" to="/logs">
        Logs
      </Link>

    </div>

  )

}