import Footer from '../footer/Footer'
import Header from '../header/Header'
import '../about/about.scss'
import '../marketplace/grid.scss'

// assets / productos /
//     pulseras
//     / Copia_de_P_197_Peso_10_0_gr.png

//Data que se descarga de la Base de Datos
const productosJoyas = {
    // path: {anillos, aretes, dijes, 'juegos', 'pulseras'},
    items: [

        {
            "id": 1,
            "categoria": "Pulseras",
            "titulo": "Pulsera 1",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/pulseras/Copia_de_P_197_Peso_10_0_gr.png"
        },
        {
            "id": 2,
            "categoria": "Pulseras",
            "titulo": "Pulsera 2",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/pulseras/Copia_de_P_200_Peso_10_9_gr.png"
        },
        {
            "id": 3,
            "categoria": "Pulseras",
            "titulo": "Pulsera 3",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/pulseras/Copia_de_P_201_Peso_12_0_gr_1.png"
        },
        {
            "id": 4,
            "categoria": "Pulseras",
            "titulo": "Pulsera 4",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/pulseras/Copia_de_P_202_Peso_9_3_gr.png"
        },
        {
            "id": 5,
            "categoria": "Pulseras",
            "titulo": "Pulsera 5",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/pulseras/Copia_de_P_205_Peso_10_3_gr.png"
        },
        {
            "id": 6,
            "categoria": "Pulseras",
            "titulo": "Pulsera 6",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/pulseras/Copia-de_P_196_Peso_9_9_gr.png",
        },
        {
            "id": 7,
            "categoria": "Pulseras",
            "titulo": "Pulsera 7",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/pulseras/Copia-de-P-194-Peso-10.2_gr.png",
        },
        {
            "id": 8,
            "categoria": "Anillos",
            "titulo": "Anillo 1",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_120_Peso_2.7_gr.jpg",
        },
        {
            "id": 9,
            "categoria": "Anillos",
            "titulo": "Anillo 2",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_123_Peso_3_2_gr.jpg",
        },
        {
            "id": 10,
            "categoria": "Anillos",
            "titulo": "Anillo 3",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_126_Peso_2_0_gr.jpg",
        },
        {
            "id": 11,
            "categoria": "Anillos",
            "titulo": "Anillo 4",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_145_Peso_2.8_gr.jpg",
        },
        {
            "id": 12,
            "categoria": "Anillos",
            "titulo": "Anillo 5",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_153_Peso_4_7_gr.jpg"
        },
        {
            "id": 13,
            "categoria": "Anillos",
            "titulo": "Anillo 6",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_164_Peso_2_3_gr.jpg",
        },
        {
            "id": 14,
            "categoria": "Anillos",
            "titulo": "Anillo 7",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_166_Peso_2_3_gr.jpg",
        },
        {
            "id": 15,
            "categoria": "Anillos",
            "titulo": "Anillo 8",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_169_Peso_3_1_gr.jpg",
        },
        {
            "id": 16,
            "categoria": "Anillos",
            "titulo": "Anillo 9",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_175_Peso_1_7_gr.jpg",
        },
        {
            "id": 17,
            "categoria": "Anillos",
            "titulo": "Anillo 10",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_177_Peso_2_8_gr.jpg",
        },
        {
            "id": 18,
            "categoria": "Anillos",
            "titulo": "Anillo 11",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_181_Peso_2_1_gr.jpg",
        },
        {
            "id": 19,
            "categoria": "Anillos",
            "titulo": "Anillo 12",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_183 _Peso_2_8 _gr.jpg",
        },
        {
            "id": 20,
            "categoria": "Anillos",
            "titulo": "Anillo 13",
            "peso": "50 gr.",
            "medida": "20 cm",
            "precio": "S/ 80 soles",
            "img": "/assets/productos/anillos/AN_192_Peso2.4_gr.jpg",
        }
    ]
};

//Arreglo vacio que guardara los productos escogidos
const carrito = [];

export default function Product() {
    return (
        <>
        <div className='formatoGrid'>
            {productosJoyas.items.map(elem => (
                <div key= { elem.id} >
                    {/* <a href={elem.redirect} key={elem.id}
                        className='no-subrayado'> */}

                        <h1>{elem.titulo}</h1>
                        <button onClick= { () => carrito.push(elem) } > Añadir</button>
                        {/* <img src={`${assetsPath}/${productosJoyas.path}/${elem.img}`}
                            alt={elem.description} /> */}
                    {/* </a> */}
                    
                </div>
            ))}
        </div>
        <button onClick= { () => console.log (carrito) } > Mostrar carrito </button>
        </>
    )
}

//  <a href="/product" className="col-s-6 col-m-4 product-box">
// <img className="img-products" width="100%" src="../assets/productos/pulseras/Copia de P 194 Peso 10.2 gr.png" alt="Pulsera" />
// <div className="offer hidden">Oferta</div>
// <h4>{categoria}</h4>
// <h4>{title}</h4>
// <h4> {Peso} </h4>
// <h4>{medida}</h4>
// <strong className="price"><del> {price}</del>{priceOferta}</strong>
// <button className="button">
//     <img className="img-logo" src="/assets/svg icons/icons-redes-sociales-blanco-completos/heart-blanco.svg" alt="Lista de favoritos" title="Añadir a la lista de Favoritos" />
//     <p>Añadir a la lista de Compras</p>
// </button>
// </a>

// export default function Product() {
//     return (
//         <>
//             <Header />
//             <main className="container-bmk">
//                 <h3 className="centrar-texto h3-about">Sobre Nosotros</h3>

//                 <div className="sobre-nosotros rowCustomizable">
//                     <div className="sobre-nosotros__imagen col-xs-12 col-s-12 col-m-12 col-l-6">
//                         <img src="/assets/nosotrosFinal.png" className="fluid-imagen" alt="imagen nosotros" />
//                     </div>

//                     <div className="sobre-nosotros__texto col-xs-12 col-s-12 col-m-12 col-l-6">
//                         <p>JMK Joyas es una empresa dedicada al diseño y fabricación de joyería en plata esterlina. Nuestra oficina y fábrica está ubicada en Lima - Perú.</p>

//                         <p>Contamos con más de 10 años de experiencia en el rubro de joyería, además de ser la segunda generación familiar dedicada a este noble oficio de transformar el metal en hermosas joyas. Tenemos amplia experiencia en el mercado nacional y ahora incursionamos en el mercado global. </p>

//                         <p>La industria de la joyería está impulsada por los cambios constantes de gustos y nuevas tendencias, y en JMK Joyas lo entendemos, por ello diseñamos nuestras propias joyas y contamos con un flujo constante de nuevas ideas que nos permiten a nosotros y a nuestros clientes estar a la vanguardia. Nos enorgullecemos de nuestros diseños originales e innovadores.</p>
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </>
//     )
// }