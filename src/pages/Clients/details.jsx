import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DetailsPage({getData}) {

     
  let { id } = useParams();
  useEffect(() => getData(id), [id])

  return <React.Fragment>
    <div className='row'>
      <div className='col-12'>
        <div class="card profile-with-cover"> 
          <div class="card-img-top img-fluid bg-cover height-300">

          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
}