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

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  )
}
