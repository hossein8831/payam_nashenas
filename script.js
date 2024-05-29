document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const topicInput = document.getElementById('topic');
    const summaryDiv = document.getElementById('summary');

    searchButton.addEventListener('click', function () {
    const topic = topicInput.value.trim();
    if (topic === '') {
    alert('لطفا یه چیزی بنویس');
    return;
    }
    fetch(`https://eitaayar.ir/api/bot31381:4b95090c-e666-44dd-ac63-ae0cf5855975/sendMessage?chat_id=9315167&text=${topic}&date=0&parse_mode=&pin=off&viewCountForDelete=`)
})
})
