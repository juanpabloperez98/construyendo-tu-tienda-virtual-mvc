import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/modules/shared/services/highlight.service';
import { VariablesGlobalesService } from 'src/modules/shared/services/variables-globales.service';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {


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
  iter: number = 0;
  allow_back: boolean = true;

  // Modelo
  code = `from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    precio = db.Column(db.Float, nullable=False)
    descripcion = db.Column(db.String(255), nullable=True)`
  max_line = 7
  explain: string[] = [
    'Importa la clase SQLAlchemy del módulo flask_sqlalchemy, que es una extensión de Flask para interactuar con bases de datos utilizando el patrón ORM (Object-Relational Mapping). Permite trabajar con bases de datos mediante objetos y clases en lugar de consultas SQL directas.',
    'Crea una instancia de la clase SQLAlchemy, que será utilizada para configurar y manejar la conexión a la base de datos. Esta instancia actúa como puente entre la aplicación Flask y la base de datos.',
    'Define una clase llamada Producto, que hereda de db.Model. Esto indica que Producto es un modelo de datos, es decir, una representación en Python de una tabla en la base de datos.',
    'Declara un atributo llamado id que corresponde a una columna en la tabla. El tipo de dato es Integer, y está marcado como primary_key=True, lo que significa que será la clave primaria de la tabla y su valor será único para cada registro.',
    'Declara un atributo llamado nombre que corresponde a una columna en la tabla. El tipo de dato es String con un tamaño máximo de 100 caracteres. El argumento nullable=False indica que esta columna no puede tener valores nulos, es decir, siempre debe tener un valor asignado.',
    'Declara un atributo llamado precio que corresponde a una columna en la tabla. El tipo de dato es Float (número decimal). El argumento nullable=False indica que esta columna no puede ser nula, por lo que es obligatorio asignarle un valor.',
    'Declara un atributo llamado descripcion que corresponde a una columna en la tabla. El tipo de dato es String con un tamaño máximo de 255 caracteres. El argumento nullable=True indica que esta columna puede ser nula, es decir, es opcional asignarle un valor.',
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
        </li>
    {% endfor %}
</ul>
  `

  // Vistas
  code3 = `<h2>Agregar Producto</h2>
<form method="POST" action="/agregar_producto">
    <label>Nombre:</label>
    <input type="text" name="nombre" required>
    <label>Precio:</label>
    <input type="number" step="0.01" name="precio" required>
    <label>Descripción:</label>
    <textarea name="descripcion"></textarea>
    <button type="submit">Agregar</button>
</form>
  `

  // Controlador
  code4 = `from flask import Flask, render_template, request, redirect
from modelos import db, Producto
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///productos.db'
db.init_app(app)
@app.route('/')
def listar_productos():
    productos = Producto.query.all()
    return render_template('productos.html', productos=productos)
@app.route('/agregar_producto', methods=['POST'])
def agregar_producto():
    nuevo_producto = Producto(
        nombre=request.form['nombre'],
        precio=request.form['precio'],
        descripcion=request.form.get('descripcion', '')
    )
    db.session.add(nuevo_producto)
    db.session.commit()
    return redirect('/')
if __name__ == '__main__':
    app.run()`

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
    this.max_line = 8
    this.explain = [
      'Define un encabezado de nivel 1 que muestra el título "Lista de Libros" en la página. Es una etiqueta HTML estándar utilizada para títulos principales.',
      'Crea un enlace que apunta a la URL generada por la función Flask url_for("add_book"). Esto indica que al hacer clic en el enlace, el navegador redirigirá a la ruta asociada con la función add_book en el servidor. El texto del enlace es "Añadir Nuevo Libro".',
      'Abre una lista desordenada (<ul> en HTML), que se utiliza para contener elementos de lista (<li>). Aquí se mostrará la lista de libros.',
      'Inicia un bloque de bucle en Jinja2, que iterará sobre la colección books. Por cada elemento en books, se generará dinámicamente un elemento de la lista. books es una variable pasada desde el controlador Flask al renderizar la plantilla.',
      'Crea un elemento de lista (<li>) para cada libro en books. Dentro de este elemento, se muestra el título (book.title) seguido del autor (book.author) del libro. Las variables book.title y book.author son atributos de cada objeto en la lista books.',
      'Cierra el elemento de lista (<li>), finalizando la definición de un libro en la lista.',
      'Cierra el bucle Jinja2. Esto indica que se han terminado de procesar todos los elementos en la colección books.',
      'Cierra la lista desordenada (<ul>), indicando que no hay más elementos de lista que agregar.',
    ];
    this.lines = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
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
    this.max_line = 10
    this.explain = [
      'Define un encabezado de nivel 2 que muestra el título "Agregar Producto" en la página. Esto indica que el formulario a continuación está destinado a agregar un producto.',
      'Abre un formulario HTML que enviará datos al servidor mediante el método HTTP POST. La acción (action) indica que los datos serán enviados a la ruta /agregar_producto en el servidor.',
      'Crea una etiqueta para el campo de texto donde el usuario introducirá el nombre del producto. El texto "Nombre:" describe el propósito del campo al usuario.',
      'Crea un campo de entrada de texto para que el usuario escriba el nombre del producto. El atributo name="nombre" define cómo se identificará este dato en el servidor. El atributo required indica que este campo es obligatorio y debe completarse antes de enviar el formulario.',
      'Crea una etiqueta para el campo de entrada donde el usuario introducirá el precio del producto. El texto "Precio:" describe el propósito del campo.',
      'Crea un campo de entrada numérico para el precio del producto. El atributo step="0.01" asegura que el usuario pueda ingresar valores con hasta dos decimales. El atributo name="precio" define cómo se identificará este dato en el servidor, y required indica que este campo es obligatorio.',
      'Crea una etiqueta para el campo de texto donde el usuario puede ingresar una descripción del producto. El texto "Descripción:" describe el propósito del campo.',
      'Crea un área de texto para que el usuario introduzca una descripción más larga del producto. El atributo name="descripcion" define cómo se identificará este dato en el servidor. A diferencia de un campo de entrada (<input>), un <textarea> permite múltiples líneas de texto.',
      'Crea un botón para enviar el formulario. El atributo type="submit" indica que al hacer clic en el botón, se enviarán los datos del formulario al servidor según el método y la acción especificados en <form>.',
      'Cierra el formulario HTML, indicando que no hay más campos o elementos relacionados con el envío de datos.',
    ];
    this.lines = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
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
    this.max_line = 21
    this.explain = [
      'Importa las clases y funciones necesarias del framework Flask.',
      'Importa el objeto db (gestor de base de datos) y el modelo Producto desde el archivo modelos.py. Estos son esenciales para interactuar con la base de datos y gestionar los productos.',
      'Crea una instancia de la clase Flask, que es la aplicación principal. El argumento __name__ permite que Flask sepa dónde se encuentra el archivo principal para localizar recursos y rutas.',
      'Configura la URI de la base de datos para la aplicación. En este caso, usa SQLite y define el archivo productos.db como la base de datos para almacenar la información.',
      'Inicializa la extensión SQLAlchemy con la aplicación Flask creada, vinculando la base de datos a esta aplicación.',
      'Define una ruta para el punto de entrada principal de la aplicación (la raíz /). Cualquier solicitud GET a esta URL invocará la función listar_productos.',
      'Declara una función que gestionará las solicitudes a la ruta /. El propósito de esta función es listar los productos almacenados en la base de datos.',
      'Consulta la base de datos para obtener todos los registros de la tabla Producto y los almacena en la variable productos.',
      'Renderiza la plantilla productos.html y pasa la lista de productos a la plantilla como una variable llamada productos.',
      'Define una ruta para manejar solicitudes POST enviadas al endpoint /agregar_producto. Esta ruta permite agregar nuevos productos a la base de datos.',
      'Declara una función que manejará las solicitudes POST para agregar un nuevo producto.',
      'Declara una nueva variable llamada nuevo_producto y la asigna a una instancia del modelo Producto. Esto crea un nuevo objeto basado en la clase Producto, que representa un producto en la base de datos.',
      'Asigna al atributo nombre del nuevo objeto el valor recibido del formulario HTML. Este valor se extrae del campo de formulario con el nombre nombre enviado en la solicitud POST.',
      'Asigna al atributo precio del nuevo objeto el valor recibido del formulario HTML. Este valor se extrae del campo de formulario con el nombre precio enviado en la solicitud POST.',
      'Asigna al atributo descripcion del nuevo objeto el valor recibido del formulario HTML. Usa el método get para intentar obtener el valor del campo descripcion enviado en la solicitud POST. Si no se proporciona una descripción, asigna una cadena vacía ("") como valor predeterminado.',
      'Cierra la llamada al constructor del modelo Producto, indicando que se ha completado la creación del nuevo objeto.',
      'Añade el objeto nuevo_producto a la sesión actual de la base de datos. Esto marca el objeto para que sea incluido en la base de datos en el próximo commit.',
      'Confirma los cambios en la base de datos, guardando permanentemente el objeto nuevo_producto en la tabla Producto.',
      'Redirige al usuario a la ruta raíz (/), lo que actualiza la lista de productos para incluir el nuevo producto recién agregado.',
      'Verifica si el archivo actual está siendo ejecutado directamente. Si el archivo se importa como un módulo en otro programa, este bloque no se ejecutará. Este es un mecanismo común en Python para definir el punto de entrada de una aplicación.',
      'Inicia el servidor web de Flask, poniendo la aplicación en funcionamiento. Por defecto, se ejecutará en http://127.0.0.1:5000',
    ];
    this.lines = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ]
    this.explain_line = '';
  }

  update_line_jump(line_to_jump: number): void {
    const diference_between_lines = this.current_line - line_to_jump
    let lines_less = this.top - (diference_between_lines * 24);
    this.top = lines_less;
    this.top_style = `${this.top}px`;
    this.explain_txt = this.explain[line_to_jump - 1];
  }

  validate_next(): boolean {
    if (this.show2) {
      if (this.iter == 2) { return false; }
      if (this.current_line === 7) {
        const line_jump = 4
        this.update_line_jump(line_jump)
        this.current_line = line_jump;
        this.iter += 1;
        this.add_explain();
        this.allow_back = false;
        return true;
      }
    }
    return false
  }

  add_explain(): void {
    this.explain_txt = this.explain[this.current_line - 1];
    this.explain_line = this.lines[this.current_line - 1];
    const vars = this.load_variables()
    if (vars) {
      this.explain_line = this.getNewValueForLine(vars)
    }
  }

  getNewValueForLine(vars: any): string {
    if (!this.show2) {
      return "";
    }

    switch (this.current_line) {
      case 4:
        return `books: ${JSON.stringify(vars, null, 2)}`;

      case 5:
        if (vars[this.iter]) {
          return `book.title: ${vars[this.iter].title} - book.author: ${vars[this.iter].author}`;
        }
        return "";
      default:
        return "";
    }
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
    const validated = this.validate_next()
    if (!validated) {
      this.add_explain();
    }
  }

  private load_variables() {
    if (this.show2) {
      return [
        {
          "id": 1,
          "title": "Cien años de soledad",
          "author": "Gabriel García Márquez"
        },
        {
          "id": 2,
          "title": "1984",
          "author": "George Orwell"
        },
        {
          "id": 3,
          "title": "El principito",
          "author": "Antoine de Saint-Exupéry"
        }
      ]
    }
    return null;
  }

  showView = (status: number): void => {

    switch (status) {
      case 1: {
        this.show1 = false
        this.show2 = true
        this.reset_vars_code2()
        break
      }
      case 2: {
        this.show2 = false
        this.show3 = true
        this.reset_vars_code3()
        break
      }
      case 3: {
        this.show3 = false
        this.show4 = true
        this.reset_vars_code4()
        break
      }
    }
  }

  textBackModule: string = ''
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
