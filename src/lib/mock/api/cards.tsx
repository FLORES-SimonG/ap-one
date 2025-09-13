import { Card } from "@/lib/interfaces/cards";


export const learningCards: Card[] = [
  {
    number: "1",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Mit welchen Werkzeugen kann man ein Projekt planen und überwachen?",
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
      importantWords: [
        { german: "Netzplan", spanish: "Diagrama de red" },
        { german: "Gantt-Diagramm", spanish: "Diagrama de Gantt" },
        { german: "Projektstrukturplan", spanish: "Plan de estructura del proyecto (PSP)" },
      ],
    },
  },
  {
    number: "2",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Was ist ein Netzplan?",
      difficulty: 2,
      importantWords: [
        { german: "Netzplan", spanish: "Diagrama de red" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Netzplan findet Anwendung bei der Terminplanung von Projekten und stellt im Projektmanagement die Dauer von Aktivitäten im Projekt dar. Sowohl ihre zeitliche Anordnung als auch logische Abhängigkeiten zwischen den Aktivitäten werden grafisch dargestellt. Kritische Pfade und Pufferzeiten der einzelnen Aktivitäten sowie Gesamtpufferzeiten sind erkennbar.",
      importantWords: [
        { german: "Terminplanung", spanish: "Planificación de plazos/cronograma" },
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
      difficulty: 2,
      importantWords: [
        { german: "Gantt-Diagramm", spanish: "Diagrama de Gantt" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "In einem Gantt-Diagramm werden alle Aktivitäten eines Projektes mit Hilfe einer Zeitachse dargestellt. Die Zeitachse wird horizontal in der ersten Zeile des Diagramms dargestellt. Alle Aktivitäten werden dann in den darunter liegenden Zeilen in der ersten Spalte benannt und zeitlich mit einem waagerechten Balken dargestellt. An der Länge der Balken kann die Dauer, der Beginn und das Ende der Aktivität erkannt werden. Sich überschneidende Aktivitäten werden durch überlappende Balken dargestellt. Eine Visualisierung des kritischen Pfades ist möglich. Abhängigkeiten zwischen den einzelnen Aktivitäten werden mit Hilfe von Pfeilen verdeutlicht. \n\nVorteil: für kleine und mittlere Projekte sehr übersichtliche Darstellung der Aktivitäten.\n\nNachteil: bei einer großen Anzahl von Aktivitäten wird die Darstellung schnell unübersichtlich. (ver imagen de la carta)",
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
      difficulty: 3,
      importantWords: [
        { german: "Top-Down-Ansatz", spanish: "Enfoque de arriba hacia abajo" },
        { german: "Projektstrukturplan", spanish: "Plan de estructura del proyecto (PSP)" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Top-Down-Ansatz des Projektstrukturplans verfolgt das Ziel, dass der Weg vom Ganzen zum Detail führt. Dazu wird das Gesamtprojekts in mehrere Teilaufgaben zerlegt. Schritte zur Erreichung dieses Ziels sind: Benennung des Gesamtprojekts, Zerlegung des Gesamtprojekts in Arbeitspakete oder Teilaufgaben, Benennung der Teilaufgaben, weitere Zerlegung der Teilschritte, bis Arbeitspakete vorliegen. Der Top-Down-Ansatz wird immer dann gewählt, wenn bereits Erfahrungen vorliegen mit ähnlichen Projekten oder die Inhalte des zu planenden Projektes aus vorherigen Projekten bereits bekannt sind.",
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
      difficulty: 3,
      importantWords: [
        { german: "Bottom-Up-Ansatz", spanish: "Enfoque de abajo hacia arriba" },
        { german: "Projektstrukturplan", spanish: "Plan de estructura del proyecto (PSP)" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Bottom-Up-Ansatz des Projektstrukturplans verfolgt das Ziel, dass der Weg vom Detail zum Ganzen führt. Die Grundidee ist, dass abgegrenzte, detaillierte Teilprobleme gelöst werden, um dann mit deren Hilfe größere, darüber liegende Probleme zu lösen. Bei sehr innovativen Lösungen kommt dieser Ansatz zum Einsatz. Folgende Punkte sind dabei zu berücksichtigen: Festlegung der auszuführenden Aufgaben, Klärung der Beziehungen der Teilaufgaben in der Baumstruktur, Errichtung einer Baumstruktur, um Aufbau und Zusammensetzung zu erkennen, Überprüfung auf Vollständigkeit und Einmaligkeit aller Teilaufgaben. (ver imagen de la carta)",
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
      difficulty: 2,
      importantWords: [
        { german: "4-Phasen-Modell", spanish: "Modelo de 4 fases" },
        { german: "Projektmanagement", spanish: "Gestión de proyectos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das 4-Phasen-Modell beschreibt die grundlegenden Phasen beim Projektmanagement. Eine der ersten und grundlegenden Managementaufgaben in einem Projekt ist die Planung von Projektphasen. Dieses 4-Phasen-Modell gliedert ein Projekt in folgende Phasen ein: Projektdefinition, Projektplanung, Projektdurchführung und Controlling, Projektabschluss. Als Alternative existiert noch das 5-Phasen Modell, wo die 1. Phase die Initiierung des Projekts darstellt. (ver imagen de la carta)",
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
      difficulty: 3,
      importantWords: [
        { german: "kritischen Pfad", spanish: "Ruta crítica" },
        { german: "Netzplan", spanish: "Diagrama de red" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Kritische Pfad, auch als kritischer Weg bezeichnet, ist der Weg von Anfang bis zum Ende aller Aktivitäten eines Netzplans, auf dem die Summe aller Pufferzeiten minimal oder Null wird. Die Gesamtprojektdauer wird somit durch den kritischen Pfad bestimmt. Merke: Beim kritischen Pfad ist der Gesamtpuffer = Null.",
      importantWords: [
        { german: "Weg", spanish: "Camino" },
        { german: "Anfang", spanish: "Inicio" },
        { german: "Ende", spanish: "Fin" },
        { german: "Pufferzeiten", spanish: "Tiempos de holgura/buffer" },
        { german: "Gesamtprojektdauer", spanish: "Duración total del proyecto" },
      ],
    },
  },
  {
    number: "8",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Bitte ergänze die fehlenden Elemente und Bezeichnungen eines Vorgangs des Netzplans. (ver imagen de la carta)",
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
      importantWords: [
        { german: "frühester Anfangszeitpunkt", spanish: "Tiempo de inicio más temprano" },
        { german: "frühester Endzeitpunkt", spanish: "Tiempo de finalización más temprano" },
        { german: "spätester Anfangszeitpunkt", spanish: "Tiempo de inicio más tardío" },
        { german: "spätester Endzeitpunkt", spanish: "Tiempo de finalización más tardío" },
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
      difficulty: 3,
      importantWords: [
        { german: "Teambildungsprozess", spanish: "Proceso de formación de equipos" },
        { german: "Forming", spanish: "Formación" },
        { german: "Storming", spanish: "Confrontación" },
        { german: "Norming", spanish: "Normalización" },
        { german: "Performing", spanish: "Ejecución/Rendimiento" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Forming: Orientierungsphase, in der sich alle Gruppenmitglieder kennenlernen. Vieles ist in dieser Phase noch unklar. Man kennt die Teammitglieder nicht richtig. Die Aufgaben und Rollen sind noch nicht verteilt, Ziele sind noch nicht definiert.\n\nStorming: Sogenannte Nahkampfphase, in der die Ziele zunehmend klarer werden. Eine Rollenverteilung bildet sich allmählich heraus. Teammitglieder kommen sich näher und erste Machtkämpfe entstehen. Der Projektleiter fungiert gleichermaßen als Schlichter und Antreiber.\n\nNorming: Organisationsphase des Teams, in der klare Strukturen und Regeln gebildet werden. Das Team muss sich wichtige Fragen zur Zielerreichung stellen und die Spielregeln sowie die Einhaltung dieser Regeln im Team definieren. Die Projektleiter übertragen Mitarbeitenden Aufgaben, setzen Teambesprechungen an und machen Erfolge sichtbar.\n\nPerforming: Hochleistungsphase, in der die Selbstorganisation des Teams im Vordergrund steht. Die Teams werden zunehmend kreativer und flexibel. Fragen wie „Wer hat was zu tun?“ sind klar im Team kommuniziert. Das Team ist jetzt leistungsfähig und arbeitet effizient sowie eigenständig.",
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
      difficulty: 3,
      importantWords: [
        { german: "Kick-Off-Meeting", spanish: "Reunión de inicio/lanzamiento" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die offizielle DIN-Definition (DIN-69901-5) für das Kick-Off-Meeting lautet wie folgt: Das Kick-Off-Meeting findet nach erfolgter Projektplanung und vor dem Start der eigentlichen Durchführung statt. An einer Kick-Off-Veranstaltung nehmen mindestens alle Mitglieder des Projektteams teil. Darüber hinaus können Auftraggeber und weitere relevante Stakeholder einbezogen werden. (ver imagen de la carta)",
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
      difficulty: 2,
      importantWords: [
        { german: "Meilenstein-Planung", spanish: "Planificación por hitos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Meilenstein-Planung ist eine Form der Projektplanung und verfolgt bestimmte Ziele wie: eine grobe Terminplanung für das gesamte Projekt, essenzielle Ereignisse (Meilensteine) im Projekt transparent zu machen, Übersicht über Verzögerungen und deren mögliche Auswirkungen auf andere Termine sichtbar machen, Leistungsfortschrittsorientierung zur Bewertung des Projektverlaufs, Schaffen von Zwischenzielen zur Motivation der Mitarbeitenden. (ver imagen de la carta)",
      importantWords: [
        { german: "Ziele", spanish: "Objetivos" },
        { german: "Terminplanung", spanish: "Planificación de plazos/cronograma" },
        { german: "Meilensteine", spanish: "Hitos" },
        { german: "Verzögerungen", spanish: "Retrasos" },
        { german: "Leistungsfortschrittsorientierung", spanish: "Orientación al progreso del rendimiento" },
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
      difficulty: 1,
      importantWords: [
        { german: "Vorgehensmodelle", spanish: "Modelos de procedimiento" },
        { german: "Projektmanagement", spanish: "Gestión de proyectos" },
        { german: "Anwendungsentwicklung", spanish: "Desarrollo de aplicaciones" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Klassische Modelle: Wasserfallmodell, V-Modell, Spiralmodell. Agile Modelle: Scrum, Kanban, Inkrementelles Vorgehensmodell, Extreme Programming.",
      importantWords: [
        { german: "Klassische Modelle", spanish: "Modelos clásicos" },
        { german: "Wasserfallmodell", spanish: "Modelo en cascada" },
        { german: "Agile Modelle", spanish: "Modelos ágiles" },
        { german: "Inkrementelles Vorgehensmodell", spanish: "Modelo de procedimiento incremental" },
      ],
    },
  },
  {
    number: "13",
    section: "Planen, Vorbereiten und Durchführen von Arbeitsaufgaben",
    question: {
      title: "Frage",
      text: "Wähle Anhand der Darstellung den kritischen Pfad aus. (ver imagen de la carta)",
      difficulty: 3,
      importantWords: [
        { german: "Darstellung", spanish: "Representación" },
        { german: "kritischen Pfad", spanish: "Ruta crítica" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der kritische Pfad ist immer der Pfad, der keine Gesamtpufferzeiten enthält und somit das Gesamtprojekt gefährden kann. (ver imagen de la carta)",
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
      difficulty: 2,
      importantWords: [
        { german: "Bestandteile", spanish: "Componentes" },
        { german: "Risikoanalyse", spanish: "Análisis de riesgo" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Risikoanalyse ist Bestandteil des Risikomanagements. Sie dient dem Zweck der Risikobeurteilung, Risikobewältigung und Risikokommunikation, um Transparenz über Art und Umfang von bestehenden Risiken zu schaffen. Risiken können durch Präventionsmaßnahmen offengelegt, vermieden oder zumindest reduziert werden. Risikoanalysen werden angewandt in den Bereichen: IT-Systeme und IT-Dienstleistungen, Großveranstaltung, Produktentwicklung, Pharmaindustrie, Arbeitsschutz, Lebensmittelsicherheit, etc.",
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
      difficulty: 2,
      importantWords: [
        { german: "Begriff", spanish: "Término/concepto" },
        { german: "Stakeholder", spanish: "Parte interesada" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Stakeholder gehört zu den internen und externen Anspruchsgruppen, die gewisse Ziele und Interessen vertreten. Der Begriff Stakeholder stammt aus dem Englischen und bedeutet so viel wie Teilhaber oder Anspruchsberechtigter. Im Englischen kann „Stake\" auch mit Einsatz, Anteil oder Anspruch, Erwartung übersetzt werden, „holder\" kann mit Eigentümer oder Besitzer übersetzt werden. Der Stakeholder ist jemand, dessen Erwartung bzw. Einsatz auf dem Spiel steht und der daher ein Interesse an der Zielerreichung hat. Der Begriff „Stakeholder\" wird nicht nur für Personen verwendet, die tatsächlich einen Einsatz geleistet haben, sondern für alle, die ein Interesse am Verlauf oder Ergebnis eines Prozesses, eines Projektes oder Investments haben. So können beispielsweise auch Kunden/Kundinnen oder Mitarbeitende die Funktion von Stakeholdern einnehmen.",
      importantWords: [
        { german: "Anspruchsgruppen", spanish: "Grupos de interés" },
        { german: "Teilhaber", spanish: "Socio/partícipe" },
        { german: "Anspruchsberechtigter", spanish: "Beneficiario/derechohabiente" },
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
      difficulty: 2,
      importantWords: [
        { german: "Hauptziele", spanish: "Objetivos principales" },
        { german: "Datensicherheit", spanish: "Seguridad de los datos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Vertraulichkeit (Vertraulichkeit bedeutet, dass Daten nur befugten Personen zur Verarbeitung zugänglich sind.), Integrität (Integrität bedeutet, dass Daten/Systeme korrekt, unverändert bzw. verlässlich sind.), Verfügbarkeit (Verfügbarkeit und Erreichbarkeit aller Systeme sowie die Verhinderung von Systemausfällen der IuK-Systeme.) (ver imagen de la carta)",
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
      difficulty: 1,
      importantWords: [
        { german: "Machbarkeitsanalyse", spanish: "Análisis de viabilidad" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Eine Machbarkeitsanalyse ist eine erweiterte Machbarkeitsprüfung, die neben technisch-wissenschaftlichen Analysen auch Tests oder Simulationen beinhaltet, sowie Experten hinzuziehen kann. Sie wird immer dann durchgeführt, wenn der Misserfolg eines Projekts wahrscheinlich ist oder es unkalkulierbare Risiken birgt. Der Hauptteil der Machbarkeitsstudie stellt die Machbarkeitsprüfung dar. Wesentlichen Punkte sind: organisatorische Umsetzung, wirtschaftliche Machbarkeit, technische Machbarkeit, Ressourcen und Verfügbarkeit, zeitliche Umsetzung, rechtliche Umsetzung.",
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
      difficulty: 2,
      importantWords: [
        { german: "Ziele", spanish: "Objetivos" },
        { german: "Machbarkeitsanalyse", spanish: "Análisis de viabilidad" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Machbarkeitsanalyse ist der Hauptbestandteil der Machbarkeitsstudie. Im Wesentlichen werden folgende Ziele verfolgt: ¿Es el proyecto técnicamente factible?, ¿Es posible la implementación organizativa?, ¿Es legalmente factible? (costos de licencia y patentes), ¿Qué aspecto tiene la viabilidad económica? (por ejemplo, presupuesto, financiación), ¿Hay suficientes Ressourcen disponibles? (por ejemplo, material, personas, máquinas y tiempo), ¿Es factible en el tiempo? A los análisis técnico-científicos del análisis de viabilidad también pertenecen los pilotos y simulaciones por computadora, así como las opiniones de expertos y estudios.",
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
      difficulty: 2,
      importantWords: [
        { german: "berechnet sich", spanish: "Se calcula" },
        { german: "Deckungsbeitrag", spanish: "Margen de contribución" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Deckungsbeitrag ist eine Teilkostenberechnung, welche sich aus der Differenz zwischen den erzielten Erlösen und den variablen Kosten berechnet. Der Deckungsbeitrag ist der Betrag, der zur Deckung der Fixkosten zur Verfügung steht. Formel: Deckungsbeitrag = Erlös – variable Kosten.",
      importantWords: [
        { german: "Teilkostenberechnung", spanish: "Cálculo de costos parciales" },
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
      importantWords: [
        { german: "Ticketing-System", spanish: "Sistema de tickets" },
        { german: "User-Helpdesk-System", spanish: "Sistema de mesa de ayuda de usuario" },
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
      difficulty: 3,
      importantWords: [
        { german: "Vorteile", spanish: "Ventajas" },
        { german: "User-Helpdesk-Ticketsystem", spanish: "Sistema de tickets de mesa de ayuda de usuario" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Vorteile eines User-Helpdesk-Ticketsystems sind: alle Ticket-Bearbeiter können auf die Service- und Fehler-historie zurückgreifen, es dient der Weiterentwicklung der Produkte oder des Service, durch Kategorisierung in Level können Gruppen von Experten, die speziell für die Tätigkeit in diesem Level zuständig sind, besser koordiniert werden, durch den Einsatz der Wissensdatenbank können die Fehleranalyse sowie deren Lösung zur Wiederherstellung des Systems/Service unterstützt werden, durch Online-Ticketsysteme können Kundenerfahrungen gezielt gesammelt und ausgewertet werden.",
      importantWords: [
        { german: "Fehler-historie", spanish: "Historial de errores" },
        { german: "Weiterentwicklung", spanish: "Desarrollo" },
        { german: "Kategorisierung", spanish: "Categorización" },
        { german: "Wissensdatenbank", spanish: "Base de datos de conocimiento" },
        { german: "Fehleranalyse", spanish: "Análisis de errores" },
        { german: "ausgewertet", spanish: "Evaluadas" },
      ],
    },
  },
  {
    number: "24",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Was versteht man unter dem Begriff volkswirtschaftliche Sektoren?",
      difficulty: 2,
      importantWords: [
        { german: "volkswirtschaftliche Sektoren", spanish: "sectores económicos" },
        { german: "Begriff", spanish: "término" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die volkswirtschaftliche Produktion wird in 3 Sektoren nach der Drei-Sektoren-Hypothese unterteilt. Der 1. Sektor, auch Primärsektor genannt, erfasst die land- und forstwirtschaftliche Produktion sowie die Fischerei als auch den Bergbau. Der 2. Sektor, auch Sekundärsektor genannt, erfasst die Industrie und das verarbeitende Gewerbe/Handwerk. Der 3. Sektor, auch Tertiärsektor genannt, erfasst alle Dienstleistungen, die durch Unternehmen und öffentliche Einrichtungen erbracht werden. Zusätzlich zu den 3 bekannten Sektoren gibt es noch den Begriff des Quartärsektors (Informationssektor).",
      importantWords: [
        { german: "Primärsektor", spanish: "sector primario" },
        { german: "Sekundärsektor", spanish: "sector secundario" },
        { german: "Tertiärsektor", spanish: "sector terciario" },
        { german: "Quartärsektors", spanish: "sector cuaternario" },
      ],
    },
  },
  {
    number: "25",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Was versteht man unter der Marktform des Monopols?",
      difficulty: 3,
      importantWords: [
        { german: "Marktform", spanish: "forma de mercado" },
        { german: "Monopols", spanish: "monopolio" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Monopol ist eine Marktform in der Marktwirtschaft, bei welcher nur ein Anbieter vielen Nachfragern gegenübersteht (Angebotsmonopol) oder nur ein Nachfrager vielen Anbietern gegenübersteht (Nachfragemonopol). Der Monopolist hat somit eine marktbeherrschende Stellung. Er kann weitgehend das Angebot und den Preis am Markt bestimmen. Eine Sonderform ist das zweiseitige Monopol, bei dem es genau einen Anbieter und genau einen Nachfrager gibt.",
      importantWords: [
        { german: "Monopol", spanish: "monopolio" },
        { german: "Anbieter", spanish: "oferente" },
        { german: "Nachfrager", spanish: "demandante" },
      ],
    },
  },
  {
    number: "26",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Wann spricht man in der Wirtschaft von einem Angebotsoligopol?",
      difficulty: 2,
      importantWords: [
        { german: "Angebotsoligopol", spanish: "oligopolio de oferta" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Ein Angebotsoligopol ist in der Marktwirtschaft eine Marktform, die durch wenige Anbieter auf der einen Seite und durch viele Nachfrager auf der anderen Seite gekennzeichnet ist. Als Beispiel kann hier der Energiemarkt bzw. der Mobilfunkmarkt genannt werden.",
      importantWords: [
        { german: "Angebotsoligopol", spanish: "oligopolio de oferta" },
        { german: "Anbieter", spanish: "oferente" },
        { german: "Nachfrager", spanish: "demandante" },
      ],
    },
  },
  {
    number: "27",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Was versteht man unter dem Begriff IT-Benchmarking?",
      difficulty: 2,
      importantWords: [
        { german: "IT-Benchmarking", spanish: "IT-Benchmarking" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Unter IT-Benchmarking, auch Betriebsvergleich genannt, versteht man eine strategische IT-Management-Methode, in der die Performance der IT-Dienstleistungen eines Unternehmens mit denen eines anderen Unternehmens verglichen wird. Durch den Vergleich von Angeboten, Verträgen, Dienstleistungen und Preisen lässt sich die Qualität der miteinander verglichenen Dienstleister ermitteln. Da es keine standardisierten Verfahren gibt, müssen die allgemeinen Funktionen und Kostenarten miteinander verglichen werden, wie zum Beispiel Kosten für den Support von Anwendungsentwicklungen oder bei den Kostenarten, die der Personalkosten.",
      importantWords: [
        { german: "IT-Benchmarking", spanish: "IT-Benchmarking" },
        { german: "Betriebsvergleich", spanish: "comparación de empresas" },
        { german: "Performance", spanish: "rendimiento" },
        { german: "Dienstleistungen", spanish: "servicios" },
      ],
    },
  },
  {
    number: "28",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Welche Kriterien müssen erfüllt sein für ein Marktgleichgewicht?",
      difficulty: 3,
      importantWords: [
        { german: "Kriterien", spanish: "criterios" },
        { german: "Marktgleichgewicht", spanish: "equilibrio de mercado" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das Marktgleichgewicht herrscht, wenn ein Zustand erreicht wird, in dem die angebotene Menge und die nachgefragte Menge nach Gütern übereinstimmen. Durch den sogenannten Gleichgewichtspreis, zu dem ein Gut oder eine Ware angeboten wird, und die entsprechende Gleichgewichtsmenge, die nachgefragt wird, kommt der größtmögliche Umsatz im Markt zustande.",
      importantWords: [
        { german: "Marktgleichgewicht", spanish: "equilibrio de mercado" },
        { german: "angebotene Menge", spanish: "cantidad ofrecida" },
        { german: "nachgefragte Menge", spanish: "cantidad demandada" },
        { german: "Gleichgewichtspreis", spanish: "precio de equilibrio" },
        { german: "Gleichgewichtsmenge", spanish: "cantidad de equilibrio" },
      ],
    },
  },
  {
    number: "29",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Wann spricht man von einem Käufermarkt?",
      difficulty: 2,
      importantWords: [
        { german: "Käufermarkt", spanish: "mercado de compradores" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Als Käufermarkt wird eine Marktsituation beschrieben, in der sich die Käuferseite in der besseren Position gegenüber der Verkäuferseite befindet. Der sogenannte Angebotsüberhang oder ein Überangebot an Waren ist hierfür ein typisches Beispiel. Dieses Überangebot entsteht immer dann, wenn das Angebot die Nachfrage deutlich übersteigt. Wenn von einem Produkt zu viel angeboten wird, zum Beispiel frische Erdbeeren, existieren mehr Erdbeeren am Markt, als es Abnehmer dafür gibt. Als Folge ist ein sinkender Preis für Erdbeeren zu beobachten, was für die Verkäufer zu sinkenden Umsätzen führt.",
      importantWords: [
        { german: "Käufermarkt", spanish: "mercado de compradores" },
        { german: "Angebotsüberhang", spanish: "excedente de oferta" },
        { german: "sinkender Preis", spanish: "precio decreciente" },
      ],
    },
  },
  {
    number: "30",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Welche Aufgaben und Ziele verfolgen die betrieblichen Grundfunktionen?",
      difficulty: 2,
      importantWords: [
        { german: "betrieblichen Grundfunktionen", spanish: "funciones básicas operativas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Zu den betrieblichen Grundfunktionen zählen: Beschaffung: z. B. Einkauf von Roh-, Hilfs- und Betriebsstoffen sowie Fertigerzeugnissen. Produktion: Herstellen von materiellen sowie immateriellen Gütern/Waren und/oder Dienstleistungen. Absatz/Vertrieb: Verkauf der produzierten Güter/Waren und/oder Dienstleistungen am Markt. Finanzierung: alle Prozesse, die im Zusammenhang mit der finanziellen Versorgung, Steuerung sowie Kontrolle zwischen Kapitalbeschaffung und Kapitalverwendung stehen.",
      importantWords: [
        { german: "Beschaffung", spanish: "adquisición/aprovisionamiento" },
        { german: "Produktion", spanish: "producción" },
        { german: "Absatz/Vertrieb", spanish: "venta/distribución" },
        { german: "Finanzierung", spanish: "financiación" },
      ],
    },
  },
  {
    number: "31",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Welche Merkmale besitzt eine Europäische Gesellschaft (lateinisch Societas Europaea, kurz SE genannt)?",
      difficulty: 3,
      importantWords: [
        { german: "Europäische Gesellschaft", spanish: "sociedad europea" },
        { german: "Merkmale", spanish: "características" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Folgende Merkmale gelten für eine Europäische Gesellschaft (SE): Sie besitzt eine eigene Rechtspersönlichkeit. Sie ist eine Kapitalgesellschaft. Das Mindestkapital beträgt 120.000 Euro. Jeder Aktionär haftet nur bis zur Höhe des von ihm gezeichneten Kapitals. Die Geschäftsführung kann auf 2 Arten erfolgen: Monistisches System, Dualistisches System.",
      importantWords: [
        { german: "Rechtspersönlichkeit", spanish: "personalidad jurídica" },
        { german: "Kapitalgesellschaft", spanish: "sociedad de capital" },
        { german: "Mindestkapital", spanish: "capital mínimo" },
        { german: "Aktionär", spanish: "accionista" },
      ],
    },
  },
  {
    number: "32",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Welche Kriterien müssen für die Marktform des Polypols erfüllt sein?",
      difficulty: 3,
      importantWords: [
        { german: "Kriterien", spanish: "criterios" },
        { german: "Marktform", spanish: "forma de mercado" },
        { german: "Polypols", spanish: "polipolio" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Das Polypol gilt als die bestmögliche Marktform der Marktwirtschaft, da hier von einem vollkommenen Markt die Rede ist. Es gibt regen Wettbewerb unter den Anbietern und Nachfragern. Es ist eine Marktform, bei der sich viele Anbieter und viele Nachfrager gegenüberstehen und miteinander in Konkurrenz treten.",
      importantWords: [
        { german: "Polypol", spanish: "polipolio" },
        { german: "Wettbewerb", spanish: "competencia" },
        { german: "Anbieter", spanish: "oferentes" },
        { german: "Nachfrager", spanish: "demandantes" },
      ],
    },
  },
  {
    number: "33",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Welche Unternehmensformen sind in Deutschland Personengesellschaften?",
      difficulty: 3,
      importantWords: [
        { german: "Unternehmensformen", spanish: "formas de empresa" },
        { german: "Personengesellschaften", spanish: "sociedades personales" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Personengesellschaft ist ein Zusammenschluss mindestens zweier Personen (natürliche und/oder juristische Personen sowie Personengesellschaften) zur Erreichung eines gemeinsamen Unternehmensziels. Personengesellschaften: Gesellschaft bürgerlichen Rechts (GbR). Personenhandelsgesellschaften: Offene Handelsgesellschaft (oHG), auch als GmbH & Co. oHG. Kommanditgesellschaft (KG), auch als GmbH & Co. KG.",
      importantWords: [
        { german: "Personengesellschaft", spanish: "sociedad personal" },
        { german: "Gesellschaft bürgerlichen Rechts", spanish: "sociedad de derecho civil" },
        { german: "Offene Handelsgesellschaft", spanish: "sociedad colectiva mercantil" },
        { german: "Kommanditgesellschaft", spanish: "sociedad comanditaria" },
      ],
    },
  },
  {
    number: "34",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Welche Bedingungen und welche Haftungsregeln gelten bei einer offenen Handelsgesellschaft – oHG?",
      difficulty: 3,
      importantWords: [
        { german: "Bedingungen", spanish: "condiciones" },
        { german: "Haftungsregeln", spanish: "normas de responsabilidad" },
        { german: "offenen Handelsgesellschaft", spanish: "sociedad colectiva" },
        { german: "oHG", spanish: "oHG" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Eine OHG kann gegründet werden, wenn sich mindestens zwei oder mehr Personen zum Zweck eines vollkaufmännischen Handelsgewerbes im Sinne von § 1 Abs. 1 HGB (Handelsgesetzbuch) zusammenschließen. Es gilt, dass alle Gesellschafter persönlich, unbegrenzt und unbeschränkt für alle Verbindlichkeiten der Gesellschaft haften.",
      importantWords: [
        { german: "oHG", spanish: "oHG" },
        { german: "Handelsgewerbes", spanish: "negocio mercantil" },
        { german: "Gesellschafter", spanish: "socios" },
        { german: "Haften", spanish: "responder" },
      ],
    },
  },
  {
    number: "35",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Ein Betriebsergebnis errechnet sich aus den Umsatzerlösen minus den Umsatzkosten. Welche Sachverhalte können das Betriebsergebnis positiv beeinflussen?",
      difficulty: 3,
      importantWords: [
        { german: "Betriebsergebnis", spanish: "resultado operativo" },
        { german: "Umsatzerlösen", spanish: "ingresos por ventas" },
        { german: "Umsatzkosten", spanish: "costos de ventas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Um das Betriebsergebnis positiv zu verändern, gibt es folgende Möglichkeiten: Wareneinkauf optimieren (Rabatte aushandeln), Herstellungskosten senken (z. B. Einsatz von günstigen Vorprodukten), allgemeine Verwaltungskosten minimieren (durch Einsatz von Software), Reduzierung der Werbekosten (Nutzung von Social Media), Personalkosten reduzieren (durch Steigerung der Produktivität), Fixkosten mindern (z. B. Nutzung von Fahrzeug-Leasing statt Kauf).",
      importantWords: [
        { german: "Betriebsergebnis", spanish: "resultado operativo" },
        { german: "Wareneinkauf", spanish: "compra de mercancías" },
        { german: "Herstellungskosten", spanish: "costos de fabricación" },
        { german: "Werbekosten", spanish: "costos de publicidad" },
        { german: "Personalkosten", spanish: "costos de personal" },
        { german: "Fixkosten", spanish: "costos fijos" },
      ],
    },
  },
  {
    number: "36",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Unternehmen richten ihre Produkte und Dienstleistungen mit Hilfe von Marketingmaßnahmen nach den Kundenwünschen aus. Welchem Zweck dienen in diesem Zusammenhang Kundenbefragungen?",
      difficulty: 3,
      importantWords: [
        { german: "Marketingmaßnahmen", spanish: "medidas de marketing" },
        { german: "Kundenbefragungen", spanish: "encuestas a clientes" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Durch Kundenbefragungen können zentrale Punkte wie Kundenzufriedenheit, Trends, das Image des Unternehmens, die Marktposition, die Kundenbindung sowie der Erfolg von Werbemaßnahmen beantwortet werden.",
      importantWords: [
        { german: "Kundenbefragungen", spanish: "encuestas a clientes" },
        { german: "Kundenzufriedenheit", spanish: "satisfacción del cliente" },
        { german: "Kundenbindung", spanish: "fidelización del cliente" },
      ],
    },
  },
  {
    number: "37",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "In der Kundenkommunikation, im Speziellen während der Fehleranalyse im Telefonsupport, sind Fragen von besonderer Bedeutung. Unterscheide bitte geschlossene und offene Fragen.",
      difficulty: 3,
      importantWords: [
        { german: "Fehleranalyse", spanish: "análisis de errores" },
        { german: "Telefonsupport", spanish: "soporte telefónico" },
        { german: "geschlossene", spanish: "cerradas" },
        { german: "offene", spanish: "abiertas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Geschlossene Fragen: Ja-oder-Nein Fragen, z. B.: „Haben Sie den PC schon einmal neu gestartet?\" Offene Fragen: W-Fragen - Wer, Wie, Was, Wieso, Warum, Wo, Weshalb, Wann..., z. B.: „Welche Fehlermeldung wurde Ihnen beim Programmabbruch angezeigt?\"",
      importantWords: [
        { german: "Geschlossene Fragen", spanish: "preguntas cerradas" },
        { german: "Offene Fragen", spanish: "preguntas abiertas" },
        { german: "Fehlermeldung", spanish: "mensaje de error" },
      ],
    },
  },
  {
    number: "38",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Das Controlling im Unternehmen wird als eine Funktion des Managements gesehen, dessen zentrale Aufgabe die Planung, Steuerung sowie die Kontrolle aller Unternehmensbereiche ist. Wozu dient dabei eine ABC-Analyse?",
      difficulty: 3,
      importantWords: [
        { german: "Controlling", spanish: "control de gestión" },
        { german: "ABC-Analyse", spanish: "análisis ABC" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die ABC-Analyse stellt ein betriebswirtschaftliches Analyseverfahren dar, welches bestimmte Prozesse oder Objekte in Klassen A, B und C einstuft. Dabei wird von A bis C in absteigender Reihenfolge eine Bedeutung zugeordnet. Bei der ABC-Analyse vergleicht man beispielsweise, welche Kunden für den Hauptumsatz des Unternehmens verantwortlich sind und somit in Klasse A eingestuft werden. Kunden, welche am wenigsten zum Umsatz beitragen, kommen in die Klasse C. In Klasse B kommen die Kunden, die nur durchschnittlich zum Umsatzerfolg beitragen. Somit erhalten wir eine Art Ranking über den Umsatzerfolg, ähnlich dem Pareto-Prinzip (80/20-Regel).",
      importantWords: [
        { german: "ABC-Analyse", spanish: "análisis ABC" },
        { german: "Klassen A, B und C", spanish: "clases A, B y C" },
        { german: "Umsatz", spanish: "facturación" },
        { german: "Pareto-Prinzip", spanish: "principio de Pareto" },
      ],
    },
  },
  {
    number: "39",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Was versteht man unter dem Begriff Cross-Selling?",
      difficulty: 2,
      importantWords: [
        { german: "Cross-Selling", spanish: "venta cruzada" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Als Cross-Selling (deutsch: Querverkauf) wird im Bereich des Marketings das Bemühen eines Händlers bezeichnet, zusätzlich zu einem nachgefragten oder angebotenen Artikel weitere passende Produkte oder Services anzubieten, immer mit dem Ziel, einen höheren Umsatz zu erzielen und sowohl die Kundenbindung als auch die Kundenzufriedenheit zu erhöhen.",
      importantWords: [
        { german: "Cross-Selling", spanish: "venta cruzada" },
        { german: "Umsatz", spanish: "facturación" },
        { german: "Kundenbindung", spanish: "fidelización del cliente" },
      ],
    },
  },
  {
    number: "40",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Ergänze nach dem Vier-Ohren-Modell (Sachebene, Appell, Selbstoffenbarung und Beziehung) die folgenden Aussagen eines Kunden gegenüber eines Vertriebsmitarbeiters. Der Kunde sagt: 1. Sie müssen pünktlich liefern! 2. Ich bin mit ihnen nicht zufrieden. 3. Sie haben nicht pünktlich geliefert. 4. Ich kontrolliere ihre Leistungen sehr genau.",
      difficulty: 2,
      importantWords: [
        { german: "Vier-Ohren-Modell", spanish: "modelo de los cuatro oídos" },
        { german: "Sachebene", spanish: "nivel de contenido" },
        { german: "Appell", spanish: "nivel de apelación" },
        { german: "Selbstoffenbarung", spanish: "nivel de auto-revelación" },
        { german: "Beziehung", spanish: "nivel de relación" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Folgende Aspekte möchte der Kunde nach dem Vier-Ohren-Modell vermitteln: Appell – 1. Sie müssen pünktlich liefern! Beziehung – 2. Ich bin mit ihnen nicht zufrieden. Sachebene – 3. Sie haben nicht pünktlich geliefert. Selbstoffenbarung – 4. Ich kontrolliere ihre Leistungen sehr genau.",
      importantWords: [
        { german: "Sachebene", spanish: "nivel de contenido" },
        { german: "Appell", spanish: "nivel de apelación" },
        { german: "Selbstoffenbarung", spanish: "nivel de auto-revelación" },
        { german: "Beziehung", spanish: "nivel de relación" },
      ],
    },
  },
  {
    number: "41",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Welche Regeln sollte man im telefonischen Kundensupport beachten?",
      difficulty: 2,
      importantWords: [
        { german: "Regeln", spanish: "reglas" },
        { german: "telefonischen Kundensupport", spanish: "soporte telefónico al cliente" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Folgende Regeln sind allgemeiner Natur und sollten beim telefonischen Support Beachtung finden: Vermeide Worte und Ausdrücke, die den Kunden reizen könnten, Höre dem Gesprächspartner aktiv zu, Lass Kunden immer ausreden und unterbrich sie nicht, Widersprich nie bei einem Einwand oder einer Beschwerde, Hinterfrage mit den W-Fragen (wann, wie, wo, warum ..).",
      importantWords: [
        { german: "Vermeide", spanish: "evita" },
        { german: "reizen", spanish: "irritar" },
        { german: "aktiv zuhören", spanish: "escuchar activamente" },
        { german: "Widersprich nie", spanish: "nunca contradigas" },
        { german: "W-Fragen", spanish: "preguntas con W" },
      ],
    },
  },
  {
    number: "42",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Beschreibe den Begriff Pre-Sales-Angebot und nenne 2 Beispiele.",
      difficulty: 2,
      importantWords: [
        { german: "Pre-Sales-Angebot", spanish: "oferta de pre-venta" },
        { german: "Beispiele", spanish: "ejemplos" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Unter dem Begriff Pre-Sales-Angebot sind alle Dienstleistungen zu verstehen, die dem potenziellen Kunden im Rahmen der Geschäftsanbahnung oder beim Vertragsabschluss angeboten werden. Dieser Service ist in der Regel unentgeltlich und dient der Kunden- und Auftragsgewinnung. Beispiele hierfür können sein: Kostenlose Probefahrt beim Fahrzeugkauf, Kostenlose Informationsveranstaltungen, Kostenlose Kataloge oder Probeprodukte.",
      importantWords: [
        { german: "Pre-Sales-Angebot", spanish: "oferta de pre-venta" },
        { german: "Dienstleistungen", spanish: "servicios" },
        { german: "Kunden- und Auftragsgewinnung", spanish: "captación de clientes y pedidos" },
      ],
    },
  },
  {
    number: "43",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Was ist eine Nutzwertanalyse?",
      difficulty: 3,
      importantWords: [
        { german: "Nutzwertanalyse", spanish: "análisis de valor de uso" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Die Nutzwertanalyse stellt im Allgemeinen eine Entscheidungshilfe dar, wenn es um komplexe Handlungsalternativen geht. Mittels eines Punktwertverfahrens, eines Punktbewertungsverfahrens oder eines Scoring-Modells werden verschiedene Bewertungskriterien erstellt und mehrere Produkte oder Services miteinander verglichen. Die Nutzwertanalyse dient zur Entscheidungsfindung bei komplexen Problemen. Der Bewertungsmaßstab kann individuell, zum Beispiel als eine 4 Punkte Skala mit: 1 = gering, 2 = mittel, 3 = hoch, 4 = sehr hoch, festgelegt werden.",
      importantWords: [
        { german: "Nutzwertanalyse", spanish: "análisis de valor de uso" },
        { german: "Entscheidungshilfe", spanish: "ayuda para la toma de decisiones" },
        { german: "Bewertungskriterien", spanish: "criterios de evaluación" },
      ],
    },
  },
  {
    number: "44",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Unternehmen müssen ihre Produkte am Markt anbieten. Dazu benötigen sie einen Vertriebspartner oder ein Vertriebsnetz. Nenne Vor- und Nachteile eines direkten Vertriebs.",
      difficulty: 3,
      importantWords: [
        { german: "Vertrieb", spanish: "distribución/ventas" },
        { german: "direkten Vertriebs", spanish: "distribución directa" },
        { german: "Vorteile", spanish: "ventajas" },
        { german: "Nachteile", spanish: "desventajas" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Beim direkten Vertrieb bietet der Anbieter seine Produkte oder seine Dienstleistungen unmittelbar an die Endabnehmer bzw. Endverbraucher an. Vorteile: die Gewinnspanne ist höher (Provisionen für Zwischenhändler entfallen), Endverbraucher haben kurze Kommunikations- und Vertriebswege, Vertriebsmitarbeitende sind eigene Mitarbeitende und können aktiv und schnell neue Produkte anbieten, engere Kundenbindung durch persönliche Kundenkommunikation. Nachteile: eigenes Vertriebsnetz bindet viel Kapital, personalintensiv, hohe Fixkosten, Massendistribution nur bedingt umsetzbar. Hinweis: Der direkte Vertrieb (Unternehmen -> Kunde) ist der Gegensatz zum indirekten Vertrieb (Unternehmen -> Zwischenhändler -> Kunde).",
      importantWords: [
        { german: "direkten Vertrieb", spanish: "distribución directa" },
        { german: "Gewinnspanne", spanish: "margen de beneficio" },
        { german: "Kundenbindung", spanish: "fidelización del cliente" },
        { german: "Fixkosten", spanish: "costos fijos" },
      ],
    },
  },
  {
    number: "45",
    section: "Kundenorientierung",
    question: {
      title: "Frage",
      text: "Was versteht man unter Kundenzufriedenheit und welche Maßnahmen sind geeignet, diese zu fördern?",
      difficulty: 3,
      importantWords: [
        { german: "Kundenzufriedenheit", spanish: "Satisfacción del cliente" },
        { german: "Maßnahmen", spanish: "Medidas/acciones" },
        { german: "fördern", spanish: "fomentar" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Kundenzufriedenheit ist für viele Unternehmen wichtig, um die Kundenbindung zu erhöhen und eine Umsatzsteigerung zu erreichen. Zufriedene Kunden kehren oft zurück und empfehlen das Produkt oder die Dienstleistung weiter. Die Kundenzufriedenheit unterliegt daher einer ständigen Optimierung. Dazu zählt auch eine Verbesserung der Customer Experience, also der Erfahrungen, die der Kunde mit dem Unternehmen macht. Folgende Maßnahmen sind geeignet: Gewährung von Rabatten (im Rahmen von Aktionen), Teilnahme an Sonderaktionen (Lotterie), Einladung zu Hausmessen oder Festen, Feedback einholen durch Umfragen, Social Media, Einrichtung von Bewertungsportalen, Qualitätsversprechen unbedingt einhalten, etc. (ver imagen de la carta)",
      importantWords: [
        { german: "Kundenbindung", spanish: "Fidelización del cliente" },
        { german: "Umsatzsteigerung", spanish: "Aumento de la facturación" },
        { german: "Optimierung", spanish: "Optimización" },
        { german: "Customer Experience", spanish: "Experiencia del cliente" },
        { german: "Rabatten", spanish: "Descuentos" },
        { german: "Feedback einholen", spanish: "Obtener retroalimentación" },
        { german: "Bewertungsportalen", spanish: "Portales de valoración" },
        { german: "Qualitätsversprechen", spanish: "Promesa de calidad" },
      ],
    },
  },
  {
    number: "46",
    section: "Informieren und Beraten von Kunden und Kundinnen",
    question: {
      title: "Frage",
      text: "Welchem Zweck dient ein Angebotsvergleich?",
      difficulty: 3,
      importantWords: [
        { german: "Angebotsvergleich", spanish: "comparación de ofertas" },
        { german: "Zweck", spanish: "propósito" },
      ],
    },
    answer: {
      title: "Antwort",
      text: "Der Angebotsvergleich bildet die wesentliche Grundlage für eine zukünftige Kaufentscheidung. Man vergleicht normalerweise mindestens 2 oder mehr Angebote von verschiedenen Lieferanten, Unternehmen sowie Dienstleistern. Im Zuge der Kaufentscheidung werden Kriterien miteinander verglichen, wie z. B.: niedrigster Preis, Qualität der Produkte/Dienstleistungen, Finanzierungsangebote, Kundenservice, Garantie und Gewährleistung, Rabattangebote, Lieferservice, Liefertreue, Lieferzeit, Liefermenge.",
      importantWords: [
        { german: "Angebotsvergleich", spanish: "comparación de ofertas" },
        { german: "Kaufentscheidung", spanish: "decisión de compra" },
        { german: "Kriterien", spanish: "criterios" },
      ],
    },
  },
];