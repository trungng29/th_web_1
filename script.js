"use strict";

const user = {
    userName: null,
    userDob: null, 
    userId: null,
    userClass: null
};
document.addEventListener("DOMContentLoaded", function() {
    const userNameInp = document.getElementById("inputName14");
    const userDobInp = document.getElementById("inputPassword4");
    const userIdInp = document.getElementById("inputAddress");
    const userClassInp = document.getElementById("inputAddress2");
    
    const loginBtn = document.getElementById("nutDangNhap");
    
    function checkInputs() {
        if (
            userNameInp.value.trim() !== "" &&
            userDobInp.value.trim() !== "" &&
            userIdInp.value.trim() !== "" &&
            userClassInp.value.trim() !== ""
        ) {
            loginBtn.removeAttribute("disabled");
            user.userName = userNameInp.value.trim();
            user.userDob = userDobInp.value.trim();
            user.userId = userIdInp.value.trim();
            user.userClass = userClassInp.value.trim();
        } else {
            loginBtn.setAttribute("disabled", "true");
        }
    }
    
    [userNameInp, userDobInp, userIdInp, userClassInp].forEach(input => {
        input.addEventListener("input", checkInputs);
    });
    
    loginBtn.addEventListener("click", function() {
        
    
        let inpReturn = `
                        <h2>Họ và tên: ${user.userName}</h2>
                        <h2>Dob: ${user.userDob}</h2>
                        <h2>MSV: ${user.userId}</h2>
                        <h2>Lớp: ${user.userClass}</h2>
        `
        document.querySelector(".test__section").style.display = "block";
        document.querySelector(".test__section__user__info").innerHTML = inpReturn;
        document.querySelector(".login__info__container").classList.toggle("display-none");
        userNameInp.value = "";
        userDobInp.value = "";
        userIdInp.value = "";
        userClassInp.value = "";
    });
    
    const answers_1 = {
        q1: "false", 
        q2: "true",  
        q3: "false", 
        q4: "true",  
        q5: "false", 
        q6: "true",  
        q7: "false", 
        q8: "false", 
        q9: "true",  
        q10: "false",
        q11: "B",  
        q12: "B",  
        q13: "C",  
        q14: "C",  
        q15: "C",  
        q16: "B",  
        q17: "B",  
        q18: "A",  
        q19: "A",  
        q20: "C",
        q21: ["A", "B", "D"], 
        q22: ["A", "B"],  
        q23: ["A", "B", "D"],  
        q24: ["B", "C"],  
        q25: ["A", "B", "D"],  
        q26: ["A", "B", "C"],  
        q27: ["A", "C", "D"],  
        q28: ["C", "D"],  
        q29: ["A", "B", "C"],  
        q30: ["A", "C", "D"]  
    };
    
    function resetForm() {
        document.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked')
            .forEach(input => input.checked = false);
    
        document.querySelectorAll('textarea')
            .forEach(textarea => textarea.value = "");
    }
    
    
    function checkAnswers() {
        let confirmSubmit = confirm("Bạn có chắc chắn muốn nộp bài không?");
        
        if (!confirmSubmit) {
            return;
        }
    
        let score = 0;
        let totalQuestions = Object.keys(answers_1).length + 10; 
    
        for (let key of Object.keys(answers_1).filter(k => typeof answers_1[k] === "string")) {
            let selected = document.querySelector(`input[name="${key}"]:checked`);
            if (selected && selected.value === answers_1[key]) {
                score++;
            }
        }
    
        for (let key of Object.keys(answers_1).filter(k => Array.isArray(answers_1[k]))) {
            let selected = Array.from(document.querySelectorAll(`input[name="${key}"]:checked`)).map(e => e.value);
            if (JSON.stringify(selected.sort()) === JSON.stringify(answers_1[key].sort())) {
                score++;
            }
        }
    
        let essayQuestions = {
            essay1: ["công nghệ", "tác động", "quan trọng"],
            essay2: ["hiệu quả", "lịch trình", "năng suất"],
            essay3: ["giáo dục", "quốc gia", "phát triển", "tri thức"],
            essay4: ["mạng xã hội", "ảnh hưởng", "giới trẻ", "tích cực", "tiêu cực"],
            essay5: ["trí tuệ nhân tạo", "AI", "lợi ích", "tác hại"],
            essay6: ["biến đổi khí hậu", "môi trường", "giải pháp", "ô nhiễm"],
            essay7: ["đọc sách", "tri thức", "tư duy", "phát triển"],
            essay8: ["công việc", "cân bằng", "stress", "giải pháp"],
            essay9: ["thể thao", "sức khỏe", "tập luyện", "lợi ích"],
            essay10: ["thói quen", "học tập", "hiệu quả", "làm việc"]
        };
    
        for (let i = 1; i <= 10; i++) {
            let key = `essay${i}`;
            let answer = document.querySelector(`textarea[id="exampleFormControlTextarea${i}"]`).value.toLowerCase();
            let matchedKeywords = essayQuestions[key].filter(word => answer.includes(word));
            if (matchedKeywords.length >= 2) { 
                score++;
            }
        }
    
        alert(`Bạn trả lời đúng ${score}/${totalQuestions} câu!`);
        resetForm();
        document.querySelector(".test__section").style.display = "none";
        document.querySelector(".login__info__container").classList.toggle("display-none");
        loginBtn.setAttribute("disabled", "true");
    }
});


