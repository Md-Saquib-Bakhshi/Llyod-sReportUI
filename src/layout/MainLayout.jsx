import Sidebar from "../components/Sidebar"

export default function MainLayout({children}){

  return(

    <div className="app">

      <Sidebar/>

      <div className="main">
        {children}
      </div>

    </div>

  )
}