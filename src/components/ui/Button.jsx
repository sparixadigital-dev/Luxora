const Button = ({
    children,
    variant = "primary",
    className = "",
    onClick,
    type = "button",
}) => {
    const base =
        "inline-flex items-center justify-center rounded-full px-8 py-4 font-medium transition-all duration-300";

    const variants = {
        primary:
            "bg-[#D4AF37] text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.45)]",

        secondary:
            "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;