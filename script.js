const form = document.querySelector("#request-form");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Sending your request...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      status.textContent = "Thank you. We received your request and will get back to you by email.";
    } catch (error) {
      status.textContent = "Sorry, your request could not be sent. Please try again.";
    }
  });
}
