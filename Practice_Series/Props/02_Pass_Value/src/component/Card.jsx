// import React from "react";

function Card({Picture1 ,  Picture2 , Picture3 , Picture4 , Picture5}) {

  return (
    <>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div>
          <img src={Picture1} alt="" loading="lazy" width={200}/>
        </div>
        <div className="col-start-3">
          <img src={Picture2} alt="" loading="lazy" width={200}/>
        </div>
        <div>
          <img src={Picture3} alt="" loading="lazy" width={200}/>
        </div>
        <div>
          <img src={Picture4} alt="" loading="lazy" width={200}/>
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          <img src={Picture5} alt="" loading="lazy" width={200} />
        </div>
      </div>
    </>
  )
}

export default Card