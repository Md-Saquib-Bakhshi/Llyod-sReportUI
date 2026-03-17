import { useState } from "react"
import { runFactsheetReport } from "../services/api"
import ActionBox from "../components/ActionBox"
import StatusBox from "../components/StatusBox"

export default function ReportFactsheet(){

  const [status,setStatus] = useState("")
  const [type,setType] = useState("")

  const run = async()=>{

    setType("running")
    setStatus("Running validation pipeline...")

    try{
      const res = await runFactsheetReport()
      setType("success")
      setStatus(JSON.stringify(res.data, null, 2))
    }catch{
      setType("error")
      setStatus("Error running validation")
    }
  }

  return(

    <div className="page">

      <ActionBox
        title="Factsheet Validation"
        description="Runs quarterly validation and generates report."
        buttons={
          <button className="btn" onClick={run}>
            Run Validation
          </button>
        }
      />

      <StatusBox status={status} type={type} />

    </div>

  )
}