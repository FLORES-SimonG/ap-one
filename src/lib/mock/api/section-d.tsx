import { Card } from "@/lib/interfaces/cards";

export const section_D: Card[] = [
  {
    number: "105",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Nenne die Vorteile einer Bedarfsanalyse.",
      difficulty: 2,
      importantWords: [
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Bedarfsanalyse", spanish: "Análisis de necesidades" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Vorteile einer Bedarfsanalyse sind: Der Vertrieb kann Wünsche, Motive und Ziele des Kunden ermitteln. Entscheider und Kundentypen können ermittelt werden. Das Vertrauen des Kunden wird gestärkt. Dem Kunden können individuelle Lösungen angeboten werden. Das Unternehmen hebt sich von der Konkurrenz ab. Umsatz des Unternehmens kann gesteigert werden. Eine langfristige Kundenbindung wird unterstützt.",
      importantWords: [
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Bedarfsanalyse", spanish: "Análisis de necesidades" },
      ],
    },
  },
  {
    number: "106",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Bitte vergleiche BIOS mit UEFI.",
      difficulty: 2,
      importantWords: [
        { german: "BIOS", spanish: "BIOS" },
        { german: "UEFI", spanish: "UEFI" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "UEFI (Unified Extensible Firmware Interface) kann auch von Laufwerken mit 2,2 TB oder mehr booten, tiene una interfaz de usuario gráfica con operación de ratón, admite procesadores de 64 bits de forma nativa de fábrica, los controladores se pueden recargar como un módulo, utiliza el esquema de particionamiento GPT, y puede iniciarse desde contenedores de VM. BIOS (Basic Input Output System) no permite el uso de ratón, solo puede iniciarse desde el Master-Boot-Record, y solo puede arrancar desde unidades de hasta 2 TB.",
      importantWords: [
        { german: "BIOS", spanish: "BIOS" },
        { german: "UEFI", spanish: "UEFI" },
      ],
    },
  },
  {
    number: "107",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Mit welchen Befehlen kann man in einer windowsbasierten IT-Landschaft die Namensauflösung überprüfen?",
      difficulty: 2,
      importantWords: [
        { german: "Befehlen", spanish: "Comandos" },
        { german: "Namensauflösung", spanish: "Resolución de nombres" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Se puede comprobar la resolución de nombres en un entorno de TI basado en Windows con los siguientes comandos: en el Símbolo del Sistema (CMD): ping -a, nslookup, tracert. En PowerShell: Resolve-DnsName.",
      importantWords: [
        { german: "Namensauflösung", spanish: "Resolución de nombres" },
      ],
    },
  },
  {
    number: "108",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Nenne die 4 Features, die verhindern, dass während des Startvorgangs von Windows 10 Schadsoftware wie Rootkits und Bootkits geladen werden können.",
      difficulty: 3,
      importantWords: [
        { german: "Schadsoftware", spanish: "Malware" },
        { german: "Sicherer Start", spanish: "Arranque seguro" },
        { german: "Vertrauenswürdiger Start", spanish: "Arranque de confianza" },
        { german: "Antischadsoftware-Frühstart", spanish: "Arranque temprano de antimalware" },
        { german: "Kontrollierter Start", spanish: "Arranque controlado" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "1. Arranque seguro: Los ordenadores con firmware UEFI y un Módulo de plataforma segura (TPM) pueden configurarse para que solo se carguen los cargadores de arranque del sistema operativo de confianza. 2. Arranque de confianza: Windows comprueba la integridad de cada componente durante el proceso de arranque antes de que se cargue en la memoria. 3. Arranque temprano de antimalware (Early Launch Antimalware, ELAM): Con ELAM, todos los controladores se prueban antes de la carga para evitar que se carguen controladores no certificados o no aprobados con el sistema operativo. 4. Arranque controlado: El firmware del PC registra el proceso de arranque, y Windows puede enviar la información a un servidor de confianza que evalúa objetivamente la integridad del PC.",
      importantWords: [
        { german: "Sicherer Start", spanish: "Arranque seguro" },
        { german: "Vertrauenswürdiger Start", spanish: "Arranque de confianza" },
        { german: "Antischadsoftware-Frühstart", spanish: "Arranque temprano de antimalware" },
        { german: "Kontrollierter Start", spanish: "Arranque controlado" },
      ],
    },
  },
  {
    number: "112",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Nenne die Vorteile des Einsatzes von Thin-Clients.",
      difficulty: 2,
      importantWords: [
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Thin-Clients", spanish: "Thin-Clients" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Las ventajas de usar Thin-Clients incluyen: menor consumo de energía, ordenadores de trabajo silenciosos, poca necesidad de espacio en el lugar de trabajo, fácilmente reemplazables, de uso flexible ya que no se necesita instalar un sistema operativo, poco peso, respetuosos con el medio ambiente gracias a menos material y menos calor residual, y gracias al sistema operativo de solo lectura, no hay oportunidad para virus, gusanos y troyanos.",
      importantWords: [
        { german: "Thin-Clients", spanish: "Thin-Clients" },
      ],
    },
  },
  {
    number: "113",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter einem Pflichtenheft?",
      difficulty: 2,
      importantWords: [
        { german: "Pflichtenheft", spanish: "Pliego de condiciones" },
        { german: "Projektmanagement", spanish: "Gestión de proyectos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "En la gestión de proyectos, el pliego de condiciones (Pflichtenheft) describe de forma detallada cómo el contratista pretende implementar los requisitos del cliente. Se trata del “cómo y con qué” se cumplirá el encargo. El contenido del pliego de condiciones es legalmente vinculante para ambas partes, a menos que ambas partes permitan cambios o adiciones. El contratista no comienza la implementación hasta que el cliente acepta el pliego de condiciones.",
      importantWords: [
        { german: "Pflichtenheft", spanish: "Pliego de condiciones" },
      ],
    },
  },
  {
    number: "114",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was wird in einem Lastenheft beschrieben?",
      difficulty: 2,
      importantWords: [
        { german: "Lastenheft", spanish: "Especificación de requisitos" },
        { german: "Anforderungen", spanish: "Requisitos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Un Lastenheft (en inglés, Requirements Specification o Statement of Work, SoW) describe los requisitos del cliente para un producto o servicio. Constituye la base para el pliego de condiciones. Aquí se describe el “qué” debe cumplir el encargo. El Lastenheft lo elabora el cliente.",
      importantWords: [
        { german: "Lastenheft", spanish: "Especificación de requisitos" },
      ],
    },
  },
  {
    number: "115",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter einem Convertible?",
      difficulty: 2,
      importantWords: [
        { german: "Convertible", spanish: "Convertible" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Un convertible es un portátil que tiene un mecanismo de bisagra, giro, deslizamiento o clic. Los convertibles están especialmente diseñados para la movilidad. Un convertible se puede operar en 2 modos: como portátil o como tablet.",
      importantWords: [
        { german: "Convertible", spanish: "Convertible" },
      ],
    },
  },
  {
    number: "116",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Nenne einige Vor- und Nachteile von Tablets.",
      difficulty: 2,
      importantWords: [
        { german: "Tablets", spanish: "Tablets" },
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Nachteile", spanish: "Desventajas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ventajas: fácil manejo, batería de larga duración, manejo táctil o con lápiz, conexión WLAN o WWAN, ahorra espacio, poco peso. Desventajas: escribir en el teclado virtual es agotador con el tiempo, menor capacidad de almacenamiento en comparación con los portátiles, pocas opciones de conexión, y por lo general no son actualizables.",
      importantWords: [
        { german: "Tablets", spanish: "Tablets" },
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Nachteile", spanish: "Desventajas" },
      ],
    },
  },
  {
    number: "117",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welche Vor- und Nachteile hat ein Notebook?",
      difficulty: 2,
      importantWords: [
        { german: "Notebook", spanish: "Portátil" },
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Nachteile", spanish: "Desventajas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ventajas: se puede actualizar en comparación con una tablet, mejores opciones de conexión, mejor rendimiento. Desventajas: mayor peso, mayor volumen, mayor calor residual.",
      importantWords: [
        { german: "Notebook", spanish: "Portátil" },
      ],
    },
  },
  {
    number: "121",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Ordne die folgenden WWAN-Technologien 5G, UMTS, LTE, HSDPA und Edge nach ihrer Geschwindigkeit.",
      difficulty: 3,
      importantWords: [
        { german: "WWAN-Technologien", spanish: "Tecnologías WWAN" },
        { german: "Geschwindigkeit", spanish: "Velocidad" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Las tecnologías WWAN ordenadas por velocidad de descarga máxima son: 1. 5G (10000 Mbit/s) 2. LTE (100 Mbit/s) 3. HSDPA (1 Mbit/s) 4. UMTS (1 Mbit/s) 5. Edge (0,01 Mbit/s).",
      importantWords: [
        { german: "WWAN-Technologien", spanish: "Tecnologías WWAN" },
      ],
    },
  },
  {
    number: "122",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Worauf sollte man bei der Beschaffung von IT-Hardware achten?",
      difficulty: 2,
      importantWords: [
        { german: "Beschaffung", spanish: "Adquisición" },
        { german: "IT-Hardware", spanish: "Hardware de TI" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Los criterios a tener en cuenta al adquirir hardware son: durabilidad del hardware (mínimo 5 años de soporte del fabricante), escalabilidad basada en el hardware existente, soporte asequible, bajo consumo de energía y poco calor residual, producto respetuoso con el medio ambiente, gestión remota, fácilmente reemplazable y rápida adquisición de reemplazos.",
      importantWords: [
        { german: "Beschaffung", spanish: "Adquisición" },
      ],
    },
  },
  {
    number: "123",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter Standardsoftware?",
      difficulty: 2,
      importantWords: [
        { german: "Standardsoftware", spanish: "Software estándar" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Se denomina software estándar al software que tiene un conjunto de funciones definido y está diseñado para un amplio grupo de usuarios. El software estándar puede ser adaptado por el cliente utilizando solo los módulos que necesita.",
      importantWords: [
        { german: "Standardsoftware", spanish: "Software estándar" },
      ],
    },
  },
  {
    number: "124",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter Individualsoftware?",
      difficulty: 2,
      importantWords: [
        { german: "Individualsoftware", spanish: "Software a medida" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "El software a medida se refiere al software que debe cumplir con ciertos requisitos de hardware o de negocio individuales, es decir, que ha sido fabricado para un usuario específico y/o un propósito especializado.",
      importantWords: [
        { german: "Individualsoftware", spanish: "Software a medida" },
      ],
    },
  },
  {
    number: "125",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man in der Anwendungsentwicklung unter dem Begriff IDE?",
      difficulty: 2,
      importantWords: [
        { german: "IDE", spanish: "IDE" },
        { german: "Anwendungsentwicklung", spanish: "Desarrollo de aplicaciones" },
        { german: "integrierte Entwicklungsumgebung", spanish: "Entorno de desarrollo integrado" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Un IDE (integrated development environment), o entorno de desarrollo integrado, es una colección de las herramientas más importantes para el desarrollo de software bajo una interfaz de usuario unificada. Su objetivo es facilitar el trabajo del desarrollador de aplicaciones. Las herramientas más importantes incluyen, por ejemplo, el compilador, depurador, intérprete, el editor con formato de código fuente y resaltado de sintaxis, enlazador, herramientas para crear interfaces gráficas de usuario, gestión de versiones y mucho más.",
      importantWords: [
        { german: "IDE", spanish: "IDE" },
      ],
    },
  },
  {
    number: "131",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter Skalierbarkeit?",
      difficulty: 2,
      importantWords: [
        { german: "Skalierbarkeit", spanish: "Escalabilidad" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "La escalabilidad se refiere a la capacidad de un hardware o software para seguir funcionando sin problemas mientras se cambia su tamaño, número o volumen. Esta escalabilidad sirve para mantener un funcionamiento 24/7 para el cliente. Como ejemplos se pueden mencionar la adaptación de volumen en los sistemas de almacenamiento o los ajustes en el número de núcleos de CPU o la memoria de una máquina virtual.",
      importantWords: [
        { german: "Skalierbarkeit", spanish: "Escalabilidad" },
      ],
    },
  },
  {
    number: "132",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was beschreibt eine EULA (engl. End User License Agreement) während des Installationsprozesses von Software?",
      difficulty: 2,
      importantWords: [
        { german: "EULA", spanish: "EULA" },
        { german: "End User License Agreement", spanish: "Acuerdo de licencia de usuario final" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "EULA significa 'Endbenutzer-Lizenzvereinbarung' (Acuerdo de Licencia de Usuario Final en inglés). Describe los términos bajo los cuales el software puede ser utilizado por el usuario final.",
      importantWords: [
        { german: "EULA", spanish: "EULA" },
      ],
    },
  },
  {
    number: "133",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter Cloud Bursting?",
      difficulty: 3,
      importantWords: [
        { german: "Cloud Bursting", spanish: "Cloud Bursting" },
        { german: "Private Cloud", spanish: "Nube privada" },
        { german: "Public Cloud", spanish: "Nube pública" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "El Cloud Bursting se refiere a la expansión a corto plazo de una nube privada a través de una nube pública. Se utiliza cuando la infraestructura propia (nube privada) no es capaz de manejar una carga temporalmente alta, y la carga excedente se compensa a corto plazo con una nube pública de un proveedor de servicios en la nube. La utilización de los recursos se factura por horas o minutos, según el tiempo de uso.",
      importantWords: [
        { german: "Cloud Bursting", spanish: "Cloud Bursting" },
      ],
    },
  },
  {
    number: "134",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Mit welchen Maßnahmen kann eine drahtlose Netzwerkverbindung (WLAN/WiFi) abgesichert werden?",
      difficulty: 2,
      importantWords: [
        { german: "drahtlose Netzwerkverbindung", spanish: "Conexión de red inalámbrica" },
        { german: "WLAN/WiFi", spanish: "WLAN/WiFi" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Una conexión WLAN puede asegurarse con las siguientes medidas: uso de métodos de autenticación como WPA2/WPA3, uso de un servidor RADIUS, activación de filtros Mac con una lista blanca, uso de un certificado de cliente y uso de conexiones VPN.",
      importantWords: [
        { german: "drahtlose Netzwerkverbindung", spanish: "Conexión de red inalámbrica" },
      ],
    },
  },
  {
    number: "135",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welche 3 VPN Verbindungsarten gibt es?",
      difficulty: 2,
      importantWords: [
        { german: "VPN Verbindungsarten", spanish: "Tipos de conexión VPN" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Existen 3 tipos de conexión VPN: 1. End-to-Site-VPN (también conocido como Host-to-LAN-VPN, Host-to-Gateway-VPN o Remote-Access-VPN). 2. Site-to-Site-VPN (también conocido como LAN-to-LAN-VPN o Gateway-to-Gateway-VPN). 3. End-to-End-VPN (también conocido como Host-to-Host-VPN o Remote-Desktop-VPN).",
      importantWords: [
        { german: "VPN Verbindungsarten", spanish: "Tipos de conexión VPN" },
      ],
    },
  },
];