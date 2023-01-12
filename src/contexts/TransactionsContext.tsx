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

type TCreateTransactionInput = Omit<ITransactions, 'id' | 'createdAt'>

interface ITransactionsContextTypes {
  transactions: ITransactions[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: TCreateTransactionInput) => Promise<void>
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

  async function createTransaction(data: TCreateTransactionInput) {
    const { description, type, category, price } = data
    const response = await api.post('transactions', {
      description,
      type,
      category,
      price,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
