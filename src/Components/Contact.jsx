import React, {  useState } from "react";
import '../css/contact.css'
import img from '../PIC/contact.png'


export default function Root() {
  const [form, setForm] = useState(
    {
      fname: '',
      femail: '',
      fphn:'',
      ftopic:'',
      fmsg:''
    }
  );

  // useEffect((e)=>{

  // });

  const inputing = (e) => {

    // const val = e.target.value
    // const name = e.target.name
    const {value, name} = e.target
    setForm((prev) => {
      return {
        ...prev,
        [name] : value
      }
      })
  }

  const send = async (e) => {
    e.preventDefault();
    const { fname,femail,fphn,ftopic,fmsg } = form;

    if(form.fname==="" || form.femail==="" || form.fphn==="" || form.ftopic==="" || form.fmsg===""){
      alert("No information should be empty!")
    }
    else{
      console.log(form);
      
      const res = await fetch("https://myportfolio-727db-default-rtdb.firebaseio.com/myportfoliocontactform.json",
      {
        method :'POST',
        headers: {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify({
          fname,femail,fphn,ftopic,fmsg
        }),
      })
      if(res){
        setForm({
          fname: '',
          femail: '',
          fphn:'',
          ftopic:'',
          fmsg:''
        })
      }
      alert("Submitted!")
    }
    
  }
  return (
    <>
      <h1 className='project text-start mx-5 px-5 mt-3 justify-content-center align-items-center'>
        Contact Me
      </h1>
      <div className="totalform d-flex flex-row justify-content-around " style={{ height: '390px' }}>
        <form className="form_Compo " method="POST">
          <div className="form m-3 px-5 ">
            <input
              type="text"
              id="text"
              className="form__input name"
              name='fname'
              value={form.fname}
              placeholder=" "
              onChange={inputing} />
            <label htmlFor="text" className="form__label">Name</label>
          </div>
          <div className="form m-3 px-5 ">
            <input
              type="text"
              id="email"
              className="form__input email"
              name='femail'
              value={form.femail}
              placeholder=" " 
              onChange={inputing} />
            <label htmlFor="email" className="form__label">Email</label>
          </div>
          <div className="form m-3 px-5 ">
            <input 
            type="text" 
            id="phn" 
            className="form__input phn"
            name="fphn"
            value={form.fphn} 
            placeholder=" " 
            onChange={inputing}/>
            <label htmlFor="phn" className="form__label">Phone no.</label>
          </div>
          <div className="form m-3 px-5 ">
            <input 
            type="text" 
            id="topic" 
            className="form__input topic"
            name="ftopic"
            value={form.ftopic} 
            placeholder=" "
            onChange={inputing} />
            <label htmlFor="topic" className="form__label">Topic</label>
          </div>
          <div className="form m-3 px-5 ">
            <textarea
            rows="5"
            maxLength='200' 
            type="text" 
            id="msg" 
            className="form__input msg"
            name="fmsg"
            value={form.fmsg} 
            placeholder=" " 
            onChange={inputing}
            style={{ height: '90px' }} />
            <label htmlFor="msg" className="form__label">Message (200 words)</label>
          </div>
          <div className="sbmt btn btn-light" onClick={send}>Submit</div>
        </form>
        <div className="img mx-5 justify-content-between align-items-center">
          <img src={img} alt="contact" className="cont" style={{
            width: "400px",
            height: "400px"
          }} />
        </div>
      </div>


    </>
  );
}