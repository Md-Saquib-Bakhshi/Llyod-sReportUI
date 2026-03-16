import { useState } from "react"
import { runFactsheetReport } from "../services/api"
import ActionBox from "../components/ActionBox"

export default function ReportFactsheet(){

  const [status,setStatus] = useState("Idle")

  const run = async()=>{

    setStatus("Running validation pipeline...")

    const res = await runFactsheetReport()

    setStatus(JSON.stringify(res.data))
  }

  return(

    <div className="page">

      <ActionBox
        title="Factsheet Validation"
        description="Runs quarterly factsheet validation and generates the final report."

        buttons={
          <button className="btn" onClick={run}>
            Run Validation
          </button>
        }

        status={status}
      />

    </div>

  )

}