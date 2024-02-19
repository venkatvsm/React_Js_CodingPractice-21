// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg_container">
        <div className="cardContainer">
          <h1 className="faq_Heading">FAQs</h1>
          <ul className="listContainer">
            {faqsList.map(eachItem => (
              <FaqItem listEl={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
