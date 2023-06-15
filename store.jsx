import { create } from "zustand";
import { devtools } from "zustand/middleware";
const adminStore = (set) => ({
  tokenValue: "",

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
    const data = await fetch(
      "http://localhost:8000/user/login",
      requestOptions
    );
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
  query: "",
  getQuery: (q) => set({ query: q }),
  setStudId: (data) => set({ studId: data }),
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
