import { create } from "zustand";

interface SignUpModalStor {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSignUpModal = create<SignUpModalStor>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useSignUpModal;