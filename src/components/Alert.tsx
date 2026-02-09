"use client";

type AlertProps = {
    message: string;
    type?: "success" | "error";
};

export default function Alert({
    message,
    type = "success",
}: AlertProps) {
    if (!message) return null;

    return (
        <div
            className={`mb-4 rounded p-3 text-sm ${type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
        >
            {message}
        </div>
    );
}