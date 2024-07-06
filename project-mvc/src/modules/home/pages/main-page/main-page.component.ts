import { Component, OnInit } from '@angular/core';
import { Module } from '../../interfaces/home.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  ngOnInit(): void { }

  public modules: Module[] = [
    {
      imgSrc: './assets/home/module1.png',
      imgAlt: 'module1.png',
      title: '1. Introducción al patrón de diseño MVC',
      description: 'Bienvenido al primer módulo de nuestro viaje en "Construyendo Tu Tienda Virtual: Una Experiencia Práctica con el Modelo MVC". En esta etapa inicial, nos sumergiremos en el corazón del patrón Modelo-Vista-Controlador, un enfoque revolucionario que ha redefinido cómo desarrollamos aplicaciones efectivas y eficientes.',
      routerLink: '/introduccion_patron_diseno_mvc/main'
    },
    {
      imgSrc: './assets/ide/main.jfif',
      imgAlt: 'main.jfif',
      title: '2. Configurando el entorno de desarrollo',
      description: 'Tras adentrarte en los fundamentos del patrón MVC, es hora de dar un paso esencial: preparar tu espacio de trabajo. En este segundo módulo, nos centraremos en configurar el entorno de desarrollo, asegurándonos de que dispongas de todas las herramientas y recursos necesarios para construir, probar y desplegar tu tienda virtual con eficiencia.',
      routerLink: '/configuracionIDE/main'
    },
    {
      imgSrc: './assets/bd/main.png',
      imgAlt: 'main.png',
      title: '3. Diseño de bases de datos para la tienda virtual',
      description: 'Ahora que tu entorno de desarrollo está listo, nos sumergiremos en uno de los aspectos más cruciales de cualquier aplicación o sistema: la base de datos. En este tercer módulo, abordaremos el diseño y la estructura que soportará nuestra tienda virtual, garantizando que podamos almacenar, recuperar y gestionar datos de manera eficiente y efectiva.',
      routerLink: '/databases/main'
    },
    {
      imgSrc: './assets/modelo/modelo.jpg',
      imgAlt: 'main.png',
      title: '4. Creando el Modelo en MVC',
      description: 'Este módulo es una exploración profunda del Modelo, la pieza fundamental que se encarga de organizar y gestionar los datos de nuestra aplicación. Desde la manipulación de la información hasta la comunicación con la base de datos, aprenderemos cómo el Modelo desempeña un papel clave en la construcción de aplicaciones robustas y eficientes.',
      routerLink: '/introduccionMVC/main'
    },
    {
      imgSrc: './assets/vista/vista.png',
      imgAlt: 'main.png',
      title: '5. Desarrollo de la Vista en MVC',
      description: 'Este módulo es una exploración profunda de la Vista, la cara visible de nuestra aplicación. Aprenderemos a diseñar y desarrollar interfaces de usuario que no solo sean atractivas, sino que también se integren sin problemas con la lógica de negocio del Modelo y las interacciones del Controlador.',
      routerLink: '/introduccionMVC/main'
    },
    {
      imgSrc: './assets/controlador/controlador.png',
      imgAlt: 'main.png',
      title: '6. Implementando el Controlador en MVC',
      description: 'Este módulo es una inmersión profunda en el papel esencial del Controlador. Aprenderemos cómo diseñar y desarrollar controladores efectivos que respondan a las acciones del usuario, coordinando la comunicación entre la interfaz de usuario y la lógica de negocio subyacente.',
      routerLink: '/introduccionMVC/main'
    },
    {
      imgSrc: './assets/autenticacion/auth.jpg',
      imgAlt: 'main.png',
      title: '7. Autenticación y seguridad en la tienda virtual',
      description: 'Este módulo es una exploración profunda de cómo asegurar la autenticación y proteger la información confidencial en el entorno de una tienda virtual. Abordaremos las mejores prácticas para implementar sistemas de autenticación sólidos y estrategias de seguridad efectivas.',
      routerLink: '/introduccionMVC/main'
    },
    {
      imgSrc: './assets/carrito/carrito.jpg',
      imgAlt: 'main.png',
      title: '8. Carrito de compras y gestión de pedidos',
      description: 'Este módulo es una inmersión profunda en la creación de funcionalidades clave para cualquier plataforma de comercio electrónico. Aprenderemos cómo diseñar y desarrollar un Carrito de Compras que permita a los usuarios seleccionar y gestionar productos, así como la implementación de un sistema robusto de Gestión de Pedidos.',
      routerLink: '/introduccionMVC/main'
    },
    {
      imgSrc: './assets/pruebas/pruebas.jpg',
      imgAlt: 'main.png',
      title: '9. Pruebas y depuración',
      description: 'Este módulo es una inmersión profunda en las estrategias y herramientas que te ayudarán a asegurar que tu aplicación MVC sea robusta, libre de errores y cumpla con los requisitos de calidad. Desde las pruebas unitarias hasta la depuración efectiva, aprenderás a mantener un código sólido y confiable.',
      routerLink: '/introduccionMVC/main'
    },
    {
      imgSrc: './assets/bd/main.png',
      imgAlt: 'main.png',
      title: '10. Despliegue y mantenimiento de la tienda virtual',
      description: '¡Felicitaciones por llegar al último módulo de "Construyendo Tu Tienda Virtual: Una Experiencia Práctica con el Modelo MVC"!. Este módulo es una inmersión profunda en las estrategias y mejores prácticas para llevar tu tienda virtual desde el entorno de desarrollo hasta la producción, y cómo asegurar su funcionamiento continuo a lo largo del tiempo.',
      routerLink: '/introduccionMVC/main'
    }
  ];

}
