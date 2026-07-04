import ReservationHero from "../components/reservation/ReservationHero";
import ReservationForm from "../components/reservation/ReservationForm";
import WhyChooseUs from "../components/reservation/WhyChooseUs";
import VisitUs from "../components/reservation/VisitUs";
import FAQ from "../components/reservation/FAQ";

const Reservation = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0B] text-white">
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-12 xl:px-16">

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <ReservationHero />
          <ReservationForm />
        </div>

        <WhyChooseUs />

        <VisitUs />

        <FAQ />

      </div>
    </section>
  );
};

export default Reservation;