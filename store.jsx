import { create } from "zustand";
import { devtools } from "zustand/middleware";
const adminStore = (set) => ({
  strToken: "",
  token: false,
  components: [{ id: "", pic: "", title: "", quantity: 0 }],
  addComponents: (id, pic, title, quantity) =>
    set((state) => ({
      components: [...state.components, { id, pic, title, quantity }],
    })),
  deleteComponent: (id) =>
    set((state) => ({
      components: state.components.filter((c) => c.id != id),
    })),

  addToken: (token) => {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", token);
      set(() => ({ token: true }));
    }
  },
  checkStatus: () => {
    if (localStorage.getItem("token")) {
      set(() => ({ token: true }));
    } else {
      set(() => ({ token: false }));
    }
  },
  removeToken: () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      set(() => ({ token: false }));
    }
  },
});
const userStore = (set) => ({
  rollNo: "",
  token: false,
  setRoll: (number) => set({ rollNo: number }),
  addToken: (token) => {
    if (!localStorage.getItem("userToken")) {
      localStorage.setItem("userToken", token);
      set(() => ({ token: true }));
    }
  },
  checkStatus: () => {
    if (localStorage.getItem("userToken")) {
      set(() => ({ token: true }));
    } else {
      set(() => ({ token: false }));
    }
  },
  removeToken: () => {
    if (localStorage.getItem("userToken")) {
      localStorage.removeItem("userToken");
      set(() => ({ token: false }));
    }
  },
});
const useAdminStore = create(devtools(adminStore));
const useUserStore = create(devtools(userStore));
export { useAdminStore, useUserStore };
