import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
} from "@mui/material";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import "../styles/ContactForm.scss";

const ContactForm = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zj1y07n",
        "template_sd2dam8",
        form.current,
        "KyGWC0cy3QSVsL7FO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully!");
          setIsSuccess(true);
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send message. Please try again later.");
          setIsSuccess(false);
          setOpen(true);
        }
      );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="contact-form-section">
      <h1>Send Me a Message</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialogTitle-root": {
            backgroundColor: isSuccess ? "#4caf50" : "#f44336",
            color: "white",
            fontWeight: "bold",
            padding: "16px 24px",
            borderBottom: "2px solid #e0e0e0",
          },
          "& .MuiDialogContent-root": {
            padding: "16px 24px",
            color: "#333",
          },
          "& .MuiDialogActions-root": {
            padding: "16px 24px",
            backgroundColor: isSuccess ? "#f1f8e9" : "#ffebee",
          },
        }}
      >
        <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {isSuccess ? (
            <CheckCircleOutline sx={{ color: "#ffffff" }} />
          ) : (
            <ErrorOutline sx={{ color: "#ffffff" }} />
          )}
          {isSuccess ? "Success" : "Error"}
        </DialogTitle>
        <DialogContent>
          <p>{message}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactForm;
