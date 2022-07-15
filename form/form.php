<?php
 $txt = "";
//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5275149761:AAEUc9llfPsDfLmSGUwaE7b7iMsuTlg2Qp4";

//Сюда вставляем chat_id
$chat_id = "665126056";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['order'] == 'Заказать') {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
    $adres = ($_POST['adres']);
    $message = ($_POST['message']);
    $price = ($_POST['price']);
    $product = ($_POST['select']);
}
//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Клиент:' => $name,
        'Телефон:' => $phone,
        'Адрес:' =>  $adres,
        'Комментарий к заказу:' =>  $message,
        'Название товара:' =>  $product,
        'Цена:' =>  $price,
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
echo $txt;
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
    
    

//Выводим сообщение об успешной отправке
if ($sendToTelegram) {
    echo '<script language="javascript">';
    echo 'alert("Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.")';
    echo '</script>';
   
}

//А здесь сообщение об ошибке при отправке
else {
    echo '<script language="javascript">';
    echo 'alert("Что-то пошло не так. ПОпробуйте отправить форму ещё раз.")';
    echo '</script>';
}




?>