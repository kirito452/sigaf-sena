// SIGAF - Sistema Integral de Gestión Académica del SENA
// Main JavaScript File

// ============================================
// UTILIDADES GLOBALES
// ============================================

// Almacenar sesión de usuario
const setUserSession = (userData) => {
    localStorage.setItem('sigaf_user', JSON.stringify(userData));
};

const getUserSession = () => {
    const user = localStorage.getItem('sigaf_user');
    return user ? JSON.parse(user) : null;
};

const clearUserSession = () => {
    localStorage.removeItem('sigaf_user');
};

// Determinar rol del usuario
const getUserRole = (email) => {
    if (email.includes('admin')) return 'admin';
    if (email.includes('instructor')) return 'instructor';
    if (email.includes('monitor')) return 'monitor';
    return 'aprendiz';
};

// Formatear fecha
const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('es-ES', options);
};

// Formatear hora
const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleTimeString('es-ES', options);
};

// Datos ficticios del SENA
const mockData = {
    aprendices: [
        { id: 1, nombre: 'Juan Pablo García', email: 'juan.garcia@sena.edu.co', ficha: 'ANA-001', programa: 'Análisis y Desarrollo de Software', estado: 'Activo', asistencia: 95 },
        { id: 2, nombre: 'María Rodríguez López', email: 'maria.rodriguez@sena.edu.co', ficha: 'ANA-001', programa: 'Análisis y Desarrollo de Software', estado: 'Activo', asistencia: 92 },
        { id: 3, nombre: 'Carlos Mendez Suárez', email: 'carlos.mendez@sena.edu.co', ficha: 'MKT-002', programa: 'Marketing Digital', estado: 'Activo', asistencia: 88 },
        { id: 4, nombre: 'Ana Martínez Gómez', email: 'ana.martinez@sena.edu.co', ficha: 'MKT-002', programa: 'Marketing Digital', estado: 'Inactivo', asistencia: 65 },
        { id: 5, nombre: 'Roberto Pérez Díaz', email: 'roberto.perez@sena.edu.co', ficha: 'ADM-003', programa: 'Administración de Empresas', estado: 'Activo', asistencia: 94 }
    ],
    instructores: [
        { id: 1, nombre: 'Ing. Fernando Téllez', email: 'fernando.tellez@sena.edu.co', especialidad: 'Programación', estado: 'Activo' },
        { id: 2, nombre: 'Lic. Patricia Sánchez', email: 'patricia.sanchez@sena.edu.co', especialidad: 'Marketing', estado: 'Activo' },
        { id: 3, nombre: 'Mag. Luis Alberto Ruiz', email: 'luis.ruiz@sena.edu.co', especialidad: 'Administración', estado: 'Activo' }
    ],
    fichas: [
        { id: 'ANA-001', nombre: 'Análisis y Desarrollo de Software', aprendices: 25, horas: 2208, estado: 'En Curso' },
        { id: 'MKT-002', nombre: 'Marketing Digital', aprendices: 20, horas: 1680, estado: 'En Curso' },
        { id: 'ADM-003', nombre: 'Administración de Empresas', aprendices: 18, horas: 1440, estado: 'Completada' }
    ],
    asistencia: [
        { fecha: '2026-06-29', presente: 118, ausente: 12, justificada: 5 },
        { fecha: '2026-06-28', presente: 120, ausente: 10, justificada: 5 },
        { fecha: '2026-06-27', presente: 115, ausente: 15, justificada: 5 },
        { fecha: '2026-06-26', presente: 122, ausente: 8, justificada: 5 },
        { fecha: '2026-06-25', presente: 125, ausente: 5, justificada: 5 }
    ]
};

// Mostrar notificación
const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
};

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('SIGAF cargado correctamente');
});

// Logout
const logout = () => {
    clearUserSession();
    window.location.href = 'index.html';
};