


export function PixabayApi(searchQuery, nextPage) {
        const BASE_URL = 'https://pixabay.com/api/';
        const key = '34586692-ed7cb8a238ccde585a263c879';
        const searchTypePhoto = '&image_type=photo';
        const searchOrientation = '&orientation="horizontal"';
        const ageFilter = '&safesearch="true"';
        const perPage = '&per_page= 12';
        const page = `&page=${nextPage}`;
          
    return (
            fetch(`${BASE_URL}?key=${key}&q=${searchQuery}${searchTypePhoto}${searchOrientation}${ageFilter}${perPage}${page}`)
        );
}