import { useState } from "react"

const AddReminder = (props) => {
  return (
    <>
    			<h1>Personal Reminders</h1>
			<form autoComplete="off">
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Priority
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Description
					</label>
					<input 
						type="text"
						className="form-control"
						id="breed-input"
						name="breed"
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						Time
					</label>
					<input 
						type="number"
						className="form-control"
						id="age-input"
						name="age"
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Reminder
					</button>
				</div>
			</form>
    </>
  )
}

export default AddReminder