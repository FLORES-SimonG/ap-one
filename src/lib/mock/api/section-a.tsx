import { Card } from "@/lib/interfaces/cards";

export const sectionA: Card[] = [
  {
    withImage: true,
    number: "1",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Mit welchen Werkzeugen kann man ein Projekt planen und überwachen?",
      textToSpanish: "¿Con qué herramientas se puede planificar y supervisar un proyecto?",
      difficulty: 3,
      importantWords: [
        { german: "Werkzeugen", spanish: "Herramientas" },
        { german: "planen", spanish: "planificar" },
        { german: "überwachen", spanish: "supervisar/monitorizar" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Zum Beispiel mithilfe eines Netzplans, eines Gantt-Diagramms oder eines Projektstrukturplans können Projekte gemanagt und überwacht werden. (ver imagen de la carta)",
      textToSpanish: "Por ejemplo, mediante un diagrama de red, un diagrama de Gantt o un plan de estructura del proyecto, los proyectos pueden gestionarse y supervisarse. (ver imagen de la carta)",
      importantWords: [
        { german: "Netzplan", spanish: "Diagrama de red" },
        { german: "Gantt-Diagramm", spanish: "Diagrama de Gantt" },
        {
          german: "Projektstrukturplan",
          spanish: "Plan de estructura del proyecto (PSP)",
        },
      ],
    },
  },
  {
    number: "2",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was ist ein Netzplan?",
      textToSpanish: "¿Qué es un diagrama de red?",
      difficulty: 2,
      importantWords: [{ german: "Netzplan", spanish: "Diagrama de red" }],
    },
    answer: {
      title: "Antwort",
      text: "Der Netzplan findet Anwendung bei der Terminplanung von Projekten und stellt im Projektmanagement die Dauer von Aktivitäten im Projekt dar. Sowohl ihre zeitliche Anordnung als auch logische Abhängigkeiten zwischen den Aktivitäten werden grafisch dargestellt. Kritische Pfade und Pufferzeiten der einzelnen Aktivitäten sowie Gesamtpufferzeiten sind erkennbar.",
      textToSpanish: "El diagrama de red se utiliza en la planificación de plazos de los proyectos y representa en la gestión de proyectos la duración de las actividades del proyecto. Tanto su ordenación temporal como las dependencias lógicas entre las actividades se representan gráficamente. Los caminos críticos, los tiempos de holgura de las actividades individuales y los tiempos de holgura totales son visibles.",
      importantWords: [
        {
          german: "Terminplanung",
          spanish: "Planificación de plazos/cronograma",
        },
        { german: "Dauer", spanish: "Duración" },
        { german: "zeitliche Anordnung", spanish: "Ordenación temporal" },
        { german: "Abhängigkeiten", spanish: "Dependencias" },
        { german: "Kritische Pfade", spanish: "Ruta crítica" },
        { german: "Pufferzeiten", spanish: "Tiempos de holgura/buffer" },
      ],
    },
  },
  {
    number: "3",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was ist ein Gantt-Diagramm?",
      textToSpanish: "¿Qué es un diagrama de Gantt?",
      difficulty: 2,
      importantWords: [
        { german: "Gantt-Diagramm", spanish: "Diagrama de Gantt" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "In einem Gantt-Diagramm werden alle Aktivitäten eines Projektes mit Hilfe einer Zeitachse dargestellt. Die Zeitachse wird horizontal in der ersten Zeile des Diagramms dargestellt. Alle Aktivitäten werden dann in den darunter liegenden Zeilen in der ersten Spalte benannt und zeitlich mit einem waagerechten Balken dargestellt. An der Länge der Balken kann die Dauer, der Beginn und das Ende der Aktivität erkannt werden. Sich überschneidende Aktivitäten werden durch überlappende Balken dargestellt. Eine Visualisierung des kritischen Pfades ist möglich. Abhängigkeiten zwischen den einzelnen Aktivitäten werden mit Hilfe von Pfeilen verdeutlicht. \n\nVorteil: für kleine und mittlere Projekte sehr übersichtliche Darstellung der Aktivitäten.\n\nNachteil: bei einer großen Anzahl von Aktivitäten wird die Darstellung schnell unübersichtlich. (ver imagen de la carta)",
      textToSpanish: "En un diagrama de Gantt, todas las actividades de un proyecto se representan con la ayuda de un eje de tiempo. El eje de tiempo se muestra horizontalmente en la primera fila del diagrama. Todas las actividades se nombran en las filas siguientes en la primera columna y se representan temporalmente con una barra horizontal. La longitud de las barras indica la duración, el inicio y el fin de la actividad. Las actividades superpuestas se representan con barras que se solapan. Es posible visualizar el camino crítico. Las dependencias entre las actividades individuales se ilustran con flechas. \n\nVentaja: para proyectos pequeños y medianos, proporciona una representación muy clara de las actividades.\n\nDesventaja: con un gran número de actividades, la representación puede volverse rápidamente confusa. (ver imagen de la carta)",
      importantWords: [
        { german: "Zeitachse", spanish: "Eje de tiempo" },
        { german: "waagerechten Balken", spanish: "Barra horizontal" },
        { german: "überschneidende", spanish: "Superpuestas" },
        { german: "Vorteil", spanish: "Ventaja" },
        { german: "Nachteil", spanish: "Desventaja" },
      ],
    },
  },
  {
    number: "4",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was versteht man unter dem Top-Down-Ansatz beim Projektstrukturplan?",
      textToSpanish: "¿Qué se entiende por el enfoque de arriba hacia abajo en el plan de estructura del proyecto?",
      difficulty: 3,
      importantWords: [
        { german: "Top-Down-Ansatz", spanish: "Enfoque de arriba hacia abajo" },
        {
          german: "Projektstrukturplan",
          spanish: "Plan de estructura del proyecto (PSP)",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Top-Down-Ansatz des Projektstrukturplans verfolgt das Ziel, dass der Weg vom Ganzen zum Detail führt. Dazu wird das Gesamtprojekts in mehrere Teilaufgaben zerlegt. Schritte zur Erreichung dieses Ziels sind: Benennung des Gesamtprojekts, Zerlegung des Gesamtprojekts in Arbeitspakete oder Teilaufgaben, Benennung der Teilaufgaben, weitere Zerlegung der Teilschritte, bis Arbeitspakete vorliegen. Der Top-Down-Ansatz wird immer dann gewählt, wenn bereits Erfahrungen vorliegen mit ähnlichen Projekten oder die Inhalte des zu planenden Projektes aus vorherigen Projekten bereits bekannt sind.",
      textToSpanish: "El enfoque de arriba hacia abajo del plan de estructura del proyecto persigue el objetivo de ir de lo general a lo particular. Para ello, el proyecto completo se divide en varias subtareas. Los pasos para alcanzar este objetivo son: denominación del proyecto completo, división del proyecto completo en paquetes de trabajo o subtareas, denominación de las subtareas, y una mayor descomposición de los pasos parciales hasta obtener paquetes de trabajo. El enfoque de arriba hacia abajo se elige siempre que existan experiencias previas con proyectos similares o cuando los contenidos del proyecto a planificar ya son conocidos de proyectos anteriores.",
      importantWords: [
        { german: "Gesamtprojekts", spanish: "Proyecto completo" },
        { german: "Teilaufgaben", spanish: "Subtareas" },
        { german: "zerlegt", spanish: "descompuesto/dividido" },
        { german: "Arbeitspakete", spanish: "Paquetes de trabajo" },
      ],
    },
  },
  {
    number: "5",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was versteht man unter dem Begriff Bottom-Up-Ansatz beim Projektstrukturplan?",
      textToSpanish: "¿Qué se entiende por el término enfoque de abajo hacia arriba en el plan de estructura del proyecto?",
      difficulty: 3,
      importantWords: [
        {
          german: "Bottom-Up-Ansatz",
          spanish: "Enfoque de abajo hacia arriba",
        },
        {
          german: "Projektstrukturplan",
          spanish: "Plan de estructura del proyecto (PSP)",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Bottom-Up-Ansatz des Projektstrukturplans verfolgt das Ziel, dass der Weg vom Detail zum Ganzen führt. Die Grundidee ist, dass abgegrenzte, detaillierte Teilprobleme gelöst werden, um dann mit deren Hilfe größere, darüber liegende Probleme zu lösen. Bei sehr innovativen Lösungen kommt dieser Ansatz zum Einsatz. Folgende Punkte sind dabei zu berücksichtigen: Festlegung der auszuführenden Aufgaben, Klärung der Beziehungen der Teilaufgaben in der Baumstruktur, Errichtung einer Baumstruktur, um Aufbau und Zusammensetzung zu erkennen, Überprüfung auf Vollständigkeit und Einmaligkeit aller Teilaufgaben. (ver imagen de la carta)",
      textToSpanish: "El enfoque de abajo hacia arriba del plan de estructura del proyecto persigue el objetivo de ir de lo particular a lo general. La idea principal es que se resuelvan problemas parciales detallados y delimitados para, con su ayuda, resolver problemas más grandes que están por encima. Este enfoque se utiliza en soluciones muy innovadoras. Los siguientes puntos deben considerarse: determinación de las tareas a realizar, aclaración de las relaciones de las subtareas en la estructura de árbol, establecimiento de una estructura de árbol para reconocer la composición y estructura, y verificación de la completitud y unicidad de todas las subtareas. (ver imagen de la carta)",
      importantWords: [
        { german: "Detail", spanish: "Detalle" },
        { german: "Ganzen", spanish: "Totalidad/conjunto" },
        { german: "Grundidee", spanish: "Idea principal" },
        { german: "Teilprobleme", spanish: "Subproblemas" },
        { german: "Baumstruktur", spanish: "Estructura de árbol" },
      ],
    },
  },
  {
    number: "6",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was ist ein 4-Phasen-Modell?",
      textToSpanish: "¿Qué es un modelo de 4 fases?",
      difficulty: 2,
      importantWords: [
        { german: "4-Phasen-Modell", spanish: "Modelo de 4 fases" },
        { german: "Projektmanagement", spanish: "Gestión de proyectos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das 4-Phasen-Modell beschreibt die grundlegenden Phasen beim Projektmanagement. Eine der ersten und grundlegenden Managementaufgaben in einem Projekt ist die Planung von Projektphasen. Dieses 4-Phasen-Modell gliedert ein Projekt in folgende Phasen ein: Projektdefinition, Projektplanung, Projektdurchführung und Controlling, Projektabschluss. Als Alternative existiert noch das 5-Phasen Modell, wo die 1. Phase die Initiierung des Projekts darstellt. (ver imagen de la carta)",
      textToSpanish: "El modelo de 4 fases describe las fases fundamentales en la gestión de proyectos. Una de las primeras y fundamentales tareas de gestión en un proyecto es la planificación de las fases del proyecto. Este modelo de 4 fases divide un proyecto en las siguientes fases: definición del proyecto, planificación del proyecto, ejecución y control del proyecto, y cierre del proyecto. Como alternativa, existe el modelo de 5 fases, donde la primera fase representa la iniciación del proyecto. (ver imagen de la carta)",
      importantWords: [
        { german: "Projektdefinition", spanish: "Definición del proyecto" },
        { german: "Projektplanung", spanish: "Planificación del proyecto" },
        { german: "Projektdurchführung", spanish: "Ejecución del proyecto" },
        { german: "Controlling", spanish: "Control" },
        { german: "Projektabschluss", spanish: "Cierre del proyecto" },
      ],
    },
  },
  {
    number: "7",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was bezeichnet man als kritischen Pfad beim Netzplan?",
      textToSpanish: "¿Qué se designa como ruta crítica en el diagrama de red?",
      difficulty: 3,
      importantWords: [
        { german: "kritischen Pfad", spanish: "Ruta crítica" },
        { german: "Netzplan", spanish: "Diagrama de red" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Kritische Pfad, auch als kritischer Weg bezeichnet, ist der Weg von Anfang bis zum Ende aller Aktivitäten eines Netzplans, auf dem die Summe aller Pufferzeiten minimal oder Null wird. Die Gesamtprojektdauer wird somit durch den kritischen Pfad bestimmt. Merke: Beim kritischen Pfad ist der Gesamtpuffer = Null.",
      textToSpanish: "La ruta crítica, también conocida como camino crítico, es el camino desde el inicio hasta el final de todas las actividades de un diagrama de red en el que la suma de todos los tiempos de holgura es mínima o igual a cero. La duración total del proyecto está determinada por la ruta crítica. Nota: En la ruta crítica, la holgura total es igual a cero.",
      importantWords: [
        { german: "Weg", spanish: "Camino" },
        { german: "Anfang", spanish: "Inicio" },
        { german: "Ende", spanish: "Fin" },
        { german: "Pufferzeiten", spanish: "Tiempos de holgura/buffer" },
        {
          german: "Gesamtprojektdauer",
          spanish: "Duración total del proyecto",
        },
      ],
    },
  },
  {
    number: "8",
    withImage: true,
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Bitte ergänze die fehlenden Elemente und Bezeichnungen eines Vorgangs des Netzplans. (ver imagen de la carta)",
      textToSpanish: "Por favor, completa los elementos y denominaciones faltantes de una actividad del diagrama de red. (ver imagen de la carta)",
      difficulty: 2,
      importantWords: [
        { german: "ergänze", spanish: "Completa" },
        { german: "fehlenden", spanish: "Faltantes" },
        { german: "Bezeichnungen", spanish: "Denominaciones/Nombres" },
        { german: "Vorgangs", spanish: "Proceso/actividad" },
        { german: "Netzplans", spanish: "Diagrama de red" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Se muestra un recuadro de un nodo de diagrama de red con las siguientes abreviaturas: FZ (frühester Anfangszeitpunkt - tiempo de inicio más temprano), FEZ (frühester Endzeitpunkt - tiempo de finalización más temprano), SAZ (spätester Anfangszeitpunkt - tiempo de inicio más tardío), SEZ (spätester Endzeitpunkt - tiempo de finalización más tardío), GP (Gesamtpuffer - holgura total), FP (freier Puffer - holgura libre). (ver imagen de la carta)",
      textToSpanish: "Se muestra un recuadro de un nodo de diagrama de red con las siguientes abreviaturas: FZ (frühester Anfangszeitpunkt - tiempo de inicio más temprano), FEZ (frühester Endzeitpunkt - tiempo de finalización más temprano), SAZ (spätester Anfangszeitpunkt - tiempo de inicio más tardío), SEZ (spätester Endzeitpunkt - tiempo de finalización más tardío), GP (Gesamtpuffer - holgura total), FP (freier Puffer - holgura libre). (ver imagen de la carta)",
      importantWords: [
        {
          german: "frühester Anfangszeitpunkt",
          spanish: "Tiempo de inicio más temprano",
        },
        {
          german: "frühester Endzeitpunkt",
          spanish: "Tiempo de finalización más temprano",
        },
        {
          german: "spätester Anfangszeitpunkt",
          spanish: "Tiempo de inicio más tardío",
        },
        {
          german: "spätester Endzeitpunkt",
          spanish: "Tiempo de finalización más tardío",
        },
        { german: "Gesamtpuffer", spanish: "Holgura total" },
        { german: "freier Puffer", spanish: "Holgura libre" },
      ],
    },
  },
  {
    number: "9",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was versteht man unter Forming, Storming, Norming und Performing im Teambildungsprozess?",
      textToSpanish: "¿Qué se entiende por Forming, Storming, Norming y Performing en el proceso de formación de equipos?",
      difficulty: 3,
      importantWords: [
        {
          german: "Teambildungsprozess",
          spanish: "Proceso de formación de equipos",
        },
        { german: "Forming", spanish: "Formación" },
        { german: "Storming", spanish: "Confrontación" },
        { german: "Norming", spanish: "Normalización" },
        { german: "Performing", spanish: "Ejecución/Rendimiento" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Forming: Orientierungsphase, in der sich alle Gruppenmitglieder kennenlernen. Vieles ist in dieser Phase noch unklar. Man kennt die Teammitglieder nicht richtig. Die Aufgaben und Rollen sind noch nicht verteilt, Ziele sind noch nicht definiert.\n\nStorming: Sogenannte Nahkampfphase, in der die Ziele zunehmend klarer werden. Eine Rollenverteilung bildet sich allmählich heraus. Teammitglieder kommen sich näher und erste Machtkämpfe entstehen. Der Projektleiter fungiert gleichermaßen als Schlichter und Antreiber.\n\nNorming: Organisationsphase des Teams, in der klare Strukturen und Regeln gebildet werden. Das Team muss sich wichtige Fragen zur Zielerreichung stellen und die Spielregeln sowie die Einhaltung dieser Regeln im Team definieren. Die Projektleiter übertragen Mitarbeitenden Aufgaben, setzen Teambesprechungen an und machen Erfolge sichtbar.\n\nPerforming: Hochleistungsphase, in der die Selbstorganisation des Teams im Vordergrund steht. Die Teams werden zunehmend kreativer und flexibel. Fragen wie „Wer hat was zu tun?“ sind klar im Team kommuniziert. Das Team ist jetzt leistungsfähig und arbeitet effizient sowie eigenständig.",
      textToSpanish: "Forming: Fase de orientación, en la que todos los miembros del grupo se conocen. Muchas cosas aún no están claras en esta fase. No se conoce bien a los miembros del equipo. Las tareas y roles aún no están asignados, los objetivos aún no están definidos.\n\nStorming: La llamada fase de confrontación, en la que los objetivos se vuelven cada vez más claros. Se va formando gradualmente una distribución de roles. Los miembros del equipo se acercan más y surgen los primeros conflictos de poder. El líder del proyecto actúa simultáneamente como mediador y motivador.\n\nNorming: Fase de organización del equipo, en la que se establecen estructuras y reglas claras. El equipo debe plantearse preguntas importantes sobre la consecución de objetivos y definir las reglas del juego, así como su cumplimiento dentro del equipo. Los líderes del proyecto asignan tareas a los empleados, programan reuniones de equipo y hacen visibles los éxitos.\n\nPerforming: Fase de alto rendimiento, en la que la autoorganización del equipo está en primer plano. Los equipos se vuelven cada vez más creativos y flexibles. Preguntas como '¿Quién hace qué?' están claramente comunicadas en el equipo. El equipo ahora es eficiente y trabaja de manera efectiva e independiente.",
      importantWords: [
        { german: "Orientierungsphase", spanish: "Fase de orientación" },
        { german: "Nahkampfphase", spanish: "Fase de confrontación" },
        { german: "Organisationsphase", spanish: "Fase de organización" },
        { german: "Hochleistungsphase", spanish: "Fase de alto rendimiento" },
        { german: "Rollenverteilung", spanish: "Distribución de roles" },
      ],
    },
  },
  {
    number: "10",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was bezeichnet man als Kick-Off-Meeting?",
      textToSpanish: "¿Qué se designa como reunión de inicio?",
      difficulty: 3,
      importantWords: [
        {
          german: "Kick-Off-Meeting",
          spanish: "Reunión de inicio/lanzamiento",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die offizielle DIN-Definition (DIN-69901-5) für das Kick-Off-Meeting lautet wie folgt: Das Kick-Off-Meeting findet nach erfolgter Projektplanung und vor dem Start der eigentlichen Durchführung statt. An einer Kick-Off-Veranstaltung nehmen mindestens alle Mitglieder des Projektteams teil. Darüber hinaus können Auftraggeber und weitere relevante Stakeholder einbezogen werden. (ver imagen de la carta)",
      textToSpanish: "La definición oficial de la norma DIN (DIN-69901-5) para la reunión de inicio es la siguiente: La reunión de inicio tiene lugar después de la planificación del proyecto y antes del comienzo de la ejecución propiamente dicha. En un evento de inicio participan al menos todos los miembros del equipo del proyecto. Además, pueden incluirse los clientes y otras partes interesadas relevantes. (ver imagen de la carta)",
      importantWords: [
        { german: "Projektplanung", spanish: "Planificación del proyecto" },
        { german: "Durchführung", spanish: "Ejecución" },
        { german: "Auftraggeber", spanish: "Cliente/contratista" },
        { german: "Stakeholder", spanish: "Partes interesadas" },
      ],
    },
  },
  {
    number: "11",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was versteht man unter einer Meilenstein-Planung?",
      textToSpanish: "¿Qué se entiende por planificación por hitos?",
      difficulty: 2,
      importantWords: [
        { german: "Meilenstein-Planung", spanish: "Planificación por hitos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Meilenstein-Planung ist eine Form der Projektplanung und verfolgt bestimmte Ziele wie: eine grobe Terminplanung für das gesamte Projekt, essenzielle Ereignisse (Meilensteine) im Projekt transparent zu machen, Übersicht über Verzögerungen und deren mögliche Auswirkungen auf andere Termine sichtbar machen, Leistungsfortschrittsorientierung zur Bewertung des Projektverlaufs, Schaffen von Zwischenzielen zur Motivation der Mitarbeitenden. (ver imagen de la carta)",
      textToSpanish: "La planificación por hitos es una forma de planificación de proyectos y persigue ciertos objetivos como: una planificación general de plazos para todo el proyecto, hacer transparentes los eventos esenciales (hitos) del proyecto, proporcionar una visión general de los retrasos y sus posibles impactos en otros plazos, orientación al progreso del rendimiento para evaluar el desarrollo del proyecto, y la creación de objetivos intermedios para motivar a los empleados. (ver imagen de la carta)",
      importantWords: [
        { german: "Ziele", spanish: "Objetivos" },
        {
          german: "Terminplanung",
          spanish: "Planificación de plazos/cronograma",
        },
        { german: "Meilensteine", spanish: "Hitos" },
        { german: "Verzögerungen", spanish: "Retrasos" },
        {
          german: "Leistungsfortschrittsorientierung",
          spanish: "Orientación al progreso del rendimiento",
        },
        { german: "Zwischenzielen", spanish: "Objetivos intermedios" },
      ],
    },
  },
  {
    number: "12",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Welche Vorgehensmodelle solltest du im Projektmanagement, insbesondere in der Anwendungsentwicklung kennen?",
      textToSpanish: "¿Qué modelos de procedimiento deberías conocer en la gestión de proyectos, especialmente en el desarrollo de aplicaciones?",
      difficulty: 1,
      importantWords: [
        { german: "Vorgehensmodelle", spanish: "Modelos de procedimiento" },
        { german: "Projektmanagement", spanish: "Gestión de proyectos" },
        {
          german: "Anwendungsentwicklung",
          spanish: "Desarrollo de aplicaciones",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Klassische Modelle: Wasserfallmodell, V-Modell, Spiralmodell. Agile Modelle: Scrum, Kanban, Inkrementelles Vorgehensmodell, Extreme Programming.",
      textToSpanish: "Modelos clásicos: modelo en cascada, modelo en V, modelo en espiral. Modelos ágiles: Scrum, Kanban, modelo de procedimiento incremental, Extreme Programming.",
      importantWords: [
        { german: "Klassische Modelle", spanish: "Modelos clásicos" },
        { german: "Wasserfallmodell", spanish: "Modelo en cascada" },
        { german: "Agile Modelle", spanish: "Modelos ágiles" },
        {
          german: "Inkrementelles Vorgehensmodell",
          spanish: "Modelo de procedimiento incremental",
        },
      ],
    },
  },
  {
    number: "13",
    withImage: true,
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Wähle Anhand der Darstellung den kritischen Pfad aus. (ver imagen de la carta)",
      textToSpanish: "Selecciona la ruta crítica basándote en la representación. (ver imagen de la carta)",
      difficulty: 3,
      importantWords: [
        { german: "Darstellung", spanish: "Representación" },
        { german: "kritischen Pfad", spanish: "Ruta crítica" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der kritische Pfad ist immer der Pfad, der keine Gesamtpufferzeiten enthält und somit das Gesamtprojekt gefährden kann. (ver imagen de la carta)",
      textToSpanish: "La ruta crítica es siempre el camino que no contiene tiempos de holgura totales y, por lo tanto, puede poner en peligro el proyecto completo. (ver imagen de la carta)",
      importantWords: [
        { german: "Gesamtpufferzeiten", spanish: "Tiempos de holgura totales" },
      ],
    },
  },
  {
    number: "14",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was sind Bestandteile einer Risikoanalyse?",
      textToSpanish: "¿Cuáles son los componentes de un análisis de riesgos?",
      difficulty: 2,
      importantWords: [
        { german: "Bestandteile", spanish: "Componentes" },
        { german: "Risikoanalyse", spanish: "Análisis de riesgo" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Risikoanalyse ist Bestandteil des Risikomanagements. Sie dient dem Zweck der Risikobeurteilung, Risikobewältigung und Risikokommunikation, um Transparenz über Art und Umfang von bestehenden Risiken zu schaffen. Risiken können durch Präventionsmaßnahmen offengelegt, vermieden oder zumindest reduziert werden. Risikoanalysen werden angewandt in den Bereichen: IT-Systeme und IT-Dienstleistungen, Großveranstaltung, Produktentwicklung, Pharmaindustrie, Arbeitsschutz, Lebensmittelsicherheit, etc.",
      textToSpanish: "El análisis de riesgos es un componente de la gestión de riesgos. Su propósito es la evaluación, manejo y comunicación de riesgos para crear transparencia sobre la naturaleza y el alcance de los riesgos existentes. Los riesgos pueden identificarse, evitarse o al menos reducirse mediante medidas de prevención. Los análisis de riesgos se aplican en áreas como: sistemas y servicios de TI, grandes eventos, desarrollo de productos, industria farmacéutica, seguridad laboral, seguridad alimentaria, etc.",
      importantWords: [
        { german: "Risikomanagements", spanish: "Gestión de riesgos" },
        { german: "Risikobeurteilung", spanish: "Evaluación de riesgos" },
        { german: "Risikobewältigung", spanish: "Manejo de riesgos" },
        { german: "Risikokommunikation", spanish: "Comunicación de riesgos" },
        { german: "Transparenz", spanish: "Transparencia" },
      ],
    },
  },
  {
    number: "15",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was versteht man unter dem Begriff Stakeholder?",
      textToSpanish: "¿Qué se entiende por el término parte interesada?",
      difficulty: 2,
      importantWords: [
        { german: "Begriff", spanish: "Término/concepto" },
        { german: "Stakeholder", spanish: "Parte interesada" },
      ],
    },
    answer: {
      title: "Antwort",
      text: 'Ein Stakeholder gehört zu den internen und externen Anspruchsgruppen, die gewisse Ziele und Interessen vertreten. Der Begriff Stakeholder stammt aus dem Englischen und bedeutet so viel wie Teilhaber oder Anspruchsberechtigter. Im Englischen kann „Stake" auch mit Einsatz, Anteil oder Anspruch, Erwartung übersetzt werden, „holder" kann mit Eigentümer oder Besitzer übersetzt werden. Der Stakeholder ist jemand, dessen Erwartung bzw. Einsatz auf dem Spiel steht und der daher ein Interesse an der Zielerreichung hat. Der Begriff „Stakeholder" wird nicht nur für Personen verwendet, die tatsächlich einen Einsatz geleistet haben, sondern für alle, die ein Interesse am Verlauf oder Ergebnis eines Prozesses, eines Projektes oder Investments haben. So können beispielsweise auch Kunden/Kundinnen oder Mitarbeitende die Funktion von Stakeholdern einnehmen.',
      textToSpanish: "Una parte interesada pertenece a los grupos de interés internos y externos que representan ciertos objetivos e intereses. El término 'stakeholder' proviene del inglés y significa algo así como partícipe o beneficiario. En inglés, 'stake' puede traducirse como apuesta, participación o expectativa, y 'holder' como propietario o poseedor. La parte interesada es alguien cuya expectativa o apuesta está en juego y, por lo tanto, tiene un interés en alcanzar los objetivos. El término 'stakeholder' no solo se usa para personas que han realizado una apuesta real, sino para todos aquellos que tienen un interés en el desarrollo o resultado de un proceso, proyecto o inversión. Por ejemplo, los clientes o empleados también pueden asumir la función de partes interesadas.",
      importantWords: [
        { german: "Anspruchsgruppen", spanish: "Grupos de interés" },
        { german: "Teilhaber", spanish: "Socio/partícipe" },
        {
          german: "Anspruchsberechtigter",
          spanish: "Beneficiario/derechohabiente",
        },
        { german: "Einsatz", spanish: "Apuesta/inversión" },
      ],
    },
  },
  {
    number: "16",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Welches sind die Hauptziele der Datensicherheit? (ver imagen de la carta)",
      textToSpanish: "¿Cuáles son los objetivos principales de la seguridad de los datos? (ver imagen de la carta)",
      difficulty: 2,
      importantWords: [
        { german: "Hauptziele", spanish: "Objetivos principales" },
        { german: "Datensicherheit", spanish: "Seguridad de los datos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Vertraulichkeit (Vertraulichkeit bedeutet, dass Daten nur befugten Personen zur Verarbeitung zugänglich sind.), Integrität (Integrität bedeutet, dass Daten/Systeme korrekt, unverändert bzw. verlässlich sind.), Verfügbarkeit (Verfügbarkeit und Erreichbarkeit aller Systeme sowie die Verhinderung von Systemausfällen der IuK-Systeme.) (ver imagen de la carta)",
      textToSpanish: "Confidencialidad (La confidencialidad significa que los datos solo son accesibles para personas autorizadas para su procesamiento), Integridad (La integridad significa que los datos/sistemas son correctos, inalterados y confiables), Disponibilidad (Disponibilidad y accesibilidad de todos los sistemas, así como la prevención de fallos en los sistemas de información y comunicación). (ver imagen de la carta)",
      importantWords: [
        { german: "Vertraulichkeit", spanish: "Confidencialidad" },
        { german: "Integrität", spanish: "Integridad" },
        { german: "Verfügbarkeit", spanish: "Disponibilidad" },
        { german: "befugten Personen", spanish: "Personas autorizadas" },
      ],
    },
  },
  {
    number: "17",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Wie errechnet sich der Gewinn eines Unternehmens? (ver imagen de la carta)",
      textToSpanish: "¿Cómo se calcula la ganancia de una empresa? (ver imagen de la carta)",
      difficulty: 3,
      importantWords: [
        { german: "errechnet sich", spanish: "Se calcula" },
        { german: "Gewinn", spanish: "Ganancia" },
        { german: "Unternehmens", spanish: "Empresa" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Gewinn eines Unternehmens berechnet sich anhand dieser Formel: Gewinn = Erlöss - Kosten. Die Erlöse sind alle Einnahmen, die durch Verkauf von Waren und Dienstleistungen entstehen. Zu den Kosten zählen die variablen und fixen Kosten, wie Rohstoffkosten, Mietkosten sowie Personalkosten. (ver imagen de la carta)",
      textToSpanish: "La ganancia de una empresa se calcula con esta fórmula: Ganancia = Ingresos - Costos. Los ingresos son todas las entradas generadas por la venta de bienes y servicios. Los costos incluyen los costos variables y fijos, como los costos de materias primas, costos de alquiler y costos de personal. (ver imagen de la carta)",
      importantWords: [
        { german: "Erlös", spanish: "Ingreso/facturación" },
        { german: "Kosten", spanish: "Costos" },
        { german: "Einnahmen", spanish: "Ingresos" },
        { german: "Waren", spanish: "Bienes" },
        { german: "Dienstleistungen", spanish: "Servicios" },
      ],
    },
  },
  {
    number: "18",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was versteht man unter einer Machbarkeitsanalyse?",
      textToSpanish: "¿Qué se entiende por un análisis de viabilidad?",
      difficulty: 1,
      importantWords: [
        { german: "Machbarkeitsanalyse", spanish: "Análisis de viabilidad" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Eine Machbarkeitsanalyse ist eine erweiterte Machbarkeitsprüfung, die neben technisch-wissenschaftlichen Analysen auch Tests oder Simulationen beinhaltet, sowie Experten hinzuziehen kann. Sie wird immer dann durchgeführt, wenn der Misserfolg eines Projekts wahrscheinlich ist oder es unkalkulierbare Risiken birgt. Der Hauptteil der Machbarkeitsstudie stellt die Machbarkeitsprüfung dar. Wesentlichen Punkte sind: organisatorische Umsetzung, wirtschaftliche Machbarkeit, technische Machbarkeit, Ressourcen und Verfügbarkeit, zeitliche Umsetzung, rechtliche Umsetzung.",
      textToSpanish: "Un análisis de viabilidad es una prueba de viabilidad ampliada que, además de análisis técnico-científicos, incluye pruebas o simulaciones y puede involucrar a expertos. Se lleva a cabo siempre que el fracaso de un proyecto sea probable o cuando implique riesgos incalculables. La parte principal del estudio de viabilidad es la prueba de viabilidad. Los puntos esenciales son: implementación organizativa, viabilidad económica, viabilidad técnica, recursos y disponibilidad, implementación temporal, implementación legal.",
      importantWords: [
        { german: "Machbarkeitsprüfung", spanish: "Prueba de viabilidad" },
        { german: "Misserfolg", spanish: "Fracaso" },
        { german: "Machbarkeitsstudie", spanish: "Estudio de viabilidad" },
        { german: "Umsetzung", spanish: "Implementación/realización" },
      ],
    },
  },
  {
    number: "19",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage 19",
      text: "Was sind Ziele einer Machbarkeitsanalyse? (ver imagen de la carta)",
      textToSpanish: "¿Cuáles son los objetivos de un análisis de viabilidad? (ver imagen de la carta)",
      difficulty: 2,
      importantWords: [
        { german: "Ziele", spanish: "Objetivos" },
        { german: "Machbarkeitsanalyse", spanish: "Análisis de viabilidad" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Machbarkeitsanalyse ist der Hauptbestandteil der Machbarkeitsstudie. Im Wesentlichen werden folgende Ziele verfolgt: ¿Es el proyecto técnicamente factible?, ¿Es posible la implementación organizativa?, ¿Es legalmente factible? (costos de licencia y patentes), ¿Qué aspecto tiene la viabilidad económica? (por ejemplo, presupuesto, financiación), ¿Hay suficientes Ressourcen disponibles? (por ejemplo, material, personas, máquinas y tiempo), ¿Es factible en el tiempo? A los análisis técnico-científicos del análisis de viabilidad también pertenecen los pilotos y simulaciones por computadora, así como las opiniones de expertos y estudios.",
      textToSpanish: "El análisis de viabilidad es el componente principal del estudio de viabilidad. En esencia, se persiguen los siguientes objetivos: ¿Es técnicamente viable el proyecto?, ¿Es posible la implementación organizativa?, ¿Es legalmente viable? (costos de licencias y patentes), ¿Cómo es la viabilidad económica? (por ejemplo, presupuesto, financiación), ¿Hay suficientes recursos disponibles? (por ejemplo, material, personas, máquinas y tiempo), ¿Es viable en el tiempo? Los análisis técnico-científicos del análisis de viabilidad también incluyen pruebas piloto y simulaciones por computadora, así como opiniones de expertos y estudios.",
      importantWords: [
        { german: "Hauptbestandteil", spanish: "Componente principal" },
        { german: "Pilottests", spanish: "Pruebas piloto" },
        { german: "Expertenmeinungen", spanish: "Opiniones de expertos" },
      ],
    },
  },
  {
    number: "20",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Wie berechnet sich der Deckungsbeitrag bei Unternehmen? (ver imagen de la carta)",
      textToSpanish: "¿Cómo se calcula el margen de contribución en las empresas? (ver imagen de la carta)",
      difficulty: 2,
      importantWords: [
        { german: "berechnet sich", spanish: "Se calcula" },
        { german: "Deckungsbeitrag", spanish: "Margen de contribución" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Deckungsbeitrag ist eine Teilkostenberechnung, welche sich aus der Differenz zwischen den erzielten Erlösen und den variablen Kosten berechnet. Der Deckungsbeitrag ist der Betrag, der zur Deckung der Fixkosten zur Verfügung steht. Formel: Deckungsbeitrag = Erlös – variable Kosten.",
      textToSpanish: "El margen de contribución es un cálculo de costos parciales que se obtiene de la diferencia entre los ingresos obtenidos y los costos variables. El margen de contribución es el monto disponible para cubrir los costos fijos. Fórmula: Margen de contribución = Ingresos – costos variables.",
      importantWords: [
        {
          german: "Teilkostenberechnung",
          spanish: "Cálculo de costos parciales",
        },
        { german: "Differenz", spanish: "Diferencia" },
        { german: "Erlösen", spanish: "Ingresos" },
        { german: "variablen Kosten", spanish: "Costos variables" },
        { german: "Deckung", spanish: "Cobertura" },
        { german: "Fixkosten", spanish: "Costos fijos" },
      ],
    },
  },
  {
    number: "21",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Welche Arten von Äußerungen sind in einem Kundengespräch eher blockierend? (ver imagen de la carta)",
      textToSpanish: "¿Qué tipos de declaraciones son más bien bloqueantes en una conversación con el cliente? (ver imagen de la carta)",
      difficulty: 3,
      importantWords: [
        { german: "Äußerungen", spanish: "Declaraciones/comentarios" },
        { german: "Kundengespräch", spanish: "Conversación con el cliente" },
        { german: "blockierend", spanish: "Bloqueantes" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "In der Kundenkommunikation sind Äußerungen eher blockierend als förderlich, die folgende Eigenschaften aufweisen: Belehrugen (Dar una lección), Killerphrasen (Frases asesinas), Erzeugen von Druck (Crear presión), Termindruck auf Kunden ausüben (Poner presión de tiempo a los clientes), Konkurrenz diskreditieren (Desacreditar a la competencia).",
      textToSpanish: "En la comunicación con los clientes, las declaraciones que tienen las siguientes características son más bien bloqueantes que útiles: lecciones (dar una lección), frases asesinas, crear presión, ejercer presión de tiempo sobre los clientes, desacreditar a la competencia.",
      importantWords: [
        { german: "Belehrugen", spanish: "Lecciones" },
        { german: "Killerphrasen", spanish: "Frases asesinas" },
        { german: "Erzeugen von Druck", spanish: "Crear presión" },
        { german: "Termindruck", spanish: "Presión de tiempo" },
      ],
    },
  },
  {
    number: "22",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "In welchem Softwaresystem werden in der Regel Supportanfragen verarbeitet?",
      textToSpanish: "¿En qué sistema de software se procesan generalmente las solicitudes de soporte?",
      difficulty: 2,
      importantWords: [
        { german: "Softwaresystem", spanish: "Sistema de software" },
        { german: "Supportanfragen", spanish: "Solicitudes de soporte" },
        { german: "verarbeitet", spanish: "Procesadas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Es gibt eine Reihe von Synonymen für eine Supportanfragende Software. Folgende Begrifflichkeiten existieren wie: Ticketing-System, User-Helpdesk-System, Support-Ticketing-System, Service-Ticket-System, Task-Tracking-System, Request-Tracking-System (RTS). Bei diesen Softwarelösungen geht es grundsätzlich um Umfang, Bestätigung, Klassifizierung, Bearbeitung sowie die Pflege von Kundenanfragen in Form von sogenannten Tickets bzw. Fällen/Cases. Die eingehenden Kundenanfragen können klassisch per Telefon, per Mail, als Faxe oder in einem Online-Tool entgegengenommen werden. Moderne Tracking-Systeme haben in der Regel eine komplexe Datenbank sowie eine Schnittstelle zu einem Webportal, wo der Kunde den Bearbeitungsstatus jederzeit verfolgen kann.",
      textToSpanish: "Existen varios sinónimos para un software de solicitudes de soporte. Los siguientes términos existen: sistema de tickets, sistema de mesa de ayuda de usuario, sistema de tickets de soporte, sistema de tickets de servicio, sistema de seguimiento de tareas, sistema de seguimiento de solicitudes (RTS). Estas soluciones de software se centran fundamentalmente en el alcance, confirmación, clasificación, procesamiento y mantenimiento de las solicitudes de los clientes en forma de los llamados tickets o casos. Las solicitudes de los clientes pueden recibirse de manera clásica por teléfono, correo electrónico, fax o a través de una herramienta en línea. Los sistemas de seguimiento modernos generalmente tienen una base de datos compleja y una interfaz con un portal web, donde el cliente puede seguir el estado de procesamiento en cualquier momento.",
      importantWords: [
        { german: "Ticketing-System", spanish: "Sistema de tickets" },
        {
          german: "User-Helpdesk-System",
          spanish: "Sistema de mesa de ayuda de usuario",
        },
        { german: "Klassifizierung", spanish: "Clasificación" },
        { german: "Bearbeitung", spanish: "Procesamiento" },
      ],
    },
  },
  {
    number: "23",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Nenne die Vorteile für ein User-Helpdesk-Ticketsystem. (ver imagen de la carta)",
      textToSpanish: "Nombra las ventajas de un sistema de tickets de mesa de ayuda de usuario. (ver imagen de la carta)",
      difficulty: 3,
      importantWords: [
        { german: "Vorteile", spanish: "Ventajas" },
        {
          german: "User-Helpdesk-Ticketsystem",
          spanish: "Sistema de tickets de mesa de ayuda de usuario",
        },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Vorteile eines User-Helpdesk-Ticketsystems sind: alle Ticket-Bearbeiter können auf die Service- und Fehler-historie zurückgreifen, es dient der Weiterentwicklung der Produkte oder des Service, durch Kategorisierung in Level können Gruppen von Experten, die speziell für die Tätigkeit in diesem Level zuständig sind, besser koordiniert werden, durch den Einsatz der Wissensdatenbank können die Fehleranalyse sowie deren Lösung zur Wiederherstellung des Systems/Service unterstützt werden, durch Online-Ticketsysteme können Kundenerfahrungen gezielt gesammelt und ausgewertet werden.",
      textToSpanish: "Las ventajas de un sistema de tickets de mesa de ayuda de usuario son: todos los encargados de los tickets pueden acceder al historial de servicios y errores, sirve para el desarrollo continuo de los productos o servicios, mediante la categorización en niveles se pueden coordinar mejor los grupos de expertos responsables específicamente de cada nivel, el uso de una base de datos de conocimiento puede apoyar el análisis de errores y su resolución para restaurar el sistema/servicio, y los sistemas de tickets en línea permiten recopilar y evaluar de manera específica las experiencias de los clientes.",
      importantWords: [
        { german: "Fehler-historie", spanish: "Historial de errores" },
        { german: "Weiterentwicklung", spanish: "Desarrollo" },
        { german: "Kategorisierung", spanish: "Categorización" },
        {
          german: "Wissensdatenbank",
          spanish: "Base de datos de conocimiento",
        },
        { german: "Fehleranalyse", spanish: "Análisis de errores" },
        { german: "ausgewertet", spanish: "Evaluadas" },
      ],
    },
  },
];