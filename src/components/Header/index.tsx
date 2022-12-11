import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </AlertDialog.Trigger>

          <NewTransactionModal />
        </AlertDialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
