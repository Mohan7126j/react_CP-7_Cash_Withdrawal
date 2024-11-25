// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

const initialAmount = 2000

class CashWithdrawal extends Component {
  state = {
    balanceAmount: initialAmount,
  }

  denominationButton = value => {
    const denominationAmount = value
    const {balanceAmount} = this.state
    const currentBalance = balanceAmount - denominationAmount
    this.setState({balanceAmount: currentBalance})
  }

  render() {
    const {balanceAmount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="bg-container">
          <div className="profile-container">
            <div className="profile">
              <p>M</p>
            </div>
            <p className="name">Mohan</p>
          </div>

          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div>
              <p className="amount">{balanceAmount}</p>
              <p>In Rupees</p>
            </div>
          </div>

          <p className="Withdraw">Withdraw</p>
          <p className="choose-rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-buttons">
            {denominationsList.map(item => (
              <DenominationItem
                denominationsItem={item}
                key={item.id}
                denominationButton={this.denominationButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
