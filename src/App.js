import { useState, useEffect } from "react";
import "./index.css"
const App = () => {
  const [data, setData] = useState("");
  
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  let url = "https://my-json-server.typicode.com/typicode/demo/posts";
 
  useEffect(() => {
    const abourtControler = new AbortController();
    setTimeout(() => {
      fetch( url, { signal : abourtControler.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resources");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          console.log(data)
          setIspending(false);
          setError(null);
        })
        .catch((err) => {
          if(err.name === "AbortError"){
            console.log("fetch Abourted");
          }else{
            setError(err.message);
            setIspending(false);
          }
         
        });
    }, 2000);
    return (()=> abourtControler.abort());
  }, [url]);
  
  return (
    <>
    {isPending && <h4> Loading....</h4>}
    {error && <h4> Ooops... Somthing Went Wrong{error}</h4>}
    {data.map((data) => <h4 key={data.id}>`Post Id ${data.id} and its title is ${data.title}`</h4>)}
    </>
  );
};
export default App;
// "homepage" : "https://Vikas1798.github.io/todo-task",
// "predeploy" : "npm run build",
//     "deploy": "gh-pages -d build",