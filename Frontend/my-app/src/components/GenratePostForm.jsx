import React, {useState} from 'react'
import axios from 'axios'
function GenratePostForm() {
    const [post, setPost] = useState("")
    const [prompt, setPrompt] = useState("")

    const handleGenratePost = async()=>{
        try {
            const response = await axios.post("http://localhost:8080/generate", {prompt})
            setPost(response.data.post)
        } catch (error) {
            console.log(error, 'Error genrating post')
        }
    }

  return (
    <div>
      <h2>Genrate Post</h2>
      <div>
        <label>Prompt:</label>
        <input type="text" value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Enter prompt" />
      </div>
      <button onClick={handleGenratePost}>Genrate</button>
      {post && <div><strong>Generated Post:</strong> {post}</div>}
    </div>
  )
}

export default GenratePostForm
