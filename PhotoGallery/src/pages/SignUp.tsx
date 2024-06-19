import React from 'react'

const SignUp = () => {
  return (
    <form>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Upload Images</h1>
      <p className="py-6">SignUp and Show your photography skill to others.</p>
    </div>
    <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SIGN UP</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </form>
  )
}

export default SignUp