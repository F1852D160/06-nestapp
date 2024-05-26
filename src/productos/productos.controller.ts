import { Controller, Get, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
   
   //private productos = ['Xiaomi 14 Ultra','Xiaomi 14','Xiaomi 13T pro','Xiaomi 13T','Xiaomi 12T pro','Xiaomi 12'];

    constructor(
        private readonly productosService: ProductosService
    ) {}

    @Get()
    getAllProductos(){
        // return this.productos;
        return this.productosService.findAll();
    }

    @Get(":id")
    getProductosById(@Param("id") id:String){
        // return this.productos[+id];
        return this.productosService.findById(+id);
    }


}
