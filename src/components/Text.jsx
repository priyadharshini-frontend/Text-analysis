import React from 'react'
import { useState } from 'react'

function Text() {
      const [text, setText] = useState('');
       const [wordCount, setWordCount] = useState(0)
  const [letterCount, setLetterCount] = useState(0)
  const [load,setLoad]=useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false);


      console.log(text)
        const handleSubmit = (e) => {
         
    e.preventDefault() // prevent page reload
    setLoad(true)
    
    if(text.trim()===''){
      setLoad(false)

      return
    }
    setTimeout(()=>{
      // Calculate word count
    const words = text.trim().split(" ").filter(Boolean).length   // 2

    setWordCount(words)

    // Calculate letter count (excluding spaces)
    const letters = text.split("").filter(c => c !== " ").length
    setLetterCount(letters);
    setLoad(false)
    setHasSubmitted(true)

    },1000)

    
  }
    
  return (

   <>
 <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center">Text Analyzer</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control mt-3"
                  placeholder="Enter Text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <button type="submit" className="btn btn-primary mt-3">
                  Analyze
                </button>
              </form>
               <div>
                  {load && <div className="spinner-border mt-3" role="status">
  <span class="sr-only"></span>
</div>}

               </div>
               {!load && hasSubmitted &&(
                <div className="mt-4 p-3 border">
                <h5>Results:</h5>
                <p>Word Count: {wordCount}</p>
                <p>Letter Count: {letterCount}</p>
              </div> 
               ) }
            
         
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Text
