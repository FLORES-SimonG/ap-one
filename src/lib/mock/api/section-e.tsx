import { Card } from "@/lib/interfaces/cards";

export const sectionE: Card[] = [
  {
    number: "169",
    section: "Qualitätssichernde Maßnahmen",
    question: {
      title: "Frage",
      text: "Dein Ausbildungsbetrieb ist ISO 9001 zertifiziert. Was bedeutet diese Norm für deinen Ausbildungsbetrieb?",
      difficulty: 2,
      importantWords: [
        { german: "ISO 9001", spanish: "ISO 9001" },
        { german: "zertifiziert", spanish: "certificado" },
        { german: "Norm", spanish: "Norma" },
        {
          german: "Qualitätsmanagementsysteme",
          spanish: "Sistemas de gestión de calidad",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "La norma ISO 9001 establece los requisitos para los sistemas de gestión de calidad. El objetivo es garantizar la calidad mediante la optimización continua de los procesos. Esta certificación es reconocida a nivel mundial. La ISO 9001 se basa, entre otros, en los siguientes principios básicos: Orientación al cliente, Orientación a procesos, Mejora continua, Gestión de riesgos.",
      importantWords: [
        { german: "ISO 9001", spanish: "ISO 9001" },
        {
          german: "Qualitätsmanagementsysteme",
          spanish: "Sistemas de gestión de calidad",
        },
      ],
    },
  },
  {
    number: "170",
    section: "Qualitätssichernde Maßnahmen",
    question: {
      title: "Frage",
      text: 'Was bedeutet das Label "Energy Star"?',
      difficulty: 2,
      importantWords: [
        { german: "Label", spanish: "Etiqueta" },
        { german: "Energy Star", spanish: "Energy Star" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "La etiqueta Energy Star certifica, por ejemplo, que los dispositivos eléctricos cumplen con los criterios de ahorro de energía de la Agencia de Protección Ambiental de EE. UU. (EPA) y del Departamento de Energía de EE. UU. Un criterio importante es que un dispositivo encendido se apague automáticamente o entre en modo de ahorro de energía después de un tiempo. En las computadoras, el rendimiento del procesador debe reducirse y el almacenamiento de datos debe apagarse. Este modo de espera tiene un consumo de energía muy bajo.",
      importantWords: [{ german: "Energy Star", spanish: "Energy Star" }],
    },
  },
  {
    number: "171",
    section: "Qualitätssichernde Maßnahmen",
    question: {
      title: "Frage",
      text: "Im Qualitätsmanagement spricht man oftmals, im Zusammenhang mit Produkt- und Systemmängeln, über Fehlervermeidung und Fehlererkennung. Nenne jeweils 3 Beispiele.",
      difficulty: 3,
      importantWords: [
        { german: "Qualitätsmanagement", spanish: "Gestión de calidad" },
        { german: "Fehlervermeidung", spanish: "Prevención de errores" },
        { german: "Fehlererkennung", spanish: "Detección de errores" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Prevención de errores: pruebas funcionales, formación, uso de un sistema de seguimiento de errores, inspecciones, revisión. Detección de errores: pruebas de aceptación, pruebas de regresión, pruebas de integración.",
      importantWords: [
        { german: "Fehlervermeidung", spanish: "Prevención de errores" },
        { german: "Fehlererkennung", spanish: "Detección de errores" },
      ],
    },
  },
  {
    number: "172",
    section: "Qualitätssichernde Maßnahmen",
    question: {
      title: "Frage",
      text: "Die Qualität von Software wird durch verschiedene Kriterien dargestellt. Nenne einige Beispiele.",
      difficulty: 2,
      importantWords: [
        { german: "Qualität", spanish: "Calidad" },
        { german: "Software", spanish: "Software" },
        { german: "Kriterien", spanish: "Criterios" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Los criterios de calidad del software se presentan en varios modelos, por ejemplo, en la norma ISO/IEC 9126. La garantía de calidad (QA) sirve para asegurar que el software cumple con los requisitos/criterios acordados. Algunos criterios generales que debe cumplir el software son: Funcionalidad, Usabilidad, Fiabilidad, Eficiencia, Portabilidad, Modificabilidad.",
      importantWords: [
        { german: "Qualität", spanish: "Calidad" },
        { german: "Software", spanish: "Software" },
        { german: "Kriterien", spanish: "Criterios" },
      ],
    },
  },
  {
    number: "173",
    withImage:true,
    section: "Qualitätssichernde Maßnahmen",
    question: {
      title: "Frage",
      text: 'Was bedeutet das Gütesiegel „Geprüfte Sicherheit"?',
      difficulty: 2,
      importantWords: [
        { german: "Gütesiegel", spanish: "Sello de calidad" },
        { german: "Geprüfte Sicherheit", spanish: "Seguridad probada" },
      ],
    },
    answer: {
      title: "Antwort",
      text: 'El sello de calidad "Geprüfte Sicherheit" (GS) es emitido desde 1977 por la Asociación Alemana de Seguros de Accidentes (DGUV) para productos que cumplen con los requisitos de la Ley de Seguridad de Productos (ProdSG). El sello GS busca garantizar que los productos listos para usar hayan sido sometidos a una prueba de tipo por un organismo de prueba y certificación independiente y autorizado. Esto asegura que el tipo de producto cumple con los requisitos de seguridad de ProdSG y que el organismo de prueba y certificación ha verificado que los productos en serie que se comercializan son idénticos al tipo de producto probado.',
      importantWords: [
        { german: "Gütesiegel", spanish: "Sello de calidad" },
        { german: "Geprüfte Sicherheit", spanish: "Seguridad probada" },
      ],
    },
  },
  {
    number: "174",
    withImage: true,
    section: "Qualitätssichernde Maßnahme",
    question: {
      title: "Frage",
      text: "Was steckt hinter dem Zeichen „Blauer Engel“?",
      difficulty: 2,
      importantWords: [
        {
          german: "Zeichen",
          spanish: "símbolo",
        },
        {
          german: "Blauer Engel",
          spanish: "Ángel Azul",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der **Blaue Engel** ist das Umweltzeichen der Bundesregierung. Unabhängig und glaubwürdig setzt er anspruchsvolle Maßstäbe für umweltfreundliche Produkte und Dienstleistungen. Das Umweltzeichen wird immer dann verliehen, wenn Produkte und Dienstleistungen umweltfreundlicher sind als vergleichbare, konventionelle Produkte und Dienstleistungen. Die Vergaberegeln legt das Bundesministerium für Umwelt, Naturschutz und nukleare Sicherheit (BMU) als Zeicheninhaber fest. (siehe Karte 174)",
      importantWords: [
        {
          german: "Umweltzeichen",
          spanish: "sello ecológico",
        },
        {
          german: "Bundesregierung",
          spanish: "gobierno federal",
        },
        {
          german: "umweltfreundliche Produkte und Dienstleistungen",
          spanish: "productos y servicios respetuosos con el medio ambiente",
        },
        {
          german: "Vergaberegeln",
          spanish: "reglas de concesión",
        },
        {
          german:
            "Bundesministerium für Umwelt, Naturschutz und nukleare Sicherheit (BMU)",
          spanish:
            "Ministerio Federal de Medio Ambiente, Conservación de la Naturaleza y Seguridad Nuclear (BMU)",
        },
      ],
    },
  },
  {
    number: "175",
    withImage: false,
    section: "Qualitätssichernde Maßnahmen",
    question: {
      title: "Frage",
      text: "Was sollte beim Recyceln von IT-Produkten beachtet werden?",
      difficulty: 2,
      importantWords: [
        {
          german: "Recyceln",
          spanish: "reciclaje",
        },
        {
          german: "IT-Produkten",
          spanish: "productos informáticos",
        },
        {
          german: "beachtet werden",
          spanish: "tener en cuenta",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Laut der WEEE-Richtlinie (Waste Electrical and Electronic Equipment), in der die Vorgaben für die Entsorgung von Elektro-Altgeräten (EAG) festlegt sind, gibt es ein grundlegendes Prinzip, welches besagt, dass die Hersteller in der abfallwirtschaftlichen Verantwortung für ihre Produkte während der gesamten Lebensdauer verantwortlich sind. Dabei wird in verschiedene Kategorien unterschieden, wie zum Beispiel:\n\n* **Informations- und Kommunikationstechnik-Geräte:** Computer, Notebooks, Tablets, Datenspeicher, Monitore, Drucker, Handys, Telefone, Netzteile, TK-Anlagen\n* **Unterhaltungselektronik-Geräte** (auch braune Ware genannt): Fernseher, Videorecorder, Digitalkameras, Konsolen, HiFi-Anlagen, Boxen, Radios, CD-/DVD-/Blu-ray-Player\n\n**Merke:** Elektronische Geräte gehören nicht in den Hausmüll und müssen fachgerecht sowie umweltgerecht entsorgt werden.",
      importantWords: [
        {
          german: "WEEE-Richtlinie",
          spanish: "directiva RAEE",
        },
        {
          german: "Elektro-Altgeräten (EAG)",
          spanish: "residuos de aparatos eléctricos y electrónicos (RAEE)",
        },
        {
          german: "Hersteller",
          spanish: "fabricantes",
        },
        {
          german: "abfallwirtschaftlichen Verantwortung",
          spanish: "responsabilidad en la gestión de residuos",
        },
        {
          german: "Lebensdauer",
          spanish: "vida útil",
        },
        {
          german: "Informations- und Kommunikationstechnik-Geräte",
          spanish:
            "dispositivos de tecnología de la información y comunicación",
        },
        {
          german: "Unterhaltungselektronik-Geräte",
          spanish: "aparatos electrónicos de consumo",
        },
        {
          german: "braune Ware",
          spanish: "bienes marrones",
        },
        {
          german: "Hausmüll",
          spanish: "basura doméstica",
        },
        {
          german: "fachgerecht",
          spanish: "de forma profesional",
        },
        {
          german: "umweltgerecht",
          spanish: "de forma respetuosa con el medio ambiente",
        },
        {
          german: "entsorgt",
          spanish: "eliminados",
        },
      ],
    },
  },
];
