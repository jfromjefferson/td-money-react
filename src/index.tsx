import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'api'
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Bootcamp Ignite',
          amount: 1980,
          type: 'withdraw',
          category: 'Educação',
          createdAt: '08/03/2021'
        },
        {
          id: 2,
          title: 'Warren',
          amount: 250,
          type: 'deposit',
          category: 'Investimento',
          createdAt: '12/03/2021'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

