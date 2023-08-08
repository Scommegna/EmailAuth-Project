const sendEmail = require("./sendEmail");

// Sends reset password email to user
const sendResetPasswordEmail = async ({ name, email, token, origin }) => {
  const resetUrl = `${origin}/user/reset-password?token=${token}&email=${email}`;

  const message = `<p>Please, reset your password by clicking on the following link: <a href="${resetUrl}">Reset password</a> </p>`;

  return sendEmail({
    to: email,
    subject: "Password reset",
    html: `<h4>Hello, ${name}</h4>
    ${message}
    `,
  });
};

module.exports = sendResetPasswordEmail;
