const onPreviousPage = () => {
  document.location.href = "../Vaccine/vaccine.html";
};

const finishedProcess = document.querySelector("#finishedBtn");
console.log(finishedProcess);

const handleFinished = (e) => {
  e.preventDefault();
  document.location.href = "../Thanks/thanks.html";
};

finishedProcess.addEventListener("submit", handleFinished);
