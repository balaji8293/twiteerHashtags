import React, { useEffect, useState } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchData } from '../ApiService/getSearchData';
export default function Tweets({ tweets }) {

    // const query1 = new URLSearchParams(useLocation().search);
    // const searchName = quesry1.get("query");
    // console.log(searchName);

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchKey, setSearchKey] = useState(searchParams.get('query'))

    console.log(tweets);
    // useEffect(() => {
    //     getTwiteets()
    // }, [])

    // const getTwiteets = async (event) => {
    //     console.log("aaaaaaaaaaaaaabbbbbb", event)
    //     try {

    //         const resp = await getSearchData(event)
    //         // console.log('respp is aaaaaaaaaaa', resp?.data?.Tweets?.tweets)

    //         setTweets(resp?.data?.Tweets?.tweets)
    //     } catch (error) {
    //         return error;
    //     }
    // }
    return (
        <div>
            <div>
                {
                    tweets.map((data) => (
                        <>
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
                        </>
                    ))
                }
            </div>
        </div>
    )
}
