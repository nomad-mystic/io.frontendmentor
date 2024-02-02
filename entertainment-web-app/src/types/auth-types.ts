export type AuthStorageTypes = {
    currentEmail: HTMLInputElement | null;
    currentPassword: HTMLInputElement | null;
    currentConfirmPassword?: HTMLInputElement | null;
};

export type AuthStates = {
    handlePanelStates: () => void;
};

