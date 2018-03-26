import axios from 'axios';
const apiKeys = require('../../apiKeys');
const id = apiKeys.CLIENT_ID;
const sec = apiKeys.SECRET_ID;
const param = '?client_id=' + id + '&client_secret=' + sec;

const getUserInfo = username => {
  return axios.get('https://api.github.com/users/' + username + param);
};

const getRepos = username => {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
};

const getTotalStars = repos => {
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count;
  }, 0);
};

const getPlayersData = player => {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(totalStars => {
      return {
        followers: player.followers,
        totalStars: totalStars
      };
    });
};

const calculateScores = players => {
  return [players[0].followers * 3 + players[0].totalStars, players[1].followers * 3 + players[1].totalStars];
};

const githubHelpers = {
  getPlayersInfo: players => {
    return axios
      .all(
        players.map(username => {
          return getUserInfo(username);
        })
      )
      .then(info => {
        return info.map(user => {
          return user.data;
        });
      })
      .catch(err => {
        console.warn('Error in getPlayersInfo', err);
      });
  },
  battle: players => {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios
      .all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(err => {
        console.warn('Error in battle: ', err);
      });
  }
};

export default githubHelpers;
