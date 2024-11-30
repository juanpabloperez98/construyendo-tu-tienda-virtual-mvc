import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/modules/shared/services/highlight.service';
import { VariablesGlobalesService } from 'src/modules/shared/services/variables-globales.service';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {


  // Variables 1
  start: boolean = false;
  finish: boolean = true;
  top_style: string = '';
  line_style: string = 'display:none';
  current_line: number = 1;
  top = 16;
  explain_txt: string = '';
  explain_line: string = '';
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = true;
  show4: boolean = false;
  iter: number = 0;
  allow_back: boolean = true;

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
from models import db, Post
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'mysecretkey'
db.init_app(app)
@app.before_first_request
def create_tables():
    with app.app_context():
        db.create_all()
        print("Base de datos creada.")
@app.route('/')
def home():
    posts = Post.query.all()
    return render_template('home.html', posts=posts)
@app.route('/create', methods=['GET', 'POST'])
def create_post():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        new_post = Post(title=title, content=content)
        db.session.add(new_post)
        db.session.commit()
        return redirect(url_for('home'))
    return render_template('create_post.html')
if __name__ == '__main__':
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
      'Se define un encabezado <h1>, que es un título principal para la página. El texto dentro de la etiqueta <h1> indica al usuario que esta página es para "Crear una Nueva Publicación de Blog". Es el título visible en la interfaz.',
      'Se inicia el formulario con la etiqueta <form>. La propiedad action="/create" indica que los datos del formulario se enviarán a la URL /create cuando el formulario sea enviado. La propiedad method="POST" especifica que se usará el método HTTP POST para enviar los datos del formulario, lo cual es adecuado para enviar datos que modifican el servidor (como crear una nueva publicación).',
      'Se define una etiqueta <label> para el campo de entrada del título. La propiedad for="title" vincula este texto con el campo de entrada que tiene el atributo id="title", lo que mejora la accesibilidad.',
      'Se crea un campo de entrada <input> para que el usuario ingrese el título de la publicación.',
      'Se define una etiqueta <label> para el campo de contenido de la publicación. Similar al campo anterior, el atributo for="content" vincula esta etiqueta con el campo de contenido que tiene el atributo id="content".',
      'Se crea un campo de texto de varias líneas utilizando la etiqueta <textarea>, que permite a los usuarios escribir más texto.',
      'Se define un botón de envío dentro del formulario utilizando la etiqueta <button>.',
      'Se cierra la etiqueta del formulario, indicando que todos los campos de entrada y el botón de envío pertenecen a este formulario.',
      'Se crea un enlace con la etiqueta <a>, que permite al usuario navegar a la página /posts para ver todas las publicaciones existentes.',
    ];
    this.lines = [
      '',
      '',
      '',
      'type="text" indica que el campo es un campo de texto; id="title" le da un identificador único al campo, que es utilizado por el label y otras funcionalidades de JavaScript si es necesario; name="title" define el nombre del campo, que se usará para acceder a este valor en el servidor; required significa que el campo es obligatorio, es decir, el usuario no podrá enviar el formulario sin llenar este campo',
      '',
      'id="content" le da un identificador único al campo; name="content" especifica el nombre del campo, que es usado para acceder al valor enviado desde el formulario en el servidor; rows="10" y cols="30" especifican las dimensiones del área de texto, indicando que tendrá 10 filas (líneas de texto) y 30 columnas (ancho); required hace que este campo también sea obligatorio',
      'type="submit" especifica que el botón será usado para enviar el formulario',
      '',
      'href="/posts" indica que el enlace llevará al usuario a la ruta /posts, donde se mostrarán todas las publicaciones de blog',
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
      'Se define un encabezado <h1>, que es el título principal de la página. El texto dentro de la etiqueta indica que esta página está mostrando "Todas las Publicaciones del Blog". Es el encabezado visible para el usuario.',
      'Se inicia una lista no ordenada utilizando la etiqueta <ul>. Esto se usará para mostrar todas las publicaciones en un formato de lista.',
      'Aquí comienza un bloque de código Jinja2. El {% for post in posts %} es un bucle que recorre la lista posts que se pasó desde la vista en Flask (como contexto al renderizar la plantilla). Por cada elemento (publicación) en la lista posts, se ejecutará el código dentro del bloque. Cada publicación individual se asigna a la variable post.',
      'Dentro del bucle, se inicia un nuevo elemento de lista (<li>). Cada publicación del blog será mostrada como un ítem dentro de esta lista.',
      'Dentro de cada elemento de lista, se muestra el título de la publicación. {{ post.title }} es una expresión de Jinja2 que inserta el valor del atributo title de la publicación actual en el bucle post.',
      'Después del título, se muestra el contenido de la publicación. {{ post.content }} es otra expresión de Jinja2 que inserta el valor del atributo content de la publicación actual en el bucle post. El contenido se muestra dentro de un párrafo <p>.',
      'Se cierra el elemento de lista <li>, lo que marca el final de la representación de una publicación del blog en la lista.',
      'Se cierra el bloque del bucle for de Jinja2. Esto indica que el bucle ha terminado de recorrer todas las publicaciones en posts.',
      'Se cierra la lista no ordenada (<ul>), finalizando la estructura de la lista que contiene todas las publicaciones.',
      'Se crea un enlace <a> que lleva al usuario a la página de creación de una nueva publicación.',
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
    this.max_line = 28
    this.explain = [
      'Se importan los componentes necesarios desde la librería Flask. Flask es la clase principal para crear la aplicación, render_template permite renderizar las plantillas HTML, request es utilizado para acceder a los datos enviados a través de formularios, redirect permite redirigir al usuario a otra página, y url_for se usa para generar URLs dinámicas dentro de la aplicación.',
      'Se importan db y Post desde el archivo models.py. db es el objeto que gestiona la conexión y operaciones con la base de datos, y Post es el modelo que define la estructura de las publicaciones en la base de datos.',
      'Se crea una instancia de la clase Flask, que se utiliza para inicializar la aplicación web. __name__ se pasa como argumento para que Flask pueda encontrar las rutas, plantillas y archivos estáticos correctamente.',
      'Se configura la URI de la base de datos que usará la aplicación. En este caso, se utilizará una base de datos SQLite almacenada en un archivo llamado blog.db en el mismo directorio que la aplicación.',
      'Se desactiva el seguimiento de modificaciones de los objetos en la base de datos. Esto evita un sobrecosto en memoria y previene advertencias de SQLAlchemy sobre la gestión de cambios en los objetos.',
      'Se establece una clave secreta para la aplicación. Esta clave es utilizada por Flask para manejar las sesiones y cookies de manera segura.',
      'Se inicializa la base de datos con la aplicación Flask. Esto asegura que la aplicación esté lista para interactuar con la base de datos usando SQLAlchemy.',
      'El decorador @app.before_first_request indica que la función que sigue se ejecutará antes de que Flask maneje la primera solicitud HTTP. Esto se usa para realizar acciones como crear la base de datos antes de que la aplicación comience a recibir solicitudes.',
      'Se define la función create_tables(), que será ejecutada antes de la primera solicitud. Esta función tiene como objetivo crear las tablas necesarias en la base de datos.',
      'Se crea un contexto de aplicación explícito. Flask usa el contexto de aplicación para manejar la conexión con la base de datos. Esto es necesario cuando interactuamos con la base de datos fuera de una solicitud HTTP directa.',
      'db.create_all() crea todas las tablas que están definidas en los modelos de la base de datos (en este caso, la tabla Post). Si las tablas ya existen, no se crea ninguna nueva.',
      'Imprime un mensaje en la consola que indica que la base de datos ha sido creada correctamente.',
      'El decorador @app.route("/") define la ruta para la página principal (/). Esta ruta se activa cuando el usuario accede a la URL raíz de la aplicación, y está asociada con la función home()',
      'Se define la función home(), que es la que se ejecutará cuando un usuario acceda a la página principal de la aplicación.',
      'Dentro de la función home(), se realiza una consulta a la base de datos con Post.query.all(). Esto recupera todas las publicaciones almacenadas en la base de datos y las guarda en la variable posts.',
      'Se renderiza la plantilla home.html y se pasa la variable posts a la plantilla. Esto permite que la página muestre todas las publicaciones del blog.',
      'El decorador @app.route("/create", methods=["GET", "POST"]) define una ruta para la URL /create. Esta ruta manejará tanto solicitudes GET (cuando el usuario accede al formulario) como POST (cuando el formulario es enviado con los datos).',
      'Se define la función create_post(), que se ejecutará cuando el usuario acceda a la ruta /create. Esta función maneja tanto la visualización del formulario de creación de publicaciones como el procesamiento de los datos enviados por el formulario.',
      'Aquí se verifica si la solicitud es de tipo POST. Esto significa que el usuario ha enviado el formulario de creación de una publicación. Si la solicitud es POST, se procesan los datos del formulario.',
      'Se extrae el valor del campo title del formulario enviado por el usuario. Este es el título de la nueva publicación.',
      'Se extrae el valor del campo content del formulario enviado por el usuario. Este es el contenido de la nueva publicación.',
      'Se crea una nueva instancia de Post con los valores extraídos del formulario. La nueva publicación se inicializa con el título y contenido proporcionados por el usuario.',
      'Se agrega la nueva publicación a la sesión de la base de datos. Esto indica que la publicación debe ser guardada en la base de datos cuando se confirme la transacción.',
      'Se confirma la transacción y se guarda la nueva publicación en la base de datos con db.session.commit().',
      'Después de guardar la nueva publicación, se redirige al usuario a la página principal (home) usando redirect(url_for("home")). Esto asegura que el usuario vea la lista actualizada de publicaciones.',
      'Si la solicitud es de tipo GET (cuando el usuario accede a la página para crear una nueva publicación), se renderiza la plantilla create_post.html, que muestra el formulario para crear una publicación.',
      'Se verifica si el archivo es ejecutado directamente, es decir, si se está ejecutando la aplicación desde el archivo principal. Esto se hace mediante if __name__ == "__main__".',
      'Si el archivo es ejecutado directamente, se inicia la aplicación Flask con app.run(debug=True). El parámetro debug=True activa el modo de depuración, lo que permite ver los errores en el navegador y recargar automáticamente la aplicación cuando se realizan cambios en el código.',
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

  update_line_jump(line_to_jump: number): void {
    const diference_between_lines = this.current_line - line_to_jump
    let lines_less = this.top - (diference_between_lines * 24);
    this.top = lines_less;
    this.top_style = `${this.top}px`;
    this.explain_txt = this.explain[line_to_jump - 1];
  }

  validate_next(): boolean {
    if (this.show3) {
      if (this.iter == 2) { return false; }
      if (this.current_line === 8) {
        const line_jump = 3
        this.update_line_jump(line_jump)
        this.current_line = line_jump;
        this.iter += 1;
        this.explain_line = this.lines[this.current_line - 1];
        this.allow_back = false;
        console.log("this.allow_back: ", this.allow_back);
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
    if (!this.show3) {
      return "";
    }

    switch (this.current_line) {
      case 3:
        return `posts: ${JSON.stringify(vars, null, 2)}`;

      case 5:
        if (vars[this.iter]) {
          return `post.title: ${vars[this.iter].post_title}`;
        }
        return "";
      case 6:
        if (vars[this.iter]) {
          return `post.content: ${vars[this.iter].post_content}`;
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
    const validated = this.validate_next()
    if (!validated) {
      this.add_explain();
    }
  }

  private load_variables() {
    if (this.show3) {
      return [
        {
          post_title: 'Titulo 1',
          post_content: 'Content 1',
        },
        {
          post_title: 'Titulo 2',
          post_content: 'Content 2',
        },
        {
          post_title: 'Titulo 3',
          post_content: 'Content 3',
        },
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
    this.reset_vars_code3()
    this.top_style = `${top}px`;
    this.textBackModule = this.variablesglobalesservice.textBackModule
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
