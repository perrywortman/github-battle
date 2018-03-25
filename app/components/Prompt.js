import React from 'react'
import PropTypes from 'prop-types'
import MainContainer from './MainContainer'

//functional stateless component
function Prompt(props) {
  return(
    <MainContainer>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group col-sm-6 col-sm-offset-3">
            <input
              className="form-control"
              placeholder="Github Username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text" />
          </div>
          <div className="form-group col-sm-2 col-sm-offset-5">
            <button
              className="btn btn-block btn-success"
              type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </MainContainer>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

export default Prompt
