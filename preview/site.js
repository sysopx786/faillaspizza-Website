(function () {
  const KEY = "faillas-lang";
  const ORDER = ["en", "es", "pt"];
  const NAME = { en: "English", es: "Espa\u00f1ol", pt: "Portugu\u00eas" };
  const IMG = "https://cdn.jsdelivr.net/gh/sysopx786/faillaspizza-Website@feat/trilingual-switcher/public/images/";
  const LINKS = {
    order: "https://onlineordering.cmpmobile.com/menu/faillas_pizzeria",
    doorDash: "https://www.doordash.com/store/failla%E2%80%99s-pizzeria-&-ristorante-phoenixville-27685451",
    uber: "https://www.ubereats.com/store/faillas-pizzeria-&-ristorante/oOpedRcJUCingV0Udi2bmw",
    phone: "tel:+16102552828",
    maps: "https://maps.app.goo.gl/NchGPaKP2GC58EqC8",
    pdf: "https://onlineorderingmadeeasy.com/wp-content/uploads/2025/08/Faillas-Menu-2025.07.pdf",
    apply: "https://cmpmobile.formstack.com/forms/faillas_pizzeria_employment"
  };
  const PAGES = [
    { id: "home", href: "index.html", key: "navHome" },
    { id: "menu", href: "menu.html", key: "navMenu" },
    { id: "about", href: "about.html", key: "navAbout" },
    { id: "catering", href: "catering.html", key: "navCatering" },
    { id: "gallery", href: "gallery.html", key: "navGallery" },
    { id: "contact", href: "contact.html", key: "navContact" },
    { id: "jobs", href: "jobs.html", key: "navJobs" }
  ];
  const FLAG = {
    en: '<svg class="flag" viewBox="0 0 19 10"><rect width="19" height="10" fill="#bf0a30"/><rect y="1.1" width="19" height="1.1" fill="#fff"/><rect y="3.3" width="19" height="1.1" fill="#fff"/><rect y="5.5" width="19" height="1.1" fill="#fff"/><rect y="7.7" width="19" height="1.1" fill="#fff"/><rect width="7.6" height="5.4" fill="#002868"/></svg>',
    es: '<svg class="flag" viewBox="0 0 9 6"><rect width="9" height="6" fill="#c60b1e"/><rect y="1.5" width="9" height="3" fill="#ffc400"/></svg>',
    pt: '<svg class="flag" viewBox="0 0 20 14"><rect width="20" height="14" fill="#009b3a"/><polygon points="10,1.4 18.6,7 10,12.6 1.4,7" fill="#fedf00"/><circle cx="10" cy="7" r="2.5" fill="#002776"/></svg>'
  };
  const copy = {
    en: { skip:"Skip to content", openMenu:"Open menu", closeMenu:"Close menu", hiringBanner:"We're hiring \u2014 join the Failla's team.", hiringCta:"See open roles", navHome:"Home", navMenu:"Menu", navAbout:"About", navCatering:"Catering", navGallery:"Gallery", navContact:"Contact", navJobs:"Jobs", orderOnline:"Order Online", call:"Call", viewMenu:"View menu", pickupFastest:"Pickup orders are fastest by phone.", homeKicker:"Phoenixville, Pennsylvania", homeTitle1:"Home of the", homeLead:"Family-owned Sicilian cooking \u2014 pan-baked pies, red-sauce classics, steaks, and salads. Walk in, call ahead, or order online.", byobPatio:"BYOB \u00b7 patio", dineTakeDeliver:"Dine-in, takeout, delivery", cateringVanLine:"Catering van, tent & food trailer", regularsKicker:"What people come back for", regularsTitle:"The regulars' order", fullMenu:"Full menu", cardGrandma:"Grandma Pie", cardGrandmaText:"Crisp pan, fresh mozzarella, sauce the owner still crushes by hand.", cardFailla:"Failladelphia", cardFaillaText:"Ribeye, Cooper Sharp, smoked mozzarella, sesame crust. Steak or stromboli.", cardPasta:"Pasta & Parm", cardPastaText:"Rosa shrimp, eggplant rollatini, chicken parm \u2014 the ristorante half of the sign.", cardSalads:"Salads", cardSaladsText:"Burrata, caprese, house Italian. Fresh, not an afterthought.", aboutKicker:"Our story", aboutTitle:"Sicily in the recipes. Phoenixville in the dining room.", aboutP1:"Failla's Pizzeria & Ristorante is a family-owned kitchen on Charlestown Road, in the old Stables Bar building. The cooking comes from Sicily \u2014 the largest island in the Mediterranean, and the place generations of the family learned to feed people.", aboutP2:"We opened this room to do two things well: a serious Grandma pie, and the rest of an Italian menu that doesn't phone it in. Sauce is made here. The plum tomatoes on the Grandma are still crushed by hand in the back. Gelato is made by the family. Portions are the size your grandmother would call correct.", aboutP3:"The dining room is small, bright, and busy with takeout. That's the point. Walk in. Bring wine \u2014 we're BYOB. Sit on the patio with the dog if the weather's decent. Friday nights the Grandma pies go out in stacks. If you want one, order a little early.", aboutP4:"We cook for this town: school dinners, weekend pies, the cheesesteak that is not a side note. If you grew up on this kind of food, you already know the taste. If you didn't, start with the Grandma.", menuKicker:"Dine-in \u00b7 Takeout \u00b7 Catering", menuTitle:"Menu", menuLead:"Grandma pie first. Then everything else a neighborhood Italian kitchen should do. Prices from our July 2025 menu.", pdfMenu:"PDF menu", menuDisclaimer:"Prices from our July 2025 dine-in menu and may change. Download the PDF or order online for the latest. All cash purchases receive a 3.99% discount.", catCateringKicker:"Parties \u00b7 Schools \u00b7 Offices", catTitle:"Catering, tent & trailer", catLead:"Grandma pies by the box, trays of pasta, and a crew that already does school dinners and weekend events. Call the shop \u2014 we'll size it.", sendNote:"Send a note", vanTitle:"Delivery van", vanText:"Hot food to the house, office, or field. Same kitchen, same Grandma pie.", tentTitle:"Vendor tent", tentText:"We set up at town events and private parties. Portable ovens and a generator if you need us on-site.", trailerTitle:"Food trailer", trailerText:"Full kitchen and pizza ovens on wheels \u2014 for bigger parties and festivals.", send1:"Grandma pies \u2014 the move for any crowd", send2:"Tray pasta, parm, salads, and Stromboli", send3:"School and office dinners", send4:"On-site service with the tent or trailer", galleryKicker:"From the kitchen", galleryTitle:"Gallery", galleryLead:"Real plates from Failla's \u2014 Grandma pies, salads, pasta, the dining room, the van, the night sign.", findUs:"Find us", contactTitle:"Contact", contactLead:"Fastest: call. Walk-ins welcome \u2014 we don't take reservations.", dineTakeCater:"Dine-in, takeout, catering", cornerOf:"Corner of Charlestown & Coldstream", hoursTitle:"Hours", monThu:"Monday \u2013 Thursday", friSat:"Friday \u2013 Saturday", sun:"Sunday", closed:"Closed", labelName:"Name", labelPhone:"Phone", labelEmail:"Email", labelMessage:"Message", submit:"Submit", sendNoteLead:"Catering, a question, a Friday Grandma pie for 20 \u2014 drop it here. Call if you need us the same hour.", jobsKicker:"Careers", jobsTitle:"Work at Failla's", jobsLead:"We're looking for people who like a busy kitchen, a full dining room on Friday, and food they'd eat themselves. Apply online \u2014 or walk in and ask for a manager.", jobFoh:"Front of house & takeout", jobKitchen:"Kitchen", jobDelivery:"Delivery", applyNow:"Apply now", footerBlurb:"Family-owned. Sicilian recipes. Phoenixville's Grandma pie \u2014 plus pasta, steaks, salads, and catering that shows up.", visit:"Visit", explore:"Explore" },
    es: { skip:"Saltar al contenido", openMenu:"Abrir men\u00fa", closeMenu:"Cerrar men\u00fa", hiringBanner:"Estamos contratando \u2014 \u00fanete al equipo de Failla's.", hiringCta:"Ver puestos", navHome:"Inicio", navMenu:"Men\u00fa", navAbout:"Nosotros", navCatering:"Catering", navGallery:"Galer\u00eda", navContact:"Contacto", navJobs:"Empleo", orderOnline:"Pedir en l\u00ednea", call:"Llamar", viewMenu:"Ver men\u00fa", pickupFastest:"Para recoger, lo m\u00e1s r\u00e1pido es llamar.", homeKicker:"Phoenixville, Pennsylvania", homeTitle1:"Casa de la", homeLead:"Cocina siciliana de familia \u2014 pizzas al molde, cl\u00e1sicos de salsa roja, steaks y ensaladas. Entre, llame o pida en l\u00ednea.", byobPatio:"BYOB \u00b7 patio", dineTakeDeliver:"Comer aqu\u00ed, para llevar, delivery", cateringVanLine:"Van de catering, carpa y food trailer", regularsKicker:"Por lo que vuelven", regularsTitle:"El pedido de siempre", fullMenu:"Men\u00fa completo", cardGrandma:"Grandma Pie", cardGrandmaText:"Molde crocante, mozzarella fresca, salsa que el due\u00f1o todav\u00eda aplasta a mano.", cardFailla:"Failladelphia", cardFaillaText:"Ribeye, Cooper Sharp, mozzarella ahumada, masa con s\u00e9samo. Steak o stromboli.", cardPasta:"Pasta & Parm", cardPastaText:"Camarones Rosa, eggplant rollatini, chicken parm \u2014 la mitad ristorante del letrero.", cardSalads:"Ensaladas", cardSaladsText:"Burrata, caprese, italiana de la casa. Frescas, no de relleno.", aboutKicker:"Nuestra historia", aboutTitle:"Sicilia en las recetas. Phoenixville en el comedor.", aboutP1:"Failla's Pizzeria & Ristorante es una cocina de familia en Charlestown Road, en el viejo edificio de Stables Bar. La cocina viene de Sicilia \u2014 la isla m\u00e1s grande del Mediterr\u00e1neo, y el lugar donde generaciones de la familia aprendieron a dar de comer.", aboutP2:"Abrimos este sal\u00f3n para hacer bien dos cosas: una Grandma pie de verdad, y el resto de un men\u00fa italiano que no se duerme. La salsa se hace aqu\u00ed. Los plum tomatoes de la Grandma todav\u00eda se aplastan a mano atr\u00e1s. El gelato lo hace la familia. Las porciones son del tama\u00f1o que tu abuela llamar\u00eda correcto.", aboutP3:"El comedor es chico, claro y lleno de takeout. Esa es la idea. Entra. Trae vino \u2014 somos BYOB. Si\u00e9ntate en el patio con el perro si el clima ayuda. Los viernes las Grandma salen en pilas. Si quieres una, pide un poco antes.", aboutP4:"Cocinamos para este pueblo: cenas de escuela, pizzas de fin de semana, el cheesesteak que no es un aparte. Si creciste con esta comida, ya conoces el sabor. Si no, empieza con la Grandma.", menuKicker:"Comer aqu\u00ed \u00b7 Para llevar \u00b7 Catering", menuTitle:"Men\u00fa", menuLead:"Primero la Grandma pie. Despu\u00e9s todo lo que debe hacer una cocina italiana de barrio. Precios del men\u00fa de julio 2025.", pdfMenu:"Men\u00fa PDF", menuDisclaimer:"Precios del men\u00fa de sal\u00f3n de julio 2025 y pueden cambiar. Baja el PDF o pide en l\u00ednea para lo actual. Todas las compras en efectivo reciben 3.99% de descuento.", catCateringKicker:"Fiestas \u00b7 Escuelas \u00b7 Oficinas", catTitle:"Catering, carpa y trailer", catLead:"Grandma pies por caja, bandejas de pasta y un equipo que ya hace cenas escolares y eventos de fin de semana. Llama al local \u2014 lo dimensionamos.", sendNote:"Enviar un recado", vanTitle:"Van de delivery", vanText:"Comida caliente a la casa, oficina o cancha. La misma cocina, la misma Grandma pie.", tentTitle:"Carpa de eventos", tentText:"Montamos en fiestas del pueblo y privadas. Hornos port\u00e1tiles y generador si nos necesitas en el sitio.", trailerTitle:"Food trailer", trailerText:"Cocina completa y hornos de pizza sobre ruedas \u2014 para fiestas grandes y festivales.", send1:"Grandma pies \u2014 lo que pega en cualquier grupo", send2:"Bandejas de pasta, parm, ensaladas y Stromboli", send3:"Cenas de escuela y oficina", send4:"Servicio en el sitio con la carpa o el trailer", galleryKicker:"De la cocina", galleryTitle:"Galer\u00eda", galleryLead:"Platos de verdad de Failla's \u2014 Grandma pies, ensaladas, pasta, el comedor, la van, el letrero de noche.", findUs:"Encueacutenos", contactTitle:"Contacto", contactLead:"Lo m\u00e1s r\u00e1pido: llama. Walk-ins bienvenidos \u2014 no tomamos reservas.", dineTakeCater:"Comer aqu\u00ed, para llevar, catering", cornerOf:"Esquina de Charlestown y Coldstream", hoursTitle:"Horario", monThu:"Lunes \u2013 Jueves", friSat:"Viernes \u2013 S\u00e1bado", sun:"Domingo", closed:"Cerrado", labelName:"Nombre", labelPhone:"Tel\u00e9fono", labelEmail:"Correo", labelMessage:"Mensaje", submit:"Enviar", sendNoteLead:"Catering, una pregunta, una Grandma del viernes para 20 \u2014 d\u00e9jalo aqu\u00ed. Llama si nos necesitas en la misma hora.", jobsKicker:"Empleo", jobsTitle:"Trabaja en Failla's", jobsLead:"Buscamos gente a la que le guste una cocina ajetreada, un comedor lleno el viernes y comida que se comer\u00edan ellos. Aplica en l\u00ednea \u2014 o entra y pide un manager.", jobFoh:"Sal\u00f3n y para llevar", jobKitchen:"Cocina", jobDelivery:"Delivery", applyNow:"Aplicar ahora", footerBlurb:"De familia. Recetas sicilianas. El Grandma pie de Phoenixville \u2014 m\u00e1s pasta, steaks, ensaladas y catering que llega.", visit:"Vis\u00edtanos", explore:"Explorar" },
    pt: { skip:"Pular para o conte\u00fado", openMenu:"Abrir menu", closeMenu:"Fechar menu", hiringBanner:"Estamos contratando \u2014 entre para o time da Failla's.", hiringCta:"Ver vagas", navHome:"In\u00edcio", navMenu:"Card\u00e1pio", navAbout:"Sobre", navCatering:"Catering", navGallery:"Galeria", navContact:"Contato", navJobs:"Vagas", orderOnline:"Pedir online", call:"Ligar", viewMenu:"Ver card\u00e1pio", pickupFastest:"Para retirar, o mais r\u00e1pido \u00e9 ligar.", homeKicker:"Phoenixville, Pennsylvania", homeTitle1:"Casa da", homeLead:"Comida siciliana de fam\u00edlia \u2014 pizzas na assadeira, cl\u00e1ssicos de molho vermelho, steaks e saladas. Entre, ligue ou pe\u00e7a online.", byobPatio:"BYOB \u00b7 p\u00e1tio", dineTakeDeliver:"Sal\u00e3o, para viagem, delivery", cateringVanLine:"Van de catering, tenda e food trailer", regularsKicker:"O que faz o pessoal voltar", regularsTitle:"O pedido dos regulares", fullMenu:"Card\u00e1pio completo", cardGrandma:"Grandma Pie", cardGrandmaText:"Assadeira crocante, mozzarella fresca, molho que o dono ainda amassa na m\u00e3o.", cardFailla:"Failladelphia", cardFaillaText:"Ribeye, Cooper Sharp, mozzarella defumada, massa com gergelim. Steak ou stromboli.", cardPasta:"Pasta & Parm", cardPastaText:"Camar\u00e3o Rosa, eggplant rollatini, chicken parm \u2014 o lado ristorante da placa.", cardSalads:"Saladas", cardSaladsText:"Burrata, caprese, italiana da casa. Frescas, n\u00e3o de encher lingui\u00e7a.", aboutKicker:"Nossa hist\u00f3ria", aboutTitle:"Sic\u00edlia nas receitas. Phoenixville na sala.", aboutP1:"Failla's Pizzeria & Ristorante \u00e9 uma cozinha de fam\u00edlia na Charlestown Road, no antigo pr\u00e9dio do Stables Bar. A comida vem da Sic\u00edlia \u2014 a maior ilha do Mediterr\u00e2neo, e o lugar onde gera\u00e7\u00f5es da fam\u00edlia aprenderam a alimentar gente.", aboutP2:"Abrimos esta sala para fazer bem duas coisas: uma Grandma pie de verdade, e o resto de um card\u00e1pio italiano que n\u00e3o enrola. O molho \u00e9 feito aqui. Os plum tomatoes da Grandma ainda s\u00e3o amassados na m\u00e3o no fundo. O gelato a fam\u00edlia faz. As por\u00e7\u00f5es s\u00e3o do tamanho que a sua av\u00f3 chamaria de certo.", aboutP3:"A sala \u00e9 pequena, clara e cheia de para viagem. Esse \u00e9 o ponto. Entre. Traga vinho \u2014 somos BYOB. Sente no p\u00e1tio com o cachorro se o tempo ajudar. Nas sextas as Grandma saem em pilha. Se quiser uma, pe\u00e7a um pouco antes.", aboutP4:"Cozinhamos para esta cidade: jantares de escola, pizzas de fim de semana, o cheesesteak que n\u00e3o \u00e9 nota de rodap\u00e9. Se voc\u00ea cresceu com essa comida, j\u00e1 conhece o gosto. Se n\u00e3o, comece pela Grandma.", menuKicker:"Sal\u00e3o \u00b7 Para viagem \u00b7 Catering", menuTitle:"Card\u00e1pio", menuLead:"Primeiro a Grandma pie. Depois tudo o que uma cozinha italiana de bairro deve fazer. Pre\u00e7os do card\u00e1pio de julho 2025.", pdfMenu:"Card\u00e1pio PDF", menuDisclaimer:"Pre\u00e7os do card\u00e1pio de sal\u00e3o de julho 2025 e podem mudar. Baixe o PDF ou pe\u00e7a online para o atual. Compras em dinheiro ganham 3.99% de desconto.", catCateringKicker:"Festas \u00b7 Escolas \u00b7 Escrit\u00f3rios", catTitle:"Catering, tenda e trailer", catLead:"Grandma pies por caixa, bandejas de massa e uma equipe que j\u00e1 faz jantares escolares e eventos de fim de semana. Ligue para a loja \u2014 a gente dimensiona.", sendNote:"Enviar recado", vanTitle:"Van de delivery", vanText:"Comida quente na casa, no escrit\u00f3rio ou no campo. A mesma cozinha, a mesma Grandma pie.", tentTitle:"Tenda de eventos", tentText:"Montamos em festas da cidade e particulares. Fornos port\u00e1teis e gerador se precisar da gente no local.", trailerTitle:"Food trailer", trailerText:"Cozinha completa e fornos de pizza sobre rodas \u2014 para festas grandes e festivais.", send1:"Grandma pies \u2014 o pedido que funciona em qualquer grupo", send2:"Bandejas de massa, parm, saladas e Stromboli", send3:"Jantares de escola e escrit\u00f3rio", send4:"Servi\u00e7o no local com a tenda ou o trailer", galleryKicker:"Da cozinha", galleryTitle:"Galeria", galleryLead:"Pratos de verdade da Failla's \u2014 Grandma pies, saladas, massa, a sala, a van, a placa \u00e0 noite.", findUs:"Encontre a gente", contactTitle:"Contato", contactLead:"Mais r\u00e1pido: ligue. Walk-ins bem-vindos \u2014 n\u00e3o fazemos reserva.", dineTakeCater:"Sal\u00e3o, para viagem, catering", cornerOf:"Esquina de Charlestown e Coldstream", hoursTitle:"Hor\u00e1rio", monThu:"Segunda \u2013 Quinta", friSat:"Sexta \u2013 S\u00e1bado", sun:"Domingo", closed:"Fechado", labelName:"Nome", labelPhone:"Telefone", labelEmail:"E-mail", labelMessage:"Mensagem", submit:"Enviar", sendNoteLead:"Catering, uma pergunta, uma Grandma de sexta para 20 \u2014 deixa aqui. Ligue se precisar na mesma hora.", jobsKicker:"Carreira", jobsTitle:"Trabalhe na Failla's", jobsLead:"Procuramos gente que gosta de cozinha cheia, sala lotada na sexta e comida que comeria. Candidate-se online \u2014 ou entre e pe\u00e7a o gerente.", jobFoh:"Sal\u00e3o e para viagem", jobKitchen:"Cozinha", jobDelivery:"Delivery", applyNow:"Candidatar-se", footerBlurb:"De fam\u00edlia. Receitas sicilianas. A Grandma pie de Phoenixville \u2014 mais massa, steaks, saladas e catering que aparece.", visit:"Visite", explore:"Explorar" }
  };
  const page = document.body.getAttribute("data-page") || "home";
  function readLang() { try { const s = localStorage.getItem(KEY); if (ORDER.indexOf(s) >= 0) return s; } catch (e) {} return "en"; }
  function saveLang(lang) { try { localStorage.setItem(KEY, lang); } catch (e) {} try { document.cookie = KEY + "=" + lang + ";path=/;max-age=31536000;samesite=lax"; } catch (e) {} }
  function navHtml() {
    return PAGES.map(function (p) {
      return '<a href="' + p.href + '" data-i="' + p.key + '" class="' + (p.id === page ? "is-active" : "") + '"></a>';
    }).join("");
  }
  function chipButtons(lang) {
    return ORDER.filter(function (l) { return l !== lang; }).map(function (option) {
      return '<button type="button" data-set-lang="' + option + '" aria-label="' + NAME[option] + '">' + FLAG[option] + '<span>' + NAME[option] + '</span></button>';
    }).join("");
  }
  function burgerSvg(open) {
    if (open) return '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    return '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  }
  function mountChrome() {
    var root = document.getElementById("site-chrome");
    if (!root) return;
    root.innerHTML =
      '<a class="skip" href="#content" data-i="skip"></a>' +
      '<div class="banner"><div class="banner-inner"><span data-i="hiringBanner"></span><a href="jobs.html" data-i="hiringCta"></a></div></div>' +
      '<header class="site">' +
        '<div class="bar">' +
          '<a class="logo" href="index.html"><img src="' + IMG + 'logo.jpg" alt="Failla\'s" /><span><span class="brand">Failla\'s</span><span class="sub">Pizzeria & Ristorante</span></span></a>' +
          '<nav class="desktop-nav">' + navHtml() + '</nav>' +
          '<div class="header-tools">' +
            '<div class="chip header-chip" id="chip-header" role="group" aria-label="Language"></div>' +
            '<button class="burger" id="burger" type="button" aria-expanded="false" aria-controls="drawer">' + burgerSvg(false) + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="drawer" id="drawer"><nav>' + navHtml() + '<a class="call-line" href="' + LINKS.phone + '"><span data-i="call"></span> 610-255-2828</a></nav><div class="chip" id="chip-drawer" role="group" aria-label="Language"></div></div>' +
        '<div class="actions"><div class="actions-inner">' +
          '<a class="btn btn-tomato" href="' + LINKS.order + '" target="_blank" rel="noreferrer" data-i="orderOnline"></a>' +
          '<a class="btn btn-ghost" href="' + LINKS.doorDash + '" target="_blank" rel="noreferrer">DoorDash</a>' +
          '<a class="btn btn-ghost" href="' + LINKS.uber + '" target="_blank" rel="noreferrer">Uber Eats</a>' +
          '<a class="call-fab" href="' + LINKS.phone + '" aria-label="Call 610-255-2828"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M3.5 4.5c1 4 4 7 8 8l2-2 .5-.5 3 1.2v3.3A1.5 1.5 0 0 1 15.5 16C8.6 16 3 10.4 3 3.5A1.5 1.5 0 0 1 4.5 2h3.3l1.2 3L8.5 5.5 6.5 7.5"/></svg></a>' +
        '</div></div>' +
      '</header>';
    var foot = document.getElementById("site-footer");
    if (foot) {
      foot.innerHTML = '<footer class="site"><div class="goldline"></div><div class="foot"><div><div class="brand" style="font-size:2rem">Failla\'s</div><span class="sub">Pizzeria & Ristorante</span><p class="cream-muted" style="margin-top:1rem;max-width:28rem" data-i="footerBlurb"></p></div><div><p class="kicker" data-i="explore"></p><nav>' + navHtml() + '</nav></div><div><p class="kicker" data-i="visit"></p><p>2669 Charlestown Rd<br>Phoenixville, PA 19460</p><p><a href="' + LINKS.phone + '">610-255-2828</a></p></div></div><div class="copy">\u00a9 2026 Failla\'s Pizzeria & Ristorante \u00b7 Phoenixville, PA \u00b7 BYOB</div></footer>';
    }
    var burger = document.getElementById("burger");
    var drawer = document.getElementById("drawer");
    burger.addEventListener("click", function () {
      var open = !drawer.classList.contains("open");
      drawer.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? copy[readLang()].closeMenu : copy[readLang()].openMenu);
      burger.innerHTML = burgerSvg(open);
    });
  }
  function fillChips(lang) {
    ["chip-header", "chip-drawer"].forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = chipButtons(lang);
      el.querySelectorAll("[data-set-lang]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var next = btn.getAttribute("data-set-lang");
          saveLang(next);
          apply(next);
        });
      });
    });
  }
  function apply(lang) {
    var t = copy[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.querySelectorAll("[data-i]").forEach(function (el) {
      var key = el.getAttribute("data-i");
      if (t[key]) el.textContent = t[key];
    });
    var burger = document.getElementById("burger");
    var drawer = document.getElementById("drawer");
    if (burger) {
      var open = drawer && drawer.classList.contains("open");
      burger.setAttribute("aria-label", open ? t.closeMenu : t.openMenu);
    }
    fillChips(lang);
  }
  mountChrome();
  apply(readLang());
})();
