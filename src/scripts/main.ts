const sidebarOpenButton: HTMLButtonElement = document.querySelector('.header__toggler')
const sidebarCloseButton: HTMLButtonElement = document.querySelector('.header__sidebar-close')
const sidebar: HTMLDivElement = document.querySelector('.header__sidebar')

sidebarOpenButton.onclick = () => sidebar.classList.add('open')
sidebarCloseButton.onclick = () => sidebar.classList.remove('open')
