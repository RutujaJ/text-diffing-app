
function TextArea(props) {
 

    return (
      <div class="textAreaBlock">
        <label>{"Enter text version " + props.versionCount} : </label>
        <textarea id = {"textVersion"+ props.versionCount} rows="4" cols="80"/>
      </div>
    );
  }
  
  export default TextArea;