document.addEventListener("DOMContentLoaded", function () {
  //Set Today's date
  const currentDate = document.getElementById("currentDate");
  const today = new Date();

  const month = today.toLocaleDateString("en-US", { month: "long" });
  const day = today.getDate().toString().padStart(2, "0"); // Ensure two digits for day
  const year = today.getFullYear();
  currentDate.textContent = `Tuesday, ${day} ${month} ${year}`;

  //Arabic English
  const languageToggle = document.getElementById("languageToggle");

  languageToggle.addEventListener("click", function () {
    const currentLanguage = languageToggle.textContent;
    if (currentLanguage === "EN") {
      // Change language to Arabic
      languageToggle.textContent = "AR";
      // code to Load Load Arabic version of the content should be added here
    } else if (currentLanguage === "AR") {
      // Change language to English
      languageToggle.textContent = "EN";
      // code to Load English version of the content should be added here
    }
  });
  //End of Arabic English Js//
});
