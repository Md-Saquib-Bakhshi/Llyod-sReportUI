import { useState } from "react"
import { runReport12 } from "../services/api"
import ActionBox from "../components/ActionBox"
import StatusBox from "../components/StatusBox"

export default function Report12(){

  const [status,setStatus] = useState("")
  const [type,setType] = useState("")

  const run = async()=>{

    setType("running")
    setStatus("Processing latest mail...")

    try{
      const res = await runReport12()
      setType("success")
      setStatus(JSON.stringify(res.data, null, 2))
    }catch{
      setType("error")
      setStatus("Error processing mail")
    }
  }

  return(

    <div className="page">

      <ActionBox
        title="Report 12 Validation"
        description="Validates LBG and SPW holdings from latest email."
        buttons={
          <button className="btn" onClick={run}>
            Process Latest Mail
          </button>
        }
      />

      <StatusBox status={status} type={type} />

    </div>

  )
}