import React , {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick=()=>
    {
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To Uppercase","success");
    }
    const handlelowClick=()=>
    {
        //console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase","success");
    }
    const handleClearClick= ()=>{
        //console.log("Lowercase  was clicked" + text);
        let newText=('');
        setText(newText)
        props.showAlert("Text Cleared","success");
    }
    const handlepresent = () =>{
        let newtext = prompt();
        alert(text.includes(newtext));
     
      }

    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Deleted","success");

    }
    const handlecopy=()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleOnChange=(event)=>
    {
        //console.log("On change"); //to print the details on console
        setText(event.target.value) //to change the text value
    }
    const[ text, setText ] = useState(' ');

        return (
            <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#384958'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label"></label> */}
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'#384958'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        {/* now above the default value of textarea is is value={text} that we have given in state  const[ text, setText ] = useState('Enter text here'); */}
        </div>
        <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handlelowClick}>Convert To Lowercase</button>
        <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleClearClick}>Clear Text</button>
        <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handlepresent}>Check String</button>
        <button type="button" className="btn btn-primary btn-sm mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button type="button" className="btn btn-primary btn-sm mx-1 my-1" onClick={handlecopy}>Copy</button>
        

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#384958'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes to read</p>
            <h2>Preview</h2>
            <p>
                {text.length>0?text:"Enter something in the textbox above to preview it here"}
            </p>

        </div>
        </>
    )
}

