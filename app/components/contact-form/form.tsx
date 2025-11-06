"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Box, Grid, FormGroup, FormLabel } from "@mui/material";
import CostumeButton from "../button";
import { LabeledInput, SelectInput } from "../custom-input";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [messageType, setMessageType] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      Swal.fire({
        title: "⚠️ Configuration Missing",
        text: "Please check your .env.local file.",
        icon: "warning",
      });
      return;
    }

    try {
      // append hidden message_type (Select doesn’t auto-submit)
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "message_type";
      hiddenInput.value = messageType;
      form.current?.appendChild(hiddenInput);

      await emailjs.sendForm(serviceId, templateId, form.current!, publicKey);

      Swal.fire({
        title: "✅ Email Sent!",
        text: "Your message has been delivered successfully.",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
      });

      form.current?.reset();
      setMessageType("");
      hiddenInput.remove();
    } catch (error) {
      console.error("FAILED...", error);
      Swal.fire({
        title: "❌ Failed!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#0078ff",
      });
    }
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={sendEmail}
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
    >
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={{ xs: 12, md: 12 }}>
          <FormGroup>
            <LabeledInput
              label="Name"
              Placeholder="enter your Name"
              id="from_name"
              name="from_name"
            />
          </FormGroup>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <FormGroup>
            <LabeledInput
              type="number"
              label="mobile"
              Placeholder="enter your mobile"
              id="from_mobile"
              name="from_mobile"
            />
          </FormGroup>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <FormGroup>
            <LabeledInput
              label="email"
              Placeholder="enter your email"
              id="from_email"
              name="from_email"
            />
          </FormGroup>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <FormGroup>
            <SelectInput
              id="message_type"
              name="message_type"
              options={[
                { value: "UI design", label: "UI design" },
                { value: "Web development", label: "Web development" },
                { value: "App development", label: "App development" },
              ]}
              label="work type"
              placeholder="select your work type"
            />
          </FormGroup>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <FormGroup>
            <FormLabel htmlFor="message" className="customLabel">
              Message
            </FormLabel>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="customTextArea"
                placeholder="enter your message"
              />
            </div>
          </FormGroup>
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          {/* Submit Button */}
          <CostumeButton type="submit" className="primaryBtn">
            Send Message
          </CostumeButton>
        </Grid>
      </Grid>
    </Box>
  );
}
