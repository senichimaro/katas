import React, { Fragment } from 'react'


import Display from './Display'


class Form extends React.Component {

  render(){
    return (
      <Fragment>
        <div className="container my-5">
          <form className="row g-3" action="/profile" method="post" >

            {/*<!-- input -->*/}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-person-circle"></i>
              </span>
              <input type="text" name="user" id="Username" className="form-control" placeholder="Username" aria-label="Username" />
              <span className="input-group-text">
                <i className="bi bi-hdd-stack-fill"></i>
              </span>
              <input type="text" name="host" id="Host" className="form-control" placeholder="Host" aria-label="Host" />
            </div>

            {/*<!-- input -->*/}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input type="text" name="email" id="inputEmail4" className="form-control" placeholder="Email" aria-label="Username" />
                <span className="input-group-text">
                  <i className="bi bi-key"></i>
                </span>
              <input type="text" name="pass" id="inputPassword4" className="form-control" placeholder="Password" aria-label="Server" />
            </div>


            {/*<!-- Select -->*/}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="bi bi-translate"></i>
              </span>
              <select className="form-select" name="lang" id="SelectOption">
                <option default>Choose...</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Deutsch">Deutsch</option>
              </select>
            </div>


            {/*<!-- check-box -->*/}
            <div className="col-sm-6">

              <legend className="col-form-label">
                <i className="bi bi-terminal"></i>
                Preferred Back-End Stack
              </legend>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="nodejs" id="nodejs" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">NodeJs & Mongo</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="python" id="python" />
                <label className="form-check-label" htmlFor="inlineCheckbox2">Python & PostgreSQL</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" name="php" id="php" />
                <label className="form-check-label" htmlFor="inlineCheckbox3">PHP & SQL</label>
              </div>

            </div>


            {/*<!-- input-radio -->*/}
            <div className="col-sm-6">

              <legend className="col-form-label">
                <i className="bi bi-tools"></i>
                Favorite Front-End Framework
              </legend>
              <fieldset className="row mb-3">
                <div className="col-sm-10">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="framework" id="gridRadios1" value="MERN" />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      MERN
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="framework" id="gridRadios2" value="Django" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Django
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="framework" id="gridRadios3" value="Wordpress" />
                    <label className="form-check-label" htmlFor="gridRadios3">
                      Wordpress
                    </label>
                  </div>
                </div>
              </fieldset>

            </div>


            {/*<!-- submit -->*/}
            <div className="d-flex justify-content-end gap-2">
              <button className="btn btn-danger" type="button">Cancel</button>
              <button className="btn btn-success" type="submit">Submit</button>
            </div>

          </form>

        </div>

        {
          /*this.state.access &&*/
          false &&
          <Display data={this.state} />
        }

      </Fragment>
    )
  }

}

export default Form;
