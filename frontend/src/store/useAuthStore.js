import {create} from "zustand"

export const useAuthStore = create((set) => ({
  authUser: null,

  isCheckingAUth:true,
}))