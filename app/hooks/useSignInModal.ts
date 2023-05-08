import { create } from "zustand";

interface SignInModalStor {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSignInModal = create<SignInModalStor>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useSignInModal;