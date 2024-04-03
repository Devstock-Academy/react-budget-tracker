import { useState } from 'react'

import ListElement from './ListElement'
import styles from './List.module.css'

const transaction = [
  {
    id: 1,
    categoryId: 1,
    type: 'expense',
    amount: 100,
    date: '2024-04-01',
    description: 'Weekly groceries',
  },
  {
    id: 2,
    categoryId: 2,
    type: 'income',
    amount: 2000,
    date: '2024-04-01',
    description: 'Monthly salary',
  },
]

const List = () => {
  const [list, setList] = useState(transaction)

  return (
    <div className={styles.list}>
      {list.map((item) => (
        <ListElement listElement={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
