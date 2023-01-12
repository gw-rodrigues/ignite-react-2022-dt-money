import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

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
  fetchTransactions: (query?: string) => Promise<void>
}

interface ITransactionsProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext(
  {} as ITransactionsContextTypes,
)

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: { q: query, _sort: 'createdAt', _order: 'desc' },
    })
    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
