import React from 'react'

function MetaInfo(props) {
  return (
    <div className='container-custom mtop-80'>
       <h1 className='title' style={{"marginBottom": "30px", "fontWeight": "bold"}}>{props.title}</h1> 

       {props.paragraphs1?.map((paragraph,i) => {
            return  <p key={i} className="text-regular" style={{"lineHeight": "21.89px", "marginBottom": "20px"}}>{paragraph}</p>
       })}

       {props.ul1 && 
          <div className='ul'>
            <h1 className='title-medium text-start'>{props.ul1.title}</h1>
            <h2 className='title-regular'>{props.ul1.subtitle}</h2>

            <ul>
                {props.ul1.lis?.map((li,i) => {
                    return <li key={i}>{li}</li>
                })}
            </ul>
          </div>
        }
       {props.ul2 && 
          <div className='ul'>
            <h1 className='title-medium text-start'>{props.ul2.title}</h1>
            <h2 className='title-regular'>{props.ul2.subtitle}</h2>

            <ul>
                {props.ul2.lis?.map((li,i) => {
                    return <li key={i}>{li}</li>
                })}
            </ul>
          </div>
        }


        {props.title2 &&  <h1 className='title-medium text-start'>{props.title2}</h1>}
        {props.paragraphs2?.map((paragraph,i) => {
            return  <p key={i} className="text-regular" style={{"lineHeight": "21.89px", "marginBottom": "20px"}}>{paragraph}</p>
       })}

        {props.title3 &&  <h1 className='title-medium text-start'>{props.title3}</h1>}
        {props.paragraphs3?.map((paragraph,i) => {
            return  <p key={i} className="text-regular" style={{"lineHeight": "21.89px", "marginBottom": "20px"}}>{paragraph}</p>
       })}

        {props.ul3 && 
          <div className='ul'>
            <h1 className='title-medium text-start'>{props.ul3.title}</h1>
            <h2 className='title-regular'>{props.ul3.subtitle}</h2>

            <ul>
                {props.ul3.lis?.map((li,i) => {
                    return <li key={i} style={{"lineHeight": "21.89px", "marginBottom": "20px"}}>{li}</li>
                })}
            </ul>

            {props.ul3?.ps.map((p,i) => {
                    return <p key={i} className="text-regular" style={{"lineHeight": "21.89px", "marginBottom": "20px"}}>{p}</p>
            })}

          </div>
        }


        
        {props.tctitle &&  <h1 className='title-medium text-start'>{props.tctitle}</h1>}

        <div className='ul'>
            <ul>
                {props.tcul && props.tcul.map((li,i) =>  <li key={i} style={{"lineHeight": "21.89px", "marginBottom": "20px"}}> {li}</li>)}  
            </ul>

        </div>
      
    </div>
  )
}

export default MetaInfo