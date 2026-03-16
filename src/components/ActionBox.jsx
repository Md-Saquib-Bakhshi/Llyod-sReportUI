export default function ActionBox({title,description,buttons,status}){

  return(

    <div className="box">

      <div className="title">{title}</div>

      <div className="desc">{description}</div>

      <div>
        {buttons}
      </div>

      {status && (
        <div className="status">
          {status}
        </div>
      )}

    </div>

  )

}