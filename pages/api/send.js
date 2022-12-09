export default function handler(req, res) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(
      "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"
    );

    const msg = {
      to: req.body.email,
      from: "wodnsj1234@gmail.com",
      subject: "문의 주셔서 감사합니다.。",
      text: "문의 접수했습니다. 답장을 기다려주세요." + req.body.message,
      html: "문의 접수했습니다. 답장을 기다려주세요" + req.body.message,
    };

    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200);
}
