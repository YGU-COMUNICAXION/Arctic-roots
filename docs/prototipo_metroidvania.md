# Prototipo Metroidvania

## Visión
El prototipo, desarrollado como proyecto de tesis de maestría, presenta un metroidvania educativo donde una inteligencia artificial acompaña al jugador dentro de un mundo digital solarpunk en ruinas. La IA actúa como guía y catalizador narrativo para que el jugador aprenda a utilizar herramientas web en un entorno controlado y siempre activo: el mundo nunca se detiene, incluso durante la resolución de retos. El estilo visual se apoya en ilustración vectorial (SVG) de trazos rectos que enfatiza la unión entre tecnología y naturaleza, generando un ambiente hostil pero admirable que invita a la exploración constante.

## Objetivos de jugabilidad
- Alcanzar una experiencia inmersiva y continua, sin pausas, donde el mundo siga vivo y responda a las acciones del jugador.
- Integrar el aprendizaje práctico de HTML y CSS en puzzles que se resuelven creando objetos que luego se manifiestan como sprites jugables.
- Mantener un combate ágil y responsivo inspirado en Hollow Knight, con foco en movilidad aérea, lectura de patrones y toma de decisiones rápida.
- Establecer una narrativa ambiental al estilo Dark Souls que motive la exploración y recompense la curiosidad sin recurrir a diálogos extensos.
- Garantizar que cada nueva habilidad de movimiento o combate expanda tanto las posibilidades de navegación como las opciones tácticas.

## Referencias visuales
- **Hollow Knight**: contrastes marcados para guiar la lectura del entorno y claridad en la acción.
- **Dark Souls**: atmósfera de soledad y hostilidad, con narrativa ambiental basada en restos del mundo.
- **The Legend of Zelda: Breath of the Wild** (reinterpretado): paisajes verdes amplios que conviven con ruinas tecnológicas, enfatizando la estética solarpunk.
- Estética vectorial minimalista: sprites y escenarios generados con SVG y trazos rectos para resaltar la simbiosis entre tecnología y medio ambiente.

## Métricas de éxito
- Demo vertical de aproximadamente 20 minutos que cubra exploración, puzzles, combate y enfrentamientos con jefes.
- Movimiento del personaje evaluado como “responsivo” por al menos el 80% de los testers internos (sensación Hollow Knight: velocidad máxima inmediata, control aéreo fino, wall slide).
- Sistema de creación de objetos mediante HTML/CSS funcional en, al menos, 10 puzzles temáticos que enseñen propiedades clave (colores, fondos, tamaños, etc.).
- Capacidad de crear armas personalizadas cuyas características (alcance vs. daño) respondan coherentemente a las decisiones del jugador.
- Mantener un rendimiento estable de 60 FPS en PC objetivo y registrar una tasa de fallos críticos inferior al 5%.

## Mecánicas mínimas viables
### Movimiento
- Desplazamiento horizontal sin aceleración inicial: el personaje alcanza su velocidad máxima de inmediato para asegurar respuesta instantánea.
- Fricción ajustada para permitir wall slide y trepar superficies como en Hollow Knight.
- Salto con control aéreo preciso, incluyendo salto en pared y reorientación en el aire.
- Dash curvo/parabólico orientado verticalmente (lanza imaginaria) que combine esquive y movilidad ofensiva.

### Combate
- Ataques cuerpo a cuerpo ágiles que permitan encadenar golpes en tierra y aire.
- Sistema de armas personalizables: el jugador define longitud y potencia, con compensaciones entre alcance y daño.
- Integración del dash curvo como herramienta ofensiva y defensiva.
- IA aliada que provea pistas contextuales o asistencia táctica durante los combates sin detener la acción.

### Boss
- Un jefe tutorial que introduzca el lenguaje de combate y el uso de la IA asistente en un entorno controlado.
- Un jefe principal que combine patrones de proyectiles, ataques cuerpo a cuerpo y situaciones donde sea necesario crear objetos mediante código para obtener ventaja.
- Opcional: jefe intermedio de entrenamiento que sirva como puente entre ambos encuentros principales.
- Fases diferenciadas con patrones legibles y ventanas de vulnerabilidad que premien la observación.

## Requisitos técnicos
- Motor: Godot 4.2.x.
- Plataforma objetivo: PC (Windows y Linux).
- Resolución base: 1920x1080 con escalado adaptable a 1280x720.
- Dispositivos de entrada: teclado y gamepad con soporte de reasignación de botones.
- Librerías clave:
  - **Godot Vector Graphics (GVG)** para importar y manipular ilustraciones SVG en tiempo real.
  - **Godot WebView/HTML5 Bridge** para ejecutar y evaluar código HTML/CSS que se traducirá a sprites dentro del motor.
- Integración de IA asistente: conectividad con servicios de IA (API REST) que respondan en tiempo real sin pausar la simulación.

## Riesgos y supuestos
- **Complejidad de mecánicas**: equilibrar la generación de objetos vía código y el sistema de combate para evitar sobrecarga cognitiva.
- **Riesgo técnico**: garantizar rendimiento estable al combinar renderizado vectorial, IA en tiempo real y evaluaciones de HTML/CSS; necesidad de optimizar en hardware objetivo.
- **Riesgo de diseño**: que el dash curvo resulte difícil de dominar; se requerirán iteraciones de control y telemetría de uso.
- **Supuesto de equipo**: equipo principal formado por diseñador/artista/programador (autor del proyecto) y un escritor de apoyo narrativo.
- **Supuesto narrativo**: la historia se comunicará mediante ambientación, lore distribuido y pistas ambientales, sin cinemáticas extensas.
- **Supuesto pedagógico**: los puzzles deben introducir gradualmente conceptos web, apoyados por la IA asistente como tutor contextual.
