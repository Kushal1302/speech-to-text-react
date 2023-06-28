import 'regenerator-runtime';
import  SpeechRecognition , { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
import { useState } from 'react';



function App() {
  const [copyText , setCopyText] = useState("")
  const [isCopied, setCopied] = useClipboard(copyText);

  const {transcript , browserSupportsSpeechRecognition} = useSpeechRecognition();
  if(!browserSupportsSpeechRecognition){
    return null;
  }

  return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-10 col-lg-8 mx-auto mt-5">
              <h2 style={{textAlign:'center' , color:'#fff'}}>Speech to Text Converter</h2>
              <div className="main-content" onClick={() => setCopyText(transcript)}>
                {transcript}
              </div>
              <div className="btn-style d-flex flex-wrap ">
              <button  onClick = {setCopied}>
                {isCopied ? 'Copied' : 'Copy to Clipboard'}
              </button>
                <button  onClick={() => SpeechRecognition.startListening({continuous:true , language:'en-IN'})}>Start Listening</button>
                <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
              </div>
            </div>
          </div>  
          </div>
      </>
    )

}

export default App
