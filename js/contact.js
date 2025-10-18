// FNAF Official Contact Form JavaScript
// Handles contact form validation, submission, and user interactions

class ContactManager {
  constructor() {
    this.form = document.getElementById("contactForm");
    this.isSubmitting = false;
    this.init();
  }

  init() {
    if (this.form) {
      this.setupFormValidation();
      this.setupFormSubmission();
      this.setupFormReset();
    }
  }

  // Setup form validation
  setupFormValidation() {
    const inputs = this.form.querySelectorAll("input, select, textarea");

    inputs.forEach((input) => {
      // Real-time validation
      input.addEventListener("blur", () => this.validateField(input));
      input.addEventListener("input", () => this.clearFieldError(input));
    });
  }

  // Setup form submission
  setupFormSubmission() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmission();
    });
  }

  // Setup form reset
  setupFormReset() {
    const resetBtn = document.querySelector(".reset-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => this.resetForm());
    }
  }

  // Validate individual field
  validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const fieldType = field.type;

    let isValid = true;
    let errorMessage = "";

    // Required field validation
    if (field.hasAttribute("required") && !value) {
      isValid = false;
      errorMessage = `${this.getFieldLabel(field)} is required.`;
    }

    // Email validation
    if (fieldType === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = "Please enter a valid email address.";
      }
    }

    // Name validation
    if (fieldName === "name" && value) {
      if (value.length < 2) {
        isValid = false;
        errorMessage = "Name must be at least 2 characters long.";
      }
    }

    // Message validation
    if (fieldName === "message" && value) {
      if (value.length < 10) {
        isValid = false;
        errorMessage = "Message must be at least 10 characters long.";
      }
    }

    // Update field appearance
    this.updateFieldStatus(field, isValid, errorMessage);

    return isValid;
  }

  // Clear field error
  clearFieldError(field) {
    const formGroup = field.closest(".form-group");
    if (formGroup) {
      formGroup.classList.remove("error");
      const errorMessage = formGroup.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.remove();
      }
    }
  }

  // Update field status
  updateFieldStatus(field, isValid, errorMessage) {
    const formGroup = field.closest(".form-group");

    if (formGroup) {
      formGroup.classList.remove("error", "success");

      if (!isValid) {
        formGroup.classList.add("error");
        this.showFieldError(formGroup, errorMessage);
      } else if (field.value.trim()) {
        formGroup.classList.add("success");
      }
    }
  }

  // Show field error
  showFieldError(formGroup, message) {
    // Remove existing error message
    const existingError = formGroup.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    // Add new error message
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.textContent = message;
    formGroup.appendChild(errorElement);
  }

  // Get field label
  getFieldLabel(field) {
    const label = document.querySelector(`label[for="${field.id}"]`);
    return label ? label.textContent.replace("*", "").trim() : field.name;
  }

  // Validate entire form
  validateForm() {
    const fields = this.form.querySelectorAll(
      "input[required], select[required], textarea[required]"
    );
    let isFormValid = true;

    fields.forEach((field) => {
      const isFieldValid = this.validateField(field);
      if (!isFieldValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  // Handle form submission
  async handleFormSubmission() {
    if (this.isSubmitting) return;

    // Validate form
    if (!this.validateForm()) {
      this.showFormMessage("Please correct the errors above.", "error");
      return;
    }

    this.isSubmitting = true;
    this.setFormLoading(true);

    try {
      // Get form data
      const formData = this.getFormData();

      // Simulate form submission (replace with actual API call)
      await this.submitForm(formData);

      // Show success message
      this.showFormMessage(
        "Thank you! Your message has been sent successfully.",
        "success"
      );
      this.resetForm();

      // Track form submission
      this.trackFormSubmission(formData);
    } catch (error) {
      console.error("Form submission error:", error);
      this.showFormMessage(
        "Sorry, there was an error sending your message. Please try again.",
        "error"
      );
    } finally {
      this.isSubmitting = false;
      this.setFormLoading(false);
    }
  }

  // Get form data
  getFormData() {
    const formData = new FormData(this.form);
    const data = {};

    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    return data;
  }

  // Submit form (simulate API call)
  async submitForm(data) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // In a real implementation, you would send data to your server
    console.log("Form submitted with data:", data);

    // Simulate success/failure
    if (Math.random() > 0.1) {
      // 90% success rate
      return { success: true };
    } else {
      throw new Error("Simulated network error");
    }
  }

  // Set form loading state
  setFormLoading(loading) {
    const submitBtn = this.form.querySelector(".submit-btn");

    if (loading) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
      this.form.classList.add("form-loading");
    } else {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
      this.form.classList.remove("form-loading");
    }
  }

  // Show form message
  showFormMessage(message, type) {
    // Remove existing messages
    const existingMessages = this.form.querySelectorAll(".form-message");
    existingMessages.forEach((msg) => msg.remove());

    // Create new message
    const messageElement = document.createElement("div");
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;

    // Insert message at the top of the form
    this.form.insertBefore(messageElement, this.form.firstChild);

    // Auto-hide success messages
    if (type === "success") {
      setTimeout(() => {
        messageElement.remove();
      }, 5000);
    }
  }

  // Reset form
  resetForm() {
    this.form.reset();

    // Clear all field states
    const formGroups = this.form.querySelectorAll(".form-group");
    formGroups.forEach((group) => {
      group.classList.remove("error", "success");
      const errorMessage = group.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.remove();
      }
    });

    // Remove form messages
    const messages = this.form.querySelectorAll(".form-message");
    messages.forEach((msg) => msg.remove());
  }

  // Track form submission
  trackFormSubmission(data) {
    // Analytics tracking
    if (typeof gtag !== "undefined") {
      gtag("event", "form_submission", {
        form_name: "contact_form",
        subject: data.subject,
        has_newsletter: data.newsletter === "on",
      });
    }

    console.log("Form submission tracked:", data);
  }

  // Handle newsletter subscription
  handleNewsletterSubscription(email) {
    // In a real implementation, you would integrate with an email service
    console.log("Newsletter subscription:", email);

    // Track newsletter signup
    if (typeof gtag !== "undefined") {
      gtag("event", "newsletter_signup", {
        email: email,
      });
    }
  }
}

// Initialize contact manager when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  window.contactManager = new ContactManager();
});

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = ContactManager;
}
