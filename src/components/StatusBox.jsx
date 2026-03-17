export default function StatusBox({status, type}){

  if(!status) return null

  return(
    <div className="status-box">

      <div className={`status-header ${type}`}>
        {type ? type.toUpperCase() : "STATUS"}
      </div>

      <div className="status-body">
        <pre>{status}</pre>
      </div>

    </div>
  )
}