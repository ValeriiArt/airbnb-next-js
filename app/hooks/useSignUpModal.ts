import { create } from "zustand";

interface SignUpModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSignUpModal = create<SignUpModalProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useSignUpModal;