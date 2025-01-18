
export const useModal = (modalId: string) => {
    const openModal = () => {
        const modal = document.getElementById(modalId) as HTMLDialogElement | null;
        modal?.showModal();
    };

    const closeModal = () => {
        const modal = document.getElementById(modalId) as HTMLDialogElement | null;
        modal?.close();
    };

    return { openModal, closeModal };
};