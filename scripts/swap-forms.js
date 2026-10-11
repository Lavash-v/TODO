document.addEventListener('DOMContentLoaded', () => {
    const authCard = document.getElementById('auth-card');
    const toggleLink = document.getElementById('toggle-link');

    const leftTitle = document.getElementById('left-title');
    const leftSubtitle = document.getElementById('left-subtitle');
    const formTitle = document.getElementById('form-title');
    const formSubtitle = document.getElementById('form-subtitle');
    const submitBtn = document.getElementById('submit-btn');
    const inviteCodeBlock = document.getElementById('id-input-invite-code');
    const inviteCodeInput = document.getElementById('invitation_code');

    const passwordInput = document.getElementById('password')

    const toggleTextNode = toggleLink.previousSibling;

    toggleLink.addEventListener('click', (e) => {
        e.preventDefault();

        const isRegistration = authCard.classList.contains('main-container_welcome-page');

        if (isRegistration) {
            // Переключение на ВХОД
            authCard.classList.replace('main-container_welcome-page', 'main-container_welcome-back-page');

            leftTitle.textContent = 'С возвращением!';
            leftSubtitle.textContent = 'Войдите, чтобы продолжить';
            formTitle.textContent = 'Вход в систему';
            formSubtitle.textContent = 'Заполните поля ниже, чтобы войти в личный кабинет';
            submitBtn.textContent = 'Войти';

            passwordInput.placeholder = 'Введите пароль'

            if (toggleTextNode) toggleTextNode.textContent = 'Еще нет аккаунта? ';
            toggleLink.textContent = 'Зарегистрироваться';

            inviteCodeBlock.style.display = 'none';
            inviteCodeInput.required = false;
        } else {
            // Переключение на РЕГИСТРАЦИЮ
            authCard.classList.replace('main-container_welcome-back-page', 'main-container_welcome-page');

            leftTitle.textContent = 'Добро пожаловать!';
            leftSubtitle.textContent = 'Зарегистрируйтесь, чтобы продолжить';
            formTitle.textContent = 'Регистрация';
            formSubtitle.textContent = 'Заполните поля ниже, чтобы создать аккаунт';
            submitBtn.textContent = 'Зарегистрироваться';
            
            passwordInput.placeholder = 'Придумайте пароль'

            if (toggleTextNode) toggleTextNode.textContent = 'Уже есть аккаунт? ';
            toggleLink.textContent = 'Войти';

            inviteCodeBlock.style.display = 'flex';
            inviteCodeInput.required = true;
        }
    });

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('invalid', function(event) {
            event.preventDefault();
        });
    });
});