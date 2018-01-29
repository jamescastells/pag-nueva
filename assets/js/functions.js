function cargar_integrantes(){
		var xmlhttp;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		{

		  if (xmlhttp.readyState==4)
			{
        var lineas = xmlhttp.responseText.split("\n");
        var lado = 0;
        for (var i=0;i<lineas.length-1;i++){
          linea = lineas[i];
          elementos = linea.split(",");
          nombre = elementos[0];
          cargo = elementos[1];
          extension = elementos[2];
          correo = elementos[3];
          imagen = elementos[4];
          div_integrante = document.createElement("div");
          div_integrante.className = 'integrante';
          h4 = document.createElement('h4');
          h4.appendChild(document.createTextNode(nombre));
          h4.className='nombre-integrante';
          div_integrante.appendChild(h4);
          span = document.createElement('span');
          span.className='image left';
          div_integrante.appendChild(span);
          a = document.createElement('a');
          a.href="mailto:"+correo;
          a.className='image';
          span.appendChild(a);
          img = document.createElement('img');
          img.src = 'images/integrantes/' + imagen;
          img.className='imagen-integrante';
          a.appendChild(img);
          h4 = document.createElement('h4');
          h4.appendChild(document.createTextNode(cargo));
          div_integrante.appendChild(h4);
          p = document.createElement('p');
          p.appendChild(document.createTextNode('Extensión ' + extension));
          div_integrante.appendChild(p);
          p = document.createElement('p');
          p.appendChild(document.createTextNode('E-mail: ' + correo));
          div_integrante.appendChild(p);
          document.getElementById('integrantes').appendChild(div_integrante);
        }

      }
		}
		xmlhttp.open("GET","files/integrantes.txt",true);
		xmlhttp.send();

	}

function buscarIntegrante(){
  buscar = document.getElementById("buscar-texto").value;
  integrantes = document.getElementsByClassName("nombre-integrante");
  lado = 0;
  for (var i=0;i<integrantes.length;i++){
    if (integrantes[i].firstChild.textContent.toLowerCase().match(buscar.toLowerCase())){
      integrantes[i].parentElement.style.display="block";
    }
    else{
      integrantes[i].parentElement.style.display="none";
    }
  }

}

function cargar_sidebar(){
  sidebar= document.getElementById("sidebar");
  inner = document.createElement("div");
  inner.className="inner";
  sidebar.appendChild(inner);
  menu = document.createElement("nav");
  menu.id = "menu";
  inner.appendChild(menu);
  major = document.createElement("header");
  major.className="major";
  menu.appendChild(major);
  h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Menú"));
  major.appendChild(h2);
  ul = document.createElement("ul");
  li = document.createElement("li");
  a = document.createElement("a");
  a.href="index.html";
  a.appendChild(document.createTextNode("Inicio"));
  li.appendChild(a);
  ul.appendChild(li);
  li = document.createElement("li");
  a = document.createElement("a");
  a.href="nosotros.html";
  a.appendChild(document.createTextNode("Nosotros"));
  li.appendChild(a);
  ul.appendChild(li);
  li = document.createElement("li");
  a = document.createElement("a");
  a.href="proyectos.html";
  a.appendChild(document.createTextNode("Proyectos"));
  li.appendChild(a);
  ul.appendChild(li);
  li = document.createElement("li");
  a = document.createElement("a");
  a.href="servicios.html";
  a.appendChild(document.createTextNode("Servicios"));
  li.appendChild(a);
  ul.appendChild(li);
  li = document.createElement("li");
  a = document.createElement("a");
  a.href="publicaciones.html";
  a.appendChild(document.createTextNode("Publicaciones"));
  li.appendChild(a);
  ul.appendChild(li);
  li = document.createElement("li");
  a = document.createElement("a");
  a.href="contacto.html";
  a.appendChild(document.createTextNode("Contacto"));
  li.appendChild(a);
  ul.appendChild(li);

  menu.appendChild(ul);
  section = document.createElement("section");
  inner.appendChild(section);
  major = document.createElement("header");
  major.className="major";
  section.appendChild(major);
  h2 = document.createElement("h2");
  h2.appendChild(document.createTextNode("Contáctenos"));
  major.appendChild(h2);
  p = document.createElement("p");
  p.appendChild(document.createTextNode("Para mayor información, puede contactase a través de los siguientes medios:"));
  section.appendChild(p);
  contact = document.createElement("ul");
  contact.className="contact";
  section.appendChild(contact);
  li = document.createElement("li");
  li.className="fa-envelope-o";
  a = document.createElement("a");
  a.href="mailto:yandrade@cti.espol.edu.ec";
  a.appendChild(document.createTextNode("yandrade@cti.espol.edu.ec"));
  li.appendChild(a);
  contact.appendChild(li);
  li = document.createElement("li");
  li.className="fa-phone";
  li.appendChild(document.createTextNode("(04) 2269777"));
  contact.appendChild(li);
  li = document.createElement("li");
  li.className="fa-home";
  li.appendChild(document.createTextNode("Km. 30.5 Vía Perimetral ESPOL"));
  contact.appendChild(li);
  footer = document.createElement("footer");
  inner.appendChild(footer);
  p = document.createElement("p");
  p.className="copyright";
  p.appendChild(document.createTextNode("CTI ESPOL © 2017. Todos los derechos reservados. Centro de Tecnologías de Información. Diseño: HTML5 UP"));
  footer.appendChild(p);

}
