// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {isDisplay: false}

  onChangeEventTrigger = () => {
    this.setState(prevState => ({isDisplay: !prevState.isDisplay}))
  }

  render() {
    const {isDisplay} = this.state
    const {listEl} = this.props
    const {questionText, answerText} = listEl
    console.log(isDisplay)
    return (
      <li className="ItemsContainer">
        <div className="itemsEl">
          <h1 className="questionText">{questionText}</h1>
          <button
            className="btnEl"
            type="button"
            onClick={this.onChangeEventTrigger}
          >
            {isDisplay ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                className="imageEl"
                alt="minus"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                className="imageEl"
                alt="plus"
              />
            )}
          </button>
        </div>
        {isDisplay && <p className="answerText">{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem
