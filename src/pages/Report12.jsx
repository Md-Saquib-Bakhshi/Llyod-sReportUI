import { useState } from "react"
import { runReport12 } from "../services/api"
import ActionBox from "../components/ActionBox"

export default function Report12(){

  const [status,setStatus] = useState("Idle")

  const run = async()=>{

    setStatus("Processing latest mail...")

    const res = await runReport12()

    setStatus(JSON.stringify(res.data))
  }

  return(

    <div className="page">

      <ActionBox
        title="Report 12 Validation"
        description="Validates latest LBG and SPW holdings received via email."

        buttons={
          <button className="btn" onClick={run}>
            Process Latest Mail
          </button>
        }

        status={status}
      />

    </div>

  )

}