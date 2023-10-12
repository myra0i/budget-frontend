import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';


const Expenses=()=> {
 const {addExpense, expenses, getExpenses, deleteExpense, totalExpense} = useGlobalContext()

 useEffect(()=> {
  getExpenses()
 },[]);

 console.log(addExpense)
  return (
   <ExpenseStyled>
    <InnerLayout>
      <h1>Expenses</h1>
      <h2 className='total-expense'>Total Expenses: <span>Ksh{totalExpense()}</span> </h2>
      <div className="expense-content">
        <div className="form-container">
          <ExpenseForm/>
        </div>
      <div className="expenses">
        {expenses.map((expense)=>{
          const {_id,title,amount,date,category,description,type} = expense;
          return <IncomeItem
          key={_id}
          id={_id}
          title={title}
          description={description}
          amount={amount}
          date={date}
          type={type}
          category={category}
          indicatorColor="var(--color-green)"
          deleteItem = {deleteExpense}
          
          />
          
        })}
      </div>
      </div>
    </InnerLayout>
   </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
display:flex;
overflow:auto;
.total-expense{
  display:flex;
  justify-content:center;
  align-items:center;
  background: #FCF6F9;
  border: 2px solid #FFFFFF;
  span{
    font-size:2.5rem;
    font-weight:400;
    color: green;
  }
}
.expense-content{
  display:flex;
  gap:2rem;
  .expenses{
    flex:1;
  }
}
`;

export default Expenses
