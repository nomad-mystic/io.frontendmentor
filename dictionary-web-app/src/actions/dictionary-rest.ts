'use server'

export async function getWord(chosenWord: string) {

    try {
        // Build our endpoint values
        const endpoint = process.env.DICTIONARY_API_ENDPOINT;
        const currentWord = `${endpoint}/${chosenWord}`;

        let definition = await fetch(currentWord);
        const definitionJson = await definition.json();

        return definitionJson;

    } catch (e) {

        return [];
    }
}