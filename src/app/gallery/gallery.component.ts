import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  imagenes = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQCU5fYaodAJdQ3fJ-wX9lM-dNLUU2gl-bg&s',
      title: 'Título Imagen 1',
      description: 'Esto es una descripción de la imagen 1.'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQCU5fYaodAJdQ3fJ-wX9lM-dNLUU2gl-bg&s',
      title: 'Título Imagen 1',
      description: 'Esto es una descripción de la imagen 1.'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQCU5fYaodAJdQ3fJ-wX9lM-dNLUU2gl-bg&s',
      title: 'Título Imagen 1',
      description: 'Esto es una descripción de la imagen 1.'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQCU5fYaodAJdQ3fJ-wX9lM-dNLUU2gl-bg&s',
      title: 'Título Imagen 1',
      description: 'Esto es una descripción de la imagen 1.'
    },
  ];
}
