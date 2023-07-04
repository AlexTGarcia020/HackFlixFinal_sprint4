import React from 'react';
import '../assets/nosotros.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';


function SobreNosotros() {

  return (
    <div className='container'>
      <Navbar/>
      <div className='container-about'>
        <div className="card-about m-4">

        </div>
        <div class="card-team">
        <div class="card-info">
        <div class="card-avatar"><img src="AlexProfile.jpg" className='img-fluid img-team' alt="" /></div>
        <div class="card-title">Alex Garcia</div>
        <div class="card-subtitle">Full Stack Developer</div>
        </div>
        <ul class="card-social">
          <Link to={"https://www.linkedin.com/in/alex-garcia20/"}>
        <li class="card-social__item">
        <svg fill="#000000" width="70px" height="70px" viewBox="0 0 2.1 2.1" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M1.791 0.175H0.309a0.127 0.127 0 0 0 -0.129 0.125v1.5A0.127 0.127 0 0 0 0.309 1.925h1.482a0.127 0.127 0 0 0 0.129 -0.125V0.3A0.127 0.127 0 0 0 1.791 0.175ZM0.708 1.64h-0.262v-0.787h0.262ZM0.577 0.742a0.136 0.136 0 1 1 0 -0.273 0.137 0.137 0 1 1 0 0.273Zm1.078 0.898h-0.262v-0.423c0 -0.106 -0.038 -0.175 -0.133 -0.175A0.144 0.144 0 0 0 1.124 1.137a0.175 0.175 0 0 0 -0.009 0.064v0.438h-0.262v-0.787h0.262V0.962a0.262 0.262 0 0 1 0.237 -0.131c0.175 0 0.302 0.113 0.302 0.355Z"/></svg></li>
        </Link>
        <Link to={"https://github.com/AlexTGarcia020"}>
    <li class="card-social__item">
      <svg width="70px" height="70px" viewBox="0 0 2.1 2.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M1.05 0a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0 -2.1zm0.277 1.906h-0.008a0.045 0.045 0 0 1 -0.033 -0.012 0.045 0.045 0 0 1 -0.012 -0.033v-0.123c0.001 -0.041 0.001 -0.082 0.001 -0.124a0.323 0.323 0 0 0 -0.013 -0.09 0.16 0.16 0 0 0 -0.047 -0.077 0.701 0.701 0 0 0 0.178 -0.041 0.354 0.354 0 0 0 0.128 -0.084c0.036 -0.037 0.062 -0.083 0.077 -0.132a0.592 0.592 0 0 0 0.026 -0.186 0.362 0.362 0 0 0 -0.023 -0.129 0.341 0.341 0 0 0 -0.07 -0.112 0.246 0.246 0 0 0 0.014 -0.051c0.003 -0.017 0.004 -0.035 0.004 -0.053 0 -0.023 -0.003 -0.045 -0.008 -0.068a0.465 0.465 0 0 0 -0.019 -0.067 0.026 0.026 0 0 0 -0.01 -0.002h-0.01c-0.02 0 -0.04 0.003 -0.059 0.01a0.467 0.467 0 0 0 -0.062 0.023 0.569 0.569 0 0 0 -0.058 0.03c-0.019 0.011 -0.035 0.022 -0.05 0.032a0.838 0.838 0 0 0 -0.45 0 1.182 1.182 0 0 0 -0.05 -0.032 0.527 0.527 0 0 0 -0.059 -0.03 0.395 0.395 0 0 0 -0.062 -0.023 0.193 0.193 0 0 0 -0.058 -0.01h-0.01a0.025 0.025 0 0 0 -0.01 0.002 0.511 0.511 0 0 0 -0.02 0.067c-0.005 0.022 -0.007 0.045 -0.007 0.068 0 0.018 0.001 0.035 0.004 0.053 0.003 0.017 0.008 0.034 0.014 0.051A0.34 0.34 0 0 0 0.499 0.875a0.362 0.362 0 0 0 -0.023 0.129 0.601 0.601 0 0 0 0.026 0.185c0.016 0.049 0.042 0.095 0.077 0.133 0.036 0.037 0.08 0.066 0.128 0.084 0.057 0.022 0.117 0.036 0.178 0.042a0.16 0.16 0 0 0 -0.04 0.055 0.262 0.262 0 0 0 -0.017 0.065 0.241 0.241 0 0 1 -0.103 0.024 0.156 0.156 0 0 1 -0.093 -0.026 0.254 0.254 0 0 1 -0.066 -0.072 0.271 0.271 0 0 0 -0.026 -0.033 0.236 0.236 0 0 0 -0.033 -0.03 0.161 0.161 0 0 0 -0.038 -0.021 0.105 0.105 0 0 0 -0.042 -0.009c-0.003 0 -0.007 0 -0.01 0.001a0.057 0.057 0 0 0 -0.014 0.002 0.036 0.036 0 0 0 -0.011 0.005 0.01 0.01 0 0 0 -0.005 0.009 0.029 0.029 0 0 0 0.012 0.021c0.008 0.006 0.015 0.011 0.02 0.015l0.003 0.002c0.012 0.009 0.023 0.019 0.033 0.029 0.01 0.009 0.019 0.018 0.026 0.029 0.008 0.01 0.015 0.022 0.02 0.033 0.006 0.012 0.013 0.025 0.02 0.041 0.016 0.041 0.046 0.077 0.083 0.1 0.04 0.021 0.084 0.032 0.129 0.031 0.015 0 0.031 -0.001 0.046 -0.003 0.015 -0.002 0.03 -0.005 0.045 -0.008v0.153a0.044 0.044 0 0 1 -0.047 0.046h-0.005a0.9 0.9 0 1 1 0.553 0v0z"/></svg>
    </li>
    </Link>
  </ul>
</div>
      </div>
    </div>
  );

}

export default SobreNosotros;