import React from "react";


const Register = () => (
  <>
    <div className="bg-gradient-to-bl from-[#4D8470] to-white min-h-screen flex items-center justify-center">
    <div className="shadow-md h-[450px] shadow-[#4D8470] rounded-xl border-2 border-[#A2E4A1] bg-gradient-to-t from-[#4D8470] to-[#A2E4A1] transition ease-in-out delay-50 hover:-translate-y-2 duration-500 px-16 py-8" style={{ backgroundColor: "#BAAC9A" }}>
    <div className="card mb-12" style={{ backgroundColor: "#4D8470", border: 'black 2px solid'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="frame2.jpg" height="200" width="200" className="card-img" alt="" /><br></br>
            <h1 class="card-title" style={{color: "white", textAlign:"center", fontSize:25}}><b>MediCare</b></h1>
            <p class="card-text" style={{textAlign:"center", color:"white"}}>We are always there for you.</p>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title"></h1>
            <div className="card text-center">
              <div className="card-header">
                <h1>
                  <strong style={{fontSize:20}}>Create Account</strong>
                </h1>
              </div>
              <div className="card-body" style={{ backgroundColor: "#4D8470", border: "black 2px solid" }}>
                <h5 className="card-title"></h5>
                <div className="card-text">
                  <div className="input-group mb-3 " style={{ border: " black 1px solid" }}>
                    <span className="input-group-text" id="name">
                      Full Name:
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="name" />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="mail">
                      Email:
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="example@gmail.com"
                      aria-label="Username"
                      aria-describedby="mail" />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="password">
                      Password:
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="password" />
                  </div>
                  <div className="hey" style={{ border: " black 2px solid" }}>
                    <p style={{fontSize:20, color:"white"}}>Fill the consent form*</p>
                    <a href="#" className="btn btn-primary">
                      Consent Form
                    </a>
                  </div>
                  <div class="card-footer" style={{ color: "white" }}>
                    Already have an account? <a href="#" className="link">Login In</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  </>
);

export default Register;
