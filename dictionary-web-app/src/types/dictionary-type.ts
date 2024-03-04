export type DictionaryType = {
    word: string;
    phonetic: string;
    phonetics?: [
        {
            text: string;
            audio: string;
        }
    ],
    meanings: [
        {
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
        }
    ],
    license: {
        name: string;
        url: string;
    },
    sourceUrls: string[]
    origin: string;
};
