import React from "react";


const CV = () => {
  return (
    <div class="jumbotron">

      <div>
        <h1 style={{ fontSize: '60px', marginTop: '5%' }}>CV </h1>
        <p style={{ overflowY: 'auto'}}>

        Please feel free to download my professional resume by click on picture below.
        </p>
        <a href="https://drive.google.com/file/d/1yGb3Iu7HhAmq3j_r95IL_Nx2prJHL-8f/view" download>
          <button class="bi bi-file-earmark-person-fill"></button>
        </a>

      </div>
    </div>
  )
}





export default CV