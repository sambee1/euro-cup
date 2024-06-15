document.getElementById("copyCA").addEventListener("click", function() {
  const copyCA = "8982hsd898232wewe2039090"
    navigator.clipboard.writeText(copyCA)
      .then(function() {
        alert("Contract Address copied to clipboard: " + copyCA);
      })
      .catch(function(error) {
        alert("Failed to copy text: " + error);
      });
  });