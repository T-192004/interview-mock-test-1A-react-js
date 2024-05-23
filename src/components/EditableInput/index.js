import {Component} from 'react'
import './index.css'

class EditableInput extends Component {
  state = {isEditable: true, inputText: ''}

  saveText = () => {
    this.setState({isEditable: false})
  }

  updateInputText = event => {
    this.setState({inputText: event.target.value})
  }

  renderInputContainer = () => {
    const {inputText} = this.state
    return (
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          id="Text"
          value={inputText}
          onChange={this.updateInputText}
        />
        <button className="btn" type="button" onClick={this.saveText}>
          Save
        </button>
      </div>
    )
  }

  editText = () => {
    this.setState({isEditable: true})
  }

  renderInputTextContainer = () => {
    const {inputText} = this.state
    return (
      <div className="text-container">
        <p className="text">{inputText}</p>
        <button className="btn" type="button" onClick={this.editText}>
          Edit
        </button>
      </div>
    )
  }

  render() {
    const {isEditable, inputText} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="main-heading">Editable Text Input</h1>
          {isEditable
            ? this.renderInputContainer()
            : this.renderInputTextContainer()}
        </div>
      </div>
    )
  }
}

export default EditableInput
