import { useState } from "react"
import { runReport923, processReplies } from "../services/api"
import ActionBox from "../components/ActionBox"

export default function Report923(){

  const [status,setStatus] = useState("Idle")

  const generate = async()=>{

    setStatus("Generating report...")

    const res = await runReport923()

    setStatus(JSON.stringify(res.data))
  }

  const process = async()=>{

    setStatus("Processing replies...")

    const res = await processReplies()

    setStatus(JSON.stringify(res.data))
  }

  return(

    <div className="page">

      <ActionBox
        title="Report 923 Automation"
        description="Generates Lloyd's Report 923 and processes reply mails from fund managers."

        buttons={
          <>
            <button className="btn" onClick={generate}>
              Generate Report
            </button>

            <button className="btn" onClick={process}>
              Process Replies
            </button>
          </>
        }

        status={status}
      />

    </div>

  )

}