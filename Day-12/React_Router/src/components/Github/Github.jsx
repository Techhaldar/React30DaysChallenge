import React, { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch('https/api.github.com/users/hiteshchoudhary')
      .then(respone => respone.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }, [])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3">Github Followers: </div>
  )
}

export default GitHub