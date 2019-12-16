const url="http://localhost:8900"
export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`,
                        {METHOD:'GET'})
                    .then((res)=>res.json());
    return{
        type:'GET_LATEST_NEWS',
        payload:output
    }
}
export function articleNews(){
    const output = fetch(`${url}/articles?_start=3&_end=10`,
                        {METHOD:'GET'})
                    .then((res)=>res.json());
    return{
        type:'GET_ARTICLE_NEWS',
        payload:output
    }
}
export function galleryNews(){
    const output = fetch(`${url}/galleries?_limit=2`,
                        {METHOD:'GET'})
                    .then((res)=>res.json());
    return{
        type:'GET_GALLERY',
        payload:output
    }
}