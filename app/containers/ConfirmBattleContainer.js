import React from 'react'
import PropTypes from 'prop-types'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

const ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: () => {
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentDidMount: function() {
    const query = this.props.location.query
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0],players[1]]
      })
    }.bind(this))
  },
  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render: function() {
    return(
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo} />
    )
  }
})

export default ConfirmBattleContainer
