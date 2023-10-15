import React from 'react'

const ConsentForm2 = () => {
  return (
    <>
     <div className="bg-gradient-to-bl from-[#4D8470] to-white min-h-screen flex items-center justify-center">
    <div className="shadow-md h-[600px] shadow-[#4D8470] rounded-xl border-2 border-[#A2E4A1] bg-gradient-to-t from-[#4D8470] to-[#A2E4A1] transition ease-in-out delay-50 hover:-translate-y-2 duration-500 px-16 py-8" style={{ backgroundColor: "#BAAC9A" }}>
    <div className="card bg-dark text-white">
  <img src="frame4.jpg" className="card-img" alt=""/>
  <div className="card-img-overlay mt-2">
    <h5 className="card-title" style={{color:"#A2E4A1" ,fontSize:30, textAlign:"center"}}>Medical Consent Form</h5>
    <div className="card-text">
    <p style={{textAlign:"center"}}>This is required to be completely filled by the patient's guardian.</p>
      <hr style={{color:"#A2E4A1"}}></hr>
      <div className="container mt-2" style={{color:"#A2E4A1", fontSize:25}}>Emergency Contact Details (Guardian's Information)
      <p>
      <div className="row g-3 mt-1">
  <div className="col">
    <input type="text" className="form-control" placeholder="Full Name" aria-label="Name"/>
  </div>
  <div className="col">
    <input type="text" className="form-control" placeholder="Relationship to Patient" aria-label="Relationship"/>
  </div>
  </div>
  <div className="mb-3">
  <label htmlfor="add2" class="form-label"></label>
  <textarea className="form-control" placeholder="Address" id="add2" rows="2"></textarea>
</div>
<div className="row g-3 mt-1">
  <div className="col">
    <input type="number" className="form-control" placeholder="Mobile No" aria-label="Mobile No2"/>
  </div>
  <div className="col">
    <input type="number" className="form-control" placeholder="Home Phone No" aria-label="Home Phone No2"/>
  </div>
  </div>
  <div className="row g-3 mt-1">
  <div className="col">
    <input type="email" className="form-control" placeholder="Email ID" aria-label="Email ID2"/>
  </div>
  </div>
      </p>
      <div className="btn mt-2">
  <a href="#" className="btn btn-success" style={{color:"white", fontSize:18}}>Previous</a>
  </div>
      <div className="btn mt-2">
  <a href="#" className="btn btn-success" style={{color:"white", fontSize:18}}>Next</a>
  </div>
  <div className="page" style={{textAlign:"center" ,fontSize:15, color:"white"}}>2/3</div>
       </div>
     </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default ConsentForm2