document.addEventListener("DOMContentLoaded", () => {

  const ADMIN_USERNAME_LIST = ["TCS.ARABIC 2", "TCS.ARABIC 4", "TCS.ARABIC 6"];
  const ADMIN_PASSWORD = "LYDEX.EXELLENCE.ARABIC";

  const PROF_USERNAME = "prof.hicham.TCS";
  const PROF_PASSWORD = "APEE.RABAT";

  /* ===== دخول المسؤول ===== */
  const adminBtn = document.getElementById("adminLoginBtn");
  if (adminBtn) {
    adminBtn.addEventListener("click", () => {

      // إزالة أي تسجيل دخول للأستاذ
      localStorage.removeItem("profUser");
      localStorage.removeItem("profLoggedIn");

      const user = document.getElementById("adminUser").value.trim();
      const pass = document.getElementById("adminPass").value;

      if (ADMIN_USERNAME_LIST.includes(user) && pass === ADMIN_PASSWORD) {
        localStorage.setItem("adminUser", user);
        localStorage.setItem("adminLoggedIn", "true");
        window.location.href = "delete_projects.html";
      } else {
        alert("❌ خطأ في بيانات المسؤول");
      }
    });
  }

  /* ===== دخول الأستاذ ===== */
  const profBtn = document.getElementById("profLoginBtn");
  if (profBtn) {
    profBtn.addEventListener("click", () => {

      // إزالة أي تسجيل دخول للمسؤول
      localStorage.removeItem("adminUser");
      localStorage.removeItem("adminLoggedIn");

      const user = document.getElementById("profUser").value.trim();
      const pass = document.getElementById("profPass").value;

      if (user === PROF_USERNAME && pass === PROF_PASSWORD) {
        localStorage.setItem("profUser", user);
        localStorage.setItem("profLoggedIn", "true");
        window.location.href = "dashboard.html";
      } else {
        alert("❌ خطأ في بيانات الأستاذ");
      }
    });
  }

});
