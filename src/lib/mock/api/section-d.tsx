import { Card } from "@/lib/interfaces/cards";

export const sectionD: Card[] = [
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
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Nenne die 4 Features, die verhindern, dass während des Startvorgangs von Windows 10 Schadsoftware wie Rootkits und Bootkits geladen werden können.",
      difficulty: 3,
      importantWords: [
        {
          german: "Features",
          spanish: "características",
        },
        {
          german: "verhindern",
          spanish: "evitar",
        },
        {
          german: "Startvorgangs",
          spanish: "proceso de arranque",
        },
        {
          german: "Schadsoftware",
          spanish: "software malicioso",
        },
        {
          german: "Rootkits",
          spanish: "rootkits",
        },
        {
          german: "Bootkits",
          spanish: "bootkits",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "1. Sicherer Start\nComputer mit einer UEFI-Firmware und einem Trusted Platform Module (TPM) können so konfiguriert werden, dass nur vertrauenswürdige Betriebssystem-Startladeprogramme geladen werden.\n2. Vertrauenswürdiger Start\nWindows überprüft während des Startvorgangs die Integrität jeder Komponente, bevor diese in den Arbeitsspeicher geladen wird.\n3. Antischadsoftware-Frühstart (Early Launch Antimalware, ELAM)\nMit der ELAM werden alle Treiber vor dem Laden getestet, um zu verhindern, dass nicht zertifizierte oder genehmigte Treiber mit dem Betriebssystem geladen werden.\n4. Kontrollierter Start\nDie Firmware des PCs protokolliert den Startvorgang, und Windows kann die Informationen an einen vertrauenswürdigen Server senden, der die Integrität des PCs objektiv prüfen und bewerten kann.",
      importantWords: [
        {
          german: "Sicherer Start",
          spanish: "Arranque seguro",
        },
        {
          german: "UEFI-Firmware",
          spanish: "firmware UEFI",
        },
        {
          german: "Trusted Platform Module (TPM)",
          spanish: "Módulo de plataforma segura (TPM)",
        },
        {
          german: "Vertrauenswürdiger Start",
          spanish: "Arranque de confianza",
        },
        {
          german: "Integrität",
          spanish: "integridad",
        },
        {
          german:
            "Antischadsoftware-Frühstart (Early Launch Antimalware, ELAM)",
          spanish: "Arranque temprano con antimalware (ELAM)",
        },
        {
          german: "Treiber",
          spanish: "controladores",
        },
        {
          german: "zertifizierte",
          spanish: "certificados",
        },
        {
          german: "Kontrollierter Start",
          spanish: "Arranque controlado",
        },
        {
          german: "Firmware",
          spanish: "firmware",
        },
        {
          german: "protokolliert",
          spanish: "registra",
        },
        {
          german: "vertrauenswürdigen Server",
          spanish: "servidor de confianza",
        },
      ],
    },
  },
  {
    number: "111",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was versteht man unter einem Service-Tag oder Asset-Tag?",
      difficulty: 2,
      importantWords: [
        {
          german: "versteht man unter",
          spanish: "qué se entiende por",
        },
        {
          german: "Service-Tag",
          spanish: "etiqueta de servicio",
        },
        {
          german: "Asset-Tag",
          spanish: "etiqueta de activo",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Asset-Tags oder Service-Tags identifizieren Geräte mit einer eindeutigen Seriennummer oder einem Bar- oder QR-Code.\nAsset-Tags oder Service-Tags sind in der Regel Etiketten mit einer selbstklebenden Rückseite. Diese Tags werden zur Bestands-kontrolle, Inventarisierung und zur Nachverfolgung der Hardware benutzt.",
      importantWords: [
        {
          german: "identifizieren",
          spanish: "identifican",
        },
        {
          german: "eindeutigen Seriennummer",
          spanish: "número de serie único",
        },
        {
          german: "Bar- oder QR-Code",
          spanish: "código de barras o QR",
        },
        {
          german: "Etiketten",
          spanish: "etiquetas",
        },
        {
          german: "Bestandskontrolle",
          spanish: "control de inventario",
        },
        {
          german: "Inventarisierung",
          spanish: "inventario",
        },
        {
          german: "Nachverfolgung",
          spanish: "seguimiento",
        },
      ],
    },
  },
  {
    number: "110",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Zum Starten eines PC-Systems setzte man lange auf das BIOS (Basic Input Output System). Der Nachfolger des lange bewährten BIOS ist das UEFI (Unified Extensible Firmware Interface).\nBitte vergleiche BIOS mit UEFI.",
      difficulty: 3,
      importantWords: [
        {
          german: "BIOS (Basic Input Output System)",
          spanish: "BIOS (Sistema Básico de Entrada y Salida)",
        },
        {
          german: "UEFI (Unified Extensible Firmware Interface)",
          spanish: "UEFI (Interfaz de Firmware Extensible Unificada)",
        },
        {
          german: "vergleiche",
          spanish: "comparar",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "UEFI (Unified Extensible Firmware Interface):\n\n* kann auch von Laufwerken mit 2,2 TB oder mehr booten\n* grafische Benutzeroberfläche mit Mausbedienung\n* unterstützt 64-Bit-Prozessoren nativ ab Werk\n* Treiber lassen sich als Modul nachladen\n* nutzt GPT-Partitionierungsschema\n* kann von VM-Container starten\n\nBIOS (Basic Input Output System):\n\n* keine Mausbedienung möglich\n* kann nur vom Master-Boot-Record starten\n* kann nur von Laufwerken bis 2 TB booten",
      importantWords: [
        {
          german: "Laufwerken",
          spanish: "unidades",
        },
        {
          german: "Benutzeroberfläche",
          spanish: "interfaz de usuario",
        },
        {
          german: "Mausbedienung",
          spanish: "manejo con ratón",
        },
        {
          german: "Prozessoren",
          spanish: "procesadores",
        },
        {
          german: "GPT-Partitionierungsschema",
          spanish: "esquema de particionamiento GPT",
        },
        {
          german: "VM-Container",
          spanish: "contenedores de VM",
        },
        {
          german: "Master-Boot-Record",
          spanish: "registro de arranque maestro",
        },
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
      importantWords: [{ german: "Thin-Clients", spanish: "Thin-Clients" }],
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
      importantWords: [{ german: "Convertible", spanish: "Convertible" }],
    },
    answer: {
      title: "Antwort",
      text: "Un convertible es un portátil que tiene un mecanismo de bisagra, giro, deslizamiento o clic. Los convertibles están especialmente diseñados para la movilidad. Un convertible se puede operar en 2 modos: como portátil o como tablet.",
      importantWords: [{ german: "Convertible", spanish: "Convertible" }],
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
      importantWords: [{ german: "Notebook", spanish: "Portátil" }],
    },
  },
  {
    number: "118",
    withImage: true,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welcher digitale Anschluss ist auf dem Bild zu erkennen? (ver imagen de la carta)",
      difficulty: 1,
      importantWords: [
        { german: "digital", spanish: "digital" },
        { german: "Anschluss", spanish: "conector / puerto" },
        { german: "Bild", spanish: "imagen" },
        { german: "erkennen", spanish: "reconocer / identificar" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "DisplayPort: Eine genormte, universelle und lizenzfreie digitale Verbindungsschnittstelle für Bild- und Tonübertragung. Auf dem Bild sind der klassische DisplayPort-Steckverbinder und der Mini-DisplayPort-Steckverbinder zu sehen. (ver imagen)",
      importantWords: [
        { german: "DisplayPort", spanish: "DisplayPort" },
        { german: "genormt", spanish: "estandarizado" },
        { german: "universell", spanish: "universal" },
        { german: "lizenzfrei", spanish: "sin licencia" },
        { german: "Verbindungsschnittstelle", spanish: "interfaz de conexión" },
        { german: "Bildübertragung", spanish: "transmisión de imagen" },
        { german: "Tonübertragung", spanish: "transmisión de sonido" },
        { german: "Steckverbinder", spanish: "conector" },
        { german: "Mini-DisplayPort", spanish: "Mini DisplayPort" },
      ],
    },
  },
  {
    number: "119",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welche Anforderungen an die Hard- und Software werden an einen Dateiserver gestellt?",
      difficulty: 3,
      importantWords: [
        { german: "Anforderungen", spanish: "requisitos / exigencias" },
        { german: "Hard- und Software", spanish: "hardware y software" },
        { german: "Dateiserver", spanish: "servidor de archivos" },
        { german: "gestellt", spanish: "planteado / exigido" },
        { german: "Latenz", spanish: "latencia" },
        { german: "Zugriffszeiten", spanish: "tiempos de acceso" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die folgenden Anforderungen werden an einen Dateiserver gestellt:\n- redundantes Netzteil\n- redundanter Netzwerkzugriff\n- redundantes Plattensystem (RAID-Verbund)\n- granulares Dateiberechtigungssystem\n- Zusammenarbeit auf Dateiebene ohne Versionskonflikte\n- Zulassung von Ordnerfreigaben (SMB/NFS)\n- geringe Latenz (Netzwerk)\n- geringe Zugriffszeiten auf das Dateisystem\n- Absicherung des Dateibestands durch Backup oder Snapshots\n- Möglichkeit des Fernzugriffs via WebDAV oder (S)FTP\n- dynamische Speicherplatzanpassung",
      importantWords: [
        {
          german: "redundantes Netzteil",
          spanish: "fuente de alimentación redundante",
        },
        {
          german: "redundanter Netzwerkzugriff",
          spanish: "acceso a la red redundante",
        },
        {
          german: "redundantes Plattensystem",
          spanish: "sistema de discos redundante",
        },
        { german: "RAID-Verbund", spanish: "conjunto RAID" },
        {
          german: "granulares Dateiberechtigungssystem",
          spanish: "sistema de permisos de archivos granular",
        },
        { german: "Versionskonflikte", spanish: "conflictos de versiones" },
        { german: "Ordnerfreigaben", spanish: "compartición de carpetas" },
        {
          german: "SMB",
          spanish: "SMB (protocolo de compartición de archivos)",
        },
        {
          german: "NFS",
          spanish: "NFS (protocolo de compartición de archivos)",
        },
        { german: "geringe Latenz", spanish: "baja latencia" },
        {
          german: "geringe Zugriffszeiten",
          spanish: "tiempos de acceso cortos",
        },
        { german: "Backup", spanish: "copia de seguridad" },
        { german: "Snapshots", spanish: "snapshots / instantáneas" },
        { german: "Fernzugriff", spanish: "acceso remoto" },
        { german: "WebDAV", spanish: "WebDAV (protocolo de acceso remoto)" },
        {
          german: "(S)FTP",
          spanish: "(S)FTP (protocolo de transferencia segura)",
        },
        {
          german: "dynamische Speicherplatzanpassung",
          spanish: "ajuste dinámico del espacio de almacenamiento",
        },
      ],
    },
  },
  {
    number: "120",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Erläutere die Unterschiede zwischen ADSL, VDSL und SDSL?",
      difficulty: 2,
      importantWords: [
        {
          german: "Unterschiede",
          spanish: "diferencias",
        },
        {
          german: "ADSL",
          spanish: "ADSL",
        },
        {
          german: "VDSL",
          spanish: "VDSL",
        },
        {
          german: "SDSL",
          spanish: "SDSL",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: 'ADSL steht für „Asymmetric Digital Subscriber Line" und bezeichnet die am meisten genutzte Anschlusstechnik zu einem Internetprovider. Bei dieser Anschlusstechnik ist die Upload- und die Downloadgeschwindigkeit in einem asymmetrischen Verhältnis zueinander. Das heißt, dass die Downloadgeschwindigkeit immer höher ist als die Uploadgeschwindigkeit.\nVDSL steht für „Very High Speed Digital Subscriber Line" und bezeichnet die aktuell angebotene Anschlusstechnik zum Internetprovider. Wie auch beim ADSL sind Upload- und Downloadgeschwindigkeiten asymmetrisch. Auch hier ist die Downloadgeschwindigkeit immer höher als die Uploadgeschwindigkeit.\nSDSL steht für „Symmetric Digital Subscriber Line" und bezeichnet eine DSL-Anschlusstechnik, bei der die Upload- und die Downloadgeschwindigkeit identisch sind. SDSL kommt immer dann zum Einsatz, wenn Daten in Echtzeit übertragen werden müssen, wie zum Beispiel bei Videoübertragungen oder bei der VOIP Telefonie.',
      importantWords: [
        {
          german: "asymmetrischen Verhältnis",
          spanish: "relación asimétrica",
        },
        {
          german: "Downloadgeschwindigkeit",
          spanish: "velocidad de descarga",
        },
        {
          german: "Uploadgeschwindigkeit",
          spanish: "velocidad de subida",
        },
        {
          german: "asymmetrisch",
          spanish: "asimétrico",
        },
        {
          german: "Symmetric Digital Subscriber Line",
          spanish: "Línea de Abonado Digital Simétrica",
        },
        {
          german: "identisch",
          spanish: "idénticas",
        },
        {
          german: "Echtzeit",
          spanish: "tiempo real",
        },
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
      importantWords: [{ german: "Beschaffung", spanish: "Adquisición" }],
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
        {
          german: "Anwendungsentwicklung",
          spanish: "Desarrollo de aplicaciones",
        },
        {
          german: "integrierte Entwicklungsumgebung",
          spanish: "Entorno de desarrollo integrado",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Un IDE (integrated development environment), o entorno de desarrollo integrado, es una colección de las herramientas más importantes para el desarrollo de software bajo una interfaz de usuario unificada. Su objetivo es facilitar el trabajo del desarrollador de aplicaciones. Las herramientas más importantes incluyen, por ejemplo, el compilador, depurador, intérprete, el editor con formato de código fuente y resaltado de sintaxis, enlazador, herramientas para crear interfaces gráficas de usuario, gestión de versiones y mucho más.",
      importantWords: [{ german: "IDE", spanish: "IDE" }],
    },
  },
  {
    number: "126",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: 'Was bedeutet der Begriff „Proprietäre Software"?',
      difficulty: 1,
      importantWords: [
        {
          german: "Begriff",
          spanish: "término",
        },
        {
          german: "Proprietäre Software",
          spanish: "software propietario",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Unter proprietärer Software versteht man eine Software, deren Nutzung bzw. deren Nutzung durch Dritte und deren Veränderung sowie die Weitergabe aus patent- oder lizenzrechtlichen Gründen eingeschränkt oder verboten ist. Sie beinhaltet teilweise nichtveröffentlichte Standards oder nicht öffentlich dokumentierte Schnittstellen, sodass deren Anpassung ohne Offenlegung des Quellcodes nicht oder nur schwer möglich ist. Beispiele für proprietäre Software sind Microsoft Windows oder Adobe Produkte.",
      importantWords: [
        {
          german: "Nutzung",
          spanish: "uso",
        },
        {
          german: "Veränderung",
          spanish: "modificación",
        },
        {
          german: "Weitergabe",
          spanish: "distribución",
        },
        {
          german: "eingeschränkt",
          spanish: "restringida",
        },
        {
          german: "verboten",
          spanish: "prohibida",
        },
        {
          german: "patent- oder lizenzrechtlichen Gründen",
          spanish: "razones de patentes o licencias",
        },
        {
          german: "Standards",
          spanish: "estándares",
        },
        {
          german: "Schnittstellen",
          spanish: "interfaces",
        },
        {
          german: "Anpassung",
          spanish: "adaptación",
        },
        {
          german: "Offenlegung des Quellcodes",
          spanish: "divulgación del código fuente",
        },
        {
          german: "Beispiele",
          spanish: "ejemplos",
        },
      ],
    },
  },
  {
    number: "127",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Nenne 3 charakteristische Eigenschaften von Open Source Software.",
      difficulty: 2,
      importantWords: [
        {
          german: "charakteristische Eigenschaften",
          spanish: "características",
        },
        {
          german: "Open Source Software",
          spanish: "software de código abierto",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die 3 charakteristischen Merkmale von Open Source Software sind:\n\n* Quelltext liegt in einer für den Menschen lesbaren und verständlichen Form vor.\n* Open Source Software darf beliebig kopiert, verbreitet und genutzt werden.\n* Open Source Software darf verändert und in der veränderten Form weitergegeben werden.",
      importantWords: [
        {
          german: "Quelltext",
          spanish: "código fuente",
        },
        {
          german: "lesbaren",
          spanish: "legible",
        },
        {
          german: "verständlich",
          spanish: "comprensible",
        },
        {
          german: "kopiert",
          spanish: "copiado",
        },
        {
          german: "verbreitet",
          spanish: "distribuido",
        },
        {
          german: "genutzt",
          spanish: "utilizado",
        },
        {
          german: "verändert",
          spanish: "modificado",
        },
        {
          german: "weitergegeben",
          spanish: "distribuido",
        },
      ],
    },
  },
  {
    number: "128",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Was ist unter den Begriffen OEM-Software und OEM-Hardware zu verstehen?",
      difficulty: 2,
      importantWords: [
        {
          german: "Begriffen",
          spanish: "términos",
        },
        {
          german: "OEM-Software",
          spanish: "software OEM",
        },
        {
          german: "OEM-Hardware",
          spanish: "hardware OEM",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "OEM ist der englische Begriff für Original Equipment Manufacturer und wird übersetzt mit Originalausrüstungshersteller. Die OEM-Software oder OEM-Hardware wird vom Hersteller nicht direkt vertrieben. Stattdessen wird diese an ein anderes Unternehmen ausgeliefert und z. B. in Verbindung mit weiterer Software/Hardware vertrieben.\nOEM-Software kann in diesem Zusammenhang eine Vollversion sein, die sich durch einen geringeren Lieferumfang, eine eingeschränkte Funktionalität und/oder durch ein anderes Nutzungsrecht, vom Original unterscheidet.\nOEM-Hardware wird zum Beispiel von einem Markenunternehmen für ein anderes Unternehmen produziert. Dieses Unternehmen bietet die OEM-Hardware dann unter seinem eigenen Markennamen an. Ein Beispiel dafür sind IT-Produkte bei Discountern.",
      importantWords: [
        {
          german: "Original Equipment Manufacturer",
          spanish: "Fabricante de equipos originales",
        },
        {
          german: "Originalausrüstungshersteller",
          spanish: "Fabricante de equipo original",
        },
        {
          german: "vertrieben",
          spanish: "distribuido",
        },
        {
          german: "geringeren Lieferumfang",
          spanish: "menor alcance de entrega",
        },
        {
          german: "eingeschränkte Funktionalität",
          spanish: "funcionalidad limitada",
        },
        {
          german: "Nutzungsrecht",
          spanish: "derecho de uso",
        },
        {
          german: "Markennamen",
          spanish: "marca",
        },
        {
          german: "Beispiel",
          spanish: "ejemplo",
        },
      ],
    },
  },
  {
    number: "129",
    withImage: true,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Ergänze die Verteilung der Blöcke des RAID-Verbunds Raid 1.",
      difficulty: 3,
      importantWords: [
        {
          german: "Verteilung",
          spanish: "distribución",
        },
        {
          german: "Blöcke",
          spanish: "bloques",
        },
        {
          german: "RAID-Verbunds",
          spanish: "conjunto RAID",
        },
        {
          german: "Raid 1",
          spanish: "Raid 1",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Lösung: Alle Blöcke werden auf den zweiten Datenträger 1:1 gespiegelt. (siehe Karte 129)",
      importantWords: [
        {
          german: "Lösung",
          spanish: "solución",
        },
        {
          german: "gespiegelt",
          spanish: "duplicado/reflejado",
        },
      ],
    },
  },
  {
    number: "130",
    withImage: true,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Ergänze die Verteilung der Blöcke des RAID-Verbunds Raid 5.",
      difficulty: 3,
      importantWords: [
        {
          german: "Verteilung",
          spanish: "distribución",
        },
        {
          german: "Blöcke",
          spanish: "bloques",
        },
        {
          german: "RAID-Verbunds",
          spanish: "conjunto RAID",
        },
        {
          german: "Raid 5",
          spanish: "Raid 5",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Lösung: Es werden Paritätsbits von zwei Datenträgern auf einem dritten Datenträger erzeugt. (siehe Karte 130)",
      importantWords: [
        {
          german: "Lösung",
          spanish: "solución",
        },
        {
          german: "Paritätsbits",
          spanish: "bits de paridad",
        },
        {
          german: "Datenträgern",
          spanish: "soportes de datos",
        },
        {
          german: "erzeugt",
          spanish: "generados",
        },
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
      importantWords: [{ german: "Skalierbarkeit", spanish: "Escalabilidad" }],
    },
    answer: {
      title: "Antwort",
      text: "La escalabilidad se refiere a la capacidad de un hardware o software para seguir funcionando sin problemas mientras se cambia su tamaño, número o volumen. Esta escalabilidad sirve para mantener un funcionamiento 24/7 para el cliente. Como ejemplos se pueden mencionar la adaptación de volumen en los sistemas de almacenamiento o los ajustes en el número de núcleos de CPU o la memoria de una máquina virtual.",
      importantWords: [{ german: "Skalierbarkeit", spanish: "Escalabilidad" }],
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
        {
          german: "End User License Agreement",
          spanish: "Acuerdo de licencia de usuario final",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "EULA significa 'Endbenutzer-Lizenzvereinbarung' (Acuerdo de Licencia de Usuario Final en inglés). Describe los términos bajo los cuales el software puede ser utilizado por el usuario final.",
      importantWords: [{ german: "EULA", spanish: "EULA" }],
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
      importantWords: [{ german: "Cloud Bursting", spanish: "Cloud Bursting" }],
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
        {
          german: "drahtlose Netzwerkverbindung",
          spanish: "Conexión de red inalámbrica",
        },
        { german: "WLAN/WiFi", spanish: "WLAN/WiFi" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Una conexión WLAN puede asegurarse con las siguientes medidas: uso de métodos de autenticación como WPA2/WPA3, uso de un servidor RADIUS, activación de filtros Mac con una lista blanca, uso de un certificado de cliente y uso de conexiones VPN.",
      importantWords: [
        {
          german: "drahtlose Netzwerkverbindung",
          spanish: "Conexión de red inalámbrica",
        },
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
  {
    number: "136",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welche Merkmale hat ein Virtual Private Network (VPN)?",
      difficulty: 2,
      importantWords: [
        {
          german: "Merkmale",
          spanish: "características",
        },
        {
          german: "Virtual Private Network (VPN)",
          spanish: "Red privada virtual (VPN)",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Virtual Private Network (VPN), deutsch virtuelles privates Netzwerk, ist ein logisches Netzwerk, welches eine geschützte Netzwerkverbindung unter Nutzung öffentlicher Netzwerke herstellt. Mit Hilfe von Verschlüsselungstechnologien soll über eine VPN-Verbindung die Authentizität, die Vertraulichkeit und die Integrität der Daten sichergestellt werden. Um die Datensicherheit zu gewährleisten, gibt es eine Reihe von Protokollen und Lösungen wie L2TP over IPsec, SSL-VPN, OpenVPN und Layer-2-VPN. Das Virtual Private Network wird grundsätzlich in 3 Verbindungsarten unterteilt:\n\n* End-to-Site\n* Site-to-Site\n* End-to-End",
      importantWords: [
        {
          german: "geschützte Netzwerkverbindung",
          spanish: "conexión de red protegida",
        },
        {
          german: "öffentlicher Netzwerke",
          spanish: "redes públicas",
        },
        {
          german: "Verschlüsselungstechnologien",
          spanish: "tecnologías de cifrado",
        },
        {
          german: "Authentizität",
          spanish: "autenticidad",
        },
        {
          german: "Vertraulichkeit",
          spanish: "confidencialidad",
        },
        {
          german: "Integrität",
          spanish: "integridad",
        },
        {
          german: "Datensicherheit",
          spanish: "seguridad de datos",
        },
        {
          german: "Protokollen",
          spanish: "protocolos",
        },
        {
          german: "Verbindungsarten",
          spanish: "tipos de conexión",
        },
        {
          german: "End-to-Site",
          spanish: "extremo a sitio",
        },
        {
          german: "Site-to-Site",
          spanish: "sitio a sitio",
        },
        {
          german: "End-to-End",
          spanish: "extremo a extremo",
        },
      ],
    },
  },
  {
    number: "137",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Beim Einsatz eines WLANs im Unternehmen ist besondere Sorgfalt auf die Einhaltung der Datensicherheit zu legen. Welche Sicherheitsmethoden und Verschlüsselungsstandards können zum Einsatz kommen?",
      difficulty: 3,
      importantWords: [
        {
          german: "WLAN",
          spanish: "WLAN",
        },
        {
          german: "Datensicherheit",
          spanish: "seguridad de los datos",
        },
        {
          german: "Sicherheitsmethoden",
          spanish: "métodos de seguridad",
        },
        {
          german: "Verschlüsselungsstandards",
          spanish: "estándares de cifrado",
        },
        {
          german: "Einsatz",
          spanish: "uso",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Sicherheitsmethoden:\n\n* WPA (gilt als unsicher)\n* WPA2-Personal/Enterprise\n* WPA3- Personal/ Enterprise\n* Radius\n\nVerschlüsselungsstandards:\n\n* Advanced Encryption Standard (AES)\n* Temporal Key Integrity Protocol (TKIP)\n* Simultaneous Authentication of Equals (SAE)",
      importantWords: [
        {
          german: "Sicherheitsmethoden",
          spanish: "métodos de seguridad",
        },
        {
          german: "Verschlüsselungsstandards",
          spanish: "estándares de cifrado",
        },
        {
          german: "unsicher",
          spanish: "inseguro",
        },
      ],
    },
  },
  {
    number: "138",
    withImage: true,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welches Befehlszeilenkommando wurde im Bild ausgeführt? Erläutere die Funktion des Protokolls.",
      difficulty: 1,
      importantWords: [
        {
          german: "Befehlszeilenkommando",
          spanish: "comando de línea de comandos",
        },
        {
          german: "ausgeführt",
          spanish: "ejecutado",
        },
        {
          german: "Funktion",
          spanish: "función",
        },
        {
          german: "Protokolls",
          spanish: "protocolo",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Es handelt sich um das Address Resolution Protocol (ARP), welches ein Netzwerkprotokoll ist, das zu einer Netzwerkadresse (OSI Modell Schicht 3) die physische Adresse (MAC-Adresse) des Netzwerkinterfaces (OSI-Modell Schicht 2) ermittelt und diese Zuordnung im sogenannten ARP-Cache ablegt und zwischenspeichert. (siehe Karte 138)",
      importantWords: [
        {
          german: "Address Resolution Protocol (ARP)",
          spanish: "Protocolo de resolución de direcciones (ARP)",
        },
        {
          german: "Netzwerkprotokoll",
          spanish: "protocolo de red",
        },
        {
          german: "Netzwerkadresse",
          spanish: "dirección de red",
        },
        {
          german: "physische Adresse (MAC-Adresse)",
          spanish: "dirección física (dirección MAC)",
        },
        {
          german: "ermittelt",
          spanish: "determina",
        },
        {
          german: "ARP-Cache",
          spanish: "caché ARP",
        },
      ],
    },
  },
  {
    number: "139",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welche Vorteile ergeben sich durch den Einsatz eines Virtual Local Area Networks (VLAN)?",
      difficulty: 3,
      importantWords: [
        {
          german: "Vorteile",
          spanish: "ventajas",
        },
        {
          german: "Einsatz",
          spanish: "uso",
        },
        {
          german: "Virtual Local Area Networks (VLAN)",
          spanish: "Red de área local virtual (VLAN)",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "In einem VLAN können folgende Vorteile genutzt werden:\n\n* physikalische Netztopologie kann in logische Gruppen unterteilt werden\n* Priorisierungen des Datenverkehrs sind möglich\n* eine bessere Lastverteilung ist möglich\n* Unterteilung in Broadcastdomänen, dadurch weniger Kollisionsbereiche\n* flexiblere Anpassung von Gruppenzugehörigkeiten\n* Trennung des Datenverkehrs nach spezifischen Anwendungen",
      importantWords: [
        {
          german: "physikalische Netztopologie",
          spanish: "topología de red física",
        },
        {
          german: "logische Gruppen",
          spanish: "grupos lógicos",
        },
        {
          german: "unterteilt",
          spanish: "dividida",
        },
        {
          german: "Priorisierungen",
          spanish: "priorizaciones",
        },
        {
          german: "Datenverkehrs",
          spanish: "tráfico de datos",
        },
        {
          german: "Lastverteilung",
          spanish: "distribución de carga",
        },
        {
          german: "Unterteilung",
          spanish: "subdivisión",
        },
        {
          german: "Broadcastdomänen",
          spanish: "dominios de difusión",
        },
        {
          german: "Kollisionsbereiche",
          spanish: "áreas de colisión",
        },
        {
          german: "flexiblere Anpassung",
          spanish: "adaptación más flexible",
        },
        {
          german: "Gruppenzugehörigkeiten",
          spanish: "pertenencias a grupos",
        },
        {
          german: "Trennung",
          spanish: "separación",
        },
        {
          german: "spezifischen Anwendungen",
          spanish: "aplicaciones específicas",
        },
      ],
    },
  },
  {
    number: "140",
    withImage: true,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welches Befehlszeilenkommando wurde hier ausgeführt?",
      difficulty: 1,
      importantWords: [
        {
          german: "Befehlszeilenkommando",
          spanish: "comando de línea de comandos",
        },
        {
          german: "ausgeführt",
          spanish: "ejecutado",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Es handelt sich um den Befehl tracert. (siehe Karte 140)",
      importantWords: [
        {
          german: "Befehl",
          spanish: "comando",
        },
        {
          german: "tracert",
          spanish: "tracert",
        },
      ],
    },
  },
  {
    number: "141",
    withImage: true,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welches Befehlszeilenkommando wurde hier ausgeführt?",
      difficulty: 1,
      importantWords: [
        {
          german: "Befehlszeilenkommando",
          spanish: "comando de línea de comandos",
        },
        {
          german: "ausgeführt",
          spanish: "ejecutado",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Es handelt sich um den Befehl nslookup. (siehe Karte 141)",
      importantWords: [
        {
          german: "Befehl",
          spanish: "comando",
        },
        {
          german: "nslookup",
          spanish: "nslookup",
        },
      ],
    },
  },
  {
    number: "142",
    withImage: true,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welches Befehlszeilenkommando wurde hier ausgeführt?",
      difficulty: 1,
      importantWords: [
        {
          german: "Befehlszeilenkommando",
          spanish: "comando de línea de comandos",
        },
        {
          german: "ausgeführt",
          spanish: "ejecutado",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Es handelt sich um den Befehl getmac -v. (siehe Karte 142)",
      importantWords: [
        {
          german: "Befehl",
          spanish: "comando",
        },
        {
          german: "getmac -v",
          spanish: "getmac -v",
        },
      ],
    },
  },
  {
    number: "143",
    withImage: true,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welches Befehlszeilenkommando wurde hier ausgeführt?",
      difficulty: 1,
      importantWords: [
        {
          german: "Befehlszeilenkommando",
          spanish: "comando de línea de comandos",
        },
        {
          german: "ausgeführt",
          spanish: "ejecutado",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Es handelt sich um den Befehl ipconfig /all. (siehe Karte 143)",
      importantWords: [
        {
          german: "Befehl",
          spanish: "comando",
        },
        {
          german: "ipconfig /all",
          spanish: "ipconfig /all",
        },
      ],
    },
  },
  {
    number: "144",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Welche Aufgabe erfüllt das Befehlszeilenkommando ARP?",
      difficulty: 2,
      importantWords: [
        {
          german: "Befehlszeilenkommando",
          spanish: "comando de línea de comandos",
        },
        {
          german: "ARP",
          spanish: "ARP",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: 'Mithilfe des Address Resolution Protocols (ARP) wird zur IP-Adresse die zugehörige Hardware- bzw. MAC-Adresse des Netzwerkinterfaces (NIC) eines Hosts ermittelt. Dazu sendet der Host einen ARP-Request mit der MAC-Adresse „FF-FF-FF-FF-FF-FF" auf der Schicht 2, der Sicherungsschicht des OSI-Schichtenmodells, per Broadcast an die zu ermittelnde Adresse und bekommt via ARP-Reply die ermittelte MAC-Adresse an den Sender zurück gesendet. Die ermittelte MAC-Adresse wird dann im lokalen ARP-Cache des Senders für eine gewisse Zeit gespeichert. Dieser ARP-Cache dient zur schnelleren ARP-Adressauflösung.',
      importantWords: [
        {
          german: "Address Resolution Protocols (ARP)",
          spanish: "Protocolo de resolución de direcciones (ARP)",
        },
        {
          german: "IP-Adresse",
          spanish: "dirección IP",
        },
        {
          german: "Hardware- bzw. MAC-Adresse",
          spanish: "dirección de hardware o MAC",
        },
        {
          german: "Netzwerkinterfaces (NIC)",
          spanish: "interfaz de red (NIC)",
        },
        {
          german: "ermittelt",
          spanish: "determina",
        },
        {
          german: "ARP-Request",
          spanish: "solicitud ARP",
        },
        {
          german: "OSI-Schichtenmodells",
          spanish: "modelo de capas OSI",
        },
        {
          german: "Broadcast",
          spanish: "difusión",
        },
        {
          german: "ARP-Reply",
          spanish: "respuesta ARP",
        },
        {
          german: "ARP-Cache",
          spanish: "caché ARP",
        },
        {
          german: "Adressauflösung",
          spanish: "resolución de direcciones",
        },
      ],
    },
  },
  {
    number: "145",
    withImage: true,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Beschreibe die Aufgabe und Funktionsweise des Befehlszeilenkommandos chmod in einem Linux-Betriebssystem.",
      difficulty: 1,
      importantWords: [
        {
          german: "Aufgabe",
          spanish: "tarea",
        },
        {
          german: "Funktionsweise",
          spanish: "funcionamiento",
        },
        {
          german: "Befehlszeilenkommando",
          spanish: "comando de línea de comandos",
        },
        {
          german: "chmod",
          spanish: "chmod",
        },
        {
          german: "Linux-Betriebssystem",
          spanish: "sistema operativo Linux",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das Linux/Unix-Kommando **chmod** (englisch: **change mode**) ist ein Kommandozeilenprogramm, mit dem sich die Linux-/Unix-Dateirechte anpassen lassen. Diese Dateirechte sind in 3 Gruppen unterteilt: **User**, **Group** und **Others**. Die Attributsänderungen können nur vom Dateibesitzer oder dem **root**-Benutzer durchgeführt werden. Die Rechte umfassen: **r** = lesen (**read**), **w** = schreiben (**write**), **x** = ausführen (**execute**). Neben der symbolischen Notation mit Buchstaben existiert noch die oktale Notation, die in der Tabelle auf der Karte dargestellt ist. Beispiel für die Darstellung der Dateirechte der Datei test.txt: -rwxrwxrwx 2 root 4096 Sep 22 08:32 test.txt",
      importantWords: [
        {
          german: "Kommando",
          spanish: "comando",
        },
        {
          german: "Dateirechte",
          spanish: "derechos de archivo",
        },
        {
          german: "anpassen",
          spanish: "ajustar",
        },
        {
          german: "User",
          spanish: "Usuario",
        },
        {
          german: "Group",
          spanish: "Grupo",
        },
        {
          german: "Others",
          spanish: "Otros",
        },
        {
          german: "Dateibesitzer",
          spanish: "propietario del archivo",
        },
        {
          german: "root-Benutzer",
          spanish: "usuario root",
        },
        {
          german: "lesen",
          spanish: "leer",
        },
        {
          german: "schreiben",
          spanish: "escribir",
        },
        {
          german: "ausführen",
          spanish: "ejecutar",
        },
        {
          german: "symbolischen Notation",
          spanish: "notación simbólica",
        },
        {
          german: "oktale Notation",
          spanish: "notación octal",
        },
        {
          german: "Tabelle",
          spanish: "tabla",
        },
      ],
    },
  },
  {
    number: "146",
    withImage: false,
    section: "Entwickeln, Erstellen und Betreuen von IT-Lösungen",
    question: {
      title: "Frage",
      text: "Festplatten unterliegen unterschiedlichen Einflüssen, welche sich auf die Lebensdauer von Datenträgern auswirken. Was bedeutet in diesem Zusammenhang S.M.A.R.T.?",
      difficulty: 3,
      importantWords: [
        {
          german: "Festplatten",
          spanish: "discos duros",
        },
        {
          german: "Einflüssen",
          spanish: "influencias",
        },
        {
          german: "Lebensdauer",
          spanish: "vida útil",
        },
        {
          german: "Datenträgern",
          spanish: "soportes de datos",
        },
        {
          german: "S.M.A.R.T.",
          spanish: "S.M.A.R.T.",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T., deutsch System zur Selbstüberwachung, Analyse und Statusmeldung) ist ein standardisiertes Überwachungswerkzeug von Datenträgern (HDD/SSD). Sie dient dazu, frühzeitige Vorhersagen über einen möglichen Ausfall des gesamten Datenträgers oder dem Ausfall einzelner Speicherblöcke zu treffen. Mithilfe sogenannter SMART-Attribute, welche nicht standardisiert sind, können Werte wie Temperatur, Einschaltzeit, Laufzeit, Bad-Blocks etc. vom Datenträger ausgelesen werden.",
      importantWords: [
        {
          german:
            "Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.)",
          spanish:
            "Tecnología de Autocontrol, Análisis y Notificación (S.M.A.R.T.)",
        },
        {
          german: "standardisiertes Überwachungswerkzeug",
          spanish: "herramienta de monitorización estandarizada",
        },
        {
          german: "Datenträgern (HDD/SSD)",
          spanish: "soportes de datos (HDD/SSD)",
        },
        {
          german: "Ausfall",
          spanish: "fallo",
        },
        {
          german: "Speicherblöcke",
          spanish: "bloques de memoria",
        },
        {
          german: "SMART-Attribute",
          spanish: "atributos SMART",
        },
        {
          german: "Temperatur",
          spanish: "temperatura",
        },
        {
          german: "Einschaltzeit",
          spanish: "tiempo de encendido",
        },
        {
          german: "Laufzeit",
          spanish: "tiempo de funcionamiento",
        },
        {
          german: "Bad-Blocks",
          spanish: "bloques defectuosos",
        },
        {
          german: "ausgelesen",
          spanish: "leídos",
        },
      ],
    },
  },
];
