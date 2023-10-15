import React from "react";

const ConsentForm = () => {
  return (
    <>
      <div className="bg-gradient-to-bl from-[#4D8470] to-white min-h-screen flex items-center justify-center">
        <div
          className="shadow-md h-[600px] shadow-[#4D8470] rounded-xl border-2 border-[#A2E4A1] bg-gradient-to-t from-[#4D8470] to-[#A2E4A1] transition ease-in-out delay-50 hover:-translate-y-2 duration-500 px-16 py-8"
          style={{ backgroundColor: "#BAAC9A" }}
        >
          <div className="card bg-dark text-white">
            <img src="frame4.jpg" className="card-img" alt="" />
            <div className="card-img-overlay">
              <h5
                className="card-title"
                style={{ color: "#A2E4A1", fontSize: 30, textAlign: "center" }}
              >
                Medical Consent Form
              </h5>
              <div className="card-text">
                <p style={{ textAlign: "center" }}>
                  This is required to be completely filled by the patient's
                  guardian.
                </p>
                <hr style={{ color: "#A2E4A1" }}></hr>
                <p style={{ color: "#A2E4A1", fontSize: 25 }}>
                  Patient's Information
                </p>
                <p>
                  <div className="row g-3 mt-1">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Middle name"
                        aria-label="Middle name"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mt-1">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Patient's ID"
                        aria-label="Patient's ID"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Birth Date"
                        aria-label="Birth Date"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlfor="exampleFormControlTextarea1"
                      class="form-label"
                    ></label>
                    <textarea
                      className="form-control"
                      placeholder="Address"
                      id="exampleFormControlTextarea1"
                      rows="2"
                    ></textarea>
                  </div>
                  <div className="row g-3 mt-1">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gender"
                        aria-label="Gender"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Age"
                        aria-label="Age"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Height"
                        aria-label="Height"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mt-1">
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile No"
                        aria-label="Mobile No"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Home Phone No"
                        aria-label="Home Phone No"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mt-1">
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email ID"
                        aria-label="Email ID"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Other mail ID"
                        aria-label="Other mail ID"
                      />
                    </div>
                  </div>
                  <div className="btn mt-1">
                    <a
                      href="#"
                      className="btn btn-dark"
                      style={{ color: "white", fontSize: 18 }}
                      // onClick={()=>func()}
                    >
                      Next
                    </a>
                  </div>

                  <div
                    className="page"
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      color: "black",
                    }}
                  >
                    1/3
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsentForm;
