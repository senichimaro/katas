import React from 'react'


class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      init:false,
      user:'',
      host:'',
      email:'',
      pass:'',
      lang:'',
      stack:'',
      framework:''
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillMount(){
    this.setState({init:true})
  }

  submitHandler( event ){
    event.preventDefault();
    console.log("Submit this.state : ",this.state);
  }

  inputHandler( event ){
    event.preventDefault();
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]:value
    })
  }

  render(){
    return (
      <div className="container">
        <form className="row g-3" action="/profile" method="post" onSubmit={this.submitHandler}>

          {/*<!-- input -->*/}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-person-circle"></i>
            </span>
            <input onChange={this.inputHandler} type="text" name="user" id="Username" className="form-control" placeholder="Username" aria-label="Username" value={this.state.user}/>
            <span className="input-group-text">
              <i className="bi bi-hdd-stack-fill"></i>
            </span>
            <input onChange={this.inputHandler} type="text" name="host" id="Host" className="form-control" placeholder="Host" aria-label="Host" value={this.state.host}/>
          </div>

          {/*<!-- input -->*/}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <input onChange={this.inputHandler} type="text" name="email" id="inputEmail4" className="form-control" placeholder="Email" aria-label="Username" value={this.state.email}/>
              <span className="input-group-text">
                <i className="bi bi-key"></i>
              </span>
            <input onChange={this.inputHandler} type="text" name="pass" id="inputPassword4" className="form-control" placeholder="Password" aria-label="Server" value={this.state.pass}/>
          </div>


          {/*<!-- Select -->*/}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-translate"></i>
            </span>
            <select onChange={this.inputHandler} value={this.state.lang} className="form-select" name="lang" id="SelectOption">
              <option defaultValue>Choose...</option>
              <option value="1">English</option>
              <option value="2">Spanish</option>
              <option value="3">Deutsch</option>
            </select>
          </div>


          {/*<!-- check-box -->*/}
          <div className="col-sm-6">

            <legend className="col-form-label">
              <i className="bi bi-terminal"></i>
              Preferred Back-End Stack
            </legend>
            <div className="form-check form-check-inline">
              <input onChange={this.inputHandler} className="form-check-input" type="checkbox" name="stack1" id="StackCheckbox1" value={this.state.stack} />
              <label className="form-check-label" htmlFor="inlineCheckbox1">NodeJs & Mongo</label>
            </div>
            <div className="form-check form-check-inline">
              <input onChange={this.inputHandler} className="form-check-input" type="checkbox" name="stack2" id="StackCheckbox2" value={this.state.stack} />
              <label className="form-check-label" htmlFor="inlineCheckbox2">Python & PostgreSQL</label>
            </div>
            <div className="form-check form-check-inline">
              <input onChange={this.inputHandler} className="form-check-input" type="checkbox" name="stack3" id="StackCheckbox3" value={this.state.stack} />
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
                  <input onChange={this.inputHandler} className="form-check-input" type="radio" name="framework" id="gridRadios1" value={this.state.framework} />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    MERN
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input onChange={this.inputHandler} className="form-check-input" type="radio" name="framework" id="gridRadios2" value={this.state.framework} />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Django
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input onChange={this.inputHandler} className="form-check-input" type="radio" name="framework" id="gridRadios3" value={this.state.framework} />
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
    )
  }

}

export default Form;
