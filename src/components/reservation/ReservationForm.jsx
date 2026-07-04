import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    User,
    Mail,
    Phone,
    Calendar,
    Clock3,
    Users,
} from "lucide-react";

import { motion } from "framer-motion";
import Button from "../ui/Button";

const ReservationForm = () => {
    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        request: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setErrors({
            ...errors,
            [e.target.name]: "",
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim())
            newErrors.name = "Please enter your full name.";

        if (!formData.email.trim())
            newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Enter a valid email.";

        if (!formData.phone.trim())
            newErrors.phone = "Phone number is required.";
        else if (!/^[0-9]{10}$/.test(formData.phone))
            newErrors.phone = "Enter a valid 10-digit phone number.";

        if (!formData.date)
            newErrors.date = "Select a reservation date.";

        if (!formData.time)
            newErrors.time = "Select a reservation time.";

        if (!formData.guests)
            newErrors.guests = "Please select guests.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleReservation = (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        // TODO: Replace with backend API call

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1800);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[36px] border border-white/10 bg-[#111111]/80 p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.45)]"
        >
            <h2 className="font-playfair text-3xl font-bold">
                Book Your Table
            </h2>

            <p className="mt-3 text-[#A1A1AA]">
                Complete the form below and we'll confirm your reservation shortly.
            </p>

            {!isSuccess ? (

                <form
                    onSubmit={handleReservation}
                    className="mt-8 space-y-5"
                >

                    {/* Name */}

                    <div>

                        <div className="relative">

                            <User
                                size={18}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                            />

                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-2xl border border-white/10 bg-[#181818] py-4 pl-14 pr-5 outline-none focus:border-[#D4AF37]"
                            />

                        </div>

                        {errors.name && (
                            <p className="mt-2 text-sm text-red-400">
                                {errors.name}
                            </p>
                        )}

                    </div>

                    {/* Email */}

                    <div>

                        <div className="relative">

                            <Mail
                                size={18}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-2xl border border-white/10 bg-[#181818] py-4 pl-14 pr-5 outline-none focus:border-[#D4AF37]"
                            />

                        </div>

                        {errors.email && (
                            <p className="mt-2 text-sm text-red-400">
                                {errors.email}
                            </p>
                        )}

                    </div>

                    {/* Phone */}

                    <div>

                        <div className="relative">

                            <Phone
                                size={18}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full rounded-2xl border border-white/10 bg-[#181818] py-4 pl-14 pr-5 outline-none focus:border-[#D4AF37]"
                            />

                        </div>

                        {errors.phone && (
                            <p className="mt-2 text-sm text-red-400">
                                {errors.phone}
                            </p>
                        )}

                    </div>

                    {/* Date + Time */}

                    <div className="grid gap-5 md:grid-cols-2">

                        <div>

                            <div className="relative">

                                <Calendar
                                    size={18}
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                                />

                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-white/10 bg-[#181818] py-4 pl-14 pr-5 outline-none focus:border-[#D4AF37]"
                                />

                            </div>

                            {errors.date && (
                                <p className="mt-2 text-sm text-red-400">
                                    {errors.date}
                                </p>
                            )}

                        </div>

                        <div>

                            <div className="relative">

                                <Clock3
                                    size={18}
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                                />

                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-white/10 bg-[#181818] py-4 pl-14 pr-5 outline-none focus:border-[#D4AF37]"
                                />

                            </div>

                            {errors.time && (
                                <p className="mt-2 text-sm text-red-400">
                                    {errors.time}
                                </p>
                            )}

                        </div>

                    </div>

                    {/* Guests */}

                    <div>

                        <div className="relative">

                            <Users
                                size={18}
                                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#D4AF37]"
                            />

                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full appearance-none rounded-2xl border border-white/10 bg-[#181818] py-4 pl-14 pr-5 outline-none focus:border-[#D4AF37]"
                            >
                                <option value="">Guests</option>
                                <option>1 Guest</option>
                                <option>2 Guests</option>
                                <option>4 Guests</option>
                                <option>6 Guests</option>
                                <option>8+ Guests</option>
                            </select>

                        </div>

                        {errors.guests && (
                            <p className="mt-2 text-sm text-red-400">
                                {errors.guests}
                            </p>
                        )}

                    </div>

                    <textarea
                        name="request"
                        rows="4"
                        placeholder="Special Request (Optional)"
                        value={formData.request}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-[#181818] px-5 py-4 outline-none focus:border-[#D4AF37]"
                    />

                    <Button
                        type="submit"
                        className="mt-2 w-full"
                    >
                        {isSubmitting ? "Booking..." : "Reserve Now"}
                    </Button>

                </form>

            ) : (

                <div className="mt-10 text-center">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/10">

                        <span className="text-5xl text-[#D4AF37]">
                            ✓
                        </span>

                    </div>

                    <h3 className="mt-8 font-playfair text-4xl font-bold">
                        Reservation Confirmed
                    </h3>

                    <p className="mx-auto mt-6 max-w-md leading-8 text-[#A1A1AA]">
                        Thank you for choosing Luxora.
                        We'll contact you shortly to confirm your reservation.
                    </p>

                    <Button
                        className="mt-10"
                        onClick={() => navigate("/")}
                    >
                        Back To Home
                    </Button>

                </div>

            )}

        </motion.div>
    );
};

export default ReservationForm;