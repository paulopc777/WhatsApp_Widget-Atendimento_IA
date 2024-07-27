import { create } from "zustand";

const useMessageStore = create((set) => ({
  Messages: [],
  addMessage: (newMessage) =>
    set((state) => ({
      Messages: [...state.Messages, newMessage],
    }))
}));

export default useMessageStore;
