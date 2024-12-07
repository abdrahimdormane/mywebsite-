// ملف: script.js

// تكامل EmailJS لإرسال الطلب
emailjs.init("YOUR_USER_ID"); // استبدل YOUR_USER_ID بمعرف المستخدم الخاص بك من EmailJS

document.getElementById('stickerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function (response) {
            alert('تم إرسال طلبك بنجاح! شكراً لك 🌟');
        }, function (error) {
            alert('حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.');
        });

    document.getElementById('stickerForm').reset();
});
