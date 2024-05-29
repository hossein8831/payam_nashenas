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
    fetch(`https://eitaayar.ir/api/api_key/sendMessage?chat_id=9315167&text=${topic}&date=0&parse_mode=&pin=off&viewCountForDelete=`)
})
})
