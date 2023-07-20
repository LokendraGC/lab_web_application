import { create } from "zustand";
import { devtools } from "zustand/middleware";
const adminStore = (set) => ({
  tokenValue: "",

  token: false,
  components: [],
  addComponents: (id, pic, component, quantity, category) =>
    set((state) => ({
      components: [
        ...state.components,
        { id, pic, component, quantity, category },
      ],
    })),
  deleteComponent: (id) =>
    set((state) => ({
      components: state.components.filter((c) => c.id != id),
    })),
  resetComponent: () => set({ components: [] }),

  addToken: (token) => {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", token);
      set(() => ({ token: true, tokenValue: token }));
    }
  },
  checkStatus: () => {
    if (localStorage.getItem("token")) {
      set(() => ({ token: true, tokenValue: localStorage.getItem("token") }));
    } else {
      set(() => ({ token: false, tokenValue: "" }));
    }
  },
  removeToken: () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      set(() => ({ token: false }));
    }
  },
  fetch: async (username, password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    };
    const apiBaseUrl = process.env.VITE_API_BASE_URL;
    const data = await fetch(`${apiBaseUrl}/user/login`, requestOptions);
    const res = await data.json();
    if (res.access) {
      set({ tokenValue: res.access });
      return res.access;
    } else {
      alert("Failed to Login");
    }
  },
});
const userStore = (set) => ({
  rollNo: "",
  token: false,
  studId: {},

  setStudId: (data) => set({ studId: data }),
  setRoll: (number) => set({ rollNo: number }),
  addToken: (token) => {
    if (!localStorage.getItem("userToken")) {
      localStorage.setItem("userToken", token);
      set(() => ({ token: true, rollNo: token }));
    }
  },
  checkStatus: () => {
    if (localStorage.getItem("userToken")) {
      set(() => ({ token: true, rollNo: localStorage.getItem("userToken") }));
    } else {
      set(() => ({ token: false, rollNo: "" }));
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
