import { create } from "zustand";

type State = {
  generation: string;
};

type Actions = {
  updateGeneration: (newGeneration: string) => void;
  resetGeneration: () => void;
};

const initialState: State = {
  generation: "1",
};

const useGenerationStore = create<State & Actions>((set) => ({
  ...initialState,
  updateGeneration: (newGeneration) => {
    set({ generation: newGeneration });
  },
  resetGeneration: () => {
    set(initialState);
    console.log("init in store");
  },
}));

export default useGenerationStore;
