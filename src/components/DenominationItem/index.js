// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {denominationsItem, denominationButton} = this.props
    const {value} = denominationsItem
    const onClickDenomination = () => {
      denominationButton(value)
    }
    return (
      <li>
        <button type="button" onClick={onClickDenomination}>
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
