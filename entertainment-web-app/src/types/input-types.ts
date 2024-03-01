export type FormElementsTypes = {
    elementType?: string;
    type?: string;
    id?: string;
    placeholder?: string;
    warning?: {
        text?: string;
    };
    required?: boolean,
};

export type FormSubmitTypes = {
    type?: 'submit' | 'reset' | 'button' | undefined;
    text?: string;
};

export type FooterValuesTypes = {
    text: string;
    linkText: string;
    url: string;
};
