import { ContactForm } from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Solar Panel Installation Chennai | Free Consultation",
  description: "Get free solar consultation in Chennai. Call +91 9600970313 or email blueraysgreenenergy@gmail.com. Expert solar installation services. Quick response.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <ContactForm />
    </main>
  );
}
