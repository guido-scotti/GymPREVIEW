// Lógica para cambiar el color del Navbar al hacer scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black', 'shadow-lg');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('bg-black', 'shadow-lg');
                navbar.classList.add('bg-transparent');
            }
        });

        // Menú móvil
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Cerrar menú móvil al hacer click en un enlace
        const mobileLinks = menu.querySelectorAll('a, button');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Lógica del Modal (Calendly falso para demostración)
        const modal = document.getElementById('turno-modal');
        const modalContent = document.getElementById('modal-content');

        function openModal() {
            modal.classList.remove('hidden');
            // Pequeño delay para la animación de fade
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
            
            // Resetear form por si fue usado antes
            document.querySelector('form').classList.remove('hidden');
            document.getElementById('success-msg').classList.add('hidden');
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Cerrar clickeando afuera del modal
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Enviar datos a WhatsApp
        function enviarWhatsApp(e) {
            e.preventDefault();
            
            // 1. Capturamos los datos del formulario
            const nombre = document.getElementById('form-nombre').value;
            const objetivo = document.getElementById('form-objetivo').value;
            
            // 2. Armamos el mensaje personalizado
            const mensaje = `¡Hola! Mi nombre es ${nombre}. Estoy viendo la web y me gustaría recibir asesoramiento. Mi objetivo principal es: ${objetivo}.`;
            
            // 3. El número de WhatsApp del Gimnasio (reemplazar por el real del cliente)
            // IMPORTANTE: Sin el símbolo +, ni guiones, ni espacios. Ej: 5491100000000
            const numeroGym = "5491100000000"; 
            
            // 4. Creamos la URL codificada para que los espacios y tildes no se rompan
            const urlWhatsApp = `https://wa.me/${numeroGym}?text=${encodeURIComponent(mensaje)}`;
            
            // 5. Abrimos WhatsApp en una pestaña nueva
            window.open(urlWhatsApp, '_blank');
            
            // Opcional: Mostrar el mensaje de éxito en la web para que quede lindo
            document.querySelector('form').classList.add('hidden');
            document.getElementById('success-msg').classList.remove('hidden');
        }

        // Lógica de las flechas del Carrusel
        const carouselScroll = document.getElementById('carousel');
        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');

        // Calcula el ancho de una tarjeta + el espacio entre ellas (gap)
        function getScrollAmount() {
            const cardWidth = carouselScroll.firstElementChild.offsetWidth;
            const gap = 24; // gap-6 en tailwind equivale a 24px
            return cardWidth + gap;
        }

        btnNext.addEventListener('click', () => {
            carouselScroll.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            carouselScroll.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });