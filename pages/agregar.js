import {useEffect, useState} from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'


const Home = ( {posts} ) => {
    const [userName,setUserName] = useState("");
    const [title,setTitle] = useState("");
    const [text,setText] = useState("");
    
    const submitEquipo = () => {
    Axios.post('http://localhost:3001/', {userName: userName, title: title, text:text})
    }
  console.log(posts)
  return (
    <>

      <Head>
        <title>devter 🐦</title>
      </Head>

      <AppLayout>
        <section>
          <h1>Agregar Equipos</h1>
          <h2>Scaner<br />for security 👩‍💻👨‍💻</h2>

          <div>

          <div className="CreatePost">
            <div className="uploadPost">
                <label>: </label>
                <input type="text" onChange={(e)=> {
                    setUserName(e.target.value)
                }}/>
                <label>Title: </label>
                <input type="text" onChange={(e)=>{
                    setTitle(e.target.value)
                }}/>
                <label>Post Text</label>
                <textarea 
                onChange={(e)=>{
                    setText(e.target.value)
                }}
                ></textarea>
            <button onClick={submitEquipo}>Submit Post</button>
            </div>
        </div>
            {/* <ul>
              {posts.map(post =>(
                  <li key={post.id}> {post.nombre} </li>
              ))}         
            </ul> */}
            
          </div>
          
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }
        div {
          margin-top: 16px;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3001/listar')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Home;