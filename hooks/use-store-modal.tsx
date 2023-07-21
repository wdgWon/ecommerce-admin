import { create } from "zustand";

interface useStoreModalStore {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
}

// zustand 사용 예시
// create가 type에 맞는 상태 관리 store를 제공해 주는듯
export const useStoreModal = create<useStoreModalStore>((set) => ({
   isOpen: false,
   onOpen: () => set({ isOpen: true }),
   onClose: () => set({ isOpen: false }),
}));
