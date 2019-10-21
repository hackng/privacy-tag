import React from 'react';
import './Form.css';

let Form = () => {
	return (
		<main>
			<h1>Privacy Tag</h1>
			<section className='FormSection'>
				<form>
					<div className='InputGroup'>
						<label>Company Name</label>
						<input type='text' placeholder='Enter...' />
					</div>
					<div className='InputGroup'>
						<label>Will information collected be anonymized or purely technical data?</label>
						<br/>
						<div className='Options'>
							<p>Yes <input type='radio' name='non-personal-info' /></p>
							<p>No <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>
					<div className='InputGroup'>
						<label>Will personal data (e.g name, address, etc) be collected?</label>
						<br/>
						<div className='Options'>
							<p>Yes <input type='radio' name='non-personal-info' /></p>
							<p>No <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>
					<div className='InputGroup'>
						<label>Will sensitive information (e.g SSN, health, etc) be collected?</label>
						<br/>
						<div className='Options'>
							<p>Yes <input type='radio' name='non-personal-info' /></p>
							<p>No <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>
					<div className='InputGroup'>
						<label>Are All data transmission and storage encrypted.?</label>
						<br/>
						<div className='Options'>
							<p>Fully <input type='radio' name='non-personal-info' /></p>
							<p>Partially <input type='radio' name='non-personal-info' /></p>
							<p>Not Encrypted <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>
					<div className='InputGroup'>
						<label>Will data collected be used for advertising or marketing purposes?</label>
						<br/>
						<div className='Options'>
							<p>Fully <input type='radio' name='non-personal-info' /></p>
							<p>Partially <input type='radio' name='non-personal-info' /></p>
							<p>Other <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>
					<div className='InputGroup'>
						<label>Are data about user location collected or used?</label>
						<br/>
						<div className='Options'>
							<p>Yes <input type='radio' name='non-personal-info' /></p>
							<p>No <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>
					<div className='InputGroup'>
						<label>Will other entities have access to data collected?</label>
						<br/>
						<div className='Options'>
							<p>Yes <input type='radio' name='non-personal-info' /></p>
							<p>No <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>

					<div className='InputGroup'>
						<label>Will the data about user’s friends or social graph be collected or used?</label>
						br/>
						<div className='Options'>
							<p>Yes <input type='radio' name='non-personal-info' /></p>
							<p>No <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>
					<div className='InputGroup'>
						<label>Whenever data is to be collected, will users be asked for permission first?</label>
						br/>
						<div className='Options'>
							<p>Yes <input type='radio' name='non-personal-info' /></p>
							<p>No <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>
					<div className='InputGroup'>
						<label>How long will the data be held before it will be destroyed?</label>
						<br/>
						<div className='Options'>
							<p>30 Days <input type='radio' name='non-personal-info' /></p>
							<p>90 Days <input type='radio' name='non-personal-info' /></p>
							<p>Unlimited Retention  <input type='radio' name='non-personal-info' /></p>
							<p>Other  <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>

					<div className='InputGroup'>
						<label>User data is only provided under a court order, or to prevent imminent danger to the user </label>
						<br/>
						<div className='Options'>
							<p>Yes <input type='radio' name='non-personal-info' /></p>
							<p>No <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>
					<div className='InputGroup'>
						<label>An independent party has certified the privacy practices of this app. </label>
						<br/>
						<div className='Options'>
							<p>Yes <input type='radio' name='non-personal-info' /></p>
							<p>No <input type='radio' name='non-personal-info' /></p>
						</div>
						<p>Summary Box</p>
						<textarea>

						</textarea>
					</div>
				</form>
			</section>
		</main>
	);
}

export default Form;