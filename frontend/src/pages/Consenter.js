import React from 'react'

const Consenter = () => {
  return (
    <>
     <div className="bg-gradient-to-bl from-[#4D8470] to-white min-w-screen flex items-center justify-center">
    <div className="shadow-md h-[600px] shadow-[#4D8470] rounded-xl border-2 border-[#A2E4A1] bg-gradient-to-t from-[#4D8470] to-[#A2E4A1] transition ease-in-out delay-50 hover:-translate-y-2 duration-500 px-16 py-6" style={{ backgroundColor: "#BAAC9A" }}>
    <div className="card bg-dark text-white">
  <img src="frame5.jpg" className="img-fluid rounded" alt=""/>
  <div className="card-img-overlay"><br></br>
    <h5 className="card-title" style={{fontSize:34, color:"#A2E4A1"}}>Consenter Input Details</h5>
    <div className="card-text"><br></br>
    <div class="mb-3">
  <label for="fullName" class="form-label" style={{color:"#A2E4A1", fontSize:20}}>Full Name</label>
  <input type="email" class="form-control" id="fullName"/>
</div>
<div class="mb-3">
  <label for="add" class="form-label" style={{color:"#A2E4A1", fontSize:20}}>Address</label>
  <textarea class="form-control" id="add" rows="3"></textarea>
</div>
  <div class="mb-3">
  <label for="number" class="form-label" style={{color:"#A2E4A1", fontSize:20}}>Contact No.</label>
  <input type="number" class="form-control" id="number"/>
</div>
</div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Consenter