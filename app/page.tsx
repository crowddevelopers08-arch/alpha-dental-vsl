import Header from "@/component/Header";
import ClinicDetail from "@/component/ClinicDetail";
import DentalExperts from "@/component/DentalExperts";
import OurTeam from "@/component/OurTeam";
import AiSmileBanner from "@/component/AiSmileBanner";
import SmileJourney from "@/component/SmileJourney";
import GoogleReviews from "@/component/GoogleReviews";
import AppointmentBanner from "@/component/AppointmentBanner";
import ScrollReveal from "@/component/ScrollReveal";
import ContactFooter from "@/component/ContactFooter";
import BeforeAfterCarousel from "@/component/BeforeAfterCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollReveal />
      <Header />
      <ClinicDetail />
      <DentalExperts />
      <OurTeam />
      <BeforeAfterCarousel />
      <SmileJourney />
      <AiSmileBanner />
      <GoogleReviews />
      <AppointmentBanner />
      <ContactFooter />
    </main>
  );
}
