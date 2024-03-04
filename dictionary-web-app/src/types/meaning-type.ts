export type MeaningType = {
    partOfSpeech: string;
    definitions: [
        {
            definition?: string;
            synonyms?: string[];
            antonyms?: string[];
            example?: string;
        }
    ],
    synonyms: string[];
};
