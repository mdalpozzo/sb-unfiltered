// import { create } from 'zustand'
// // import { devtools, persist } from 'zustand/middleware'
// // import type {} from '@redux-devtools/extension' // required for devtools typing

// interface AppState {
//   navbarHidden: Record<string, boolean>
//   setNavbarHidden: (args: { path: string; hidden: boolean }) => void
// }

// export const useAppStore = create<AppState>()((set) => ({
//   navbarHidden: {},
//   setNavbarHidden: ({ path, hidden }) =>
//     set(({ navbarHidden }) => ({
//       navbarHidden: { ...navbarHidden, [path]: hidden },
//     })),
// }))
