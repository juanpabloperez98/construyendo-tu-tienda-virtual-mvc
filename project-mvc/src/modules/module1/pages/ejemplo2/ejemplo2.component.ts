import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/modules/shared/services/highlight.service';
import { VariablesGlobalesService } from 'src/modules/shared/services/variables-globales.service';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit{


  // Variables 1
  start: boolean = false;
  finish: boolean = true;
  top_style: string = '';
  line_style: string = 'display:none';
  current_line: number = 1;
  top = 16;
  explain_txt: string = '';
  explain_line: string = '';
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;

  // Modelo
  code = `from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    author = db.Column(db.String(100), nullable=False)
  `
  max_line = 6
  explain: string[] = [
    'Se importa la clase SQLAlchemy desde el paquete flask_sqlalchemy. Esta clase proporciona una interfaz para interactuar con bases de datos utilizando el ORM (Object Relational Mapper) de SQLAlchemy dentro de una aplicación Flask.',
    'Se crea una instancia de SQLAlchemy y se asigna a la variable db. Esta instancia se utilizará para configurar y gestionar la conexión a la base de datos y las operaciones relacionadas con los modelos de datos.',
    'Se define una clase llamada Book que hereda de db.Model. Esto convierte a Book en un modelo de SQLAlchemy, que representa una tabla en la base de datos.',
    'Se define un campo llamado id utilizando db.Column. Este campo es de tipo Integer y actúa como la clave primaria de la tabla. La clave primaria (primary_key=True) asegura que cada registro en la tabla Book sea único y se pueda identificar de manera exclusiva.',
    'Se define un campo llamado title que es de tipo String con una longitud máxima de 100 caracteres. La opción nullable=False indica que este campo es obligatorio y no puede ser nulo en la base de datos.',
    'Se define un campo llamado author que es de tipo String con una longitud máxima de 100 caracteres. Al igual que el campo title, nullable=False indica que este campo es obligatorio y no puede ser nulo en la base de datos.'
  ];
  lines: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
  ]


  // Vistas
  code2 = `<h1>Lista de Libros</h1>
<a href="{{ url_for('add_book') }}">Añadir Nuevo Libro</a>
<ul>
    {% for book in books %}
        <li>{{ book.title }} by {{ book.author }}
            <a href="{{ url_for('delete_book', id=book.id) }}">Eliminar</a>
        </li>
    {% endfor %}
</ul>
  `

  // Vistas
  code3 = `<h1>Añadir Nuevo Libro</h1>
<form method="POST">
    <label for="title">Título:</label>
    <input type="text" id="title" name="title" required>
    <br>
    <label for="author">Autor:</label>
    <input type="text" id="author" name="author" required>
    <br>
    <button type="submit">Añadir Libro</button>
</form>
  `

  // Controlador
  code4 = `from flask import Flask, render_template, request, redirect, url_for
  from modelos import db, Hotel, Reserva
  app = Flask(__name__)
  app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hoteles.db'
  db.init_app(app)
  @app.route('/hotel/<int:hotel_id>')
  def hotel_detalle(hotel_id):
      hotel = Hotel.query.get(hotel_id)
      return render_template('hotel.html', hotel=hotel)
  @app.route('/reserva/<int:hotel_id>', methods=['POST'])
  def reserva_hotel(hotel_id):
      hotel = Hotel.query.get(hotel_id)
      if hotel.habitaciones_disponibles > 0:
          huésped = request.form['nombre_huesped']
          fecha_inicio = request.form['fecha_inicio']
          fecha_fin = request.form['fecha_fin']
          reserva = Reserva(hotel_id=hotel_id, huésped=huésped, fecha_inicio=fecha_inicio, fecha_fin=fecha_fin)
          db.session.add(reserva)
          hotel.habitaciones_disponibles -= 1
          db.session.commit()
          return render_template('reserva.html', reserva=reserva)
      else:
          return "No hay habitaciones disponibles."
  if __name__ == '__main__':
      app.run()
  `

  // Funciones
  reset_vars_code2 = () => {
    this.start = false;
    this.finish = true;
    this.top_style = '';
    this.line_style = 'display:none';
    this.current_line = 1;
    this.top = 16;
    this.explain_txt = '';
    // ----------------------------------------------
    this.max_line = 3
    this.explain = [
      'Esta línea muestra el nombre del hotel dentro de un elemento h1 (encabezado 1). El texto entre las llaves dobles {{ hotel.nombre }} es una expresión que recupera y muestra el valor de la propiedad nombre del objeto hotel',
      'Aquí se muestra la ubicación del hotel dentro de un párrafo (<p>). Similar al caso anterior, {{ hotel.ubicacion }} muestra el valor de la propiedad ubicacion del objeto hotel.',
      'En esta línea, se muestra la cantidad de habitaciones disponibles en el hotel. Nuevamente, {{ hotel.habitaciones_disponibles }} muestra el valor de la propiedad habitaciones_disponibles del objeto hotel.',
    ];
    this.lines = [
      'hotel es la variable que representa al modelo y nombre es el atributo del modelo que deseamos mostrar',
      'ubicacion es el atributo de la ubicacion del hotel que deseamos mostrar',
      'habitaciones_disponibles es el atributo de la el número de habitaciones del hotel disponible que deseamos mostrar',
    ]
    this.explain_line = '';
  }

  reset_vars_code3 = () => {

    this.start = false;
    this.finish = true;
    this.top_style = '';
    this.line_style = 'display:none';
    this.current_line = 1;
    this.top = 16;
    this.explain_txt = '';
    // ----------------------------------------------
    this.max_line = 4
    this.explain = [
      'Se imprime un título de nivel 1 mostrando el mensaje "Confirmación de Reserva".',
      'Se muestra un párrafo con el texto "Huésped:", seguido del nombre del huesped obtenido de la variable reserva.huesped.',
      'Se muestra un párrafo con el texto "Hotel:", seguido del nombre del hotel obtenido de la variable reserva.hotel.nombre.',
      'Se muestra un párrafo con las fechas de inicio y fin de la reserva, obtenidas de las variables reserva.fecha_inicio y reserva.fecha_fin.',
    ];
    this.lines = [
      '',
      'reserva es la variable que representa al modelo de Reserva definido anteriormente, y huesped el atributo que representa al nombre del huesped',
      'reserva es la variable que representa al modelo de Reserva definido anteriormente, luego se hace el llamado al atributo hotel (siendo este atributo un llamado a la relación que tiene el modelo Reserva con Hotel) y posteriormente se hace el llamado al atributo nombre que es un atributo del Modelo Hotel',
      'Lo mismo se hace el llamado a los atributos del modelo Reserva, haciendo llamado a la fechas de inicio y la fecha fin',
    ]
    this.explain_line = '';
  }

  reset_vars_code4 = () => {

    this.start = false;
    this.finish = true;
    this.top_style = '';
    this.line_style = 'display:none';
    this.current_line = 1;
    this.top = 16;
    this.explain_txt = '';
    // ----------------------------------------------
    this.max_line = 25
    this.explain = [
      'Importa las funciones necesarias de Flask para crear la aplicación web y manejar las plantillas, solicitudes y redireccionamientos.',
      'Importa la base de datos (db) y los modelos (Hotel y Reserva) desde el módulo modelos.',
      'Crea una instancia de la aplicación Flask.',
      'Configura la URI de la base de datos SQLite para la aplicación Flask.',
      'Inicializa la base de datos con la aplicación Flask.',
      'Define una ruta para mostrar los detalles de un hotel específico basado en su ID.',
      'Define la función para manejar la solicitud de la ruta /hotel/<int:hotel_id>.',
      'Busca el hotel en la base de datos por su ID.',
      'Renderiza la plantilla hotel.html con la información del hotel.',
      'Define una ruta para hacer una reserva en un hotel específico, utilizando el método POST.',
      'Define la función para manejar la solicitud de la ruta /reserva/<int:hotel_id>.',
      'Busca el hotel en la base de datos por su ID.',
      'Comprueba si el hotel tiene habitaciones disponibles.',
      'Obtiene el nombre del huésped del formulario enviado.',
      'Obtiene la fecha de inicio de la reserva del formulario enviado.',
      'Obtiene la fecha de fin de la reserva del formulario enviado.',
      'Crea una nueva instancia de reserva con los datos proporcionados.',
      'Añade la nueva reserva a la sesión de la base de datos.',
      'Reduce el número de habitaciones disponibles en el hotel.',
      'Guarda los cambios en la base de datos.',
      'Renderiza la plantilla reserva.html con la información de la reserva.',
      'Define la rama alternativa del condicional para el caso en que no haya habitaciones disponibles.',
      'Devuelve un mensaje indicando que no hay habitaciones disponibles.',
      'Comprueba si el script se está ejecutando directamente (no importado como módulo).',
      'Ejecuta la aplicación Flask.',
    ];
    this.lines = [
      'line1',
      'line2',
      'line3',
      'line4',
      'line5',
      'line6',
      'line7',
      'line8',
      'line9',
      'line10',
      'line11',
      'line12',
      'line13',
      'line14',
      'line15',
      'line16',
      'line17',
      'line18',
      'line19',
      'line20',
      'line21',
      'line22',
      'line23',
      'line24',
      'line25',
    ]
    this.explain_line = '';
  }

  add_explain(): void {
    this.explain_txt = this.explain[this.current_line - 1];
    this.explain_line = this.lines[this.current_line - 1];
  }

  onStart = (): void => {
    this.start = !this.start
    this.line_style = 'display:inline-block';
    this.add_explain();
  }

  back = (): void => {

    if (this.current_line <= 1) {
      return
    } else {
      this.top -= 24;
      this.top_style = `${this.top}px`;
      this.current_line--;
      this.add_explain();
    }

  }

  next = (): void => {
    if (this.current_line >= this.max_line) {
      this.finish = false;
      return;
    }
    if (this.current_line >= this.max_line - 1) {
      this.finish = false;
    }
    this.top += 24;
    this.top_style = `${this.top}px`;
    this.current_line++;
    this.add_explain();
  }

  showView = (status: number): void => {

    switch(status){
      case 1:{
        this.show1 = false
        this.show2 = true
        this.reset_vars_code2()
        break
      }
      case 2:{
        this.show2 = false
        this.show3 = true
        this.reset_vars_code3()
        break
      }
      case 3:{
        this.show3 = false
        this.show4 = true
        this.reset_vars_code4()
        break
      }
    }
  }

  textBackModule:string = ''
  uriBack: string = '/introduccion_patron_diseno_mvc/main'

  constructor(
    private highlightService: HighlightService,
    private variablesglobalesservice: VariablesGlobalesService
  ) { }

  ngOnInit(): void {
    this.top_style = `${top}px`;
    this.textBackModule = this.variablesglobalesservice.textBackModule
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
