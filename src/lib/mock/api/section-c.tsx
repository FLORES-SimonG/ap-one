import { Card } from "@/lib/interfaces/cards";

export const sectionC: Card[] = [
  {
    number: "47",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Worin besteht in der Virtualisierung von Hostsystemen der Unterschied zwischen dem Hypervisor Typ 1 und Typ 2?",
      difficulty: 3,
      importantWords: [
        { german: "Hypervisor", spanish: "Hipervisor" },
        { german: "Virtualisierung", spanish: "Virtualización" },
        { german: "Hostsystemen", spanish: "Sistemas host" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Hypervisor Typ 1, auch native oder bare-metal Hypervisor genannt, setzt direkt auf der Hardware des Hostsystems auf. Daher ist keine vorherige Betriebssystem-Installation notwendig. Der Hypervisor Typ 2, auch hosted Hypervisor genannt, benötigt ein lauffähiges vollwertiges Betriebssystem, um auf diesem Hostsystem auf die Gerätetreiber des Betriebssystems bzw. auf die Hardware des Hostsystems zuzugreifen.",
      importantWords: [
        { german: "native", spanish: "nativo" },
        { german: "bare-metal", spanish: "bare-metal" },
        { german: "hosted", spanish: "hosted" },
        { german: "Hardware", spanish: "Hardware" },
      ],
    },
  },
  {
    number: "48",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Funktionen bietet eine Dockingstation für Notebooks?",
      difficulty: 2,
      importantWords: [
        { german: "Dockingstation", spanish: "Estación de acoplamiento" },
        { german: "Funktionen", spanish: "Funciones" },
      ],
    },
    answer: {
      title: "Antwort",
      text: 'Eine Dockingstation (englisch to dock "andocken", oder auch "koppeln") wird verwendet, wenn mobile Geräte, wie zum Beispiel Notebooks oder PDAs, mit einem festen Netz verbunden werden sollen. Dockingstationen für Notebooks werden auch als Portreplikatoren eingesetzt, sodass vorhandene Ports an die Dockingstation „durchgereicht" werden. Des Weiteren werden über die Dockingstation zusätzliche externe Schnittstellen wie USB, HDMI, DisplayPort/mini DisplayPort, VGA, Firewire, etc. zur Verfügung gestellt.',
      importantWords: [
        { german: "Dockingstation", spanish: "Estación de acoplamiento" },
        { german: "Portreplikatoren", spanish: "Replicadores de puertos" },
      ],
    },
  },
  {
    number: "49",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Videoschnittstellen sind für 4K- und 8K-Auflösungen geeignet?",
      difficulty: 1,
      importantWords: [
        { german: "Videoschnittstellen", spanish: "Interfaces de video" },
        { german: "Auflösungen", spanish: "Resoluciones" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Für 4K ist HDMI 2.0 ausreichend. Für 8K-Auflösungen werden HDMI 2.1 und DisplayPort 1.3 und 1.4 benötigt.",
      importantWords: [
        { german: "HDMI", spanish: "HDMI" },
        { german: "DisplayPort", spanish: "DisplayPort" },
      ],
    },
  },
  {
    number: "50",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche technischen Merkmale hat ein Notebook?",
      difficulty: 1,
      importantWords: [
        { german: "technische Merkmale", spanish: "Características técnicas" },
        { german: "Notebook", spanish: "Notebook" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Notebook hat folgende Bestandteile: teilweise Anschluss für Dockingstation, teilweise Mini-PCI-Express Slot, teilweise 4-in-1 Kartenlesegerät, teilweise integriertes Bluetooth, WLAN und WWAN, eigenes Display, externe Schnittstellen wie USB, HDMI, DisplayPort/mini DisplayPort, VGA, Firewire, integrierte Lautsprecher und Mikrofone, teilweise Videokamera, Akku, externes Netzteil, interne Netzwerkkarte.",
      importantWords: [
        { german: "Schnittstellen", spanish: "Interfaces" },
        { german: "WLAN", spanish: "WLAN" },
        { german: "WWAN", spanish: "WWAN" },
      ],
    },
  },
  {
    number: "51",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welchen Vorteil bringt der Einsatz von Dual-Channel-Technik bei Speichermodulen?",
      difficulty: 1,
      importantWords: [
        { german: "Dual-Channel-Technik", spanish: "Tecnología Dual-Channel" },
        { german: "Speichermodulen", spanish: "Módulos de memoria" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Mithilfe der Dual-Channel-Technik kann der Speichercontroller des Prozessors die Daten auf zwei Arbeitsspeichermodule gleichzeitig aufteilen und somit parallel schreiben und lesen. Dadurch verdoppelt sich die Datenrate.",
      importantWords: [
        { german: "Dual-Channel-Technik", spanish: "Tecnología Dual-Channel" },
        { german: "Datenrate", spanish: "Tasa de datos" },
      ],
    },
  },
  {
    number: "52",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was verbirgt sich hinter Bezeichnung UHD 4K?",
      difficulty: 2,
      importantWords: [
        { german: "Bezeichnung", spanish: "denominación / designación" },
        { german: "verbirgt sich", spanish: "se esconde / qué significa" },
        { german: "UHD 4K", spanish: "UHD 4K (Ultra Alta Definición)" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "UHD (Ultra High Definition) 4K bezeichnet ein digitales Videoformat der International Telecommunication Union (ITU) für Ultra High Definition Television (UHDTV oder Ultra HDTV) sowie Ultra High Definition Video (UHDV). UHD 4K wird heute auch als UHD-1 bezeichnet und lehnt sich am Cinema 4K (4096 x 2160 Pixel) an. Die Hersteller spezifizieren jedoch ihre Geräte mit 3840 x 2160 Pixeln heute oftmals auch als UHD 4K.",
      importantWords: [
        {
          german: "Ultra High Definition (UHD)",
          spanish: "Ultra Alta Definición",
        },
        {
          german: "International Telecommunication Union (ITU)",
          spanish: "Unión Internacional de Telecomunicaciones",
        },
        { german: "UHDTV", spanish: "Televisión de ultra alta definición" },
        {
          german: "Ultra HDTV",
          spanish: "Televisión de ultra alta definición (otra denominación)",
        },
        { german: "UHDV", spanish: "Vídeo de ultra alta definición" },
        { german: "Cinema 4K", spanish: "Cine 4K (4096 x 2160 píxeles)" },
        { german: "Pixel", spanish: "píxel" },
        { german: "Hersteller", spanish: "fabricantes" },
        { german: "spezifizieren", spanish: "especificar" },
        { german: "Geräte", spanish: "dispositivos / aparatos" },
      ],
    },
  },
  {
    number: "53",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    withImage: true,
    question: {
      title: "Frage",
      text: "Unternehmen, die ein Rechenzentrum betreiben, setzen vermehrt auf die Vorteile der Virtualisierung. In diesem Zusammenhang wird oftmals der Begriff des Thin-Clients benutzt. Was versteht man unter einem Thin-Client?",
      difficulty: 1,
      importantWords: [
        { german: "Unternehmen", spanish: "empresa" },
        { german: "Rechenzentrum", spanish: "centro de datos" },
        { german: "Virtualisierung", spanish: "virtualización" },
        { german: "Begriff", spanish: "término / concepto" },
        { german: "Thin-Client", spanish: "cliente ligero" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Allgemein kann man einen Thin-Client (englisch dünner, schlanker bzw. magerer Client) als einen Computer bezeichnen, welcher über ein Netzwerk Ressourcen nutzt, die ihm ein Server bereitstellt. Die virtuelle Desktop-Infrastruktur (VDI) setzt primär Thin-Clients ein und setzt damit konsequent auf die Vorteile der Virtualisierung des kompletten Rechenzentrums. Thin-Clients oder manchmal auch als Zero-Clients bezeichnet, siehe Bild, sind lüfterlose Geräte welche über USB, einen Netzwerkanschluss, Audio- und Displayanschlüsse verfügen. Die persönliche Benutzeroberfläche, die Konfiguration, Zugriffe auf Verzeichnisse und installierte Programme werden vom Server zur Verfügung gestellt. Thin-Clients sind umwelt- und ressourcenschonend und haben eine geringe Leistungsaufnahme. (ver imagen)",
      importantWords: [
        { german: "dünner / schlanker / magerer", spanish: "delgado / ligero" },
        { german: "Netzwerk", spanish: "red" },
        { german: "Ressourcen", spanish: "recursos" },
        { german: "Server", spanish: "servidor" },
        {
          german: "virtuelle Desktop-Infrastruktur (VDI)",
          spanish: "infraestructura de escritorio virtual",
        },
        {
          german: "Zero-Clients",
          spanish: "clientes cero (dispositivos aún más ligeros)",
        },
        { german: "lüfterlos", spanish: "sin ventilador" },
        { german: "Anschluss", spanish: "conexión / puerto" },
        { german: "Benutzeroberfläche", spanish: "interfaz de usuario" },
        { german: "Konfiguration", spanish: "configuración" },
        { german: "Verzeichnisse", spanish: "directorios" },
        { german: "Programme", spanish: "programas" },
        {
          german: "umweltschonend",
          spanish: "respetuoso con el medio ambiente",
        },
        { german: "ressourcenschonend", spanish: "ahorrador de recursos" },
        { german: "Leistungsaufnahme", spanish: "consumo energético" },
      ],
    },
  },
  {
    number: "54",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche IT-Komponenten sind Ein- oder Ausgabegeräte? Ordne richtig zu!\na) Drucker\nb) Scanner\nc) Maus\nd) Display\ne) Touchpad",
      difficulty: 1,
      importantWords: [
        { german: "IT-Komponenten", spanish: "componentes de TI" },
        {
          german: "Ein-/Ausgabegeräte",
          spanish: "dispositivos de entrada/salida",
        },
        { german: "Drucker", spanish: "impresora" },
        { german: "Scanner", spanish: "escáner" },
        { german: "Maus", spanish: "ratón" },
        { german: "Display", spanish: "pantalla" },
        { german: "Touchpad", spanish: "panel táctil" },
        { german: "ordnen", spanish: "ordenar / clasificar" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "a) Drucker → Ausgabegerät\nb) Scanner → Eingabegerät\nc) Maus → Eingabegerät\nd) Display → Ausgabegerät\ne) Touchpad → Eingabegerät",
      importantWords: [
        { german: "Eingabegerät", spanish: "dispositivo de entrada" },
        { german: "Ausgabegerät", spanish: "dispositivo de salida" },
      ],
    },
  },
  {
    number: "55",
    withImage: true,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Schnittstellen sind auf dem Bild zu sehen? (ver imagen de la carta)",
      difficulty: 1,
      importantWords: [
        { german: "Schnittstellen", spanish: "interfaces / puertos" },
        { german: "Bild", spanish: "imagen" },
        { german: "sehen", spanish: "ver" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Folgende Schnittstellen sind zu sehen: DisplayPort, DVI, VGA, USB-Typ B und 2x USB Typ A. (ver imagen)",
      importantWords: [
        { german: "DisplayPort", spanish: "DisplayPort" },
        { german: "DVI", spanish: "DVI" },
        { german: "VGA", spanish: "VGA" },
        { german: "USB-Typ B", spanish: "USB tipo B" },
        { german: "USB Typ A", spanish: "USB tipo A" },
      ],
    },
  },
  {
    number: "56",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Nenne die Arten des Cloud Computing.",
      difficulty: 1,
      importantWords: [
        { german: "Cloud Computing", spanish: "Cloud Computing" },
        { german: "Arten", spanish: "Tipos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Public Cloud, Private Cloud, Hybrid Cloud und Community Cloud. Weiterhin gibt es Mischformen der oben genannten Cloud-Typen: Virtual Private Cloud und Multi Cloud.",
      importantWords: [
        { german: "Public Cloud", spanish: "Nube Pública" },
        { german: "Private Cloud", spanish: "Nube Privada" },
        { german: "Hybrid Cloud", spanish: "Nube Híbrida" },
        { german: "Community Cloud", spanish: "Nube Comunitaria" },
      ],
    },
  },
  {
    number: "57",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter dem Begriff Green-IT?",
      difficulty: 1,
      importantWords: [{ german: "Green-IT", spanish: "Green-IT" }],
    },
    answer: {
      title: "Antwort",
      text: "Unter Green-IT versteht man alle Bestrebungen, die Nutzung von Informations- und Kommunikationstechnik (luk) über deren gesamten Lebenszyklus hinweg umwelt- und ressourcenschonend zu gestalten. Darunter fallen: Optimierung des Ressourcenverbrauchs während des Herstellungsprozesses, des Betriebs und der Entsorgung, Virtualisierung, Videokonferenzen und energiesparende Modi.",
      importantWords: [
        { german: "Green-IT", spanish: "Green-IT" },
        { german: "Nachhaltigkeit", spanish: "Sostenibilidad" },
        { german: "Ressourcenschonung", spanish: "Ahorro de recursos" },
      ],
    },
  },
  {
    number: "58",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Erkläre den Begriff des Servicemodells Infrastructure as a Service (laas).",
      difficulty: 3,
      importantWords: [
        {
          german: "Erkläre",
          spanish: "Explicar",
        },
        {
          german: "Begriff",
          spanish: "Término",
        },
        {
          german: "Servicemodells",
          spanish: "Modelo de servicio",
        },
        {
          german: "Infrastructure as a Service (laas)",
          spanish: "Infraestructura como servicio (laas)",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Infrastructure as a Service, también llamado Foundation, es esencialmente un reemplazo de los centros de datos tradicionales. El usuario accede típicamente a servicios existentes dentro de su nube, pero gestiona sus propias instancias de computación.",
      importantWords: [
        {
          german: "Ersatz",
          spanish: "Reemplazo",
        },
        {
          german: "traditionelle Rechenzentren",
          spanish: "Centros de datos tradicionales",
        },
        {
          german: "Benutzer",
          spanish: "Usuario",
        },
        {
          german: "bestehende Dienste",
          spanish: "Servicios existentes",
        },
        {
          german: "verwaltet",
          spanish: "Gestiona",
        },
        {
          german: "eigene Recheninstanzen",
          spanish: "propias instancias de computación",
        },
      ],
    },
  },
  {
    number: "59",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Erkläre das Servicemodell Infrastructure as a Service (IaaS).",
      difficulty: 2,
      importantWords: [{ german: "IaaS", spanish: "IaaS" }],
    },
    answer: {
      title: "Antwort",
      text: "IaaS, auch als Foundation bekannt, ist im Wesentlichen ein Ersatz für traditionelle Rechenzentren. Hier greift der Benutzer auf bestehende Dienstleistungen in der Cloud zu, verwaltet aber seine eigenen Recheninstanzen selbst.",
      importantWords: [
        { german: "IaaS", spanish: "IaaS" },
        { german: "Foundation", spanish: "Foundation" },
        { german: "Rechenzentrum", spanish: "Centro de datos" },
      ],
    },
  },
  {
    number: "59",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Vorteile hat das Servicemodell PaaS (Platform as a Service)?",
      difficulty: 2,
      importantWords: [
        { german: "PaaS", spanish: "PaaS" },
        { german: "Vorteile", spanish: "Ventajas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Vorteile sind: Geringerer Programmieraufwand, zusätzliche Entwicklungsmöglichkeiten ohne Neueinstellungen, einfachere Entwicklung für mehrere Plattformen, kostengünstige Nutzung der Tools und effiziente Verwaltung des Anwendungslebenszyklus.",
      importantWords: [
        { german: "PaaS", spanish: "PaaS" },
        {
          german: "Anwendungsentwicklung",
          spanish: "Desarrollo de aplicaciones",
        },
      ],
    },
  },
  {
    number: "60",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Erkläre den Cloud Computing Begriff Software as a Service (SaaS).",
      difficulty: 2,
      importantWords: [{ german: "SaaS", spanish: "SaaS" }],
    },
    answer: {
      title: "Antwort",
      text: "SaaS beschreibt ein Cloud-Konzept, bei dem Software nicht länger als Lizenz an einen Benutzer verkauft wird, sondern ihm als Service in der Cloud zur Verfügung gestellt wird. Der Zugriff auf die Software wird bei einigen Cloud-Anbietern via Webbrowser gewährleistet.",
      importantWords: [
        { german: "SaaS", spanish: "SaaS" },
        { german: "Lizenz", spanish: "Licencia" },
      ],
    },
  },
  {
    number: "61",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein HBA (Host Bus Adapter)?",
      difficulty: 2,
      importantWords: [
        { german: "HBA", spanish: "HBA" },
        { german: "Host Bus Adapter", spanish: "Adaptador de bus host" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein HBA ist ein Adapter, der eine E/A-Schnittstelle für einen E/A-Prozessor bereitstellt und als Brücke zwischen einem Datenträger und einem Netzwerk fungiert.",
      importantWords: [{ german: "HBA", spanish: "HBA" }],
    },
  },
  {
    number: "62",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Eine unterbrechungsfreie Stromversorgung (USV) wird nach der USV-Klassifizierung nach IEC 62040-3 in 3 Klassen unterteilt. Nenne die 3 Klassen und erkläre deren Wirkungsweise stichpunktartig.",
      difficulty: 3,
      importantWords: [
        {
          german: "unterbrechungsfreie Stromversorgung (USV)",
          spanish: "fuente de alimentación ininterrumpida (USV)",
        },
        {
          german: "Klassifizierung",
          spanish: "clasificación",
        },
        {
          german: "Klassen",
          spanish: "clases",
        },
        {
          german: "Wirkungsweise",
          spanish: "modo de funcionamiento",
        },
        {
          german: "stichpunktartig",
          spanish: "en puntos clave",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Klasse 1: VFI (Voltage and Frequency Independent from mains supply)\nSchützt vor den Folgen eines Stromausfalls, Unterspannung, Überspannung als auch vor Frequenzschwankungen sowie vor Oberschwingungen\nKlasse 2: VI (Voltage Independent from mains supply)\nSchützt vor den Folgen eines Stromausfalls, vor Unterspannung und vor Überspannung\nKlasse 3: VFD (Voltage and Frequency Dependent on mains supply)\nSchützt vor den Folgen eines Stromausfalls, jedoch mit einer Verzögerung von bis zu 10 Millisekunden (ms)",
      importantWords: [
        {
          german: "Stromausfalls",
          spanish: "corte de energía",
        },
        {
          german: "Unterspannung",
          spanish: "subtensión",
        },
        {
          german: "Überspannung",
          spanish: "sobretensión",
        },
        {
          german: "Frequenzschwankungen",
          spanish: "fluctuaciones de frecuencia",
        },
        {
          german: "Oberschwingungen",
          spanish: "armónicas",
        },
        {
          german: "Verzögerung",
          spanish: "retraso",
        },
      ],
    },
  },
  {
    number: "63",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "IT-Infrastrukturen werden heute 7/24 (7 Tage die Woche/24 Stunden, auch 24/7) betrieben. Welche Aufgabe übernimmt in diesem Zusammenhang eine USV?",
      difficulty: 1,
      importantWords: [
        {
          german: "IT-Infrastrukturen",
          spanish: "infraestructuras de TI",
        },
        {
          german: "betrieben",
          spanish: "operadas",
        },
        {
          german: "Aufgabe",
          spanish: "tarea",
        },
        {
          german: "USV",
          spanish: "UPS",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Eine unterbrechungsfreie Stromversorgung (USV) soll die elektrische Versorgung der systemrelevanten IT-Komponenten 7/24 sicherstellen sowie Störungen im Stromnetz zeitlich überbrücken. Des Weiteren schützt eine USV, je nach Klassifizierung, die angeschlossenen IT-Komponenten vor folgenden Störungen:\n\n* kompletter Stromausfall\n* vor Unterspannung\n* vor Überspannung\n* vor Frequenzabweichung\n* vor Oberschwingungen",
      importantWords: [
        {
          german: "elektrische Versorgung",
          spanish: "suministro eléctrico",
        },
        {
          german: "sicherstellen",
          spanish: "asegurar",
        },
        {
          german: "Störungen",
          spanish: "interrupciones",
        },
        {
          german: "Stromnetz",
          spanish: "red eléctrica",
        },
        {
          german: "überbrücken",
          spanish: "superar temporalmente",
        },
        {
          german: "angeschlossenen",
          spanish: "conectados",
        },
      ],
    },
  },
  {
    number: "64",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Aufgabe übernimmt ein Datenbankmanagementsystem, kurz DBMS?",
      difficulty: 2,
      importantWords: [
        {
          german: "Datenbankmanagementsystem",
          spanish: "sistema de gestión de bases de datos",
        },
        {
          german: "DBMS",
          spanish: "SGBD",
        },
        {
          german: "Aufgabe",
          spanish: "tarea",
        },
        {
          german: "übernimmt",
          spanish: "asume",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Datenbankmanagementsystem übernimmt folgende Aufgaben:\n\n* Speicherung, Veränderung und Löschung von Daten\n* Verwaltung der Metadaten\n* Gewährleistung der Datensicherheit und des Datenschutzes\n* trifft Vorkehrungen zur Datenintegrität\n* stellt den Mehrbenutzerbetrieb durch das Transaktionskonzept sicher\n* unterstützt die Optimierung von Abfragen\n* ermöglicht Triggern und Stored Procedures\n* Bereitstellung von Informationen über Technik und Betrieb",
      importantWords: [
        {
          german: "Speicherung",
          spanish: "almacenamiento",
        },
        {
          german: "Veränderung",
          spanish: "modificación",
        },
        {
          german: "Löschung",
          spanish: "eliminación",
        },
        {
          german: "Verwaltung",
          spanish: "gestión",
        },
        {
          german: "Metadaten",
          spanish: "metadatos",
        },
        {
          german: "Gewährleistung",
          spanish: "garantía",
        },
        {
          german: "Datensicherheit",
          spanish: "seguridad de los datos",
        },
        {
          german: "Datenschutz",
          spanish: "protección de datos",
        },
        {
          german: "Vorkehrungen",
          spanish: "precauciones",
        },
        {
          german: "Datenintegrität",
          spanish: "integridad de los datos",
        },
        {
          german: "Mehrbenutzerbetrieb",
          spanish: "funcionamiento multiusuario",
        },
        {
          german: "Transaktionskonzept",
          spanish: "concepto de transacción",
        },
        {
          german: "Optimierung",
          spanish: "optimización",
        },
        {
          german: "Abfragen",
          spanish: "consultas",
        },
        {
          german: "Triggern",
          spanish: "disparadores",
        },
        {
          german: "Stored Procedures",
          spanish: "procedimientos almacenados",
        },
        {
          german: "Bereitstellung",
          spanish: "provisión",
        },
        {
          german: "Informationen",
          spanish: "información",
        },
        {
          german: "Technik",
          spanish: "tecnología",
        },
        {
          german: "Betrieb",
          spanish: "funcionamiento",
        },
      ],
    },
  },
  {
    number: "65",
    withImage: true,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Erkläre die RAID-Matrix.",
      difficulty: 2,
      importantWords: [{ german: "RAID", spanish: "RAID" }],
    },
    answer: {
      title: "Antwort",
      text: 'Hier sind die Merkmale der verschiedenen RAID-Typen:\n\n| Merkmal | RAID 0 | RAID 1 | RAID 5 | RAID 6 | RAID 10 |\n|---|---|---|---|---|---|\n| **Redundanz** | nein | ja | ja | ja | ja |\n| **min. Datenträger** | 2 | 2 | ≥ 3 | ≥ 4 | ≥ 4 |\n| **Rechenaufwand** | sehr gering | sehr gering | mittel | hoch | hoch |\n| **Fehlertoleranz Ausfall von Datenträgern** | 0 | 1 | 1 | 2 | 1 (2)* |\n| **Lese-Performance** | +++ | ++ | +++ | +++ | +++ |\n| **Schreib-Performance** | ++ | + | + | + | +++ |\n| **Kapazität Netto** | 100% | 50% | n-1 | n-2 | 50% |\n\n*Abhängig von den "richtigen" beiden ausgefallenen Datenträgern.',
      importantWords: [
        { german: "RAID", spanish: "RAID" },
        { german: "Redundanz", spanish: "Redundancia" },
        { german: "Rechenaufwand", spanish: "Esfuerzo de cálculo" },
        { german: "Fehlertoleranz", spanish: "Tolerancia a fallos" },
        { german: "Lese-Performance", spanish: "Rendimiento de lectura" },
        { german: "Schreib-Performance", spanish: "Rendimiento de escritura" },
      ],
    },
  },
  {
    number: "66",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was ist eine DMZ?",
      difficulty: 2,
      importantWords: [
        { german: "DMZ", spanish: "DMZ" },
        { german: "Demilitarisierte Zone", spanish: "Zona desmilitarizada" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Eine DMZ (Demilitarisierte Zone) trennt durch ein Subnetz mit Hilfe von Firewall-Routern das interne Netzwerk vom externen Netzwerk ab.",
      importantWords: [
        { german: "DMZ", spanish: "DMZ" },
        { german: "Firewall", spanish: "Cortafuegos" },
      ],
    },
  },
  {
    number: "67",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Aufgabe hat ein Netzwerk-Router?",
      difficulty: 1,
      importantWords: [{ german: "Router", spanish: "Router" }],
    },
    answer: {
      title: "Antwort",
      text: "Ein Router ist ein Netzwerkgerät, das auf der Schicht 3 des OSI-Modells arbeitet und Netzwerkpakete zwischen mehreren Netzwerken weiterleitet. Er kann unterschiedliche Netzwerktechnologien miteinander verbinden.",
      importantWords: [
        { german: "Router", spanish: "Router" },
        { german: "OSI-Modell", spanish: "Modelo OSI" },
      ],
    },
  },
  {
    number: "68",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Nenne die 4 transportorientierten Schichten des OSI-Modells und erkläre ihre Funktion.",
      difficulty: 2,
      importantWords: [
        { german: "OSI-Modell", spanish: "Modelo OSI" },
        { german: "Schichten", spanish: "Capas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Schicht 1 - **Bitübertragungsschicht**: Stellt die physischen Verbindungen zur Datenübertragung bereit. Schicht 2 - **Sicherungsschicht**: Sorgt für eine zuverlässige und fehlerfreie Übertragung. Schicht 3 - **Netzwerkschicht**: Zuständig für die netzwerkübergreifende Adressierung, das Routing und die Fragmentierung von Datenpaketen. Schicht 4 - **Transportschicht**: Gewährleistet die fehlerfreie Übertragung, Segmentierung und Kapselung der Daten.",
      importantWords: [
        { german: "Transportschicht", spanish: "Capa de Transporte" },
        { german: "Netzwerkschicht", spanish: "Capa de Red" },
        { german: "Sicherungsschicht", spanish: "Capa de Enlace de Datos" },
        { german: "Bitübertragungsschicht", spanish: "Capa Física" },
      ],
    },
  },
  {
    number: "69",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was ist eine Broadcast-Domäne?",
      difficulty: 2,
      importantWords: [
        { german: "Broadcast-Domäne", spanish: "Dominio de broadcast" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Begriff Broadcast-Domäne wird für ein Netzwerk aus Netzwerkgeräten, die sich in der OSI-Modell-Schicht 2 befinden, benutzt. Innerhalb einer Broadcast-Domäne gibt es eine oder mehrere Kollisionsdomänen. Eine Broadcast-Domäne ist über Hubs, Switches oder Bridges miteinander verbunden und erreicht mit Hilfe einer Ethernet-Broadcast-Adresse ff:ff:ff:ff:ff:ff alle anderen Domänenteilnehmer.",
      importantWords: [
        { german: "Broadcast-Domäne", spanish: "Dominio de broadcast" },
        { german: "VLAN", spanish: "VLAN" },
      ],
    },
  },
  {
    number: "70",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Network Attached Storage, kurz NAS?",
      difficulty: 1,
      importantWords: [
        { german: "NAS", spanish: "NAS" },
        {
          german: "Network Attached Storage",
          spanish: "Almacenamiento Conectado a la Red",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein NAS ist ein zentralisiertes Speichersystem, das über TCP/IP an das Netzwerk angebunden ist und von einem Betriebssystem verwaltet wird, das Speicherdienste bereitstellt.",
      importantWords: [
        { german: "NAS", spanish: "NAS" },
        { german: "TCP/IP", spanish: "TCP/IP" },
      ],
    },
  },
  {
    number: "71",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein Storage Area Network, kurz SAN?",
      difficulty: 2,
      importantWords: [
        {
          german: "Storage Area Network (SAN)",
          spanish: "Red de área de almacenamiento (SAN)",
        },
        {
          german: "kurz",
          spanish: "abreviado",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Storage Area Network (SAN) bzw. Speichernetzwerk ist die Bezeichnung für ein Netzwerk mit Anbindung an ein Festplattensubsystem, der sogenannten Disk-Arrays oder Tape-Libraries an einem Server. Mit Hilfe der Storage Area Networks werden serielle, kontinuierliche Hochgeschwindigkeitsübertragungen großer Datenmengen ermöglicht, welche über Storage-Controller entweder über Fibre-Channel- oder Ethernet-Verbindungen hergestellt werden. Ein SAN stellt blockbasierten Speicher bereit, der das vom Server bereitgestellte Dateisystem über logische Festplatteneinheiten (LUNs, Logical Unit Number) verbindet.\nBeim NAS erfolgen die Zugriffe über die Protokolle SMB/CIFS oder NFS auf den Datenbestand. Bei einem SAN wird ISCSI, Fibre-Channel, ATA over Ethernet oder InfiniBand genutzt, um auf das Storage Area Networks zuzugreifen. Abhängig vom Dateisystem, z. B. beim VMFS (Virtual Machine File System), sind mehrfach Zugriffe von verschieden Servern möglich.\nDie Festplattensubsysteme stellen über verschiedene RAID-Level, wie RAID 1, 5, 6, 10, 50 und 60 als auch proprietäre Lösungen eine Desaster-Toleranz bzw. Datenredundanz her.",
      importantWords: [
        {
          german: "Speichernetzwerk",
          spanish: "red de almacenamiento",
        },
        {
          german: "Anbindung",
          spanish: "conexión",
        },
        {
          german: "Festplattensubsystem",
          spanish: "subsistema de disco duro",
        },
        {
          german: "Hochgeschwindigkeitsübertragungen",
          spanish: "transmisiones de alta velocidad",
        },
        {
          german: "blockbasierten Speicher",
          spanish: "almacenamiento basado en bloques",
        },
        {
          german: "Datenintegrität",
          spanish: "integridad de los datos",
        },
        {
          german: "RAID-Level",
          spanish: "niveles RAID",
        },
        {
          german: "Desaster-Toleranz",
          spanish: "tolerancia a desastres",
        },
        {
          german: "Datenredundanz",
          spanish: "redundancia de datos",
        },
      ],
    },
  },
  {
    number: "72",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Das Unternehmensnetzwerk (192.168.30.0) der Software GmbH soll zukünftig in 8 Subnetze unterteilt werden. Wie lautet die korrekte Subnetzmaske und wie viele Host IP-Adressen kann ich zusammen in allen 8 Subnetzen nutzen?",
      difficulty: 2,
      importantWords: [
        {
          german: "Unternehmensnetzwerk",
          spanish: "red corporativa",
        },
        {
          german: "unterteilt",
          spanish: "dividida",
        },
        {
          german: "Subnetze",
          spanish: "subredes",
        },
        {
          german: "Subnetzmaske",
          spanish: "máscara de subred",
        },
        {
          german: "Host IP-Adressen",
          spanish: "direcciones IP de host",
        },
        {
          german: "zusammen",
          spanish: "en total",
        },
        {
          german: "nutzen",
          spanish: "usar",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die richte Lösung lautet:\n8 Subnetze = 2³\nSubnetzmaske: 255.255.255.224 oder /27\nHosts IP Adressen: 240 (8 x 32 (Minus Netz-ID und Broadcastadresse) = 8 x 30 = 240)",
      importantWords: [
        {
          german: "Lösung",
          spanish: "solución",
        },
        {
          german: "Subnetzmaske",
          spanish: "máscara de subred",
        },
        {
          german: "Hosts IP Adressen",
          spanish: "direcciones IP de host",
        },
        {
          german: "Netz-ID",
          spanish: "ID de red",
        },
        {
          german: "Broadcastadresse",
          spanish: "dirección de broadcast",
        },
      ],
    },
  },
  {
    number: "73",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was bedeutet in der Netzwerktechnologie der Begriff PoE?",
      difficulty: 2,
      importantWords: [
        {
          german: "Netzwerktechnologie",
          spanish: "tecnología de red",
        },
        {
          german: "Begriff",
          spanish: "término",
        },
        {
          german: "PoE",
          spanish: "PoE",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Power over Ethernet (PoE) bezeichnet ein Verfahren, welches durch die IEEE-Standards definiert ist und mit dem Netzwerkgeräte über das Ethernet-Kabel des lokalen Netzwerks mit Strom versorgt werden können.\nEs gibt verschiedene Standards für PoE, welche in der IEEE 802.3af (PoE), IEEE 802.3at (PoE+), IEEE 802.3bt (4PPoE) sowie IEEE 802.3bu (PoDL) spezifiziert sind.\nTypische Verbraucher für PoE sind:\n\n* IP-Telefonie\n* Wireless Access Points (WAP)\n* IP-Kameras\n* Zeiterfassungsterminals",
      importantWords: [
        {
          german: "Verfahren",
          spanish: "procedimiento",
        },
        {
          german: "Netzwerkgeräte",
          spanish: "dispositivos de red",
        },
        {
          german: "Strom versorgt werden",
          spanish: "suministrar energía",
        },
        {
          german: "lokalen Netzwerks",
          spanish: "red local",
        },
        {
          german: "Verbraucher",
          spanish: "consumidores",
        },
      ],
    },
  },
  {
    number: "74",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Wie lautet die Notation einer isCSI-Verbindung?",
      difficulty: 3,
      importantWords: [
        {
          german: "Notation",
          spanish: "notación",
        },
        {
          german: "isCSI-Verbindung",
          spanish: "conexión iSCSI",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Eine isCSI-Verbindung, die zwischen einem Target und einem Initiator hergestellt werden soll, benötigt jeweils einen iSCSI Qualified Name (IQN). Die IQN stellt somit, vergleichbar einer IP-Adresse für das Ethernet Protokoll, die Adressierung dar.\nDas IQN-Format (iSCSI Qualified Name) hat die folgende Form iqn.yyyy-mm.naming-authority:unique\n\n* iqn (iSCSI Qualified Name)\n* yyyy-mm gibt das Jahr und den Monat an, in dem die Stelle für die Namensvergabe (Naming Authority) erstellt wurde\n* naming-authority:unique (eindeutiger Name) steht für einen beliebigen Namen, z. B. den Namen des Hosts oder des Netzwerkgeräts. Alle zugewiesenen Namen müssen nach der Name Authority mit einem Doppelpunkt getrennt eindeutig sein.\n\nBeispiel:\niqn. 2005-01.com.microsoft.iscsi:name1\niqn.2019-01.com.vmware.storage:name1.99\niqn.2021-02.com.microsoft.Kunden:name.99",
      importantWords: [
        {
          german: "Target",
          spanish: "destino",
        },
        {
          german: "Initiator",
          spanish: "iniciador",
        },
        {
          german: "iSCSI Qualified Name (IQN)",
          spanish: "Nombre cualificado iSCSI (IQN)",
        },
        {
          german: "Adressierung",
          spanish: "direccionamiento",
        },
        {
          german: "IQN-Format",
          spanish: "formato IQN",
        },
        {
          german: "Naming Authority",
          spanish: "autoridad de nomenclatura",
        },
        {
          german: "eindeutiger Name",
          spanish: "nombre único",
        },
        {
          german: "Beispiel",
          spanish: "ejemplo",
        },
        {
          german: "getrennt eindeutig",
          spanish: "separado de forma única",
        },
        {
          german: "zugewiesenen Namen",
          spanish: "nombres asignados",
        },
      ],
    },
  },
  {
    number: "75",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter WWNN, WWN und WWPN im Fibre Channel?",
      difficulty: 2,
      importantWords: [
        { german: "WWNN", spanish: "WWNN" },
        { german: "WWN", spanish: "WWN" },
        { german: "WWPN", spanish: "WWPN" },
        { german: "Fibre Channel", spanish: "Fibre Channel" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Beim Fibre Channel hat jedes Gerät einen weltweit eindeutigen WWNN (World Wide Node Name), manchmal auch nur WWN (World Wide Name) genannt, sowie jeder Port pro Gerät einen WWPN (World Wide Port Name). Dabei handelt es sich um einen 64-Bit-Wert (hexadezimal), der jedes Fibre-Channel-Gerät eindeutig identifiziert. Der WWNN/WWN ist das Äquivalent zur MAC-Adresse bei Ethernet Netzwerkkarten/Netzwerkgeräten.",
      importantWords: [
        { german: "WWNN", spanish: "WWNN" },
        { german: "WWN", spanish: "WWN" },
        { german: "WWPN", spanish: "WWPN" },
        { german: "MAC-Adresse", spanish: "Dirección MAC" },
      ],
    },
  },
  {
    number: "76",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Aufgabe hat bei IPv4 eine Broadcast-Adresse?",
      difficulty: 2,
      importantWords: [
        { german: "Broadcast-Adresse", spanish: "Dirección de broadcast" },
        { german: "IPv4", spanish: "IPv4" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Mit Hilfe einer Broadcast-Adresse werden alle Netzwerkgeräte eines lokalen Netzwerkes erreicht, ohne es dediziert anzugeben. Eine Broadcast-IP-Adresse wird in jedem Netzwerk nur einmal vergeben. Sie ist immer die letzte IP-Adresse des Subnetzes.",
      importantWords: [
        { german: "Broadcast-Adresse", spanish: "Dirección de broadcast" },
      ],
    },
  },
  {
    number: "77",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man bei IPv6 unter einer Stateless Address Autoconfiguration?",
      difficulty: 2,
      importantWords: [
        { german: "SLAAC", spanish: "SLAAC" },
        { german: "IPv6", spanish: "IPv6" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "SLAAC (Stateless Address Autoconfiguration) ist das Äquivalent zum APIPA in IPv4. Er ermöglicht es jeder IPv6-Stack, eine Link-lokale IPv6-Adresse per Autokonfiguration zu erhalten. Diese Adressen beginnen immer mit FE80:.",
      importantWords: [
        { german: "SLAAC", spanish: "SLAAC" },
        { german: "Autoconfiguration", spanish: "Autoconfiguración" },
      ],
    },
  },
  {
    number: "78",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Worin besteht der Unterschied zwischen Singlemode- und Multimode-Glasfasern?",
      difficulty: 2,
      importantWords: [
        { german: "Glasfasern", spanish: "Fibras ópticas" },
        { german: "Singlemode", spanish: "Singlemode" },
        { german: "Multimode", spanish: "Multimode" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Hauptunterschied liegt im Durchmesser des Faserkerns. Die Singlemode-Faser hat einen Kerndurchmesser von 9µm, während die Multimode-Faser einen Kerndurchmesser von 50µm oder 62,5µm hat. Singlemode-Fasern können auch größere Entfernungen (bis zu 10.000 Meter) überbrücken als Multimode-Fasern (bis zu 2.000 Meter).",
      importantWords: [
        { german: "Singlemode", spanish: "Singlemode" },
        { german: "Multimode", spanish: "Multimode" },
        { german: "Durchmesser", spanish: "Diámetro" },
      ],
    },
  },
  {
    number: "79",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Nenne Vor- und Nachteile von Singlemode-Glasfasern.",
      difficulty: 2,
      importantWords: [
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Nachteile", spanish: "Desventajas" },
        { german: "Singlemode", spanish: "Singlemode" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "**Vorteile**: geringe Dämpfung des Signals, kaum Laufzeitverschiebungen, große Distanzen überbrückbar, hohe Bandbreiten. **Nachteile**: teurere Laser zur Einspeisung des Lichts notwendig, größerer Aufwand bei der Herstellung der Glasfasern aufgrund der sehr kleinen Faserkerne, hohe Präzision beim Verbinden der Glasfasern durch Stecker oder beim Spleißen notwendig.",
      importantWords: [
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Nachteile", spanish: "Desventajas" },
      ],
    },
  },
  {
    number: "80",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Nenne Vor- und Nachteile von Multimodefasern.",
      difficulty: 2,
      importantWords: [
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Nachteile", spanish: "Desventajas" },
        { german: "Multimode", spanish: "Multimode" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "**Vorteile**: geringerer Herstellungsaufwand, einfachere Anschlusstechnik. **Nachteile**: höhere Dämpfung des Signals, geringere maximale Bandbreite, kürzere Distanzen, Notwendigkeit von Repeatern oder Signalregeneratoren bei größeren Distanzen.",
      importantWords: [
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Nachteile", spanish: "Desventajas" },
      ],
    },
  },
  {
    number: "81",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Aufgabe hat das Simple Network Management Protocol, kurz SNMP?",
      difficulty: 3,
      importantWords: [
        {
          german: "Aufgabe",
          spanish: "tarea",
        },
        {
          german: "Simple Network Management Protocol (SNMP)",
          spanish: "Protocolo simple de gestión de red (SNMP)",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: 'Das Simple Network Management Protocol (SNMP; übersetzt „einfaches Netzwerkverwaltungsprotokoll") ist ein Netzwerkprotokoll, welches von der IETF (Internet Engineering Task Force) entwickelt wurde mit dem Ziel, Netzwerkelemente wie Router, Server, Switches, Drucker, Computer, Temperatursensoren und andere SNMP-taugliche Geräte mit Hilfe einer zentralen Management Konsole aus überwachen und steuern zu können.\nSogenannte SNMP-Agenten werden auf den Geräten eingesetzt, um mit der Management Konsole über SNMP-Traps oder GET-REQUEST über den Port 161/UDP bzw. Port 162/UDP (Trap) zu kommunizieren. SNMPv3 ist zurzeit die aktuelle Version von SNMP (Stand 2021).',
      importantWords: [
        {
          german: "Netzwerkprotokoll",
          spanish: "protocolo de red",
        },
        {
          german: "Netzwerkelemente",
          spanish: "elementos de red",
        },
        {
          german: "zentralen Management Konsole",
          spanish: "consola de gestión central",
        },
        {
          german: "überwachen",
          spanish: "monitorear",
        },
        {
          german: "steuern",
          spanish: "controlar",
        },
        {
          german: "SNMP-Agenten",
          spanish: "agentes SNMP",
        },
        {
          german: "eingesetzt",
          spanish: "utilizados",
        },
      ],
    },
  },
  {
    number: "82",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Aufgaben hat ein DHCP-Server innerhalb der IT-Infrastruktur?",
      difficulty: 2,
      importantWords: [
        {
          german: "Aufgaben",
          spanish: "tareas",
        },
        {
          german: "DHCP-Server",
          spanish: "servidor DHCP",
        },
        {
          german: "IT-Infrastruktur",
          spanish: "infraestructura de TI",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das Dynamic Host Configuration Protocol (DHCP) ist ein Kommunikationsprotokoll, welches Netzwerkgeräten ermöglicht ohne manuelle Konfiguration eine automatische Netzwerkkonfiguration für das lokalen Netz zu erhalten.\nMit Hilfe des DHCPDISCOVER sendet ein Client/Netzwerkgerät ohne IP-Adresse eine Broadcast-Anfrage nach sogenannten Adress-Angeboten an alle verfügbaren DHCP-Server im lokalen Netz. Wenn im lokalen Netz ein DHCP-Server erreichbar ist, antwortet dieser mit einem DHCPOFFER. Im Anschluss fordert der Client im Zuge des Verfahrens mit Hilfe des DHCPREQUEST die angebotene IP-Adresse für einen Lease-Zeitraum an. Dabei wird unterschieden in statische, automatische und dynamische Adresszuweisung.\nDie Adresszuweisung erfolgt über die UDP-Ports 67 und 68.\nZur Netzwerkkonfiguration kann ein DHCP folgende Angaben versenden:\n* IP-Adresse und Netzwerkmaske\n* Default-Gateway\n* DNS-Server, DNS-Context und DNS-Tree\n* Sekundärer DNS-Server\n* Time- und NTP-Server\n* WINS-Server (für Microsoft Windows Clients)\n* Proxy-Konfiguration via WPAD\n* weitere DHCP Optionen z. B. Angaben für PXE-Boo",
      importantWords: [
        {
          german: "Kommunikationsprotokoll",
          spanish: "protocolo de comunicación",
        },
        {
          german: "Netzwerkkonfiguration",
          spanish: "configuración de red",
        },
        {
          german: "manuelle Konfiguration",
          spanish: "configuración manual",
        },
        {
          german: "Broadcast-Anfrage",
          spanish: "solicitud de difusión",
        },
        {
          german: "Adress-Angeboten",
          spanish: "ofertas de direcciones",
        },
        {
          german: "Lease-Zeitraum",
          spanish: "período de alquiler",
        },
        {
          german: "Adresszuweisung",
          spanish: "asignación de direcciones",
        },
      ],
    },
  },
  {
    number: "83",
    withImage: true,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Bitte vergleiche die Protokolle UDP und TCP miteinander und fülle die folgende Tabelle aus.",
      difficulty: 3,
      importantWords: [
        {
          german: "vergleiche",
          spanish: "comparar",
        },
        {
          german: "Protokolle",
          spanish: "protocolos",
        },
        {
          german: "ausfüllen",
          spanish: "llenar",
        },
        {
          german: "Tabelle",
          spanish: "tabla",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "(revisar tarjeta 83)",
      importantWords: [
        {
          german: "Tabelle",
          spanish: "tabla",
        },
      ],
    },
  },
  {
    number: "84",
    withImage: false,
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche verkürzte Schreibweise der IPv6-Adresse 2001:0db8:0f3c:00d7:7dab:03d0:0000:00ff sind erlaubt?\n\n1. 2001:db8:f3c:d7:7dab:3d:0:ff\n2. 2001:db8:f3c:d7:7dab:3d0:0:ff\n3. 2001:db8:f3c:d7:7dab:3d0::ff\n4. 2001:0db8:0f3c:00d7:7dab:03d::00ff",
      difficulty: 2,
      importantWords: [
        {
          german: "verkürzte Schreibweise",
          spanish: "notación abreviada",
        },
        {
          german: "IPv6-Adresse",
          spanish: "dirección IPv6",
        },
        {
          german: "erlaubt",
          spanish: "permitidas",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "2 und 3",
      importantWords: [
        {
          german: "Lösung",
          spanish: "solución",
        },
      ],
    },
  },
  {
    number: "86",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was ist ein getaggtes (tagged) VLAN?",
      difficulty: 2,
      importantWords: [
        { german: "tagged", spanish: "etiquetado" },
        { german: "VLAN", spanish: "VLAN" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das tagged VLAN kommt immer dann zum Einsatz, wenn sich VLANs über mehrere Switches hinweg erstrecken, zum Beispiel über sogenannte Trunk Ports. Hier werden die Ethernet-Frames mit einer Art Markierung versehen, welche die Zugehörigkeit zum jeweiligen VLAN kennzeichnet. Mit Hilfe von Tags (engl. Etikett) werden dem Ethernet-Frame VLAN-spezifische Informationen hinzugefügt, die dann durch VLAN-fähige Switche ausgewertet werden.",
      importantWords: [
        { german: "tagged", spanish: "etiquetado" },
        { german: "Tags", spanish: "Etiquetas" },
        { german: "Trunk Ports", spanish: "Puertos troncales" },
      ],
    },
  },
  {
    number: "87",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Beschreibe typische Merkmale des Client-Server-Modells.",
      difficulty: 2,
      importantWords: [
        { german: "Client-Server-Modells", spanish: "Modelo cliente-servidor" },
        { german: "Merkmale", spanish: "Características" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das Client-Server-Modell (Client-Server-Konzept) beschreibt ein Prinzip, Aufgaben und Services innerhalb eines bestimmten Netzwerkes zu verteilen. Kernaufgabe dieses Modells ist es, vom Server bereitgestellte Aufgaben und Services dem Client zur Nutzung zur Verfügung zu stellen. Beispielsweise können das Webservices, Datei- und Mailingservices sein. Typische Merkmale eines Client-Server-Modells sind: Server stellen Dienste bereit, Clients fragen Dienste bei Servern an. Kommunikationsregeln und den Informationsaustausch zwischen Client und Server übernehmen Protokolle. Ein Server bedient ein oder mehrere Clients. Die Server- und Clientfunktionen sind nicht an eine physische Hardware gebunden. Physische/virtuelle Server können gleichzeitig Client- als auch Serveraufgaben ausführen.",
      importantWords: [
        { german: "Client-Server-Modell", spanish: "Modelo cliente-servidor" },
        { german: "Server", spanish: "Servidor" },
        { german: "Client", spanish: "Cliente" },
      ],
    },
  },
  {
    number: "88",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Aufgaben hat ein Domain Name System (DNS) in einer Windows Domänenlandschaft bzw. Active Directory?",
      difficulty: 2,
      importantWords: [
        {
          german: "Domain Name System",
          spanish: "Sistema de nombres de dominio",
        },
        { german: "Active Directory", spanish: "Active Directory" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das Domain Name System (DNS) stellt einen der wichtigsten Dienste in IP-basierten Netzwerken dar. Das Domain Name System dient der Beantwortung von Anfragen zur Namensauflösung. Konkret wird dabei der angefragte Name in eine IP-Adresse übersetzt und als Ergebnis der Anfrage zurück geliefert. In windowsbasierten Domänen kommt zusätzlich der Reverse Lookup Anfrage die Aufgabe zu, eine angefragte IP-Adresse als Namen zu ermitteln und als Ergebnis zurückzuliefern. Dieses Reverse Lookup wird mit Hilfe von PTR Ressource Records in der Reverse Lookup Zone des Active Directory gewährleistet.",
      importantWords: [
        {
          german: "Domain Name System",
          spanish: "Sistema de nombres de dominio",
        },
        { german: "Namensauflösung", spanish: "Resolución de nombres" },
        { german: "IP-Adresse", spanish: "Dirección IP" },
      ],
    },
  },
  {
    number: "89",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Unterscheide die Mailingprotokolle IMAP/S, SMTP/S sowie POP3/S nach ihren Eigenschaften.",
      difficulty: 3,
      importantWords: [
        { german: "Mailingprotokolle", spanish: "Protocolos de correo" },
        { german: "IMAP/S", spanish: "IMAP/S" },
        { german: "SMTP/S", spanish: "SMTP/S" },
        { german: "POP3/S", spanish: "POP3/S" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "SMTPS (Simple Mail Transfer Protocol Secure) bezeichnet ein Kommunikationsprotokoll des Postausgangs bei dem der E-Mail-Transport via SMTP über SSL/TLS über den Port 465 ermöglicht wird. Mit Hilfe von SSL/TLS wird die Authentifizierung der Kommunikationspartner auf Transportebene sowie Integrität und Vertraulichkeit der übertragenen Nachrichten gewährleistet. IMAPS (Internet Message Access Protocol Secure) ist ein E-Mail Kommunikationsprotokoll für den Posteingang, welcher mit SSL/TLS über den Port 993 den gesicherten Transport sicherstellt. Beim IMAP/IMAPS werden die Mails, Ordnerstrukturen und Einstellungen auf den Mail-Servern gespeichert und lokal synchronisiert. POP3/S (Post Office Protocol 3 Secure) ist ein E-Mail Kommunikationsprotokoll für den Posteingang und nutzt eine Verschlüsselung mit Hilfe von SSL/TLS über den Port 995. Im Gegensatz zum IMAP Protokoll werden POP3 Posteingänge heruntergeladen bzw. anschließend bei Bedarf gelöscht.",
      importantWords: [
        { german: "SMTP/S", spanish: "SMTP/S" },
        { german: "IMAP/S", spanish: "IMAP/S" },
        { german: "POP3/S", spanish: "POP3/S" },
      ],
    },
  },
  {
    number: "90",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was bedeutet der Begriff Standby- oder Offline-USV?",
      difficulty: 1,
      importantWords: [
        {
          german: "Standby- oder Offline-USV",
          spanish: "SAI en espera o fuera de línea",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die einfachen unterbrechungsfreien Stromversorgungen der USV-Klasse 3 sind Standby- bzw. Offline-USVs. Sie schützen generell nur gegen Stromausfälle sowie kurzzeitige Spannungsschwankungen. Die Unter- und Überspannungen im Netz können nicht ausgeglichen werden. Wegen der doch recht langsamen Umschaltdauer von 4 bis 10 Millisekunden (ms) zwischen Netzbetrieb auf Batteriebetrieb können Störspannungen, Spannungseinbrüche und Spannungsspitzen unterhalb dieser Zeit nicht erkannt werden.",
      importantWords: [
        { german: "USV-Klasse 3", spanish: "Clase 3 de SAI" },
        { german: "Standby", spanish: "En espera" },
        { german: "Offline", spanish: "Fuera de línea" },
      ],
    },
  },
  {
    number: "91",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter einer Online-USV?",
      difficulty: 1,
      importantWords: [{ german: "Online-USV", spanish: "SAI en línea" }],
    },
    answer: {
      title: "Antwort",
      text: "Die Online-USV (USV-Klasse 1) gilt als die teuerste Variante unter den unterbrechungsfreien Stromversorgungen, sie bietet jedoch auch den umfassendsten Schutz durch permanente Erzeugung einer Sinusspannung am Ausgang. Alle angeschlossenen Verbraucher werden dauerhaft und ohne Einschränkungen mit Netzspannung versorgt, während gleichzeitig die Batterie aufgeladen wird. Bei Netzausfall erfolgt ein unterbrechungsfreier Übergang auf die Batterieeinspeisung. Die Eingangsspannung kann zwischen 160 Volt und 290 Volt schwanken, während die Ausgangsspannung nahezu einer Sinuskurve entspricht. Ein Netzausgang einer Online-USV ist frei von Störspannungen, elektromagnetischen Einflüssen, Frequenzstörungen und Spannungsverzerrungen.",
      importantWords: [
        { german: "Online-USV", spanish: "SAI en línea" },
        { german: "Sinusspannung", spanish: "Tensión sinusoidal" },
      ],
    },
  },
  {
    number: "92",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter der Bezeichnung Netzinteraktive USV?",
      difficulty: 1,
      importantWords: [
        { german: "Netzinteraktive USV", spanish: "SAI de línea interactiva" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Netzinteraktive unterbrechungsfreie Stromversorgungen (USV-Klasse 2) funktionieren ähnlich wie das Standby-USV Funktionsprinzip. Sie schützen allgemein vor dem Stromausfall sowie vor kurzzeitigen Spannungsspitzen und sind in der Lage, durch Filter Spannungsschwankungen auszugleichen. Im Gegensatz zur Offline-USV liegen die Umschaltzeiten vom Netzbetrieb zum Batteriebetrieb zwischen kurzen 2 bis 4 Millisekunden. Die Umschaltzeit vom Batteriebetrieb zum Netzbetrieb ist nahezu verzögerungsfrei.",
      importantWords: [
        { german: "Netzinteraktive", spanish: "Línea interactiva" },
        {
          german: "Spannungsschwankungen",
          spanish: "Fluctuaciones de tensión",
        },
      ],
    },
  },
  {
    number: "93",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was bedeutet der Begriff SSID (Service Set Identifier)?",
      difficulty: 1,
      importantWords: [
        { german: "SSID", spanish: "SSID" },
        {
          german: "Service Set Identifier",
          spanish: "Identificador de conjunto de servicios",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die SSID (Service Set Identifier) ist laut IEEE (Institute of Electrical and Electronics Engineers) der frei wählbare Name eines drahtlosen Funknetzwerks und wird auch oft als Netzwerkname bezeichnet. Eine SSID darf bis zu 32 Byte ASCII Zeichen lang sein, Groß- und Kleinschreibung ist hierbei zu beachten. Die SSID stellt auch eine Art Broadcastdomäne für Funknetze dar. Mittlerweile gibt es auch die Multi-SSID, die mehrere Broadcastdomänen verwalten kann.",
      importantWords: [
        { german: "SSID", spanish: "SSID" },
        { german: "IEEE", spanish: "IEEE" },
      ],
    },
  },
  {
    number: "94",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter den Begriffen CMS-, ERP- und CRM-System?",
      difficulty: 1,
      importantWords: [
        { german: "CMS", spanish: "CMS" },
        { german: "ERP", spanish: "ERP" },
        { german: "CRM", spanish: "CRM" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "CMS – Content Management System: Stellt ein Managementsystem zum Verwalten, zur Konfiguration und der redaktionellen Bearbeitung von Inhalten (z. B. für Webseiten) dar. ERP – Enterprise Ressource Planning System: Ist ein umfangreiches Werkzeug zur Unterstützung der Ressourcenplanung aller Prozesse eines Unternehmens, zum Beispiel Produktion, Materialwirtschaft und Vertrieb. CRM – Customer Relationship Management System: Ist ein Werkzeug zur vollständigen Planung, Steuerung und Durchführung aller interaktiven Prozesse mit den Kunden und unterstützt die Kundenkommunikation.",
      importantWords: [
        { german: "CMS", spanish: "CMS" },
        { german: "ERP", spanish: "ERP" },
        { german: "CRM", spanish: "CRM" },
      ],
    },
  },
  {
    number: "95",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Maßnahmen sind geeignet, um die Verarbeitungsgeschwindigkeit eines Personal Computers zu verbessern?",
      difficulty: 2,
      importantWords: [
        {
          german: "Verarbeitungsgeschwindigkeit",
          spanish: "Velocidad de procesamiento",
        },
        { german: "Personal Computer", spanish: "Ordenador personal" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Folgende Maßnahmen können zur Verbesserung der Verarbeitungsgeschwindigkeit beitragen: Austausch von SATA HDDs mit geringer Umdrehungszahl gegen HDDs mit 10K/rpm. Einsatz von SSD/M.2 gegenüber Sata-HDDs. Aufteilung des Betriebssystems und der Anwendungsprogramme auf unterschiedlichen Datenträgern (OS auf M.2, Daten auf SSD). Austausch 100 Mbit/s Netzwerkkarte gegen 1 Gbit/s Netzwerkkarte.",
      importantWords: [
        { german: "SATA HDDs", spanish: "HDDs SATA" },
        { german: "SSD/M.2", spanish: "SSD/M.2" },
      ],
    },
  },
  {
    number: "96",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Berechne die Gesamtleistungsaufnahme für folgende IT-Landschaft für ein Jahr. Alle Geräte werden 24/7 betrieben. Gib das Ergebnis in Kilowatt an. 10x Server Leistungsaufnahme 800 Watt, 25x Desktop PCs Leistungsaufnahme 350 Watt, 2x Switch Leistungsaufnahme 200 Watt",
      difficulty: 3,
      importantWords: [
        {
          german: "Gesamtleistungsaufnahme",
          spanish: "Consumo total de energía",
        },
        { german: "Kilowatt", spanish: "Kilovatio" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Lösung: 10x Server Leistungsaufnahme 800 Watt = 8.000 Watt = 8,0 KW/h. 25x Desktop PCs Leistungsaufnahme 350 Watt = 8.750 Watt = 8,75 KW/h. 2x Switch Leistungsaufnahme 200 Watt = 400 Watt = 0,4 KW/h. 17,15 KW/h * 8.760 Stunden = 150.234 KW.",
      importantWords: [
        { german: "Kilowatt", spanish: "Kilovatio" },
        { german: "Leistungsaufnahme", spanish: "Consumo de energía" },
      ],
    },
  },
  {
    number: "97",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Wie berechnet man die Wirkleistung von elektrischen Geräten?",
      difficulty: 1,
      importantWords: [{ german: "Wirkleistung", spanish: "Potencia activa" }],
    },
    answer: {
      title: "Antwort",
      text: "Die elektrische Leistungsberechnung von IT-Komponenten unterliegt den allgemeinen Gesetzen der Elektrotechnik. Die elektrische Wirkleistung P ist das Produkt von Spannung U und der Stromstärke I. Die Berechnung erfolgt wie folgt: P=U*I. Die Berechnung wird in der Maßeinheit Watt angegeben. Die Leistungsangaben von elektrischen Geräten gelten immer für die Dauer mit 60 Minuten bzw. 1 Stunde. Beispiel: 230V * 16A = 3.680 VA / Watt (3,68 KW). Dieses elektrische Gerät verbraucht demnach 3,68 KW/h.",
      importantWords: [
        { german: "Wirkleistung", spanish: "Potencia activa" },
        { german: "Spannung", spanish: "Tensión" },
        { german: "Stromstärke", spanish: "Intensidad de corriente" },
      ],
    },
  },
  {
    number: "98",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Nenne die Vor- und Nachteile der Virtualisierung von Servern und Desktops auch unter Berücksichtigung von Cloudangeboten.",
      difficulty: 3,
      importantWords: [
        { german: "Virtualisierung", spanish: "Virtualización" },
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Nachteile", spanish: "Desventajas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Vorteile: Stromersparnis, Skalierbarkeit, Redundante Systeme (Ausfallsicherheit), Schnellere Server-Provisionierung, so gut wie keine Kapazitätsbeschränkungen, Nutzung von kostengünstigen Angeboten, keine Investitionskosten bei Cloudanbietern (pay-as-you-go), Lebensverlängerung alter Software. Nachteile: nicht jede Lösung ist kostengünstig für den 24/7-Einsatz, eventuell höhere Latenzzeiten mit zu vielen virtuellen Maschinen pro Host, Hardware und Software kann nicht zu 100% selbst administriert werden, Individuallösungen nicht immer möglich, angebotene Lösungen nicht in allen Regionen erhältlich.",
      importantWords: [
        { german: "Virtualisierung", spanish: "Virtualización" },
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "Nachteile", spanish: "Desventajas" },
      ],
    },
  },
  {
    number: "99",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was bedeutet der Begriff Serverkonsolidierung?",
      difficulty: 2,
      importantWords: [
        {
          german: "Serverkonsolidierung",
          spanish: "Consolidación de servidores",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Serverkonsolidierung ist eine Form der Konsolidierung von Serverressourcen, bei der man auf die Möglichkeiten der Virtualisierung setzt. Mit Hilfe von virtuellen Maschinen (VM) oder virtuellen Umgebungen (Virtual Environment VE) soll eine Energie- und Raumeinsparung durch Reduktion der physikalischen Serversysteme erreicht werden. Kurz gefasst: z. B. 10 physische Server werden durch einen performanten Server ersetzt und die 10 Server virtualisiert.",
      importantWords: [
        {
          german: "Serverkonsolidierung",
          spanish: "Consolidación de servidores",
        },
        { german: "Virtualisierung", spanish: "Virtualización" },
      ],
    },
  },
  {
    number: "100",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Arten von Anforderungen gibt es an Software?",
      difficulty: 2,
      importantWords: [
        { german: "Anforderungen", spanish: "Requisitos" },
        { german: "Software", spanish: "Software" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Geschäftsanforderungen sind die Anforderungen, welche sich aus der Geschäftstätigkeit des Kunden und den Marktanforderungen ergeben. Die Geschäftsanforderungen werden durch das Management und das Marketing festgelegt. Benutzeranforderungen sind die für die Benutzer des Softwaresystems erforderlichen Anforderungen, um die Geschäftsanforderungen zu erfüllen. Die Benutzeranforderungen werden durch Geschäftsanalysten, durch Benutzer oder Vertretern der Benutzer, sowie Produktmanager definiert. Funktionale Anforderungen erfassen das Verhalten, welches eine Software erfüllen muss, um die Benutzeranforderungen zu gewährleisten. Funktionale Anforderungen werden durch Geschäftsanalysten und Produktmanager in Absprache mit der Softwareentwicklung und der Testabteilung definiert. Projektanforderungen sind die nötigen Anforderungen, die den Erfolg eines Projekts sichern, um alle Anforderungen des Projekts umsetzen zu können und das Produkt im Zuge des Application Lifecycle Managements (ALM) betreuen zu können.",
      importantWords: [
        { german: "Geschäftsanforderungen", spanish: "Requisitos de negocio" },
        { german: "Benutzeranforderungen", spanish: "Requisitos de usuario" },
        {
          german: "Funktionale Anforderungen",
          spanish: "Requisitos funcionales",
        },
        { german: "Projektanforderungen", spanish: "Requisitos del proyecto" },
      ],
    },
  },
  {
    number: "101",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Welche Kosten entstehen für ein Rechenzentrum (on-Premises) mit einer Server-Client Struktur?",
      difficulty: 2,
      importantWords: [
        { german: "Kosten", spanish: "Costos" },
        { german: "Rechenzentrum", spanish: "Centro de datos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Folgende Kosten sind zu betrachten: Kauf/Miete für Gebäude/Raum, Anschaffungskosten (IT-Hardware, Software, Kühlung), evtl. Miet-/Leasinggebühren (Hardware/Software), Lizenzgebühren (Betriebssystem/Anwendersoftware), Energiekosten (Hardware/Kühlung/Sicherheitstechnik), Wartung/Instandhaltung, Brandschutz, Sicherheitstechnik, Versicherungen.",
      importantWords: [
        { german: "Kosten", spanish: "Costos" },
        { german: "Anschaffungskosten", spanish: "Costos de adquisición" },
        { german: "Lizenzgebühren", spanish: "Tarifas de licencia" },
      ],
    },
  },
  {
    number: "102",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Du machst einen Kostenvergleich für den Kauf von mehreren Servern und deren Service. Die Server sind für den 7/24-Einsatz gedacht. Bitte vergleiche das Leasingmodell, die Kaufvariante und das Modell Pay-per-use miteinander. Welches ist die kostengünstigste Variante über eine Laufzeit von 3 Jahren?",
      difficulty: 3,
      importantWords: [
        { german: "Kostenvergleich", spanish: "Comparación de costos" },
        { german: "Leasingmodell", spanish: "Modelo de arrendamiento" },
        { german: "Kaufvariante", spanish: "Opción de compra" },
        { german: "Pay-per-use", spanish: "Pago por uso" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das Ergebnis des Vergleichs zeigt, dass das Pay-per-use Modell über die Laufzeit von 3 Jahren die kostengünstigste Variante ist. Leasing: 36 * 3.500 € = 126.000 €. 126.000 € + 30.000 € = 156.000 €. Kauf: 100.000 € + 30.000 € = 130.000 €. Pay-per-use: 3,22 €/h * 24 h * 365 d * 3 y = 3,22 €/h * 26.280 h = 84.621,60 €.",
      importantWords: [
        { german: "Leasing", spanish: "Arrendamiento" },
        { german: "Kauf", spanish: "Compra" },
        { german: "Pay-per-use", spanish: "Pago por uso" },
      ],
    },
  },
  {
    number: "103",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Aus welchen Bestandteilen besteht eine Handelskalkulation? Wie unterscheidet sie sich von der Zuschlagskalkulation (Vorkalkulation)?",
      difficulty: 3,
      importantWords: [
        { german: "Handelskalkulation", spanish: "Cálculo comercial" },
        { german: "Zuschlagskalkulation", spanish: "Cálculo de recargo" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Handelskalkulation besteht aus den folgenden Bestandteilen: Listenverkaufspreis, Lieferer-Rabatt, Zieleinkaufspreis, Lieferer-Skonto, Bareinkaufspreis, Bezugskosten, Bezugspreis, Handlungskosten, Selbstkosten, Gewinn, Barverkaufspreis, Kundenskonto, Zielverkaufspreis, Kundenrabatt, Listenverkaufspreis. In der Zuschlagskalkulation als Vorkalkulation der Produktion können die Selbstkosten auch wie folgt ermittelt werden: Materialeinzelkosten, Materialgemeinkosten, Lohneinzelkosten, Lohngemeinkosten, Herstellkosten, Herstellkosten, Verwaltungsgemeinkosten, Vertriebsgemeinkosten, Selbstkosten.",
      importantWords: [
        { german: "Handelskalkulation", spanish: "Cálculo comercial" },
        { german: "Zuschlagskalkulation", spanish: "Cálculo de recargo" },
      ],
    },
  },
  {
    number: "104",
    section: "Beurteilen marktgängiger IT-Systeme und Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter dem Begriff der Bedarfsanalyse?",
      difficulty: 1,
      importantWords: [
        { german: "Bedarfsanalyse", spanish: "Análisis de necesidades" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Unter dem Begriff Bedarfsanalyse versteht man eine Analyseart zur Feststellung des Bedarfs an Waren, Dienstleistungen, Gütern oder Personal für eine bestimmte Region/Land sowie für bestimmte Personengruppen oder für einen bestimmten Zeitraum. Der Zweck der Bedarfsanalyse besteht darin, zukünftige Beschaffungsprozesse oder Projekte besser zu planen.",
      importantWords: [
        { german: "Bedarfsanalyse", spanish: "Análisis de necesidades" },
      ],
    },
  },
];
