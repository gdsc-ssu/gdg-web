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
  updateGeneration: (newGeneration: string) => {
    set({ generation: newGeneration });
  },
  resetGeneration: () => {
    set(initialState);
  },
}));

export default useGenerationStore;
