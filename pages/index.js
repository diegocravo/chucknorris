import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import axios from "axios"
import GithubCorner from "../src/components/GithubCorner"

export default function Home() {

  const [quote, setQuote] = useState("A quote fica aqui");
  const [image, setImage] = useState("A image fica aqui");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      setQuote(response.data.value);
      setImage(response.data.icon_url);
      setLoading(false)
    })
  }, [])

  const anotherQuote = () => {
    setQuote("Loading")
    axios.get("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      setQuote(response.data.value)
    })
  }

  return (
    <>
    <GithubCorner />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <Head>
        <title>Chuck Norris Api</title>
        <link rel="icon" href={image} />
      </Head>

      {/* <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h2 className="text-2xl font-bold">
            Chuck Norris random Quotes
          </h2>

      </main> */}

      <div className="min-w-screen items-center justify-center px-5 py-5">
            <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" style={{maxWidth: "500px"}} >
                <div className="w-full pt-1 pb-5">
                    <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                        <img src="https://pbs.twimg.com/profile_images/1254509037594517504/3AerCb3D_400x400.jpg" alt="Chuck Norris" />
                    </div>
                </div>
                <div className="w-full mb-10">
                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
                    <p className="text-sm text-gray-600 text-center px-5">
                      {loading ?
                      "Loading"
                      :
                      quote
                      }
                    </p>
                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                </div>
                <div className="w-full">
                    <p className="text-md text-indigo-500 font-bold text-center">Chuck Norris</p>
                </div>
            </div>
            <button 
                className="mx-auto my-4 block bg-indigo-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" 
                onClick={anotherQuote}
            >
              Refresh
            </button>
        </div>
    </div>
    </>
  )
}
