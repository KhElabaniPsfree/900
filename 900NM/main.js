
// وظائف إدارة الواجهة
function updateStatus(message) {
    document.getElementById("progress").innerHTML = message;
}

function resetStatus() {
    document.getElementById("progress").innerHTML = "⏳ الحالة الحالية: Status";
}

function openTab(tabId) {
    document.getElementById('groupModal').style.display = 'block';
    switchTab(tabId);
}

function switchTab(tabId) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Remove active class from all buttons
    var tabButtons = document.getElementsByClassName('tab-btn');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Show the selected tab and set button as active
    document.getElementById(tabId).classList.add('active');

    // Find and activate the corresponding button
    for (var i = 0; i < tabButtons.length; i++) {
        if (tabButtons[i].textContent.toLowerCase().includes(tabId.split('-')[0])) {
            tabButtons[i].classList.add('active');
            break;
        }
    }
}

function closeModal() {
    document.getElementById('groupModal').style.display = 'none';
}

// تهيئة درجة الحرارة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    // Initialize temperature selector
    for (var i = 50; i <= 80; i = i + 5) {
        var select = document.getElementById("tempC");
        var option = document.createElement("OPTION");
        select.options.add(option);
        option.text = i;
        option.value = i;
    }
    document.getElementById("tempC").value = 60;
    localStorage.setItem('fanthreshold', 60);
});

// Close modal if user clicks outside of it
window.onclick = function (event) {
    var modal = document.getElementById('groupModal');
    if (event.target == modal) {
        closeModal();
    }
}

// جميع الدوال الأخرى ستبقى في ملفاتها الأصلية مع الإشارة إليها
// سيتم استدعاء هذه الدوال من الملفات الأخرى
