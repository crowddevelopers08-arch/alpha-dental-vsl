"use client";

import { createContext, FormEvent, ReactNode, useContext, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type BookingContextValue = { openBooking: () => void };
const BookingContext = createContext<BookingContextValue | null>(null);

const slots = ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function useBooking() {
  const value = useContext(BookingContext);
  if (!value) throw new Error("useBooking must be used inside BookingProvider");
  return value;
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const today = useMemo(() => new Date(), []);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"schedule" | "form">("schedule");
  const [month, setMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(dateKey(today));
  const [selectedTime, setSelectedTime] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = Array.from({ length: firstDay + daysInMonth }, (_, index) => index < firstDay ? null : index - firstDay + 1);

  function close() {
    setOpen(false);
    setStep("schedule");
    setSelectedTime("");
    setError("");
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const consultationType = String(payload.consultationType || "");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          location: payload.location,
          city: payload.location,
          treatment: payload.treatment,
          procedure: consultationType,
          message: `Appointment date: ${selectedDate}\nAppointment time: ${selectedTime}\nConsultation type: ${consultationType}`,
          source: "Alpha Dental Website",
          formName: "Alpha Dental Appointment",
          status: "new",
          consent: true,
          pageUrl: window.location.href,
          referrerUrl: document.referrer || null,
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(result?.details || result?.error || "Unable to submit your booking.");
      }
      close();
      router.push("/thank-you");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <BookingContext.Provider value={{ openBooking: () => setOpen(true) }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-transparent p-3 sm:p-4" role="dialog" aria-modal="true" aria-label="Book a free consultation" onMouseDown={(event) => event.target === event.currentTarget && close()}>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(30,20,15,.3)]">
            <button type="button" onClick={close} aria-label="Close booking" className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-brand-ink text-2xl text-white">×</button>
            <div className="border-b border-brand-rose/25 px-6 py-4 sm:px-8 sm:py-5">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-brand-rust">Free consultation</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-brand-ink">{step === "schedule" ? "Choose your appointment" : "Tell us about yourself"}</h2>
              <p className="mt-2 text-sm text-brand-ink/60">Alpha Dental Studio · RA Puram · Mon–Sat, 10 AM–8 PM</p>
            </div>

            {step === "schedule" ? (
              <div className="grid gap-0 md:grid-cols-[1.25fr_.75fr]">
                <div className="bg-[#f8f3f1] p-5 sm:p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <button type="button" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))} className="grid size-9 place-items-center rounded-full border border-brand-rose/35">←</button>
                    <h3 className="font-heading text-xl font-bold text-brand-ink">{month.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</h3>
                    <button type="button" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))} className="grid size-9 place-items-center rounded-full border border-brand-rose/35">→</button>
                  </div>
                  <div className="grid grid-cols-7 gap-x-2 gap-y-2 text-center">
                    {weekdays.map((day) => <span key={day} className="pb-2 text-xs font-semibold text-brand-ink/45">{day}</span>)}
                    {cells.map((day, index) => {
                      if (!day) return <span key={`blank-${index}`} />;
                      const date = new Date(month.getFullYear(), month.getMonth(), day);
                      const key = dateKey(date);
                      const past = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                      const sunday = date.getDay() === 0;
                      return <button key={key} type="button" disabled={past || sunday} onClick={() => { setSelectedDate(key); setSelectedTime(""); }} className={`mx-auto grid size-11 place-items-center rounded-full text-sm font-semibold transition sm:size-12 ${selectedDate === key ? "bg-brand-rust text-white shadow-lg" : "bg-white text-brand-ink shadow-[0_1px_5px_rgba(58,46,41,.06)] hover:bg-brand-rose/20"} disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none`}>{day}</button>;
                    })}
                  </div>
                </div>

                <div className="border-t border-brand-rose/20 bg-[#f8f3f1] p-5 sm:p-7 md:border-t-0 md:border-l">
                  <h3 className="font-heading text-xl font-bold text-brand-ink">Available times</h3>
                  <p className="mt-1 text-sm text-brand-ink/55">{new Date(`${selectedDate}T12:00:00`).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    {slots.map((slot) => <button key={slot} type="button" onClick={() => setSelectedTime(slot)} className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${selectedTime === slot ? "border-brand-rust bg-brand-rust text-white" : "border-brand-rose/35 bg-white text-brand-ink hover:border-brand-rust"}`}>{slot}</button>)}
                  </div>
                  {selectedTime && (
                    <div className="mt-5 rounded-2xl border border-brand-rose/30 bg-white p-3.5">
                      <p className="text-sm font-semibold text-brand-ink">Selected: {selectedTime}</p>
                      <div className="mt-4 flex gap-3">
                        <button type="button" onClick={() => setSelectedTime("")} className="h-11 flex-1 rounded-full border border-brand-rose/50 font-semibold text-brand-ink">Cancel</button>
                        <button type="button" onClick={() => setStep("form")} className="h-11 flex-1 rounded-full bg-brand-rust font-semibold text-white">Confirm</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="p-5 sm:p-7">
                <div className="mb-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#f8f3f1] px-5 py-4">
                  <p className="font-semibold text-brand-ink">{new Date(`${selectedDate}T12:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })} · {selectedTime}</p>
                  <button type="button" onClick={() => setStep("schedule")} className="text-sm font-semibold text-brand-rust underline">Change</button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="text-sm font-semibold text-brand-ink">Full name<input required name="name" autoComplete="name" className="mt-2 h-12 w-full rounded-xl border border-brand-rose/40 px-4 font-normal outline-none focus:border-brand-rust" /></label>
                  <label className="text-sm font-semibold text-brand-ink">Phone number<input required name="phone" type="tel" inputMode="tel" pattern="[0-9+ ]{10,15}" autoComplete="tel" className="mt-2 h-12 w-full rounded-xl border border-brand-rose/40 px-4 font-normal outline-none focus:border-brand-rust" /></label>
                  <label className="text-sm font-semibold text-brand-ink">Email address<input required name="email" type="email" autoComplete="email" className="mt-2 h-12 w-full rounded-xl border border-brand-rose/40 px-4 font-normal outline-none focus:border-brand-rust" /></label>
                  <label className="text-sm font-semibold text-brand-ink">Location<input required name="location" autoComplete="address-level2" className="mt-2 h-12 w-full rounded-xl border border-brand-rose/40 px-4 font-normal outline-none focus:border-brand-rust" /></label>
                  <label className="text-sm font-semibold text-brand-ink">Treatment needed<select required name="treatment" defaultValue="" className="mt-2 h-12 w-full rounded-xl border border-brand-rose/40 bg-white px-4 font-normal outline-none focus:border-brand-rust"><option value="" disabled>Select treatment</option><option>Dental Implants</option><option>Smile Designing</option><option>Root Canal</option><option>Invisalign / Aligners</option><option>General Consultation</option></select></label>
                  <label className="text-sm font-semibold text-brand-ink">Preferred consultation<select required name="consultationType" defaultValue="" className="mt-2 h-12 w-full rounded-xl border border-brand-rose/40 bg-white px-4 font-normal outline-none focus:border-brand-rust"><option value="" disabled>Select option</option><option>Clinic Visit</option><option>Video Consultation</option><option>Home Scan Enquiry</option></select></label>
                </div>
                {error && <p className="mt-5 text-sm font-semibold text-red-600">{error}</p>}
                <button disabled={submitting} type="submit" className="mt-6 h-12 w-full rounded-full bg-brand-rust px-8 font-bold text-white transition hover:bg-brand-ink disabled:opacity-60 sm:w-auto">{submitting ? "Submitting…" : "Submit Appointment"}</button>
              </form>
            )}
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
