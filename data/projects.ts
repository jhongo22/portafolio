export type ProjectCategory = "web" | "automatizacion";

export interface Project {
    id: number;
    title: string;
    category: ProjectCategory;
    images: string[];
    description: string;
    stack: string[];
    link?: string;
    likes: number;
    comments: number;
    shares: number;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Alquiler de Ecógrafos",
        category: "web",
        images: [
            "/projects/ecografos.webp",
            "/projects/ecografos-1.webp",
            "/projects/ecografos-2.webp",
            "/projects/ecografos-3.webp",
            "/projects/ecografos-4.webp",
            "/projects/ecografos-5.webp",
            "/projects/ecografos-6.webp"
        ],
        description: "🩺 Aplicacion web para alquiler de ecografos médicos. \n\n✅ Full Stack: TypeScript, Node.js, n8ny Supabase para gestión de datos en tiempo real. \n✅ Panel Administrativo: Control de stock y disponibilidad mediante calendario interactivo. \n✅ Formulario de Reservas: Validación de disponibilidad y registro automatizado en google sheets, notificacion con WhatsApp y correo electrónico. \n✅ Responsive, optimizado para personas que navegan desde móvil. \n✅ Analitica: SEO con palabras clave, Analytics, Tag Manager, Search console, Google Ads, Mapa de calor Clarity.",
        stack: ["TypeScript", "Node.js", "Supabase"],
        link: "https://alquilerdeecografos.com/",
        likes: 184,
        comments: 32,
        shares: 76
    },
    {
        id: 10,
        title: "Ecosistema IA Medicina Regenerativa",
        category: "automatizacion",
        images: [
            "/projects/ai-regenerativa.webp",
            "/projects/subflow-escalado.webp",
            "/projects/follow-up-descuentos.webp",
            "/projects/extraccion-crm.webp"
        ],
        description: "🚀 Automatización CRM para clínica medica. \n\n✅ Agente IA: Procesa texto, audio y comprobantes de pago automáticamente. \n✅ Gestión de Memoria: Resume y mantiene el contexto relevante, integrando incluso charlas de agentes humanos. \n✅ Escalacion a humano: Transición inmediata a humanos con notificaciones vía WhatsApp. \n✅ Marketing : Seguimiento que filtra prospectos interesados y ofrece descuentos \n✅ Extracción de Datos: Procesa conversaciones para extraer automáticamente nombre, email, teléfono y genera biografías en el CRM. \n✅ Omnicanal & RAG: Integrado en WhatsApp, IG, FB y CRM Chatwoot.",
        stack: ["OpenAI", "Redis", "n8n", "Chatwoot", "WhatsApp API"],
        likes: 412,
        comments: 64,
        shares: 128
    },
    {
        id: 20,
        title: "Panel de Control Agentes IA",
        category: "web",
        images: [
            "/projects/dashboard-winners-6.webp",
            "/projects/dashboard-winners-7.webp",
            "/projects/dashboard-winners-5.webp",
            "/projects/dashboard-winners-1.webp",
            "/projects/dashboard-winners-2.webp",
            "/projects/dashboard-winners-3.webp",
            "/projects/dashboard-winners-4.webp"
        ],
        description: "📊 Aplicación web para monitoreo y gestión de agentes IA. \n\n✅ Dashboard Analítico: Visualización en tiempo real de métricas (conversaciones, mensajes, escaladas, tiempo de respuesta promedio). \n✅ Análisis de Sentimiento.  \n✅ Panel de Ajustes: Configuración completa del agente IA (personalidad, nombre, tono de comunicación, expresiones). \n✅ Respuestas Personalizadas: Plantillas de mensajes automáticos (confirmación, recordatorio, escalación) editables desde la interfaz. \n✅  Full Stack: TypeScript, Node.js y conexión vía webhooks con n8n para sincronización de datos y configuraciones.",
        stack: ["Next.js", "TypeScript", "n8n Webhooks", "Chart.js"],
        likes: 342,
        comments: 56,
        shares: 89
    },
    {
        id: 17,
        title: "La Juana de Cerro Tusa",
        category: "web",
        images: [
            "/projects/lajuana-1.webp",
            "/projects/lajuana-2.webp",
            "/projects/lajuana-3.webp",
            "/projects/lajuana-4.webp",
            "/projects/lajuana-5.webp",
            "/projects/lajuana-admin-1.webp",
            "/projects/lajuana-admin-2.webp"
        ],
        description: "🏡 Landing page para finca con integracion a plataformas de reservas. \n\n✅ Experiencia Inmersiva: Diseño visual con enfoque en fotografía de gran formato y estética colonial. \n✅ Integración airbnb, booking, vrbo: Sistema de reservas sincronizado directamente con airbnb, booking, vrbo para evitar duplicidades.  \n✅ Deploy en Hostinger: Optimizado para carga ultra rápida y SEO local en Fredonia, Antioquia., \n✅ Stack: Next.js, Tailwind CSS, Airbnb API",
        stack: ["Next.js", "Supabase", "Tailwind CSS", "Airbnb API"],
        link: "https://lajuanacerrotusa.com/",
        likes: 315,
        comments: 48,
        shares: 92
    },
    {
        id: 21,
        title: "Toxxic - Tienda de Ropa Urbana",
        category: "web",
        images: [
            "/projects/toxxic-main.webp",
            "/projects/toxxic-1.webp",
            "/projects/toxxic-2.webp",
            "/projects/toxxic-3.webp",
            "/projects/toxxic-4.webp"
        ],
        description: "👕 Tienda de ropa urbana en Medellín desarrollada con Laravel. \n\n✅ Full Stack: PHP y Laravel para un backend robusto y escalable. \n✅ Carrito de Compras: Sistema completo de gestión de pedidos y pagos. \n✅ Panel Administrativo: Gestión integral de productos, usuarios y mensajes de clientes. \n✅ Responsive: Optimizado para una experiencia de compra fluida en móviles.",
        stack: ["Laravel", "PHP", "MySQL", "Vercel"],
        link: "https://toxxic.vercel.app/",
        likes: 256,
        comments: 42,
        shares: 78
    },
    {
        id: 18,
        title: "Telocalizo MX - Rastreadores GPS",
        category: "web",
        images: [
            "/projects/telocalizo-1.webp",
            "/projects/telocalizo-2.webp",
            "/projects/telocalizo-3.webp",
            "/projects/telocalizo-4.webp"
        ],
        description: "📍 Landing page para distribuidores mayoristas de rastreadores GPS en México. \n\n✅ Diseño Moderno \n✅ Catálogo de Productos: 5+ modelos GPS con especificaciones técnicas, precios mayoristas. \n✅ Formulario de cotización.  \n✅ En Construcción: Proyecto activo en desarrollo con Next.js y optimización SEO para el mercado mexicano.",
        stack: ["Next.js", "Tailwind CSS", "TypeScript"],
        link: "https://telocalizo.mx/",
        likes: 198,
        comments: 28,
        shares: 64
    },
    {
        id: 22,
        title: "Villa Grande - La Misía",
        category: "web",
        images: [
            "/projects/lamisia-1.webp",
            "/projects/lamisia-2.webp",
            "/projects/lamisia-3.webp",
            "/projects/lamisia-4.webp",
            "/projects/lamisia-5.webp",
            "/projects/lamisia-6.webp",
            "/projects/lamisia-7.webp",
            "/projects/lamisia-8.webp"
        ],
        description: "🏡 Landing page para finca con integracion a plataformas de reservas. \n\n✅ Experiencia Inmersiva: Diseño visual con enfoque en fotografía de gran formato y estética colonial. \n✅ Integración airbnb, booking, vrbo: Sistema de reservas sincronizado directamente con airbnb, booking, vrbo para evitar duplicidades.  \n✅ Deploy en Hostinger: Optimizado para carga ultra rápida y SEO local en Llanogrande, Rionegro. \n\n✅ Stack: Next.js, Tailwind CSS, Airbnb API",
        stack: ["Next.js", "Supabase", "Tailwind CSS", "Airbnb API"],
        likes: 284,
        comments: 36,
        shares: 62
    },
    {
        id: 14,
        title: "Sistema Automatizado de Prospección y Cualificación de Leads",
        category: "automatizacion",
        images: ["/projects/lead-gen-main.webp", "/projects/lead-gen-insta.webp", "/projects/lead-gen-email.webp"],
        description: "🚀 Automatización prospectos a gran escala. \n\n✅ Extracción Inteligente: Busca prospectos por ejecución (ej: 'Gimnasios Medellín') usando Apify. \n✅ Scraping Avanzado: Recopila datos profundos de sitios web mediante Firecrawl. \n✅ Cualificación con IA: Analiza la información extraída para identificar leads calificados automáticamente. \n✅ Mensajes Personalizado: Genera 3 variantes de mensajes únicos para Instagram y Email basados en el perfil de cada empresa. \n✅ Contacto: Ejecuta envíos de correos programados durante 7 días y gestiona el seguimiento.",
        stack: ["Apify", "Firecrawl", "OpenAI", "Google Sheets", "n8n"],
        likes: 487,
        comments: 92,
        shares: 156
    },
    {
        id: 12,
        title: "Agente IA Restaurante Mexicano",
        category: "automatizacion",
        images: ["/projects/restaurante-mexicano.webp", "/projects/restaurante-subflow.webp"],
        description: "🌮 Agente IA para restaurante de comida mexicana. \n\n✅ Multimodal: Procesa pedidos por voz e interpreta comprobantes de pago. \n✅ Gestión Interactiva (Telegram): El personal recibe el comprobante y detalles del pedido con botones de acción (Aceptar/Rechazar) directamente en Telegram. \n✅ Notifica automáticamente al cliente si su pedido fue confirmado o si hay algún inconveniente. \n✅ Menu con SQL: Acceso inteligente al menú mediante base de datos SQL para recomendaciones y disponibilidad en tiempo real. \n✅ Pagos Automatizados: Genera links de pago para que el cliente haga el pago.",
        stack: ["WhatsApp API", "OpenAI Vision", "Postgres SQL", "Telegram API"],
        likes: 524,
        comments: 78,
        shares: 112
    },
    {
        id: 11,
        title: "Sistema RAG de Conocimiento Empresarial",
        category: "automatizacion",
        images: ["/projects/rag-system.webp"],
        description: "🧠 Sistema de Recuperación Aumentada (RAG) para base de conocimiento dinámica. \n\n✅ Sincronización con Drive: Monitorea carpetas corporativas y activa el flujo ante nuevos documentos o actualizaciones. \n✅ Indexación Inteligente: Clasifica y asigna metadata detallada a cada fragmento (chunk) para trazabilidad total de la fuente. \n✅ Vectorización Automática: Procesa y transforma documentos en vectores usando Embeddings de OpenAI. \n✅ Resúmenes Contextuales: Cada chunk incluye un resumen del contexto global del documento para mejorar la precisión de las respuestas. \n✅ Base de Datos Vectorial: Actualización en tiempo real de Postgres (Supabase Vector) para consultas ultra-rápidas del Agente IA.",
        stack: ["OpenAI Embeddings", "n8n", "Postgres Vector", "Google Drive API"],
        likes: 358,
        comments: 42,
        shares: 85
    },
    {
        id: 19,
        title: "Hot Cheese - Hamburguesas y Perros",
        category: "web",
        images: [
            "/projects/hotcheese-1.webp",
            "/projects/hotcheese-2.webp",
            "/projects/hotcheese-3.webp"
        ],
        description: "🍔 Landing page sencilla y efectiva para negocio de comida rápida en Colombia. \n\n✅ Diseño: Interfaz minimalista. \n✅ Menú Digital: Catálogo completo de hamburguesas, perros, perras y bebidas con precios y descripciones. \n✅ Selector de Sedes: Widget interactivo para elegir entre 5 ubicaciones. \n✅ Integración WhatsApp: Botón de pedido directo que redirige a WhatsApp de la sede seleccionada. \n✅ Responsive: Optimizado para personas que navegan desde móvil.",
        stack: ["Next.js", "Tailwind CSS", "WhatsApp API"],
        link: "https://www.hotcheese.com.co/",
        likes: 167,
        comments: 21,
        shares: 48
    },
    {
        id: 13,
        title: "Agente IA Comidas rapidas",
        category: "automatizacion",
        images: ["/projects/restaurante-fastfood.webp", "/projects/restaurante-fastfood-subflow.webp"],
        description: "🍔 Agente IA especializado para negocios de comida rápida (Hamburguesas y Perros). \n\n✅ Multimodal: Procesa pedidos por voz e interpreta comprobantes de pago. \n✅ Gestión Interactiva (Telegram): El personal recibe el comprobante y detalles del pedido con botones de acción (Aceptar/Rechazar) directamente en Telegram. \n✅ Notifica automáticamente al cliente si su pedido fue confirmado o si hay algún inconveniente. \n✅ Menu con SQL: Acceso inteligente al menú mediante base de datos SQL para recomendaciones y disponibilidad en tiempo real. \n✅ Pagos Automatizados: Genera links de pago para que el cliente haga el pago.",
        stack: ["WhatsApp API", "n8n", "OpenAI Vision", "Telegram DB"],
        likes: 412,
        comments: 65,
        shares: 98
    },
    {
        id: 2,
        title: "Vive Feliz Sin Dolor",
        category: "web",
        images: ["/projects/vivefeliz.webp"],
        description: "🏥 Sitio web integral para consultorio de medicina regenerativa. \n\n✅ Desarrollado en WordPress con enfoque en conversión. \n✅ SEO local avanzado y Analytics para rastreo de pacientes. \n✅ Integración de Agente IA de texto y Voz (vía ElevenLabs) para atención 24/7. \n✅ Optimizado en Google Search Console para máxima visibilidad.",
        stack: ["WordPress", "ElevenLabs AI", "SEO / Analytics"],
        link: "https://vivefelizsindolor.com/",
        likes: 145,
        comments: 24,
        shares: 56
    },
    {
        id: 15,
        title: "Generación Automática de Contratos Digitales",
        category: "automatizacion",
        images: ["/projects/contract-automation.webp"],
        description: "📝 Flujo integral para la creación y despacho de documentación legal. \n\n✅ Datos Dinámicos: Recibe información vía Webhook y autocompleta contratos legales de forma instantánea. \n✅ Notificación Multi-canal: Envía el contrato generado directamente al WhatsApp del cliente y por correo electrónico. \n✅ Despacho de Políticas: Adjunta automáticamente las políticas de la empresa y términos de servicio a cada envío. \n✅ Gestión Centralizada: Registra cada contrato generado en Google Sheets para control administrativo.",
        stack: ["n8n", "Gmail API", "WhatsApp API", "Google Sheets"],
        likes: 245,
        comments: 32,
        shares: 54
    },
    {
        id: 16,
        title: "Sistema de Backup Cloud (Dual n8n)",
        category: "automatizacion",
        images: ["/projects/backup-n8n.webp"],
        description: "☁️ Automatización de backups para flujos críticos en múltiples instancias. \n\n✅ Sincronización Dual: Monitorea y extrae flujos de dos instancias independientes de n8n (Hostinger y ViveFeliz). \n✅ Almacenamiento Seguro: Empaqueta y sube automáticamente copias de seguridad a Google Drive de forma programada. \n✅ Continuidad de Negocio: Garantiza la recuperación rápida ante cualquier fallo en el servidor mediante backups dinámicos.",
        stack: ["n8n", "Google Drive API", "Cloud"],
        likes: 124,
        comments: 15,
        shares: 28
    },
];
