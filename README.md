# SimuCredit - Simulador de Créditos Inteligente

**Versión 2.0** - Incluye Parte 3: Desglose de Gastos Mensuales

## 📋 Descripción

SimuCredit es un simulador de créditos moderno y responsivo que permite a los usuarios simular solicitudes de crédito con cálculos automáticos. La aplicación incluye un desglose detallado de gastos mensuales para un análisis más preciso de la capacidad de pago.

## ✨ Características Principales

### Parte 1 y 2: Funcionalidad Base
- Cálculo de disponible mensual (ingresos - egresos)
- Cálculo de capacidad de pago (50% del disponible)
- Cálculo de interés simple
- Cálculo de total a pagar (incluye impuestos)
- Cálculo de cuota mensual
- Aprobación automática del crédito

### 🆕 Parte 3: Desglose de Gastos
- **Campo Arriendo:** Gasto mensual de vivienda
- **Campo Alimentación:** Gasto mensual en alimentos
- **Campo Varios:** Otros gastos mensuales
- **Total de Gastos:** Suma automática de los tres campos (mostrado en recuadro destacado)
- Todos los cálculos usan el total de gastos desglosado

### 🎨 Interfaz Moderna
- Diseño profesional empresarial con Bootstrap 5
- Interfaz responsiva (mobile, tablet, desktop)
- Colores corporativos propios (sin plantillas genéricas)
- Animaciones suaves y transiciones
- Iconografía con Font Awesome

## 📁 Estructura del Proyecto

```
credito-calc/
├── index.html          # Interfaz principal
├── funciones.js        # Funciones de cálculo matemático
├── simulador.js        # Lógica de integración
├── prompts.txt         # Documentación de prompts utilizados
└── README.md           # Este archivo
```

## 🚀 Instalación y Uso

### Opción 1: Abrir en Navegador Local
1. Descarga o clona este repositorio
2. Abre el archivo `index.html` en tu navegador favorito
3. No requiere instalación ni servidor

### Opción 2: Usar un Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

Luego accede a `http://localhost:8000`

## 📊 Casos de Prueba

### Ejemplo 1: Crédito Aprobado
```
Ingresos: 1000 USD
├─ Arriendo: 300 USD
├─ Alimentación: 200 USD
├─ Varios: 100 USD
└─ Total Gastos: 600 USD
├─ Disponible: 400 USD
├─ Capacidad de Pago: 200 USD
├─ Monto: 2000 USD
├─ Plazo: 1 año
├─ Tasa: 10%
├─ Interés: 200 USD
├─ Cuota: 191.67 USD
└─ Resultado: ✅ APROBADO
```

### Ejemplo 2: Crédito Rechazado
```
Ingresos: 1000 USD
├─ Arriendo: 500 USD
├─ Alimentación: 400 USD
├─ Varios: 300 USD
└─ Total Gastos: 1200 USD
├─ Disponible: 0 USD (menor a 0, retorna 0)
├─ Capacidad de Pago: 0 USD
├─ Monto: 3000 USD
├─ Plazo: 2 años
├─ Tasa: 16%
├─ Interés: 960 USD
├─ Cuota: 169.17 USD
└─ Resultado: ❌ RECHAZADO
```

## 🧮 Fórmulas Matemáticas

### Total de Gastos
```
Total Gastos = Arriendo + Alimentación + Varios
```

### Disponible Mensual
```
Disponible = Ingresos - Total Gastos
Si Disponible < 0, retorna 0
```

### Capacidad de Pago
```
Capacidad = Disponible × 0.5
```

### Interés Simple
```
Interés = Plazo (años) × Monto × (Tasa / 100)
```

### Total a Pagar
```
Total = Monto + Interés + 100 (impuestos SOLCA)
```

### Cuota Mensual
```
Cuota = Total / (Plazo × 12)
```

### Aprobación
```
Aprobado = Capacidad de Pago ≥ Cuota Mensual
```

## 🎨 Diseño Visual

### Paleta de Colores
- **Primario:** #0066cc (Azul corporativo)
- **Primario Oscuro:** #0052a3
- **Secundario:** #ff6b35 (Naranja/Naranja)
- **Éxito:** #00cc66 (Verde)
- **Peligro:** #cc0000 (Rojo)
- **Fondo:** #f5f7fa (Gris claro)

### Componentes Visuales
- Header con gradiente azul
- Tarjetas con sombras elegantes
- Recuadro "Total de Gastos" con fondo azul claro
- Botones con efectos hover
- Estados de crédito con colores distintivos
- Iconografía profesional

## 💻 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados (gradientes, animaciones, grid, flexbox)
- **JavaScript** - Lógica de negocio
- **Bootstrap 5** - Framework responsivo
- **Font Awesome 6** - Iconografía profesional

## 📱 Responsividad

✅ **Mobile:** Hasta 768px
- Una columna
- Botones apilados
- Texto adaptado

✅ **Tablet:** 768px - 1024px
- Dos columnas
- Distribución balanceada

✅ **Desktop:** 1024px+
- Distribución óptima
- Máximo ancho: 900px

## 🔧 Validación de Datos

La aplicación valida:
- ✓ Valores numéricos válidos
- ✓ Números no negativos
- ✓ Plazo mínimo de 1 año
- ✓ Campos de gastos opcionales (definen a 0)
- ✓ Mensajes de error descriptivos

## 📈 Mejoras Futuras

- [ ] Histórico de simulaciones (localStorage)
- [ ] Exportar resultados a PDF
- [ ] Múltiples idiomas (EN, FR, PT)
- [ ] Gráficas de amortización
- [ ] Cálculo de interés compuesto
- [ ] Tabla de pagos detallada
- [ ] Dark mode
- [ ] Integración con APIs de tasas reales

## 📄 Licencia

Proyecto educativo - Taller de Programación 2026

## 👤 Autor

Desarrollador - SimuCredit

---

**⚠️ Nota Importante:** Este simulador es para propósitos educativos. Los cálculos son simplificados. Para operaciones financieras reales, consulte con un asesor financiero profesional.
