import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/modules/shared/services/highlight.service';
import { VariablesGlobalesService } from 'src/modules/shared/services/variables-globales.service';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit{


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

  // Variables de código 1
  code = `from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    def __repr__(self):
        return f'<Post {self.title}>'
  `
  max_line = 8
  explain: string[] = [
    'Importa la clase SQLAlchemy desde la extensión flask_sqlalchemy. Esta clase es la que nos permite trabajar con bases de datos en Flask utilizando SQLAlchemy, un ORM (Object Relational Mapper) que nos permite interactuar con la base de datos mediante objetos de Python en lugar de usar consultas SQL manuales.',
    'Se crea una instancia de la clase SQLAlchemy llamada db. Esta instancia gestionará la conexión a la base de datos y las operaciones que se realicen sobre ella. Al estar en el nivel global, será utilizada en toda la aplicación.',
    'Define una clase Post que hereda de db.Model, lo que indica que es un modelo de base de datos. Cada clase que herede de db.Model representa una tabla en la base de datos. En este caso, la clase Post será la tabla que almacenará las publicaciones del blog.',
    'Define una columna llamada id en la tabla de la base de datos, de tipo Integer (número entero). La propiedad primary_key=True indica que esta columna es la clave primaria, es decir, que cada fila de la tabla será identificada de manera única por el valor de id. SQLAlchemy asignará automáticamente un valor único para esta columna en cada nuevo registro.',
    'Define una columna llamada title de tipo String con un máximo de 100 caracteres. Esta columna almacenará el título de la publicación del blog. La opción nullable=False significa que esta columna no puede ser nula, es decir, que cada registro en la tabla debe tener un valor para title.',
    'Define una columna llamada content de tipo Text. Esta columna almacenará el contenido de la publicación. Al igual que con el título, nullable=False significa que esta columna no puede ser nula, por lo que cada publicación debe tener contenido.',
    'Define el método especial __repr__, que es utilizado para proporcionar una representación legible en consola o depuración de los objetos de la clase Post. Esto es útil cuando queremos ver una versión más descriptiva del objeto cuando imprimimos o inspeccionamos una instancia de Post.',
    'Este método devuelve una cadena que representa al objeto Post, mostrando su título. Esto será lo que se verá cuando se imprima una instancia de Post o cuando se use en una sesión interactiva.'
  ];
  lines: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]


  // Variables de código 2
  code2 = `<h1>Create a New Blog Post</h1>
<form action="/create" method="POST">
    <label for="title">Title:</label>
    <input type="text" id="title" name="title" required><br><br>
    <label for="content">Content:</label><br>
    <textarea id="content" name="content" rows="10" cols="30" required></textarea><br><br>
    <button type="submit">Create Post</button>
</form>
<a href="/posts">View all posts</a>
  `

  // Variables de código 3
  code3 = `<h1>All Blog Posts</h1>
<ul>
    {% for post in posts %}
    <li>
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
    </li>
    {% endfor %}
</ul>
<a href="/create">Create a new post</a>`

  // Variables de código 4
  code4 = `from flask import Flask, render_template, request, redirect, url_for
from model import db, Post
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
@app.route('/')
def index():
    return redirect(url_for('show_posts'))
@app.route('/create', methods=['GET', 'POST'])
def create_post():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        new_post = Post(title=title, content=content)
        db.session.add(new_post)
        db.session.commit()
        return redirect(url_for('show_posts'))
    return render_template('create_post.html')
@app.route('/posts')
def show_posts():
    posts = Post.query.all()
    return render_template('posts.html', posts=posts)
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)`

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
    this.max_line = 9
    this.explain = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
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
    this.max_line = 10
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
    this.max_line = 27
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
      '',
      '',
      '',
      '',
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
