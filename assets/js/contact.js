document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Enter Name"]').value;
  const email = document.querySelector('input[placeholder="Your email address"]').value;
  const phone = document.querySelector('input[placeholder="Phone"]').value;
  const subject = document.querySelector('input[placeholder="Your subject"]').value;
  const message = document.querySelector('textarea[placeholder="Enter a message here..."]').value;

  try {
    const res = await fetch("https://sterling-backend.vercel.app/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Message sent successfully ✅");
      e.target.reset();
    } else {
      alert(data.message || "Something went wrong ❌");
    }

    console.log(data);
  } catch (err) {
    console.error("Form submission error:", err);
    alert("Server error. Please try again later ❌");
  }
});
