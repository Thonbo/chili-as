"use client";
import { create } from "zustand";

interface ChapterStore {
  activeChapter: string;
  setActiveChapter: (id: string) => void;
}

export const useChapterStore = create<ChapterStore>((set) => ({
  activeChapter: "barndom",
  setActiveChapter: (id) => set({ activeChapter: id }),
}));
