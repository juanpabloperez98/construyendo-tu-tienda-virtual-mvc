import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/modules/shared/services/highlight.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  code1 = `from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
class Producto(db.Model):
    __tablename__ = 'productos'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.String(200))
    precio = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer, nullable=False)
    def __repr__(self):
        return f'<Producto {self.nombre}>'`

  code2 = `from flask import Flask
from models import db
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://usuario:password@localhost/mi_tienda_virtual'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)`

  code3 = `nuevo_producto = Producto(nombre='Camiseta', descripcion='Camiseta 100% algodón', precio=19.99, stock=50)
db.session.add(nuevo_producto)
db.session.commit()`

  code4 = `productos = Producto.query.all()  # Obtiene todos los productos
producto = Producto.query.filter_by(nombre='Camiseta').first()  # Filtra productos por nombre`

  ngOnInit(): void {

  }

  constructor(
    private highlightService: HighlightService,
  ) { }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

}
