const inputRef = document.getElementById("input-file");
const labelRef = document.getElementById("upload-file-button");
const form = document.getElementById("form");

labelRef.addEventListener("click", () => inputRef.click());

inputRef.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    if (!file.type.includes("image")) {
      alert("File format must be an image!");
      return;
    }
    const url = URL.createObjectURL(file);

    // Hide label
    labelRef.style = "display: none";

    //   Create image container
    const imagePreviewContainer = document.createElement("div");
    imagePreviewContainer.className = "inline-flex items-center gap-4";
    imagePreviewContainer.id = "image-preview";

    //   Create image tag
    const img = document.createElement("img");
    img.src = url;
    img.className = "h-20 w-20 overflow-hidden rounded-full object-cover";

    imagePreviewContainer.appendChild(img);

    //   Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "button button-sm button-destructive uppercase";
    deleteButton.innerHTML = "delete photo";
    deleteButton.type = "button";
    deleteButton.onclick = () => {
      labelRef.style = "display: flex";
      form.removeChild(document.getElementById("image-preview"));
    };

    imagePreviewContainer.appendChild(deleteButton);

    form.prepend(imagePreviewContainer);
  }
});
