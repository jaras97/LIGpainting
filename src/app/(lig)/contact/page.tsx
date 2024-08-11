"use client";

import { useState, useCallback } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder = "",
  title,
  ariaInvalid,
}: {
  label: string;
  name: keyof FormData;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  placeholder?: string;
  title?: string;
  ariaInvalid?: boolean;
}) {
  return (
    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
      <label className="flex flex-col min-w-40 flex-1">
        <p className="text-[#111418] text-base font-medium leading-normal pb-2">
          {label}
        </p>
        {type === "textarea" ? (
          <textarea
            name={name}
            className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-none border ${
              error ? "border-red-500" : "border-[#dce0e5]"
            } bg-white focus:border-blue-500 min-h-36 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal`}
            value={value}
            onChange={onChange}
            aria-invalid={!!error}
            placeholder={placeholder}
            title={title}
          />
        ) : (
          <input
            name={name}
            type={type}
            className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-none border ${
              error ? "border-red-500" : "border-[#dce0e5]"
            } bg-white focus:border-blue-500 h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal`}
            value={value}
            onChange={onChange}
            aria-invalid={!!error}
            placeholder={placeholder}
            title={title}
          />
        )}
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </label>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const validate = useCallback(() => {
    const errors: Partial<FormData> = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (result.success) {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        } else {
          alert("Failed to send message. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to send message. Please try again later.");
      }

      setIsSubmitting(false);
    },
    [formData, validate]
  );

  // Verificar si todos los campos están llenos
  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== ""
  );

  return (
    <div className="px-5 md:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Send us a message
        </h2>
        <form onSubmit={handleSubmit}>
          <FormField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            aria-invalid={!!errors.firstName}
            title="First Name"
          />
          <FormField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            ariaInvalid={!!errors.lastName}
            title="Last Name"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            ariaInvalid={!!errors.email}
            title="emaiñ"
          />
          <FormField
            label="Message"
            name="message"
            type="textarea"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Type your message here..."
          />
          <div className="flex px-4 py-3">
            <button
              type="submit"
              className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 text-base font-bold leading-normal tracking-[0.015em] 
              ${
                isSubmitting || !isFormValid
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-[#1980e6] text-white cursor-pointer"
              }`}
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? (
                <span>Loading...</span>
              ) : (
                <span className="truncate">Submit</span>
              )}
            </button>
          </div>
        </form>
        <p className="text-[#637588] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
          By submitting you are agreeing to our Terms of Service and Privacy
          Policy
        </p>
      </div>
    </div>
  );
}
