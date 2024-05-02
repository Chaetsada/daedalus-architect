export interface ProjectProps{
    id:string,
    name:string,
    year:string,
    location:string,
    area:string,
    architects:string,
    awards:string,
    link:string,
    thumbnail:string,
    prevLink:string,
    nextLink:string,
    images:string[]
}

export interface BlogProps {
    id:string,
    title:string,
    category:string,
    date:string,
    thumbnail:string,
    link:string,
    prevLink:string,
    nextLink:string,
    main:{
        abstract:string,
        conclusion:string,
        content?:contents[]
    }
}

export interface contents  {
    title:string,
    paragraph:string,
}