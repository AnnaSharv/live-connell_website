import React from "react";


import {transactions} from '../data/transactions.js'
function Transactions() {

  return (
    <div className="transactions">
      <div id="title">
        <p>Recent transactions</p>
        <p className="text-end text-xs-start">Read all</p>
      </div>


{/* Link to ! */}
        {transactions.map((transaction) => {
            return (
                <div className="transaction-card" key={transaction.id}>
                    <p className="date">{transaction.date}</p>
                    <p className="header">{transaction.header}</p>
                    <p className="body">{transaction.body}</p>
                </div>
            )
        })}
    </div>
  );
}

export default Transactions;
