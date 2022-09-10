/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Operacional</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Vendas'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Venda' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Troca' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Devolucao'
            hasBullet={true}
          />

      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='/crafted/accounts'
        title='Clientes'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
      </AsideMenuItem>
     
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Administrativo</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Operacional'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Produtos' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Financeiro'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Despesas' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/private-chat' title='Fornecedores' hasBullet={true} />

      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Gestao'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/media/icons/duotune/communication/com006.svg' title='Usuarios' hasBullet={false} />
      </AsideMenuItemWithSub>

      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      
    </>
  )
}
