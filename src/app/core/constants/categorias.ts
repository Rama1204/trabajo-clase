import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Hamburguesas',
    id: 1,
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNz-SVDlA7_LI6cfiJPDB6SiAh62IUOMmSOg&usqp=CAU',
    productos: [
      {
        id: 1,
        nombre: 'Hamburguesa 1',
        precio: 3500,
        ingredientes: ['Barbacoa', 'Cheddar'],
        imagen:
          'https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg',
      },
      {
        id: 2,
        nombre: 'Hamburguesa 2',
        precio: 4000,
        ingredientes: ['Lechuga', 'Tomate'],
        imagen:
          'https://restaurantevega.com/wp-content/uploads/2020/05/Hamburguesa-Parrita.jpg',
      },
      {
        id: 3,
        nombre: 'Hamburguesa 3',
        precio: 2500,
        ingredientes: ['Cebolla', 'Extra cheddar'],
        imagen:
          'https://img.freepik.com/fotos-premium/hamburguesa-fotografia-comida-fondo-negro_131346-1001.jpg',
      },
      {
        id: 4,
        nombre: 'Hamburguesa 4',
        precio: 4000,
        ingredientes: ['Extra carne', 'Extra bacon'],
        imagen:
          'https://i.pinimg.com/1200x/e2/10/46/e2104678bb8d90e32461ff0b2df664e0.jpg',
      },
    ],
  },
  {
    nombre: 'Pizzas',
    id: 2,
    imgUrl:
      'https://cdn0.recetasgratis.net/es/posts/1/9/3/pizza_casera_31391_600_square.jpg',
    productos: [
      {
        id: 4,
        nombre: 'Pizza 1',
        precio: 3000,
        ingredientes: ['4 Quesos'],
        imagen:
          'https://recetinas.com/wp-content/uploads/2018/04/pizza-cuatro-quesos.jpg',
      },
      {
        id: 5,
        nombre: 'Pizza 2',
        precio: 3500,
        ingredientes: ['Roquefort'],
        imagen:
          'https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-receta-pizza-pizza-receta-pizza-mozzarella-roquefort-pizza-mozzarella-roquefort-2.png',
      },
      {
        id: 6,
        nombre: 'Pizza 3',
        precio: 2500,
        ingredientes: ['Margarita'],
        imagen:
          'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/D2KL4RRCRJA7RJC5TNULFZEKR4.jpg',
      },
      {
        id: 7,
        nombre: 'Pizza 4',
        precio: 2000,
        ingredientes: ['Napolitana'],
        imagen:
          'https://cocinaconlaura.es/wp-content/uploads/2013/10/Pizza-Napolitana-apaisada.jpg',
      },
    ],
  },
  {
    nombre: 'Postres',
    id: 3,
    imgUrl:
      'https://www.clara.es/medio/2021/11/28/postres-navidenos_3f462fd7_1280x1115.jpg',
    productos: [
      {
        id: 8,
        nombre: 'Postre 1',
        precio: 1000,
        ingredientes: ['Helado Dulce de Leche'],
        imagen:
          'https://scm-assets.constant.co/scm/unilever/2bb5223be0548fcc55c230aa5f951219/35141196-e4fc-4bea-bcaf-c772e94f883d.png',
      },
      {
        id: 9,
        nombre: 'Postre 2',
        precio: 1500,
        ingredientes: ['Helado Tramontana'],
        imagen:
          'https://acdn.mitiendanube.com/stores/001/292/222/products/tramontana1-47f15a8cb406c3251916008819618087-640-0.jpg',
      },
      {
        id: 10,
        nombre: 'Postre 3',
        precio: 2500,
        ingredientes: ['Torta Oreo'],
        imagen:
          'https://www.paulinacocina.net/wp-content/uploads/2022/06/receta-de-torta-oreo.jpg',
      },
      {
        id: 11,
        nombre: 'Postre 4',
        precio: 3000,
        ingredientes: ['Cheesecake'],
        imagen:
          'https://www.mybakingaddiction.com/wp-content/uploads/2022/08/plated-blueberry-cheesecake-hero-735x735.jpg',
      },
    ],
  },
  {
    nombre: 'Bebidas',
    id: 4,
    imgUrl:
      'https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/article_1200_800_fallback/public/2022-05/bebidas-refrescantes-sin-alcohol%C2%A9iStock.jpg?itok=nvXqHvaB',
    productos: [
      {
        id: 12,
        nombre: 'Bebida 1',
        precio: 500,
        ingredientes: ['Coca-Cola'],
        imagen:
          'https://e1.pxfuel.com/desktop-wallpaper/169/498/desktop-wallpaper-coca-cola-coke-aesthetic-thumbnail.jpg',
      },
      {
        id: 13,
        nombre: 'Bebida 2',
        precio: 500,
        ingredientes: ['Sprite'],
        imagen:
          'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaXRlfGVufDB8fDB8fHww&w=1000&q=80',
      },
      {
        id: 14,
        nombre: 'Bebida 3',
        precio: 800,
        ingredientes: ['Monster'],
        imagen:
          'https://img.asmedia.epimg.net/resizer/DAtk2l8OuwLJmQWRMgHdmWb71uc=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/AIPNITGCXBE5XNUENJOOZDUA7A.png',
      },
      {
        id: 15,
        nombre: 'Bebida 4',
        precio: 3000,
        ingredientes: ['Vino Tinto'],
        imagen:
          'https://i.pinimg.com/736x/cd/9d/2e/cd9d2ede2966a25dc890679c0b008226--wine-wallpaper-red-wines.jpg',
      },
    ],
  },
];