import React, { useEffect } from 'react'
import '../Styles/RegistrationPage.css'
import $ from 'jquery'

function RegistrationPage() {
    useEffect(() => {
        $("#login-button").click(function(event){
            event.preventDefault();
        
        $('.wrapper form').fadeOut(500);
        $('.wrapper').addClass('form-success');
   });
    })
  return (
    <div>
       <div class="wrapper">
	<div class="container">
		<h1>Welcome</h1>
		<form class="form">
			<input type="text" placeholder="Name of the Student" />
			<input type="email" placeholder="Email" />

            Position Applying For :
            <label class= 'form-control' for="axis_java" className='radio-text'>T2S - MGSA - AXIS - JAVA
            <input type="radio" id="axis_java" name="position" value="axis_java" /></label>
            <label for="idfc_java" className='radio-text'>T2S - MGSA - IDFC - JAVA
            <input type="radio" id="idfc_java" name="position" value="idfc_java" /> </label>
            <label for="idfc_salesforce" className='radio-text'>T2S - MGSA - IDFC - SALESFORCE
            <input type="radio" id="idfc_salesforce" name="position" value="idfc_salesforce" /></label>
            <label for="techmahindra_salesforce" className='radio-text'>T2S - MGSA - TECH MAHINDRA - SALESFORCE
            <input type="radio" id="techmahindra_salesforce" name="position" value="techmahindra_salesforce" /></label>
            <label for="axis_fullstack" className='radio-text'>T2S - MGSA - AXIS - FULLSTACK
            <input type="radio" id="axis_fullstack" name="position" value="axis_fullstack" /></label>
            <label for="hdfc_vrm" className='radio-text'>T2S - MGSA - HDFC - VRM
            <input type="radio" id="hdfc_vrm" name="position" value="hdfc_vrm" /></label>
            <br/>

            <input type="text" placeholder="Mobile number" />
            <input type="text" placeholder="College Name" />
            <input type="text" placeholder="College Location" />
            <input type="text" placeholder="10th mark in %" />
            <input type="text" placeholder="12th mark in %" />
            <input type="text" placeholder="UG marks in %" />
			<button type="submit" id="login-button">Submit</button>
		</form>
	</div>
	
	<ul class="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>
    </div>
  )
}

export default RegistrationPage