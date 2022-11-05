import ElementoLista from "../elementoLista/ElementoLista";
import {useSelector} from "react-redux";

export default function Lista() {
    const filter = useSelector((state) => state.newsReducer.filter);
    const noticias = [
        {
            nombre: 'When WebAssembly Replaces Docker',
            fuente: 'thenewstack.io',
            autor: 'by mason',
            puntos: '1 points',
            hora: '10 hours ago',
            comentarios: 'discuss'
        },
        {
            nombre: 'Choosing the best database primary key – INT and UUIDs alternatives',
            fuente: 'adileo.github.io',
            autor: 'by adileo',
            puntos: '3 points',
            hora: '10 hours ago',
            comentarios: '6 comments'
        },
        {
            nombre: 'The Ultimate Guide to Alternative Data',
            fuente: 'nubela.co',
            autor: 'by Anuoluwapods',
            puntos: '2 points',
            hora: '10 hours ago',
            comentarios: '1 comment'
        },
        {
            nombre: 'Playstation 5 Has Passed 25M Units Sold',
            fuente: 'ign.com',
            autor: 'by mfiguiere',
            puntos: '2 points',
            hora: '10 hours ago',
            comentarios: 'discuss'
        },
    ];

    const listaDeNoticias = noticias.map((noticia, index) => {
        return <ElementoLista key={index} noticia={noticia}/>
    });

    return (
        <div className="list-group">
            <label>Filtrando por: {filter}</label>
            {listaDeNoticias}
        </div>
    );
}