import React,{useState} from "react";

export default function About() {

     const[myStyle,setmyStyle]=useState({
        color: 'white',
        backgroundColor: 'black',

        
    })
    
    const [text,settext]=useState("Enable Light Mode")
   const toggleStyle = ()=>{
        if(myStyle.color=='white'){
            setmyStyle({
                color: 'black',
                backgroundColor: 'white',
                border:'3px solid white'
            })
            settext("Enable Dark Mode")

        }
        else{
            setmyStyle({
                color: 'white',
                backgroundColor: 'black',

            })

            settext("Enable Light Mode")


        }
    }
  return (
    <div className="container my-2" style={myStyle}>
        <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
             <strong>Text Util</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample" 
          >
            <div className="accordion-body"  style={myStyle}>
              <strong>Text Utility is the text formatting tool</strong> that provides you various types of formatting options
               such as covert to upper-lower case,clear current text,speak text. We are working on other formatting methods
                will be released soon. Stay tune for further more updates.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Themes
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body"  style={myStyle}>
              <strong>By default you can see light mode </strong> But you can change it to dark mode too.
              At the top right of the navigation you will get the option to enable or disable the dark mode.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <button className="my-4" onClick={toggleStyle}>{text}</button>
    </div>
  );
}
