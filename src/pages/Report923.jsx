import { useState } from "react"
import { runReport923, processReplies } from "../services/api"
import ActionBox from "../components/ActionBox"
import StatusBox from "../components/StatusBox"

export default function Report923(){

  const [status,setStatus] = useState("")
  const [type,setType] = useState("")

  const generate = async()=>{

    setType("running")
    setStatus("Generating report...")

    try{
      const res = await runReport923()
      setType("success")
      setStatus(JSON.stringify(res.data, null, 2))
    }catch{
      setType("error")
      setStatus("Error generating report")
    }
  }

  const process = async()=>{

    setType("running")
    setStatus("Processing replies...")

    try{
      const res = await processReplies()
      setType("success")
      setStatus(JSON.stringify(res.data, null, 2))
    }catch{
      setType("error")
      setStatus("Error processing replies")
    }
  }

  return(

    <div className="page">

      <ActionBox
        title="Report 923 Automation"
        description="Generates Lloyd's Report 923 and processes reply mails."
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
      />

      <StatusBox status={status} type={type} />

    </div>

  )
}