import { PlaceProps } from "@/global/types"
import CardLocale from "./CardLocale"
import Link from "next/link"


export const ListPlaces = () => {
    const places:PlaceProps[] = [
        {
            id:'1',
            state:'MS',
            city:'Dourados',
            address:'Rua Dr. Wanilton Finamore - 1075',
            name:'O lenhador',
            description:'Promoção somente essa semana',
            slug:'olenhador-1',
            image:'https://lh5.googleusercontent.com/p/AF1QipPIWU000yCzb3KV4HbuldX9B2aCqtegGOST4z0J=w408-h306-k-no'
        },
        {
            id:'2',
            state:'MS',
            city:'Dourados',
            address:'Rua Dr. Wanilton Finamore - 1075',
            name:'O lenhador',
            description:'Promoção somente essa semana',
            slug:'olenhador-2',
            image:'https://lh5.googleusercontent.com/p/AF1QipPIWU000yCzb3KV4HbuldX9B2aCqtegGOST4z0J=w408-h306-k-no'
        },
        {
            id:'3',
            state:'MS',
            city:'Dourados',
            address:'Rua Dr. Wanilton Finamore - 1075',
            name:'O lenhador',
            description:'Promoção somente essa semana',
            slug:'olenhador-3',
            image:'https://lh5.googleusercontent.com/p/AF1QipPIWU000yCzb3KV4HbuldX9B2aCqtegGOST4z0J=w408-h306-k-no'
        },
        {
            id:'4',
            state:'MS',
            city:'Dourados',
            address:'Rua Dr. Wanilton Finamore - 1075',
            name:'O lenhador',
            description:'Promoção somente essa semana',
            slug:'olenhador-4',
            image:'https://lh5.googleusercontent.com/p/AF1QipPIWU000yCzb3KV4HbuldX9B2aCqtegGOST4z0J=w408-h306-k-no'
        },
        {
            id:'5',
            state:'MS',
            city:'Dourados',
            address:'Rua Dr. Wanilton Finamore - 1075',
            name:'O lenhador',
            description:'Promoção somente essa semana',
            slug:'olenhador-4',
            image:'https://lh5.googleusercontent.com/p/AF1QipPIWU000yCzb3KV4HbuldX9B2aCqtegGOST4z0J=w408-h306-k-no'
        }
    ]

    const handleLocates = () => {
        return  places.map((place,index) => { 
            return <Link href={`/places/${place?.slug}`} className="snap-start" key={place?.id} >
                <CardLocale {...place}/>
            </Link>
        })
    }

    return ( <div className="w-full md:px-4 py-2 px-3 ">
            { places?.length == 0 ? 
                <p className="font-semibold text-[20px]">Nenhum local encontrado</p> : 
                <p className="font-semibold text-[20px]">Locais encontrados</p>
            }
            <div className="py-3 px-1 flex flex-nowrap gap-3 w-full overflow-x-auto snap-x lg:pr-0 md:pr-[100px]">
                { places?.length > 0 && handleLocates()}
            </div>
            
        </div>
    )
}