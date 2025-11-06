// import { Box, FormGroup, Grid, Typography } from "@mui/material";
// import Image from "next/image";
// import styles from "./style.module.css";
// import IMAGES from "@/app/assets/images";
// import { LabeledInput } from "@/app/components/custom-input";
// import ClickableBox from "@/app/components/router";
// import CostumeButton from "@/app/components/button";
// import SVG from "@/app/assets/svg";
// import CustomTabs from "@/app/components/tabs/tab";
// import CheckboxInputComponent from "@/app/components/custom-input/checkboxInput";

// const LoginPage = () => {
//   return (
//     <>
//       <Grid
//         container
//         rowSpacing={1}
//         columnSpacing={{ xs: 1, sm: 2, md: 1 }}
//         justifyContent={"space-between"}
//       >
//         <Grid size={{ xs: 12, md: 6 }}>
//           <Box className={styles.loginCoverImage}>
//             <Box>
//               <Image src={IMAGES.Logincard} alt="" height={400} width={400} />
//               <Box sx={{ mt: 3 }}>
//                 <Typography variant="h4" sx={{ color: "#fff" }}>
//                   Manage Lenders, Borrowers
//                 </Typography>
//                 <Typography variant="h6" sx={{ mt: 1 }}>
//                   Everything you need in one platform
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>

//         <Grid size={{ xs: 12, md: 6 }}>
//           <Box className={styles.formBox}>
//             <Box>
//               <Box sx={{ svg: { width: 175, height: "auto" } }}>
//                 <SVG.Logo />
//               </Box>
//               <Box sx={{ pt: 0 }}>
//                 <Typography variant="h2">
//                   Login or Signup to your account
//                 </Typography>
//                 <Typography variant="h6" sx={{ color: "#041C39", mt: 0.5 }}>
//                   Welcome back! please enter your detail
//                 </Typography>
//                 <Box sx={{ mt: 3 }}>
//                   <CustomTabs
//                     styleRest={{
//                       borderBottom: "2px solid #fff",
//                       fontSize: 14,
//                       fontWeight: 400,
//                       color: "#3B3B3B",
//                       background: "transparent",
//                       borderRadius: "0px",
//                     }}
//                     restStyleDefault={{
//                       width: "100%",
//                     }}
//                     styleRestSelected={{
//                       color: "#041C39 !important",
//                       borderBottom: "2px solid #041C39",
//                       fontSize: 14,
//                       fontWeight: 700,
//                       background: "transparent",
//                     }}
//                     styleRestFlexContainer={{
//                       borderBottom: "1px solid #3B3B3B",
//                     }}
//                     tabLabels={["Phone Number", "Email Address"]}
//                     tabContents={[
//                       <Grid
//                         container
//                         columnSpacing={2}
//                         key="Phone"
//                         alignItems={"flex-end"}
//                         mt={2}
//                       >
//                         <Grid size={{ xs: 12, md: 3 }}>
//                           <FormGroup>
//                             <LabeledInput
//                               type="number"
//                               placeholder="+91"
//                               label="Mobile number"
//                             />
//                           </FormGroup>
//                         </Grid>
//                         <Grid
//                           size={{ xs: 12, md: 9 }}
//                           sx={{ padding: "16px 0 0 0 !important" }}
//                         >
//                           <FormGroup>
//                             <LabeledInput
//                               type="number"
//                               placeholder="Phone number"
//                             />
//                           </FormGroup>
//                         </Grid>
//                         <Grid size={{ xs: 12, md: 12 }} mb={3} mt={1}>
//                           <CheckboxInputComponent
//                             label={
//                               <Box sx={{ mt: 2.5 }}>
//                                 By continuing, I agree to the
//                                 <b>Terms of Use & Privacy Policy</b>
//                               </Box>
//                             }
//                           />
//                         </Grid>
//                       </Grid>,
//                       <Grid
//                         container
//                         columnSpacing={2}
//                         key="Email"
//                         alignItems={"flex-end"}
//                         mt={2}
//                       >
//                         <Grid size={{ xs: 12, md: 12 }}>
//                           <FormGroup>
//                             <LabeledInput
//                               label="Email address"
//                               placeholder="Enter your Email"
//                             />
//                           </FormGroup>
//                         </Grid>
//                         <Grid size={{ xs: 12, md: 12 }} my={3}>
//                           <CheckboxInputComponent
//                             label={
//                               <>
//                                 By continuing, I agree to the
//                                 <b>Terms of Use & Privacy Policy</b>
//                               </>
//                             }
//                           />
//                         </Grid>
//                       </Grid>,
//                     ]}
//                   />
//                   <ClickableBox nextPageUrl="/auth/verification">
//                     <CostumeButton className="customBtn">
//                       Continue
//                     </CostumeButton>
//                   </ClickableBox>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default LoginPage;


"use client";

import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const LoginPage: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
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

    if (!form.current) return;

    emailjs.sendForm(serviceId, templateId, form.current, { publicKey }).then(
      () => {
        Swal.fire({
          title: "✅ Email Sent!",
          text: "Your message has been delivered successfully.",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
          background: "#fff",
          color: "#333",
        });
        form.current?.reset();
      },
      (error) => {
        console.error("FAILED...", error);
        Swal.fire({
          title: "❌ Failed!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonColor: "#0078ff",
          background: "#fff",
          color: "#333",
        });
      }
    );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="from_name">Name</label>
          <input type="text" id="from_name" name="from_name" required />
        </div>

        <div className="form-group">
          <label htmlFor="from_mobile">Mobile No</label>
          <input
            type="tel"
            id="from_mobile"
            name="from_mobile"
            pattern="[0-9]{10}"
            maxLength={10}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="to_email">Email</label>
          <input type="email" id="from_email" name="from_email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message_type">Message Type</label>
          <select id="message_type" name="message_type" required>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support Request">Support Request</option>
            <option value="Feedback">Feedback</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required />
        </div>

        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};
