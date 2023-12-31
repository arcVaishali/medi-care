import React from "react";
import { Link } from "react-router-dom";


const Login = () => (
  <>
    <div className="bg-gradient-to-bl from-[#4D8470] to-white min-h-screen flex items-center justify-center">
    <div className="shadow-md h-[450px] shadow-[#4D8470] rounded-xl border-2 border-[#A2E4A1] bg-gradient-to-t from-[#4D8470] to-[#A2E4A1] transition ease-in-out delay-50 hover:-translate-y-2 duration-500 px-16 py-8" style={{ backgroundColor: "#BAAC9A" }}>
    <div className="card mb-12" style={{ backgroundColor: "#4D8470", border: 'black 2px solid'}}>
      <div className="row g-0">
        <div className="col-md-4 mg-2">
          <img src="frame2.jpg" height="300" width="300" className="card-img" alt="" />
            <h1 class="card-title" style={{color: "white", textAlign:"center", fontSize:25}}><b>MediCare</b></h1>
            <p class="card-text" style={{textAlign:"center", color:"white"}}>We are always there for you.</p>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title"></h1>
            <div className="card text-center">
              <div className="card-header">
                <h1>
                  <strong style={{fontSize:20}}>Login In</strong>
                </h1>
              </div>
              <div className="card-body" style={{ backgroundColor: "#4D8470", border: "black 2px solid" }}>
                <h5 className="card-title"></h5>
                <div className="card-text">
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
                  <Link to="/patient-dashboard" className="btn btn-dark" style={{color:"white", fontSize:18}}>Submit</Link>
                  <div class="card-footer" style={{ color: "white" }}>
                    Don't have an account? <Link to="/register" className="link">Sign Up</Link>
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

export default Login;
