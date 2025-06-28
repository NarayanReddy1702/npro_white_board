import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import "tldraw/tldraw.css";

const App = () => {

  const [input, setInput] = useState("")
 const navigate = useNavigate()
  const handleChange=(e)=>{
     setInput(e.target.value)
     console.log(input);
  }



  const handleSubmit=(e)=>{
       e.preventDefault()
       console.log(input);  
       setInput("")
       localStorage.setItem('userData', JSON.stringify(input));
       navigate("/tldraw")
  }


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex w-1/2 flex-col items-center justify-center gap-10">
        <h1 className="text-blue-600  text-2xl font-semibold">Nprocoder</h1>
        <form className=" px-10 flex items-center justify-center" action="" onSubmit={handleSubmit}>
          <input
          className="w-120 px-5 py-2 border-black border-2 max-[599px]:w-80 text-lg outline-none focus:border-blue-600   rounded"
          placeholder="Write what you want !"
          type="text"
          onChange={handleChange}
          value={input}
        />
        </form>
      </div>
    </div>
  );
};

export default App;
