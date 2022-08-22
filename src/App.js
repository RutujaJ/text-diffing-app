import React, { useState, useEffect } from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import TextArea from './textAreas';
import './App.css';

function App() {

  const VERSIONCOMPARECOUNT = 2;
  // maintain state of two texts to compare
  const [textVersion1, setTextVersion1] = useState(null);
  const [textVersion2, setTextVersion2] = useState(null);
  
  useEffect(() => {
    var compareButton = document.getElementById("btn");
    compareButton.addEventListener("click", function() {
    // make better
    var t1 = document.getElementById("textVersion1").value;
    setTextVersion1(t1);
    var t2 = document.getElementById("textVersion2").value;
    setTextVersion2(t2);
  });
  });

  return (
    <>
      {[...Array(VERSIONCOMPARECOUNT)].map((x,i) =>
          <TextArea versionCount={i+1} />
      )}
      <button id="btn">Compare</button>
      {textVersion1 && textVersion2  && <ReactDiffViewer oldValue={textVersion1} newValue={textVersion2} splitView={true} />}
    </>
  );
}

export default App;
