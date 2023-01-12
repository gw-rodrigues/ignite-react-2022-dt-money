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
    const url = new URL('http://localhost:3333/transactions')
    if (query) {
      url.searchParams.append('q', query)
    }
    const response = await fetch(url)
    const data = await response.json()
    setTransactions(data)
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
