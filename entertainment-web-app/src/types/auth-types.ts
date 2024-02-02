export type AuthTypes = {
    currentEmail: HTMLInputElement | null;
    currentPassword: HTMLInputElement | null;
    currentConfirmPassword?: HTMLInputElement | null;
    currentAuthElement?: HTMLDivElement | null; // Basically the parent element we want to show/hide
};
