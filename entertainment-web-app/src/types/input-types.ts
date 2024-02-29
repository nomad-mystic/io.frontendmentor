export type formElementsTypes = {
    elementType?: string;
    type?: string;
    id?: string;
    placeholder?: string;
    warning?: {
        text?: string;
    };
};

export type formSubmitTypes = {
    type?: 'submit' | 'reset' | 'button' | undefined;
    text?: string;
};

export type footerValuesTypes = {
    text: string;
    linkText: string;
    url: string;
};
