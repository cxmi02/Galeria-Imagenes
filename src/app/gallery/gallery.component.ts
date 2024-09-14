import { Component } from '@angular/core';

interface Image {
  url: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  date: string;
  author: string;
  isFavorite: boolean;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  categories: string[] = ['Naturaleza', 'Animales', 'Comida', 'Tecnologia'];
  selectedCategory: string = '';
  selectedImage: Image | null = null;
  showFavorites: boolean = false;

  images: Image[] = [
    {
      url: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/t/n/tnc_52987642_Full.jpg?crop=0%2C233%2C4000%2C2200&wid=4000&hei=2200&scl=1.0',
      title: 'Campo de flores',
      description:
        'Un campo de flores lleno de colores vibrantes, con pétalos que se mecen suavemente con la brisa bajo el cálido sol.',
      longDescription:
        'Un vasto campo de flores que se extiende hasta donde alcanza la vista, cubierto por un mosaico de colores intensos y suaves. Las flores, de diferentes formas y tamaños, oscilan con la brisa, creando un mar ondulante de pétalos que parece bailar bajo el cielo despejado. El aire está perfumado con una fragancia dulce y fresca, mientras el sol baña la escena con una luz cálida y dorada. Las abejas y mariposas revolotean de flor en flor, contribuyendo a la serenidad y armonía del paisaje.',
      category: 'Naturaleza',
      date: '2024-09-13',
      author: 'Juan Pérez',
      isFavorite: false,
    },
    {
      url: 'https://www.selwo.es/content/dam/swa/images/descubre-el-zoo/especies-y-territorios/animales/panda-rojo/Panda-rojo-Selwo-Aventura-13.jpg',
      title: 'Panda Rojo',
      description:
        'Un panda rojo descansando sobre una rama en su entorno natural, rodeado de hojas verdes y ramas.',
      longDescription:
        'Un panda rojo se acomoda plácidamente sobre una rama en medio de su hábitat natural. Su pelaje de un intenso color rojo y marrón contrasta bellamente con el verde de las hojas y ramas que lo rodean. El panda, con su expresión curiosa y ojos atentos, parece disfrutar de un momento de descanso en el bosque, con la vegetación que forma un entorno denso y acogedor. El sol filtra su luz a través de las copas de los árboles, creando un juego de luces y sombras que realza la belleza del animal y su entorno',
      category: 'Animales',
      date: '2024-09-13',
      author: 'Alejandro Gómez',
      isFavorite: false,
    },
    {
      url: 'https://www.blogdelfotografo.com/wp-content/uploads/2019/02/johannes-plenio-629984-unsplash.jpg',
      title: 'Bosque Encantado',
      description:
        'Un bosque sereno lleno de árboles altos, donde los rayos de sol se filtran suavemente entre las copas, creando un ambiente de tranquilidad.',
      longDescription:
        'Este hermoso bosque es un refugio de serenidad, con sus majestuosos árboles que se alzan hacia el cielo. A medida que caminas, puedes sentir la suave brisa y escuchar el crujido de las hojas bajo tus pies. Los rayos de sol que se filtran entre las copas de los árboles iluminan el sendero, creando un ambiente de paz y conexión con la naturaleza.',
      category: 'Naturaleza',
      date: '2024-08-22',
      author: 'Laura Martínez',
      isFavorite: false,
    },
    {
      url: 'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg',
      title: 'Encuentro en el Bosque',
      description:
        'Un pequeño ardilla se posa sobre una rama en un frondoso bosque, con el sol filtrándose a través de las hojas verdes.',
      longDescription:
        'En el corazón de un denso bosque, una ardilla curiosa se encuentra en el centro de la imagen, sentada sobre una rama robusta. La escena está iluminada por la luz del sol que se filtra a través del dosel de hojas verdes, creando un juego de luces y sombras sobre el pelaje de la ardilla. Alrededor, el bosque muestra una vegetación vibrante y diversa, con la luz natural que acentúa la textura de las hojas y la corteza de los árboles.',
      category: 'Animales',
      date: '2024-09-13',
      author: 'John Doe',
      isFavorite: false,
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q09NSURBfGVufDB8fDB8fHww',
      title: 'Hamburguesa Perfecta',
      description:
        'Una hamburguesa recién hecha, con una jugosa carne a la parrilla, lechuga crujiente, tomate fresco y queso derretido, todo entre un pan suave y dorado.',
      longDescription:
        'Una hamburguesa recién hecha, con una carne perfectamente dorada y jugosa en el centro, se presenta en un pan esponjoso y ligeramente tostado. Encima de la carne, una capa de queso cheddar se derrite y se desliza suavemente, creando una textura cremosa. La hamburguesa está acompañada de hojas de lechuga fresca y crujiente, rodajas de tomate jugoso y unas finas rebanadas de cebolla morada. Un toque de salsa especial y un poco de pepinillo completan el conjunto, añadiendo un sabor único.',
      category: 'Comida',
      date: '2024-09-13',
      author: 'Vanesa Hernadez',
      isFavorite: false,
    },
    {
      url: 'https://plus.unsplash.com/premium_photo-1661962713976-2224bb647465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsJTIwbWFyaW5vfGVufDB8fDB8fHww',
      title: 'La Ballena Jorobada al Atardecer',
      description:
        'Una majestuosa ballena jorobada salta fuera del mar, capturada en el momento exacto en que el sol se pone en el horizonte.',
      longDescription:
        'En un momento impresionante del atardecer, una enorme ballena jorobada emerge con gracia del océano, elevándose por encima de las olas mientras el sol se desplaza hacia el horizonte. El cielo se tiñe de tonos cálidos, con matices de naranja, rosa y dorado que se reflejan en la superficie del agua, creando un contraste deslumbrante con la silueta de la ballena. El resplandor del sol crea un halo dorado alrededor del cetáceo, y las gotas de agua que se desprenden durante el salto brillan como pequeñas joyas en el aire.',
      category: 'Animales',
      date: '2024-09-13',
      author: 'Liliana Garcia',
      isFavorite: false,
    },
    {
      url: 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Palomitas',
      description:
        'Palomitas recién hechas en un bol grande, listas para disfrutar, con su textura crujiente y un aroma a mantequilla y sal.',
      longDescription:
        'Un bol grande lleno de palomitas de maíz recién hechas, perfectas para una noche de cine o una reunión con amigos. Cada palomita está ligeramente dorada y cubierto con una capa de mantequilla derretida, ofreciendo una textura crujiente y un sabor delicioso. El aroma a palomitas frescas se mezcla con un toque sutil de sal, creando una experiencia de sabor que invita a comer una tras otra. El bol, rebosante de estas delicias, es el centro de atención en cualquier ocasión, prometiendo diversión y satisfacción con cada bocado.',
      category: 'Comida',
      date: '2024-09-13',
      author: 'Claudia Ruiz',
      isFavorite: false,
    },
    {
      url: 'https://dam.ngenespanol.com/wp-content/uploads/2019/07/Costa-Rica-Naturaleza-770x514.png',
      title: 'Puente Secreto',
      description:
        'Un puente de madera rústico cruza un arroyo en medio de un exuberante bosque tropical, con una vegetación densa y frondosa alrededor.',
      longDescription:
        'En el corazón de un vibrante bosque tropical, un puente de madera envejecida se arquea sobre un arroyo claro y tranquilo. Este puente, de diseño sencillo pero encantador, se encuentra rodeado por una exuberante vegetación de hojas verdes y brillantes. La densa flora del entorno, con sus diversas tonalidades de verde y toques de color de las flores exóticas, crea un ambiente natural y sereno.',
      category: 'Naturaleza',
      date: '2024-09-13',
      author: 'Daniel Gómez',
      isFavorite: false,
    },
    {
      url: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Panqueques Esponjosos',
      description:
        'Deliciosos panqueques esponjosos, dorados y servidos con sirope de arce, frutas frescas y un toque de mantequilla.',
      longDescription:
        'Estos panqueques esponjosos son una delicia culinaria que combina una textura ligera y aireada con un dorado perfecto en el exterior. Preparados con una mezcla de harina, leche, huevos y un toque de levadura, se cocinan hasta obtener una textura suave y tierna. Se sirven calientes, cubiertos con una generosa cantidad de sirope de arce, frutas frescas como fresas y arándanos, y un delicado toque de mantequilla que se derrite lentamente en la superficie. Son ideales para un desayuno reconfortante o un brunch especial, ofreciendo una experiencia de sabor que deleita desde el primer bocado.',
      category: 'Comida',
      date: '2024-09-13',
      author: 'Ana Rodríguez',
      isFavorite: false,
    },
  ];

  // Obtener las imágenes filtradas según la categoría seleccionada
  get filteredImages(): Image[] {
    if (!this.selectedCategory) {
      return this.images;
    }
    return this.images.filter(
      (image) => image.category === this.selectedCategory
    );
  }

  // Mostrar modal
  selectImage(image: Image): void {
    this.selectedImage = image;
  }

  // Cerrar modal
  closeDetails(): void {
    this.selectedImage = null;
  }

  // Seleccionar y deseleccionar favoritos
  toggleFavorite(image: Image): void {
    image.isFavorite = !image.isFavorite;
  }

  // Obtener las imágenes favoritas
  get favorites(): Image[] {
    return this.images.filter((image) => image.isFavorite);
  }

  // Alternar vista entre todas las imágenes y favoritas
  toggleFavoriteView(): void {
    this.showFavorites = !this.showFavorites;
  }
}
