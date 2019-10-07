import React from 'react';
import './Form.css';

let Form = () => {
	return (
		<main>
			<h1>Privacy Tag</h1>
			<section className='FormSection'>
				<form>
					<div className='InputGroup'>
						<label>Name</label>
						<input type='text' placeholder='Enter...' />
					</div>
					<div className='InputGroup'>
						<label>Name</label>
						<input type='text' placeholder='Enter...' />
					</div>
					<div className='InputGroup'>
						<label>Name</label>
						<input type='text' placeholder='Enter...' />
					</div>
					<div className='InputGroup'>
						<label>Name</label>
						<input type='text' placeholder='Enter...' />
					</div>
					<div className='InputGroup'>
						<label>Name</label>
						<input type='text' placeholder='Enter...' />
					</div>
					<div className='InputGroup'>
						<label>Name</label>
						<input type='text' placeholder='Enter...' />
					</div>
					<div className='InputGroup'>
						<label>Name</label>
						<input type='text' placeholder='Enter...' />
					</div>
					<div className='InputGroup'>
						<label>Name</label>
						<input type='text' placeholder='Enter...' />
					</div>
					<div className='InputGroup'>
						<input type='button' value='Submit' />
					</div>

				</form>
			</section>
		</main>
	);
}

export default Form;