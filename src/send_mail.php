<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримуємо дані з форми
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Електронна адреса одержувача (ваша)
    $to = "volodymyr.bilichenko@gmail.com";

    // Тема листа
    $subject = "Нова форма з вашого сайту";

    // Повідомлення
    $body = "Ім'я: $name\nEmail: $email\nПовідомлення:\n$message";

    // Заголовки
    $headers = "From: $email";

    // Відправка листа
    if (mail($to, $subject, $body, $headers)) {
        echo "Повідомлення успішно відправлено.";
    } else {
        echo "Помилка при відправці повідомлення.";
    }
} else {
    echo "Некоректний метод запиту.";
}
?>
