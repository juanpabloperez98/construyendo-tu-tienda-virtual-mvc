import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/modules/shared/services/highlight.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  code1 = `INSERT INTO usuarios (nombre, edad, email)
  VALUES ('Juan', 30, 'juan@example.com');

  SELECT * FROM usuarios;

  UPDATE usuarios
  SET edad = 31
  WHERE nombre = 'Juan';

  DELETE FROM usuarios
  WHERE nombre = 'Juan';`

  code2 = `import psycopg2

  # Conectar a la base de datos
  conn = psycopg2.connect(
      dbname="nombre_de_la_base_de_datos",
      user="usuario",
      password="contraseña",
      host="localhost"
  )


  # Crear un cursor para ejecutar consultas
  cur = conn.cursor()

  # Insertar un nuevo usuario
  cur.execute("INSERT INTO usuarios (nombre, email) VALUES (%s, %s)", ("Juan", "juan@example.com"))

  # Confirmar la transacción
  conn.commit()

  # Obtener todos los usuarios
  cur.execute("SELECT * FROM usuarios")
  usuarios = cur.fetchall()

  # Imprimir los usuarios
  for usuario in usuarios:
      print(usuario)

  # Actualizar el correo electrónico de un usuario
  cur.execute("UPDATE usuarios SET email = %s WHERE id = %s", ("nuevo_correo@example.com", 1))

  # Confirmar la transacción
  conn.commit()

  # Cerrar el cursor y la conexión
  cur.close()
  conn.close()`

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngOnInit(): void { }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
