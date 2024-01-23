import './grid.scss';
import '../logo/logo.scss';
import './products.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Product from '../product/product';
{/* {ProductosJoyas.items.map (elem => (

                            ))} */}

const ProductosJoyas = {
    // path: {anillos, aretes, dijes, 'juegos', 'pulseras'},
    items: [

        {
            "id": 1,
            "categoria": "Pulseras",
            "titulo": "Pulsera 1",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Pulseras',
            "img": "Copia_de_P_197_Peso_10_0_gr.png",
        },
        {
            "id": 2,
            "categoria": "Pulseras",
            "titulo": "Pulsera 2",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Pulseras',
            "img": "Copia_de_P_200_Peso_10_9_gr.png",
        },
        {
            "id": 3,
            "categoria": "Pulseras",
            "titulo": "Pulsera 3",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Pulseras',
            "img": "Copia_de_P_201_Peso_12_0_gr_1.png",
        },
        {
            "id": 4,
            "categoria": "Pulseras",
            "titulo": "Pulsera 4",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Pulseras',
            "img": "Copia_de_P_202_Peso_9_3_gr.png",
        },
        {
            "id": 5,
            "categoria": "Pulseras",
            "titulo": "Pulsera 5",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Pulseras',
            "img": "Copia_de_P_205_Peso_10_3_gr.png",
        },
        {
            "id": 6,
            "categoria": "Pulseras",
            "titulo": "Pulsera 6",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Pulseras',
            "img": "Copia-de_P_196_Peso_9_9_gr.png",
        },
        {
            "id": 7,
            "categoria": "Pulseras",
            "titulo": "Pulsera 7",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Pulseras',
            "img": "Copia-de-P-194-Peso-10.2_gr.png",
        },
        {
            "id": 8,
            "categoria": "Anillos",
            "titulo": "Anillo 1",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_120_Peso_2.7_gr.jpg",
        },
        {
            "id": 9,
            "categoria": "Anillos",
            "titulo": "Anillo 2",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_123_Peso_3_2_gr.jpg",
        },
        {
            "id": 10,
            "categoria": "Anillos",
            "titulo": "Anillo 3",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_126_Peso_2_0_gr.jpg",
        },
        {
            "id": 11,
            "categoria": "Anillos",
            "titulo": "Anillo 4",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_145_Peso_2.8_gr.jpg",
        },
        {
            "id": 12,
            "categoria": "Anillos",
            "titulo": "Anillo 5",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_153_Peso_4_7_gr.jpg"
        },
        {
            "id": 13,
            "categoria": "Anillos",
            "titulo": "Anillo 6",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_164_Peso_2_3_gr.jpg",
        },
        {
            "id": 14,
            "categoria": "Anillos",
            "titulo": "Anillo 7",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_166_Peso_2_3_gr.jpg",
        },
        {
            "id": 15,
            "categoria": "Anillos",
            "titulo": "Anillo 8",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_169_Peso_3_1_gr.jpg",
        },
        {
            "id": 16,
            "categoria": "Anillos",
            "titulo": "Anillo 9",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_175_Peso_1_7_gr.jpg",
        },
        {
            "id": 17,
            "categoria": "Anillos",
            "titulo": "Anillo 10",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_177_Peso_2_8_gr.jpg",
        },
        {
            "id": 18,
            "categoria": "Anillos",
            "titulo": "Anillo 11",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_181_Peso_2_1_gr.jpg",
        },
        {
            "id": 19,
            "categoria": "Anillos",
            "titulo": "Anillo 12",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_183 _Peso_2_8 _gr.jpg",
        },
        {
            "id": 20,
            "categoria": "Anillos",
            "titulo": "Anillo 13",
            "peso": "50 gr.",
            "medida": "20 cm",
            "price": "S/ 80 soles",
            priceOferta: "S/ 60 soles",
            redirect: '/Anillos',
            "img": "AN_192_Peso2.4_gr.jpg",
        }
    ]
};

export default function Marketplace() {
    const assetsPath = "/assets/productos";
    return (
        <>
            <Header />
            <div className="claseMarketplace">

                <div className="container-marketplace">

                    <div className="rowCustomizable">

                        <div className="col-m-2 col-l-2">
                            <ul id="menu">
                                <li><a href="/marketplace" className="active">Pulseras</a></li>
                                <li><a href="/marketplace">Aretes</a></li>
                                <li><a href="/marketplace">Sortijas</a></li>
                                <li><a href="/marketplace">Dijes</a></li>
                                <li><a href="/marketplace">Juegos</a></li>
                            </ul>
                        </div>

                        <div className="col-m-10 col-l-7 contenedor-pulseras">

                            <h1 className="title-products">Pulseras</h1>

                            <div className="rowCustomizable">
                                <div className="col-xs-12">

                                    <form>
                                        <input className="search-input" type="search" name="search" placeholder="Buscar productos ..." />
                                    </form>

                                    <select className="select-order">
                                        <option>Precio más bajo</option>
                                        <option>Precio más alto</option>
                                        <option>Por opiniones</option>
                                        <option>Por descuentos</option>
                                    </select>

                                </div>
                            </div>

                            {ProductosJoyas.items.map(elem => (

                                <div key={elem.id} className="rowCustomizable">
                                    <img className="img-products" width="100%" src={`${assetsPath}${elem.redirect}/${elem.img}`} alt={`${elem.categoria}`} />

                                    <a href="/product" className="col-s-6 col-m-4 product-box">
                                        {/* <img className="img-products" width="100%" src={`${assetsPath}${elem.redirect}/${elem.img}`} alt={`${elem.categoria}`} /> */}
                                        <div className="offer hidden">Oferta</div>
                                        <h4>{elem.categoria}</h4>
                                        <h4>{elem.title}</h4>
                                        <h4> {elem.peso} </h4>
                                        <h4>{elem.medida}</h4>
                                        <strong className="price"><del> {elem.price}</del>{elem.priceOferta}</strong>
                                        <button className="button">
                                            <img className="img-logo" src="/assets/svg icons/icons-redes-sociales-blanco-completos/heart-blanco.svg" alt="Lista del Carrito de compras" title="Añadir a la lista de Compras" />
                                            <p>Añadir a la lista de Compras</p>
                                        </button>
                                    </a>
                                </div>
                            ))}

                            <ul className="pagination">
                                <li><a href="/marketplace" className="active">1</a></li>
                                <li><a href="/marketplace">2</a></li>
                                <li><a href="/marketplace">3</a></li>
                                <li>...</li>
                                <li><a href="/marketplace">10</a></li>
                            </ul>
                        </div>

                        <div className="col-m-12 col-l-3">
                            <aside className="rowCustomizable aside-marketplace">

                                <a href="/pages/cart.html" className=" col-xs-4 col-s-4 col-l-12">
                                    <img src="/assets/svg icons/icons-redes-sociales-blanco-completos/shopping-cart-blanco.svg" className="img-logo" alt="icono del carrito de compras" title="Carrito de compras" />
                                    <p>0 artículos en el carrito</p>
                                </a>

                                <a href="/pages/Login.html" className="col-xs-4 col-s-4 col-l-12">
                                    <img src="/assets/svg icons/icons-redes-sociales-blanco-completos/user-blanco.svg" className="img-logo" alt="logo de usuario" title="Hola inicia sesión o Regístrate" />
                                    <p>Mi cuenta</p>
                                </a>

                                <a href="/pages/wishlist.html" className="col-xs-4 col-s-4 col-l-12">
                                    <img src="/assets/svg icons/icons-redes-sociales-blanco-completos/heart-blanco.svg" className="img-logo" alt="Lista de favoritos" title="Lista de Favoritos" />
                                    <p>Artículos favoritos</p>
                                </a>

                            </aside>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}