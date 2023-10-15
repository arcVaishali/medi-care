import React from "react";

const Auth = () => {
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
              <div className="card-text" mt-1>
                <p style={{ textAlign: "center" }}>
                  This is required to be completely filled by the patient's
                  guardian.
                </p>
                <hr style={{ color: "#A2E4A1" }}></hr>
                <div
                  className="container mt-1"
                  style={{ color: "#A2E4A1", fontSize: 25 }}
                >
                  MediCare Authorization and Release
                </div>
                <div className="body3 mt-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" htmlFor="flexCheckDefault">
                      I give my permission to MediCare services, to provide
                      medical treatment (diagnostic and therapeutic procedures)
                      as may be necessary for the patient as requested, and as
                      needed in the event of an emergency.
                    </label>
                  </div>
                  <p>
                    <div className="row g-3 mt-1">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          aria-label="full name"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Relationship to Patient"
                          aria-label="relationship"
                        />
                      </div>
                    </div>
                    <div className="row g-3 mt-1">
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Mobile No"
                          aria-label="Mobile No2"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Home Phone No"
                          aria-label="Home Phone No2"
                        />
                      </div>
                    </div>
                    <div className="row g-3 mt-1">
                      <div className="col">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email ID"
                          aria-label="Email ID2"
                        />
                      </div>
                    </div>
                    <div class="input-group mb-3 mt-4">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile02"
                      />
                      <label class="input-group-text" for="inputGroupFile02">
                        Upload Signature
                      </label>
                    </div>
                    <div className="btn">
                      <a
                        href="#"
                        className="btn btn-success"
                        style={{ color: "white", fontSize: 18 }}
                      >
                        Submit
                      </a>
                    </div>
                  </p>
                  <div
                    className="page mt-1"
                    style={{
                      textAlign: "center",
                      fontSize: 15,
                      color: "white",
                    }}
                  >
                    3/3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
