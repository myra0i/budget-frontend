import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

const Incomes=()=> {
 const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

 useEffect(()=> {
  getIncomes()
 },[]);

 console.log(addIncome)
  return (
   <IncomesStyled>
    <InnerLayout>
      <h1>Income</h1>
      <h2 className='total-income'>Total Income: <span>Ksh{totalIncome()}</span> </h2>
      <div className="income-content">
        <div className="form-container">
          <Form/>
        </div>
      <div className="incomes">
        {incomes.map((income)=>{
          const {_id,title,amount,date,category,description,type} = income;
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
          deleteItem = {deleteIncome}
          
          />
          
        })}
      </div>
      </div>
    </InnerLayout>
   </IncomesStyled>
  )
}

const IncomesStyled = styled.div`
display:flex;
overflow:auto;
.total-income{
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
.income-content{
  display:flex;
  gap:2rem;
  .incomes{
    flex:1;
  }
}
`;

export default Incomes
