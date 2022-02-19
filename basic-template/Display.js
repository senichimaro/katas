import React, { Fragment, useState } from 'react'

export default function Display( props ){
  const [data,setData] = useState(props.data);
  console.log("data",data);
  return (
    <Fragment>
      <div className="container">

        <h1>User Profile</h1>
        <div className="col-lg-12 px-0">

          <div className="row">

              {
                data.user ?
                  <div className="col-6">
                    <p>user: {data.user}</p>
                  </div>
                : null
              }

              {
                data.host ?
                  <div className="col-6">
                    <p>host: {data.host}</p>
                  </div>
                : null
              }

              {
                data.email ?
                  <div className="col-6">
                    <p>email: {data.email}</p>
                  </div>
                : null
              }

              {
                data.pass ?
                  <div className="col-6">
                    <p>pass: {data.pass}</p>
                  </div>
                : null
              }


            <div className="row">

                {
                  data.lang ?
                    <div className="col-4">
                      <p>lang: {data.lang}</p>
                    </div>
                  : null
                }

              <div className="col-4">
                <i className="bi bi-terminal"></i>
                Back-End Stack
                {
                  data.nodejs ?
                    <p>stack: NodeJs & Mongo</p>
                  : null
                }
                {
                  data.python ?
                    <p>stack: Python & PostgreSQL</p>
                  : null
                }
                {
                  data.php ?
                    <p>stack: PHP & SQL</p>
                  : null
                }
              </div>

              {
                data.framework ?
                  <div className="col-4">
                    <i className="bi bi-tools"></i>
                    Favorite Front-End Framework
                    <p>{data.framework}</p>
                  </div>
                : null
              }

            </div>

          </div>

        </div>

      </div>
    </Fragment>
  )
}
