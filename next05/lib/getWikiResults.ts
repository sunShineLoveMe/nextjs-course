export default async function getWikiResults(searchTerm: string) {
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
        timeout: '100000'
    })
    console.log(`https://en.wikipedia.org/w/api.php?${searchParams}`)
    const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams)
    console.log(response)
    return response.json()
}