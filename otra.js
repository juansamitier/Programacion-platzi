var vp = document.getElementById("vplatzi");
var papel = vp.getContext("2d");

var fondo =
{
  url:"tile.png",
  cargaOk : false
};

var vaca=
{
  url:"vaca.png",
  cargaOk : false
};
var pollo=
{
  url:"pollo.png",
  cargaOk : false
};
var cerdo=
{
  url:"cerdo.jpg",
  cargaOk : false
};




fondo.objeto = new Image();
fondo.objeto.src =fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);
vaca.objeto= new Image();
vaca.objeto.src=vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);
pollo.objeto= new Image();
pollo.objeto.src=pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);
cerdo.objeto= new Image();
cerdo.objeto.src=cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);


 function cargarFondo()
  {
  fondo.cargaOk = true;
  dibujar();
  }
  function cargarVacas()
    {
      vaca.cargaOk= true;
      dibujar();
    }
    function cargarPollos()
      {
        pollo.cargaOk= true;
        dibujar();
      }
      function cargarCerdos()
        {
          cerdo.cargaOk= true;
          dibujar();
        }

        var cantidadVacas= aleatorio(2,10);
        var cantidadPollos=aleatorio(1,12);
        var cantidadCerdos = aleatorio(3,9);
        var xVacas = (80*aleatorio(0,5));
        var yVacas = (80*aleatorio(0,5));
        var xPollos = (80*aleatorio(0,5));
        var yPollos = (80*aleatorio(0,5));
        function dibujar()
        {
          if (fondo.cargaOk) {
        papel.drawImage(fondo.objeto,0,0);
          }
          if (vaca.cargaOk) {
            for (var i = 0; i < cantidadVacas; i++) {
              
        papel.drawImage(vaca.objeto,xVacas,yVacas);
        }
          }
          if (pollo.cargaOk)
          {
            for (var i = 0; i < cantidadPollos; i++) {

        papel.drawImage(pollo.objeto,xPollos,yPollos);
        }
          }
          if (cerdo.cargaOk) {
        papel.drawImage(cerdo.objeto,x3,y3);
        }
          }


        var teclas = {
            UP: 38,
            DOWN: 40,
            LEFT: 37,
            RIGHT: 39
        };

        var y3=250;
        var x3=250;
        var movimiento = 10;
        document.addEventListener("keydown", teclado);

function teclado(evento)
{
  switch (evento.keyCode)
  {
    case teclas.UP:
      y3 = y3 - movimiento;
      console.log(y3);
    break;
    case teclas.DOWN:
      y3 = y3 + movimiento;
      console.log(y3);
    break;
    case teclas.RIGHT:
      x3 = x3 + movimiento;
      console.log(x3);
    break;
    case teclas.LEFT:
      x3 = x3 - movimiento;
      console.log(x3);
    break;

  }
  dibujar();
}




function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random()*(max-min+1))+ min ;
  return resultado;
}
