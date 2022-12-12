import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

/**
 * Usar styled-components
 * -> npm i styled-components
 * -> npm i @types/styled-components -D
 *
 * Folders (src/):
 * -> styles
 *    -> themes -> default.ts
 *    -> global.ts
 *
 * Types (para poder utilizar com typescript, e aparecer sugestões):
 * -> src
 *    -> @types -> styled-d.ts
 */

/**
 * Modal - Modais
 * -> em vez criar um dive que aparece na tela, que será sem acessibilidade para user
 *    podemos usar bibliotecas que ja tem essa funcionalidades implementadas.
 *  -> Radix (vamos usar) - componentes sem styles com funcionalidades prontas (tab, modal, etc)
 *  -> headlessui (tailwind) - interação user
 *  -> chakra-ui - vam com styles nos componentes
 *  -> ariakit (criador brasileiro) - funciona super bem
 */

/**
 * Ferramentas para simulação de back-end
 *  -> json-server - disponibiliza app completas, rotas - filter, paginate, etc...
 *
 * -> npm i json-server -D
 * -> criar ficheiro raiz - "server.json"
 * -> adicionar rotas/entidades
 *  { "transactions": [] }
 * -> npx json-server server.json -p 3333 -w -d 500
 *    (-p = porta, -w = watch, -d = delay request)
 * -> adicionar package.json
 *  -> "dev:server":"json-server server.json -p 3333 -w -d 500"
 */

/**
 * Bibliotecas de Form e Validação
 * -> react-hook-form
 * -> @hookform/resolvers (para poder interagir com zod)
 * -> zod (schema do form)
 *  -> npm i react-hook-form zod @hookform/resolvers
 *
 * Obs.: Sempre que vamos obter valor de componente que nao seja input - usaremos o
 * -> control - const { control } = useForm()
 */

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
