import { Card } from "@/lib/interfaces/cards";

export const sectionD: Card[] = [
  {
    number: "105",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Nenne die Vorteile einer Bedarfsanalyse.",
      textToSpanish: "Nombra las ventajas de un análisis de necesidades.",
      difficulty: 2,
      importantWords: [
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Bedarfsanalyse", spanish: "Análisis de necesidades" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Vorteile einer Bedarfsanalyse sind: Der Vertrieb kann Wünsche, Motive und Ziele des Kunden ermitteln. Entscheider und Kundentypen können ermittelt werden. Das Vertrauen des Kunden wird gestärkt. Dem Kunden können individuelle Lösungen angeboten werden. Das Unternehmen hebt sich von der Konkurrenz ab. Umsatz des Unternehmens kann gesteigert werden. Eine langfristige Kundenbindung wird unterstützt.",
      textToSpanish:
        "Las ventajas de un análisis de necesidades son: el área de ventas puede identificar deseos, motivos y objetivos del cliente; se pueden identificar los responsables de decisión y tipos de clientes; se fortalece la confianza del cliente; se pueden ofrecer soluciones personalizadas; la empresa se diferencia de la competencia; se puede aumentar la facturación y se fomenta la fidelización a largo plazo.",
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
      textToSpanish: "Compara BIOS con UEFI.",
      difficulty: 2,
      importantWords: [
        { german: "BIOS", spanish: "BIOS" },
        { german: "UEFI", spanish: "UEFI" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "UEFI (Unified Extensible Firmware Interface) kann auch von Laufwerken mit 2,2 TB oder mehr booten, tiene una interfaz de usuario gráfica con operación de ratón, admite procesadores de 64 bits de forma nativa de fábrica, los controladores se pueden recargar como un módulo, utiliza el esquema de particionamiento GPT, y puede iniciarse desde contenedores de VM. BIOS (Basic Input Output System) no permite el uso de ratón, solo puede iniciarse desde el Master-Boot-Record, y solo puede arrancar desde unidades de hasta 2 TB.",
      textToSpanish:
        "UEFI puede arrancar desde discos de 2,2 TB o más, tiene interfaz gráfica y soporte de ratón, soporta procesadores de 64 bits de forma nativa, los controladores pueden recargarse como módulos, usa particionado GPT y puede arrancar desde contenedores de VM. BIOS no permite ratón, solo arranca desde MBR y solo soporta discos de hasta 2 TB.",
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
      textToSpanish:
        "¿Con qué comandos se puede comprobar la resolución de nombres en un entorno Windows?",
      difficulty: 2,
      importantWords: [
        { german: "Befehlen", spanish: "Comandos" },
        { german: "Namensauflösung", spanish: "Resolución de nombres" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Se puede comprobar la resolución de nombres en un entorno de TI basado en Windows con los siguientes comandos: en el Símbolo del Sistema (CMD): ping -a, nslookup, tracert. En PowerShell: Resolve-DnsName.",
      textToSpanish:
        "Se puede comprobar la resolución de nombres en Windows con los comandos: ping -a, nslookup, tracert en CMD y Resolve-DnsName en PowerShell.",
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
      textToSpanish:
        "Nombra las 4 funciones que evitan que durante el arranque de Windows 10 se cargue malware como rootkits y bootkits.",
      difficulty: 3,
      importantWords: [
        { german: "Schadsoftware", spanish: "Malware" },
        { german: "Sicherer Start", spanish: "Arranque seguro" },
        {
          german: "Vertrauenswürdiger Start",
          spanish: "Arranque de confianza",
        },
        {
          german: "Antischadsoftware-Frühstart",
          spanish: "Arranque temprano de antimalware",
        },
        { german: "Kontrollierter Start", spanish: "Arranque controlado" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "1. Arranque seguro: Los ordenadores con firmware UEFI y un Módulo de plataforma segura (TPM) pueden configurarse para que solo se carguen los cargadores de arranque del sistema operativo de confianza. 2. Arranque de confianza: Windows comprueba la integridad de cada componente durante el proceso de arranque antes de que se cargue en la memoria. 3. Arranque temprano de antimalware (Early Launch Antimalware, ELAM): Con ELAM, todos los controladores se prueban antes de la carga para evitar que se carguen controladores no certificados o no aprobados con el sistema operativo. 4. Arranque controlado: El firmware del PC registra el proceso de arranque, y Windows puede enviar la información a un servidor de confianza que evalúa objetivamente la integridad del PC.",
      textToSpanish:
        "1. Arranque seguro: solo se cargan cargadores de arranque de confianza. 2. Arranque de confianza: Windows verifica la integridad de cada componente antes de cargarlo. 3. Arranque temprano de antimalware (ELAM): los controladores se validan antes de cargarse. 4. Arranque controlado: el firmware registra el arranque y Windows puede enviar la información a un servidor de confianza.",
      importantWords: [
        { german: "Sicherer Start", spanish: "Arranque seguro" },
        {
          german: "Vertrauenswürdiger Start",
          spanish: "Arranque de confianza",
        },
        {
          german: "Antischadsoftware-Frühstart",
          spanish: "Arranque temprano de antimalware",
        },
        { german: "Kontrollierter Start", spanish: "Arranque controlado" },
      ],
    },
  },
  {
    number: "109",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist der Unterschied zwischen einem Thin Client und einem Fat Client?",
      textToSpanish:
        "¿Cuál es la diferencia entre un thin client y un fat client?",
      difficulty: 2,
      importantWords: [
        { german: "Thin Client", spanish: "Cliente ligero" },
        { german: "Fat Client", spanish: "Cliente pesado" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Thin Client ist ein Computer, der hauptsächlich auf Serverressourcen zugreift und selbst nur minimale lokale Rechenleistung und Speicher besitzt. Ein Fat Client hingegen verfügt über eigene Rechenleistung, Speicher und kann Anwendungen lokal ausführen.",
      textToSpanish:
        "Un thin client es un ordenador que depende principalmente de los recursos del servidor y tiene poca capacidad de procesamiento y almacenamiento local. Un fat client tiene su propio procesamiento, almacenamiento y puede ejecutar aplicaciones localmente.",
      importantWords: [
        { german: "Thin Client", spanish: "Cliente ligero" },
        { german: "Fat Client", spanish: "Cliente pesado" },
      ],
    },
  },
  {
    number: "110",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Embedded System?",
      textToSpanish: "¿Qué es un sistema embebido?",
      difficulty: 2,
      importantWords: [
        { german: "Embedded System", spanish: "Sistema embebido" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Embedded System ist ein spezialisiertes Computersystem, das in ein größeres technisches System eingebettet ist und spezielle Aufgaben übernimmt, oft mit Echtzeitanforderungen.",
      textToSpanish:
        "Un sistema embebido es un sistema informático especializado que está integrado en un sistema técnico mayor y realiza tareas específicas, a menudo con requisitos en tiempo real.",
      importantWords: [
        { german: "Embedded System", spanish: "Sistema embebido" },
      ],
    },
  },
  {
    number: "111",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Echtzeitsystem?",
      textToSpanish: "¿Qué es un sistema en tiempo real?",
      difficulty: 2,
      importantWords: [
        { german: "Echtzeitsystem", spanish: "Sistema en tiempo real" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Echtzeitsystem ist ein System, das auf Eingaben innerhalb einer festgelegten Zeitspanne reagieren muss. Die Korrektheit des Systems hängt nicht nur von der logischen Korrektheit der Berechnung, sondern auch von der Zeit ab, in der die Ergebnisse geliefert werden.",
      textToSpanish:
        "Un sistema en tiempo real es aquel que debe responder a las entradas dentro de un tiempo determinado. Su corrección depende tanto del resultado como del momento en que se entrega.",
      importantWords: [
        { german: "Echtzeitsystem", spanish: "Sistema en tiempo real" },
      ],
    },
  },
  {
    number: "112",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Server?",
      textToSpanish: "¿Qué es un servidor?",
      difficulty: 1,
      importantWords: [{ german: "Server", spanish: "Servidor" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Server ist ein Computer oder ein Programm, das Dienste, Ressourcen oder Daten für andere Computer (Clients) im Netzwerk bereitstellt.",
      textToSpanish:
        "Un servidor es un ordenador o programa que proporciona servicios, recursos o datos a otros ordenadores (clientes) en la red.",
      importantWords: [{ german: "Server", spanish: "Servidor" }],
    },
  },
  {
    number: "113",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Client?",
      textToSpanish: "¿Qué es un cliente?",
      difficulty: 1,
      importantWords: [{ german: "Client", spanish: "Cliente" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Client ist ein Computer oder Programm, das Dienste, Ressourcen oder Daten von einem Server im Netzwerk anfordert und nutzt.",
      textToSpanish:
        "Un cliente es un ordenador o programa que solicita y utiliza servicios, recursos o datos de un servidor en la red.",
      importantWords: [{ german: "Client", spanish: "Cliente" }],
    },
  },
  {
    number: "114",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Peer-to-Peer-Netzwerk?",
      textToSpanish: "¿Qué es una red peer-to-peer?",
      difficulty: 2,
      importantWords: [
        { german: "Peer-to-Peer-Netzwerk", spanish: "Red peer-to-peer" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Peer-to-Peer-Netzwerk ist ein Netzwerk, in dem alle Computer gleichberechtigt sind und sowohl Dienste anbieten als auch nutzen können, ohne dass ein zentraler Server erforderlich ist.",
      textToSpanish:
        "Una red peer-to-peer es una red en la que todos los ordenadores son iguales y pueden ofrecer y consumir servicios sin necesidad de un servidor central.",
      importantWords: [
        { german: "Peer-to-Peer-Netzwerk", spanish: "Red peer-to-peer" },
      ],
    },
  },
  {
    number: "115",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Mainframe?",
      textToSpanish: "¿Qué es un mainframe?",
      difficulty: 2,
      importantWords: [{ german: "Mainframe", spanish: "Mainframe" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Mainframe ist ein sehr leistungsfähiger Großrechner, der für die Verarbeitung großer Datenmengen und den gleichzeitigen Betrieb vieler Benutzer und Anwendungen ausgelegt ist.",
      textToSpanish:
        "Un mainframe es un ordenador central de gran capacidad diseñado para procesar grandes volúmenes de datos y soportar muchos usuarios y aplicaciones simultáneamente.",
      importantWords: [{ german: "Mainframe", spanish: "Mainframe" }],
    },
  },
  {
    number: "116",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Cluster?",
      textToSpanish: "¿Qué es un clúster?",
      difficulty: 2,
      importantWords: [{ german: "Cluster", spanish: "Clúster" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Cluster ist eine Gruppe von miteinander verbundenen Computern, die zusammenarbeiten, um als ein einziges System zu erscheinen und Aufgaben gemeinsam zu bearbeiten.",
      textToSpanish:
        "Un clúster es un conjunto de ordenadores conectados que trabajan juntos como si fueran un solo sistema y comparten tareas.",
      importantWords: [{ german: "Cluster", spanish: "Clúster" }],
    },
  },
  {
    number: "117",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist Virtualisierung?",
      textToSpanish: "¿Qué es la virtualización?",
      difficulty: 2,
      importantWords: [
        { german: "Virtualisierung", spanish: "Virtualización" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Virtualisierung ist die Erstellung einer virtuellen Version von Hardware, Betriebssystem, Speicher oder Netzwerkressourcen, sodass mehrere virtuelle Systeme auf einer physischen Ressource betrieben werden können.",
      textToSpanish:
        "La virtualización es la creación de una versión virtual de hardware, sistema operativo, almacenamiento o recursos de red, permitiendo ejecutar varios sistemas virtuales en un solo recurso físico.",
      importantWords: [
        { german: "Virtualisierung", spanish: "Virtualización" },
      ],
    },
  },
  {
    number: "118",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Hypervisor?",
      textToSpanish: "¿Qué es un hipervisor?",
      difficulty: 2,
      importantWords: [{ german: "Hypervisor", spanish: "Hipervisor" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Hypervisor ist eine Software, die es ermöglicht, mehrere virtuelle Maschinen auf einer physischen Hardware zu betreiben und deren Ressourcen zu verwalten.",
      textToSpanish:
        "Un hipervisor es un software que permite ejecutar varias máquinas virtuales sobre un mismo hardware físico y gestionar sus recursos.",
      importantWords: [{ german: "Hypervisor", spanish: "Hipervisor" }],
    },
  },
  {
    number: "119",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist eine virtuelle Maschine?",
      textToSpanish: "¿Qué es una máquina virtual?",
      difficulty: 2,
      importantWords: [
        { german: "virtuelle Maschine", spanish: "máquina virtual" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Eine virtuelle Maschine ist eine Software-Emulation eines Computersystems, die auf einer physischen Hardware läuft und ein eigenes Betriebssystem sowie Anwendungen ausführen kann.",
      textToSpanish:
        "Una máquina virtual es una emulación por software de un sistema informático que se ejecuta sobre un hardware físico y puede tener su propio sistema operativo y aplicaciones.",
      importantWords: [
        { german: "virtuelle Maschine", spanish: "máquina virtual" },
      ],
    },
  },
  {
    number: "120",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Container?",
      textToSpanish: "¿Qué es un contenedor?",
      difficulty: 2,
      importantWords: [{ german: "Container", spanish: "Contenedor" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Container ist eine leichtgewichtige, portable und isolierte Umgebung, in der Anwendungen und ihre Abhängigkeiten zusammen ausgeführt werden können, ohne ein komplettes Betriebssystem zu virtualisieren.",
      textToSpanish:
        "Un contenedor es un entorno ligero, portátil y aislado donde se ejecutan aplicaciones y sus dependencias, sin virtualizar un sistema operativo completo.",
      importantWords: [{ german: "Container", spanish: "Contenedor" }],
    },
  },
  {
    number: "121",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist Cloud Computing?",
      textToSpanish: "¿Qué es la computación en la nube (Cloud Computing)?",
      difficulty: 2,
      importantWords: [
        { german: "Cloud Computing", spanish: "Computación en la nube" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Cloud Computing bezeichnet die Bereitstellung von IT-Ressourcen wie Server, Speicher, Datenbanken, Netzwerke, Software und mehr über das Internet (die Cloud) auf Abruf und mit nutzungsabhängiger Abrechnung.",
      textToSpanish:
        "La computación en la nube es la provisión de recursos de TI como servidores, almacenamiento, bases de datos, redes, software y más a través de Internet (la nube), bajo demanda y con facturación por uso.",
      importantWords: [
        { german: "Cloud Computing", spanish: "Computación en la nube" },
      ],
    },
  },
  {
    number: "122",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist IaaS?",
      textToSpanish: "¿Qué es IaaS?",
      difficulty: 2,
      importantWords: [{ german: "IaaS", spanish: "IaaS" }],
    },
    answer: {
      title: "Antwort",
      text: "IaaS (Infrastructure as a Service) ist ein Cloud-Service-Modell, bei dem grundlegende IT-Infrastruktur wie Rechenleistung, Speicher und Netzwerke als Dienst über das Internet bereitgestellt werden.",
      textToSpanish:
        "IaaS (Infraestructura como Servicio) es un modelo de servicio en la nube donde la infraestructura básica de TI como computación, almacenamiento y redes se ofrece como servicio a través de Internet.",
      importantWords: [{ german: "IaaS", spanish: "IaaS" }],
    },
  },
  {
    number: "123",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist PaaS?",
      textToSpanish: "¿Qué es PaaS?",
      difficulty: 2,
      importantWords: [{ german: "PaaS", spanish: "PaaS" }],
    },
    answer: {
      title: "Antwort",
      text: "PaaS (Platform as a Service) ist ein Cloud-Service-Modell, das eine Plattform mit Entwicklungswerkzeugen, Middleware, Datenbanken und Infrastruktur für die Entwicklung, das Testen und den Betrieb von Anwendungen bereitstellt.",
      textToSpanish:
        "PaaS (Plataforma como Servicio) es un modelo de servicio en la nube que proporciona una plataforma con herramientas de desarrollo, middleware, bases de datos e infraestructura para desarrollar, probar y operar aplicaciones.",
      importantWords: [{ german: "PaaS", spanish: "PaaS" }],
    },
  },
  {
    number: "124",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist SaaS?",
      textToSpanish: "¿Qué es SaaS?",
      difficulty: 2,
      importantWords: [{ german: "SaaS", spanish: "SaaS" }],
    },
    answer: {
      title: "Antwort",
      text: "SaaS (Software as a Service) ist ein Cloud-Service-Modell, bei dem Softwareanwendungen über das Internet bereitgestellt und vom Anbieter verwaltet werden. Die Nutzer greifen auf die Software meist über einen Webbrowser zu.",
      textToSpanish:
        "SaaS (Software como Servicio) es un modelo de servicio en la nube donde las aplicaciones de software se ofrecen a través de Internet y son gestionadas por el proveedor. Los usuarios acceden normalmente mediante un navegador web.",
      importantWords: [{ german: "SaaS", spanish: "SaaS" }],
    },
  },
  {
    number: "125",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein API?",
      textToSpanish: "¿Qué es una API?",
      difficulty: 2,
      importantWords: [{ german: "API", spanish: "API" }],
    },
    answer: {
      title: "Antwort",
      text: "Eine API (Application Programming Interface) ist eine Schnittstelle, die es verschiedenen Softwareanwendungen ermöglicht, miteinander zu kommunizieren und Daten oder Funktionen auszutauschen.",
      textToSpanish:
        "Una API (Interfaz de Programación de Aplicaciones) es una interfaz que permite que diferentes aplicaciones de software se comuniquen y compartan datos o funcionalidades.",
      importantWords: [{ german: "API", spanish: "API" }],
    },
  },
  {
    number: "126",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Microservice?",
      textToSpanish: "¿Qué es un microservicio?",
      difficulty: 2,
      importantWords: [{ german: "Microservice", spanish: "Microservicio" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Microservice ist eine kleine, eigenständige Anwendung, die eine bestimmte Funktion innerhalb eines größeren Systems ausführt und unabhängig entwickelt, bereitgestellt und skaliert werden kann.",
      textToSpanish:
        "Un microservicio es una pequeña aplicación independiente que realiza una función específica dentro de un sistema mayor y puede desarrollarse, desplegarse y escalarse de forma independiente.",
      importantWords: [{ german: "Microservice", spanish: "Microservicio" }],
    },
  },
  {
    number: "127",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Monolith?",
      textToSpanish: "¿Qué es un monolito?",
      difficulty: 2,
      importantWords: [{ german: "Monolith", spanish: "Monolito" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Monolith ist eine Softwarearchitektur, bei der alle Funktionen und Komponenten einer Anwendung in einer einzigen, großen Codebasis zusammengefasst sind.",
      textToSpanish:
        "Un monolito es una arquitectura de software en la que todas las funciones y componentes de una aplicación están integrados en una sola base de código grande.",
      importantWords: [{ german: "Monolith", spanish: "Monolito" }],
    },
  },
  {
    number: "128",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist DevOps?",
      textToSpanish: "¿Qué es DevOps?",
      difficulty: 2,
      importantWords: [{ german: "DevOps", spanish: "DevOps" }],
    },
    answer: {
      title: "Antwort",
      text: "DevOps ist eine Kombination aus Entwicklung (Development) und IT-Betrieb (Operations) mit dem Ziel, die Zusammenarbeit, Automatisierung und Effizienz im Softwareentwicklungsprozess zu verbessern.",
      textToSpanish:
        "DevOps es la combinación de desarrollo (Development) y operaciones de TI (Operations) cuyo objetivo es mejorar la colaboración, automatización y eficiencia en el proceso de desarrollo de software.",
      importantWords: [{ german: "DevOps", spanish: "DevOps" }],
    },
  },
  {
    number: "129",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist Continuous Integration?",
      textToSpanish: "¿Qué es la integración continua?",
      difficulty: 2,
      importantWords: [
        { german: "Continuous Integration", spanish: "Integración continua" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Continuous Integration (CI) ist eine Praxis in der Softwareentwicklung, bei der Codeänderungen regelmäßig in ein zentrales Repository integriert und automatisch getestet werden, um Fehler frühzeitig zu erkennen.",
      textToSpanish:
        "La integración continua (CI) es una práctica de desarrollo de software en la que los cambios de código se integran regularmente en un repositorio central y se prueban automáticamente para detectar errores de forma temprana.",
      importantWords: [
        { german: "Continuous Integration", spanish: "Integración continua" },
      ],
    },
  },
  {
    number: "130",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist Continuous Delivery?",
      textToSpanish: "¿Qué es la entrega continua?",
      difficulty: 2,
      importantWords: [
        { german: "Continuous Delivery", spanish: "Entrega continua" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Continuous Delivery (CD) ist eine Erweiterung von Continuous Integration, bei der Softwareänderungen nach erfolgreichen Tests automatisch für die Bereitstellung in Produktionsumgebungen vorbereitet werden.",
      textToSpanish:
        "La entrega continua (CD) es una extensión de la integración continua en la que los cambios de software, tras pasar las pruebas, se preparan automáticamente para su despliegue en entornos de producción.",
      importantWords: [
        { german: "Continuous Delivery", spanish: "Entrega continua" },
      ],
    },
  },
  {
    number: "131",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist Continuous Deployment?",
      textToSpanish: "¿Qué es el despliegue continuo?",
      difficulty: 2,
      importantWords: [
        { german: "Continuous Deployment", spanish: "Despliegue continuo" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Continuous Deployment ist eine Praxis, bei der jede Änderung, die alle automatisierten Tests besteht, automatisch in die Produktionsumgebung ausgerollt wird.",
      textToSpanish:
        "El despliegue continuo es una práctica en la que cada cambio que pasa todas las pruebas automáticas se despliega automáticamente en el entorno de producción.",
      importantWords: [
        { german: "Continuous Deployment", spanish: "Despliegue continuo" },
      ],
    },
  },
  {
    number: "132",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Repository?",
      textToSpanish: "¿Qué es un repositorio?",
      difficulty: 2,
      importantWords: [{ german: "Repository", spanish: "Repositorio" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Repository ist ein zentraler Speicherort, in dem Code, Dokumentationen, Konfigurationen und andere Dateien für die Softwareentwicklung verwaltet und versioniert werden.",
      textToSpanish:
        "Un repositorio es un lugar de almacenamiento central donde se gestionan y versionan el código, la documentación, las configuraciones y otros archivos para el desarrollo de software.",
      importantWords: [{ german: "Repository", spanish: "Repositorio" }],
    },
  },
  {
    number: "133",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Branch?",
      textToSpanish: "¿Qué es una rama (branch)?",
      difficulty: 2,
      importantWords: [{ german: "Branch", spanish: "Rama" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Branch ist eine unabhängige Entwicklungslinie innerhalb eines Repositories, in der Änderungen vorgenommen werden können, ohne die Hauptentwicklungslinie zu beeinflussen.",
      textToSpanish:
        "Una rama (branch) es una línea de desarrollo independiente dentro de un repositorio donde se pueden realizar cambios sin afectar la línea principal de desarrollo.",
      importantWords: [{ german: "Branch", spanish: "Rama" }],
    },
  },
  {
    number: "134",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Commit?",
      textToSpanish: "¿Qué es un commit?",
      difficulty: 2,
      importantWords: [{ german: "Commit", spanish: "Commit" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Commit ist das Speichern von Änderungen im Repository, wobei ein bestimmter Stand des Projekts festgehalten und mit einer Nachricht dokumentiert wird.",
      textToSpanish:
        "Un commit es el guardado de cambios en el repositorio, registrando un estado concreto del proyecto y documentándolo con un mensaje.",
      importantWords: [{ german: "Commit", spanish: "Commit" }],
    },
  },
  {
    number: "135",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Merge?",
      textToSpanish: "¿Qué es un merge?",
      difficulty: 2,
      importantWords: [{ german: "Merge", spanish: "Merge" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Merge ist das Zusammenführen von Änderungen aus verschiedenen Branches in einem Repository, um die Entwicklungen zu vereinen.",
      textToSpanish:
        "Un merge es la acción de combinar cambios de diferentes ramas en un repositorio para unificar los desarrollos.",
      importantWords: [{ german: "Merge", spanish: "Merge" }],
    },
  },
  {
    number: "136",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Pull Request?",
      textToSpanish: "¿Qué es un pull request?",
      difficulty: 2,
      importantWords: [{ german: "Pull Request", spanish: "Pull request" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Pull Request ist eine Anfrage, Änderungen aus einem Branch in einen anderen zu übernehmen, meist nach einer Code-Review.",
      textToSpanish:
        "Un pull request es una solicitud para incorporar cambios de una rama a otra, normalmente tras una revisión de código.",
      importantWords: [{ german: "Pull Request", spanish: "Pull request" }],
    },
  },
  {
    number: "137",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Fork?",
      textToSpanish: "¿Qué es un fork?",
      difficulty: 2,
      importantWords: [{ german: "Fork", spanish: "Fork" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Fork ist eine Kopie eines Repositories, die unabhängig vom Original weiterentwickelt werden kann.",
      textToSpanish:
        "Un fork es una copia de un repositorio que puede desarrollarse de forma independiente al original.",
      importantWords: [{ german: "Fork", spanish: "Fork" }],
    },
  },
  {
    number: "138",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Tag?",
      textToSpanish: "¿Qué es un tag?",
      difficulty: 2,
      importantWords: [{ german: "Tag", spanish: "Tag" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Tag ist eine Markierung eines bestimmten Commits, um z. B. eine Version oder einen Release zu kennzeichnen.",
      textToSpanish:
        "Un tag es una marca en un commit concreto, por ejemplo, para señalar una versión o un lanzamiento.",
      importantWords: [{ german: "Tag", spanish: "Tag" }],
    },
  },
  {
    number: "139",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Release?",
      textToSpanish: "¿Qué es un release?",
      difficulty: 2,
      importantWords: [{ german: "Release", spanish: "Release" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Release ist eine veröffentlichte Version einer Software, die für Benutzer bereitgestellt wird.",
      textToSpanish:
        "Un release es una versión publicada de un software que se pone a disposición de los usuarios.",
      importantWords: [{ german: "Release", spanish: "Release" }],
    },
  },
  {
    number: "140",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Rollback?",
      textToSpanish: "¿Qué es un rollback?",
      difficulty: 2,
      importantWords: [{ german: "Rollback", spanish: "Rollback" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Rollback ist das Zurücksetzen eines Systems oder einer Software auf einen früheren Zustand, meist um Fehler zu beheben.",
      textToSpanish:
        "Un rollback es la acción de volver un sistema o software a un estado anterior, normalmente para corregir errores.",
      importantWords: [{ german: "Rollback", spanish: "Rollback" }],
    },
  },
  {
    number: "141",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Hotfix?",
      textToSpanish: "¿Qué es un hotfix?",
      difficulty: 2,
      importantWords: [{ german: "Hotfix", spanish: "Hotfix" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Hotfix ist eine schnelle, gezielte Fehlerbehebung in einer Software, die außerhalb des regulären Release-Zyklus veröffentlicht wird.",
      textToSpanish:
        "Un hotfix es una corrección rápida y específica de un error en un software, publicada fuera del ciclo normal de versiones.",
      importantWords: [{ german: "Hotfix", spanish: "Hotfix" }],
    },
  },
  {
    number: "142",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Patch?",
      textToSpanish: "¿Qué es un patch?",
      difficulty: 2,
      importantWords: [{ german: "Patch", spanish: "Patch" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Patch ist eine Aktualisierung, die Fehler behebt, Sicherheitslücken schließt oder Funktionen in einer Software ergänzt.",
      textToSpanish:
        "Un patch es una actualización que corrige errores, cierra vulnerabilidades o añade funciones a un software.",
      importantWords: [{ german: "Patch", spanish: "Patch" }],
    },
  },
  {
    number: "143",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Build?",
      textToSpanish: "¿Qué es un build?",
      difficulty: 2,
      importantWords: [{ german: "Build", spanish: "Build" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Build ist das Ergebnis eines Kompilierungsprozesses, bei dem Quellcode in eine ausführbare Software umgewandelt wird.",
      textToSpanish:
        "Un build es el resultado del proceso de compilación, donde el código fuente se transforma en un software ejecutable.",
      importantWords: [{ german: "Build", spanish: "Build" }],
    },
  },
  {
    number: "144",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Testfall?",
      textToSpanish: "¿Qué es un caso de prueba?",
      difficulty: 2,
      importantWords: [{ german: "Testfall", spanish: "Caso de prueba" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Testfall ist eine definierte Eingabe, Ausführung und erwartete Ausgabe, um die Funktionalität eines Softwareteils zu überprüfen.",
      textToSpanish:
        "Un caso de prueba es una entrada, ejecución y salida esperada definidas para comprobar la funcionalidad de una parte del software.",
      importantWords: [{ german: "Testfall", spanish: "Caso de prueba" }],
    },
  },
  {
    number: "145",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Unit-Test?",
      textToSpanish: "¿Qué es una prueba unitaria (unit test)?",
      difficulty: 2,
      importantWords: [{ german: "Unit-Test", spanish: "Prueba unitaria" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Unit-Test ist ein automatisierter Test, der eine einzelne Funktion oder Methode einer Software isoliert prüft.",
      textToSpanish:
        "Una prueba unitaria es un test automatizado que verifica de forma aislada una función o método de un software.",
      importantWords: [{ german: "Unit-Test", spanish: "Prueba unitaria" }],
    },
  },
  {
    number: "146",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Integrationstest?",
      textToSpanish: "¿Qué es una prueba de integración?",
      difficulty: 2,
      importantWords: [
        { german: "Integrationstest", spanish: "Prueba de integración" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Integrationstest prüft das Zusammenspiel mehrerer Komponenten oder Module einer Software.",
      textToSpanish:
        "Una prueba de integración verifica la interacción entre varios componentes o módulos de un software.",
      importantWords: [
        { german: "Integrationstest", spanish: "Prueba de integración" },
      ],
    },
  },
  {
    number: "147",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Systemtest?",
      textToSpanish: "¿Qué es una prueba de sistema?",
      difficulty: 2,
      importantWords: [{ german: "Systemtest", spanish: "Prueba de sistema" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Systemtest überprüft das gesamte System als Ganzes, um sicherzustellen, dass alle Komponenten zusammen wie erwartet funktionieren.",
      textToSpanish:
        "Una prueba de sistema verifica el sistema completo para asegurar que todos los componentes funcionan juntos como se espera.",
      importantWords: [{ german: "Systemtest", spanish: "Prueba de sistema" }],
    },
  },
  {
    number: "148",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Abnahmetest?",
      textToSpanish: "¿Qué es una prueba de aceptación (abnahmetest)?",
      difficulty: 2,
      importantWords: [
        { german: "Abnahmetest", spanish: "Prueba de aceptación" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Abnahmetest ist ein Test, der vom Kunden oder Endnutzer durchgeführt wird, um zu prüfen, ob die Software die Anforderungen erfüllt.",
      textToSpanish:
        "Una prueba de aceptación es un test realizado por el cliente o usuario final para comprobar si el software cumple los requisitos.",
      importantWords: [
        { german: "Abnahmetest", spanish: "Prueba de aceptación" },
      ],
    },
  },
  {
    number: "149",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist Testautomatisierung?",
      textToSpanish: "¿Qué es la automatización de pruebas?",
      difficulty: 2,
      importantWords: [
        { german: "Testautomatisierung", spanish: "Automatización de pruebas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Testautomatisierung ist der Einsatz von Softwaretools, um Tests automatisch auszuführen und die Ergebnisse zu überprüfen.",
      textToSpanish:
        "La automatización de pruebas es el uso de herramientas de software para ejecutar pruebas automáticamente y verificar los resultados.",
      importantWords: [
        { german: "Testautomatisierung", spanish: "Automatización de pruebas" },
      ],
    },
  },
  {
    number: "150",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Bug?",
      textToSpanish: "¿Qué es un bug?",
      difficulty: 2,
      importantWords: [{ german: "Bug", spanish: "Bug" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Bug ist ein Fehler oder Defekt in einer Software, der dazu führt, dass sie nicht wie erwartet funktioniert.",
      textToSpanish:
        "Un bug es un error o defecto en un software que provoca que no funcione como se espera.",
      importantWords: [{ german: "Bug", spanish: "Bug" }],
    },
  },
  {
    number: "151",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Feature?",
      textToSpanish: "¿Qué es una funcionalidad (feature)?",
      difficulty: 2,
      importantWords: [{ german: "Feature", spanish: "Funcionalidad" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Feature ist eine neue oder bestehende Funktion oder Eigenschaft einer Software.",
      textToSpanish:
        "Una funcionalidad (feature) es una función o característica nueva o existente de un software.",
      importantWords: [{ german: "Feature", spanish: "Funcionalidad" }],
    },
  },
  {
    number: "152",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Backlog?",
      textToSpanish: "¿Qué es un backlog?",
      difficulty: 2,
      importantWords: [{ german: "Backlog", spanish: "Backlog" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Backlog ist eine priorisierte Liste von Aufgaben, Anforderungen oder Fehlern, die im Rahmen eines Projekts noch bearbeitet werden müssen.",
      textToSpanish:
        "Un backlog es una lista priorizada de tareas, requisitos o errores que aún deben ser atendidos en un proyecto.",
      importantWords: [{ german: "Backlog", spanish: "Backlog" }],
    },
  },
  {
    number: "153",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Sprint?",
      textToSpanish: "¿Qué es un sprint?",
      difficulty: 2,
      importantWords: [{ german: "Sprint", spanish: "Sprint" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Sprint ist ein fest definierter Zeitraum im agilen Projektmanagement, in dem ein bestimmter Arbeitsumfang umgesetzt wird.",
      textToSpanish:
        "Un sprint es un periodo de tiempo definido en la gestión ágil de proyectos durante el cual se realiza una cantidad específica de trabajo.",
      importantWords: [{ german: "Sprint", spanish: "Sprint" }],
    },
  },
  {
    number: "154",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist Scrum?",
      textToSpanish: "¿Qué es Scrum?",
      difficulty: 2,
      importantWords: [{ german: "Scrum", spanish: "Scrum" }],
    },
    answer: {
      title: "Antwort",
      text: "Scrum ist ein agiles Rahmenwerk für das Projektmanagement und die Softwareentwicklung, das auf iterativer und inkrementeller Arbeit basiert.",
      textToSpanish:
        "Scrum es un marco ágil para la gestión de proyectos y el desarrollo de software basado en el trabajo iterativo e incremental.",
      importantWords: [{ german: "Scrum", spanish: "Scrum" }],
    },
  },
  {
    number: "155",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Scrum Master?",
      textToSpanish: "¿Qué es un Scrum Master?",
      difficulty: 2,
      importantWords: [{ german: "Scrum Master", spanish: "Scrum Master" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Scrum Master ist eine Rolle im Scrum-Team, die dafür sorgt, dass das Scrum-Framework korrekt angewendet wird und das Team effizient arbeiten kann.",
      textToSpanish:
        "Un Scrum Master es un rol dentro del equipo Scrum que se encarga de que el marco Scrum se aplique correctamente y de que el equipo trabaje de forma eficiente.",
      importantWords: [{ german: "Scrum Master", spanish: "Scrum Master" }],
    },
  },
  {
    number: "156",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Product Owner?",
      textToSpanish: "¿Qué es un Product Owner?",
      difficulty: 2,
      importantWords: [{ german: "Product Owner", spanish: "Product Owner" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Product Owner ist eine Rolle im Scrum-Team, die für die Definition und Priorisierung der Anforderungen im Product Backlog verantwortlich ist.",
      textToSpanish:
        "Un Product Owner es un rol en el equipo Scrum responsable de definir y priorizar los requisitos en el Product Backlog.",
      importantWords: [{ german: "Product Owner", spanish: "Product Owner" }],
    },
  },
  {
    number: "157",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Scrum Team?",
      textToSpanish: "¿Qué es un equipo Scrum?",
      difficulty: 2,
      importantWords: [{ german: "Scrum Team", spanish: "Equipo Scrum" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Scrum Team besteht aus dem Product Owner, dem Scrum Master und dem Entwicklungsteam und arbeitet gemeinsam an der Umsetzung der Projektziele.",
      textToSpanish:
        "Un equipo Scrum está formado por el Product Owner, el Scrum Master y el equipo de desarrollo, y trabajan juntos para alcanzar los objetivos del proyecto.",
      importantWords: [{ german: "Scrum Team", spanish: "Equipo Scrum" }],
    },
  },
  {
    number: "158",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Daily Scrum?",
      textToSpanish: "¿Qué es un Daily Scrum?",
      difficulty: 2,
      importantWords: [{ german: "Daily Scrum", spanish: "Daily Scrum" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Daily Scrum ist ein tägliches, kurzes Treffen des Scrum-Teams, um den Fortschritt zu besprechen und die Arbeit für den Tag zu planen.",
      textToSpanish:
        "Un Daily Scrum es una reunión diaria y breve del equipo Scrum para revisar el progreso y planificar el trabajo del día.",
      importantWords: [{ german: "Daily Scrum", spanish: "Daily Scrum" }],
    },
  },
  {
    number: "159",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Sprint Review?",
      textToSpanish: "¿Qué es un Sprint Review?",
      difficulty: 2,
      importantWords: [{ german: "Sprint Review", spanish: "Sprint Review" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Sprint Review ist ein Treffen am Ende eines Sprints, bei dem das Scrum-Team und die Stakeholder die Ergebnisse des Sprints begutachten und Feedback geben.",
      textToSpanish:
        "Un Sprint Review es una reunión al final de un sprint donde el equipo Scrum y los interesados revisan los resultados y dan retroalimentación.",
      importantWords: [{ german: "Sprint Review", spanish: "Sprint Review" }],
    },
  },
  {
    number: "160",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist eine Sprint Retrospektive?",
      textToSpanish: "¿Qué es una retrospectiva de sprint?",
      difficulty: 2,
      importantWords: [
        { german: "Sprint Retrospektive", spanish: "Retrospectiva de sprint" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Eine Sprint Retrospektive ist ein Treffen nach jedem Sprint, bei dem das Scrum-Team den vergangenen Sprint reflektiert und Verbesserungen für die Zukunft plant.",
      textToSpanish:
        "Una retrospectiva de sprint es una reunión tras cada sprint donde el equipo Scrum reflexiona sobre el sprint pasado y planifica mejoras para el futuro.",
      importantWords: [
        { german: "Sprint Retrospektive", spanish: "Retrospectiva de sprint" },
      ],
    },
  },
  {
    number: "161",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist Kanban?",
      textToSpanish: "¿Qué es Kanban?",
      difficulty: 2,
      importantWords: [{ german: "Kanban", spanish: "Kanban" }],
    },
    answer: {
      title: "Antwort",
      text: "Kanban ist eine Methode zur Steuerung von Arbeitsprozessen, bei der Aufgaben auf einem Board visualisiert und der Arbeitsfluss kontinuierlich optimiert wird.",
      textToSpanish:
        "Kanban es un método para gestionar procesos de trabajo visualizando las tareas en un tablero y optimizando el flujo de trabajo de forma continua.",
      importantWords: [{ german: "Kanban", spanish: "Kanban" }],
    },
  },
  {
    number: "162",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Kanban-Board?",
      textToSpanish: "¿Qué es un tablero Kanban?",
      difficulty: 2,
      importantWords: [{ german: "Kanban-Board", spanish: "Tablero Kanban" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Kanban-Board ist ein visuelles Werkzeug, das den Arbeitsfluss und den Status von Aufgaben in verschiedenen Spalten darstellt.",
      textToSpanish:
        "Un tablero Kanban es una herramienta visual que muestra el flujo de trabajo y el estado de las tareas en diferentes columnas.",
      importantWords: [{ german: "Kanban-Board", spanish: "Tablero Kanban" }],
    },
  },
  {
    number: "163",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein WIP-Limit?",
      textToSpanish: "¿Qué es un límite WIP?",
      difficulty: 2,
      importantWords: [{ german: "WIP-Limit", spanish: "Límite WIP" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein WIP-Limit (Work in Progress Limit) ist eine Begrenzung der Anzahl von Aufgaben, die sich gleichzeitig in einem bestimmten Status auf einem Kanban-Board befinden dürfen.",
      textToSpanish:
        "Un límite WIP (Work in Progress) es una restricción sobre la cantidad de tareas que pueden estar en un mismo estado en un tablero Kanban al mismo tiempo.",
      importantWords: [{ german: "WIP-Limit", spanish: "Límite WIP" }],
    },
  },
  {
    number: "164",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Product Backlog?",
      textToSpanish: "¿Qué es un Product Backlog?",
      difficulty: 2,
      importantWords: [
        { german: "Product Backlog", spanish: "Product Backlog" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das Product Backlog ist eine priorisierte Liste aller Anforderungen, Funktionen, Verbesserungen und Fehlerbehebungen, die für ein Produkt umgesetzt werden sollen.",
      textToSpanish:
        "El Product Backlog es una lista priorizada de todos los requisitos, funciones, mejoras y correcciones de errores que deben implementarse para un producto.",
      importantWords: [
        { german: "Product Backlog", spanish: "Product Backlog" },
      ],
    },
  },
  {
    number: "165",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Sprint Backlog?",
      textToSpanish: "¿Qué es un Sprint Backlog?",
      difficulty: 2,
      importantWords: [{ german: "Sprint Backlog", spanish: "Sprint Backlog" }],
    },
    answer: {
      title: "Antwort",
      text: "Das Sprint Backlog ist eine Liste der Aufgaben und Anforderungen, die das Scrum-Team in einem bestimmten Sprint umsetzen will.",
      textToSpanish:
        "El Sprint Backlog es una lista de tareas y requisitos que el equipo Scrum planea completar durante un sprint específico.",
      importantWords: [{ german: "Sprint Backlog", spanish: "Sprint Backlog" }],
    },
  },
  {
    number: "166",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Inkrement?",
      textToSpanish: "¿Qué es un incremento?",
      difficulty: 2,
      importantWords: [{ german: "Inkrement", spanish: "Incremento" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Inkrement ist das Ergebnis eines Sprints, also die Summe aller abgeschlossenen Product-Backlog-Einträge, die am Ende eines Sprints ein potenziell auslieferbares Produkt ergeben.",
      textToSpanish:
        "Un incremento es el resultado de un sprint, es decir, la suma de todos los elementos completados del Product Backlog que constituyen un producto potencialmente entregable.",
      importantWords: [{ german: "Inkrement", spanish: "Incremento" }],
    },
  },
  {
    number: "167",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein User Story?",
      textToSpanish: "¿Qué es una User Story?",
      difficulty: 2,
      importantWords: [{ german: "User Story", spanish: "User Story" }],
    },
    answer: {
      title: "Antwort",
      text: "Eine User Story ist eine kurze, einfache Beschreibung einer Funktionalität aus Sicht des Endnutzers oder Kunden.",
      textToSpanish:
        "Una User Story es una breve y sencilla descripción de una funcionalidad desde la perspectiva del usuario final o cliente.",
      importantWords: [{ german: "User Story", spanish: "User Story" }],
    },
  },
  {
    number: "168",
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Task?",
      textToSpanish: "¿Qué es una tarea (Task)?",
      difficulty: 2,
      importantWords: [{ german: "Task", spanish: "Tarea" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Task ist eine einzelne, klar abgegrenzte Arbeitseinheit, die zur Umsetzung einer User Story oder eines Backlog-Elements notwendig ist.",
      textToSpanish:
        "Una tarea (Task) es una unidad de trabajo individual y bien definida que se necesita para implementar una User Story o un elemento del Backlog.",
      importantWords: [{ german: "Task", spanish: "Tarea" }],
    },
  },
];
