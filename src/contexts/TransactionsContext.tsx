import { createContext, ReactNode, useEffect, useState } from 'react'

interface ITransactions {
  id: 1
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface ITransactionsContextTypes {
  transactions: ITransactions[]
}

interface ITransactionsProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext(
  {} as ITransactionsContextTypes,
)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
