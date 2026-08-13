import Header from "@/component/Header";
import ClinicDetail from "@/component/ClinicDetail";
import DentalExperts from "@/component/DentalExperts";
import AiSmileBanner from "@/component/AiSmileBanner";
import SmileJourney from "@/component/SmileJourney";
import GoogleReviews from "@/component/GoogleReviews";
import AppointmentBanner from "@/component/AppointmentBanner";
import ScrollReveal from "@/component/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollReveal />
      <Header />
      <ClinicDetail />
      <DentalExperts />
      <SmileJourney />
      <AiSmileBanner />
      <GoogleReviews />
      <AppointmentBanner />
    </main>
  );
}
