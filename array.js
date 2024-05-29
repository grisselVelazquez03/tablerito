
function generarTabla(){
    var ren = parseInt(document.getElementById("ren").value);
    var col = parseInt(document.getElementById("col").value);
    var contenedor = document.getElementById("contenedor");
    var color1 = document.getElementById("color1");
    var color2 = document.getElementById("color2");

    let tabla = document.createElement('table');
        tabla.setAttribute('border','1');
    
    for(let x = 1; x <= ren; x++){
        let cambiarColores = (col%2 == 0 && x%2 !==0) || (col % 2 !== 0 && x%2 == 0);
        let tr = document.createElement('tr');
        for(let y = 1; y <= col ;y++){
            let color;
            if(cambiarColores){
                color = color1.value;
            }else{
                color = color2.value;
            }
            let td = document.createElement('td');
                td.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                td.style.background = color;
            cambiarColores = !cambiarColores;
            td.addEventListener("click", function(event){
                event.target.style.background = "#fff";
            });
            td.addEventListener("mouseover", function(event){
                if(event.target.style.background == "rgb(255, 255, 255)"){
                    event.target.style.background = "#000";
                }
            });
            td.addEventListener("mouseleave",function(event){
                if(event.target.style.background == "rgb(0, 0, 0)"){
                    event.target.style.background = "#fff";
                }
            })
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    contenedor.innerHTML = "";
    contenedor.appendChild(tabla);
}   