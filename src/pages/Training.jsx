import React, { useEffect, useState } from 'react'
import images from '../images/blog1.jpg'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { GoVerified } from 'react-icons/go';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { TextToSpeech } from '../TextToSpeech';

const Training = () => {

    const [data, setData] = useState([]);
    const [schemeData, setSchemeData] = useState([]);
    
    useEffect(()=>{
        TextToSpeech("Welcome to Training Page ")
      },[])



    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            q: 'inspirational videos of persons with disabilities ',
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        headers: {
            'X-RapidAPI-Key': '1dfd7807d4msh316e5c9ecedccafp1e70dajsn633c1a47ae04',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
    };

    const options2 = {
      method: "POST",
      url: "https://all-serp.p.rapidapi.com/all-serp-website",
      params: {
        keyword: "government schemes for person with disability",
        location: "in",
        language: "en",
        search_engine: "google",
        page_limit: "1",
        search_type: "All",
      },
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "1dfd7807d4msh316e5c9ecedccafp1e70dajsn633c1a47ae04",
        "X-RapidAPI-Host": "all-serp.p.rapidapi.com",
      },
      data: '{"key1":"value","key2":"value"}',
    };
  
   

    const fetchData = async () => {
        const response = await axios.request(options2);
        console.log(response.data , "data");
        setSchemeData(response.data.organic_results);
     
      };

    const getData = async () => {
        const data = await axios.request(options);
        // console.log(data.data.items);
        setData(data.data.items);

    }

    useEffect(() => {
        getData();
        fetchData();
    }, [])

        // axios.request(options).then(function (response) {
        //     console.log(response.data.items)
        //     setData(response.data.items);
        // }).catch(function (error) {
        //     console.error(error);
        // });



    return (
        <div className='container'>
            <br></br>
            <br></br>
     


           {schemeData.map((item)=>(

            <div className='row'>

          
            <div className='d-flex justify-content-between mt-2 box-shadow'>
              <div className='mt-2'>
              <p className='mx-1'>{item.title}</p>
              <p className='mx-1'><GoVerified /> {item.domain}</p>
              </div>
              <div className='mt-2'>
                <a className='mx-1' href={item.url}>Know More <BsBoxArrowUpRight /> </a>
              </div>

            </div>
            </div>
           ))}
           
        
            <div className='row'>
                <h2>Upskill yourself and give your resume the glow it needs.</h2>
                <h3>From core to soft skills, grab a cuppa and learn at the comfort of your home/office.</h3>
            </div>
            <br></br>
            <div className='row'>
                <div className='d-flex'>
                    <Button className='button-filter'>All</Button>
                    <Button className='button-filter'>Tech</Button>
                    <Button className='button-filter'>Design</Button>
                    <Button className='button-filter'>Art</Button>
                    <Button className='button-filter'>Operations</Button>
                    <Button className='button-filter'>Culinary Arts</Button>
                    <Button className='button-filter'>Business
                    </Button>
                    <Button className='button-filter'>Social Services</Button>
                </div>
            </div>
            <br></br>
            <div className='row'>

                {data.map((item) => (
                    <div className='col-md-3 mt-4'>
                        <img className='rounded' style={{width:"300px",height:"200px"}} src={item?.snippet?.thumbnails?.default.url}></img>
                        <p className='mt-2' style={{fontSize:"15px"}}>{item.snippet.description}</p>
                        <p className='mt-2' style={{fontSize:"13px"}}>{item.snippet.title}</p>
                        
                        <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}  target="_blank"  style={{padding:"2%" , textDecoration:"none"}} className="button-style" >Know More</a>

                    </div>
                ))}


            </div>

        </div>
    )
}

export default Training