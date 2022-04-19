import React, { useState } from 'react'
import { getSearchData } from '../ApiService/getSearchData'
import { Link } from 'react-router-dom'
import Tweets from './Tweets';

export default function Dashboard() {
  const [tweets, setTweets] = useState([])
  const [searchValue, setSearchValue] = useState();

  const getTwiteets = async (event) => {

    // console.log("aaaaaaaaaaaaaabbbbbb", event)
    try {
      const resp = await getSearchData(event)
      // console.log('respp is aaaaaaaaaaa', resp?.data?.Tweets?.tweets)
      setTweets(resp?.data?.Tweets?.tweets)
    } catch (error) {
      return error;
    }
  }
  // console.log('here is setTweets', tweets)

  return (
    <div>
      <div className='m-5'>
        <input
          type="search"
          placeholder="#Search hashtag..."
          onChange={(event) => {
            getTwiteets(event?.target?.value)
            // setSearchValue(event?.target?.value)
          }}
          aria-describedby="button-addon2"
        />
        {/* <button>
          <Link to={
            {
              pathname: '/Tweets',
              search: `?query=${searchValue}`
            }
          } >
            Search
          </Link>

        </button> */}
      </div>
      {/* <Tweets tweets={tweets} /> */}
      <div>
        {
          tweets.map((data) => (
            <div key={data.url}>
              <div className='row mx-2'>
                <div className=' col-md-2 col-sm-6 col-6' >
                  <img src={data.profile_image} alt="profile" />
                </div>
                <div className=' col-md-4 col-sm-6 col-6'>
                  <h1>{data.name}</h1>
                </div>
                <div className='col-md-4 col-sm-6'>
                  <h4>{data.user_name}</h4>
                </div>
                <div className='col-md-2 col-sm-2'>
                  <small>{data.created_at}</small>
                </div>
              </div>
              <div className='row mx-5'>
                <p>{data.Tweet_Text}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
