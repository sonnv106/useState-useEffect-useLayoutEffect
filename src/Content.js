import { useEffect, useState } from "react";

const tabs  = ['posts', 'todos', 'photos']

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] =useState(false)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`).then((res) =>
      res.json()
    ).then((result)=>setPosts(result));
  },[type]);

  useEffect(()=>{
    const handleScroll = ()=>{
        if(window.scrollY>=200){
            setShowGoToTop(true)
        }else{
            setShowGoToTop(false)
        }
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{
        window.removeEventListener('scroll',handleScroll)
    }
  },[])
  const scrollTop = ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  }
  return (
    <div>
    
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      {tabs.map((item)=>(
          <button
            key={item}
            style={type===item?{backgroundColor: "#FDA"}:{}}
            onClick={()=>setType(item)}
          >{item}</button>
      ))}
      {posts.map((post)=>(
          <li key={post.id}>{post.title}</li>
      ))}
      {
          showGoToTop && <button style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
        }}
         onClick={()=>{scrollTop()}}>Go to top</button>
      }
    </div>
  );
}
export default Content;
