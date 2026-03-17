export default function ActionBox({title, description, buttons}){

  return(

    <div className="box">

      <div className="title">{title}</div>

      <div className="desc">{description}</div>

      <div>
        {buttons}
      </div>

    </div>

  )
}