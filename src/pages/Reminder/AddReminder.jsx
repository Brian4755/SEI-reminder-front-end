import { useState, useRef, useEffect } from "react"

const AddReminder = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    priority: '',
    description: '',
    time: '',
    done: false
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value })
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddReminder(formData)
  }

  return (
    <>
    	<h1>Personal Reminders</h1>
      <div>
        {props.reminders.filter(reminder => props.user.email === reminder.owner.email).map(reminder =>
          <div key={reminder._id}>
            <ul>
            <li> priority: {reminder.priority} </li>
            <li> description: {reminder.description}</li>
            {reminder.time
            ? <li> time: {reminder.time} </li>
            : ''
            }
            <li> done: <input type="checkbox" defaultChecked={reminder.done}/> </li>
            <button onClick={() => props.handleDeleteReminder(reminder._id)}>x</button>
            </ul>
          </div>
          )}
      </div>

			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-1">
					<label htmlFor="priority-input" className="form-label">
						Priority
					</label>
					<input 
						type="number"
						className="form-control"
						id="priority-input"
						name="priority"
            value={formData.priority}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-2">
					<label htmlFor="description-input" className="form-label">
						Description
					</label>
					<input 
						type="text"
						className="form-control"
						id="description-input"
						name="description"
            value={formData.description}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="time-input" className="form-label">
						Time
					</label>
					<input 
						type="time"
						className="form-control"
						id="time-input"
						name="time"
            value={formData.time}
            onChange={handleChange}
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="done-input" className="form-label">
						Done
					</label>
					<input 
						type="checkbox"
						className="form-control"
						id="done-input"
						name="done"
            checked={formData.done}
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Reminder
					</button>
				</div>
			</form>
    </>
  )
}

export default AddReminder