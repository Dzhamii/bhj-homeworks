document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const progress = document.getElementById("progress");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const fileInput = document.getElementById("file");
      const file = fileInput.files[0];
  
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
  
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload", true);
  
        xhr.upload.addEventListener("progress", function (e) {
          if (e.lengthComputable) {
            const percentComplete = (e.loaded / e.total) * 100;
            progress.value = percentComplete;
          }
        });
  
        xhr.onload = function () {
          if (xhr.status === 200) {
            console.log("File uploaded successfully.");
          } else {
            console.error("File upload failed.");
          }
        };
  
        xhr.send(formData);
      }
    });
  });
  