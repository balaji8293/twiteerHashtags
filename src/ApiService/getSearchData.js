import axios from 'axios'

export async function getSearchData(req) {
  return axios
    .get(`https://twitter-sa-api.herokuapp.com/?query=${req}`)
    .then((response) => {
      // console.log(response)
      return response
    })
    .catch((error) => {
      console.log(error)
      return error
    })
}
