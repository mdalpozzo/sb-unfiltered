import { create } from 'zustand'
// import { devtools, persist } from 'zustand/middleware'
// import type {} from '@redux-devtools/extension' // required for devtools typing

interface AppState {
  navbarVisible: boolean
  setNavbarVisible: (visible: boolean) => void
}

export const useAppStore = create<AppState>()((set) => ({
  navbarVisible: true,
  setNavbarVisible: (visible: boolean) =>
    set(() => ({ navbarVisible: visible })),
}))
