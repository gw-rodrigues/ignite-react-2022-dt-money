import { ThemeProvider } from 'styled-components'
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

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  )
}
