import React, { useState } from 'react';
import { Button } from '../../../core/Button/Button';
import { RadioGroup } from '../../../core/RadioGroup/RadioGroup';
import { Incident, SeverityLevel } from '../../../../types/incident.types';
import toast from 'react-hot-toast';

/**
 * Props interface for IncidentForm component.
 * The component takes an `onSubmit` function that will be called when the form is submitted,
 * passing the incident data (excluding id, reported_at, and isExpanded).
 */
interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, 'id' | 'reported_at' | 'isExpanded'>) => void;
}

/**
 * Form errors interface used to handle validation errors.
 * This helps manage error messages for form fields like title and description.
 */
interface FormErrors {
  title?: string;
  description?: string;
}

/**
 * IncidentForm component is used to submit new incident reports.
 * It handles input fields for title, description, and severity level,
 * validates the form, and triggers the submission callback.
 */
export const IncidentForm: React.FC<IncidentFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState(''); // Store incident title
  const [description, setDescription] = useState(''); // Store incident description
  const [severity, setSeverity] = useState<SeverityLevel>('Medium'); // Store incident severity
  const [errors, setErrors] = useState<FormErrors>({}); // Track validation errors
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state

  /**
   * Validates the form inputs (title and description).
   * Displays an error message if any field is empty.
   * @returns {boolean} - Returns true if the form is valid, otherwise false.
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!title.trim()) {
      newErrors.title = "Title is required"; // Validate title
    }
    if (!description.trim()) {
      newErrors.description = "Description is required"; // Validate description
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set validation errors
      toast.error("All fields are required"); // Show toast error message
      return false;
    }

    setErrors({}); // Clear errors if form is valid
    return true;
  };

  /**
   * Handles form submission.
   * Prevents the default form submission, validates the form,
   * and invokes the onSubmit callback with the form data.
   * 
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return; // If form is invalid, stop the submission

    setIsSubmitting(true); // Set submitting state to true

    try {
      // Simulate API call with a timeout (you would replace this with actual API call)
      await new Promise(resolve => setTimeout(resolve, 800));

      // Submit the incident data (without id, reported_at, or isExpanded)
      onSubmit({
        title,
        description,
        severity
      });

      // Reset form state after successful submission
      setTitle('');
      setDescription('');
      setSeverity('Medium');
      setErrors({});

      toast.success("Your report has been saved!"); // Show success message
    } catch (error) {
      toast.error("Something went wrong"); // Show error message if submission fails
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  // Severity options for the radio group
  const severityOptions = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' }
  ];

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      
      {/* Title input field */}
      <div>
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-300">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2.5 text-sm bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
          placeholder="Enter incident title"
        />
      </div>

      {/* Description input field */}
      <div>
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-300">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2.5 text-sm bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 min-h-[120px]"
          placeholder="Describe the incident in detail..."
        />
      </div>

      {/* Severity level radio buttons */}
      <div>
        <RadioGroup
          name="severity"
          label="Severity Level"
          options={severityOptions}
          value={severity}
          onChange={(value) => setSeverity(value as SeverityLevel)}
          theme="dark"
        />
      </div>

      {/* Submit button */}
      <div className="pt-2">
        <Button 
          type="submit" 
          variant="primary"
          disabled={isSubmitting} // Disable button during submission
          className="w-full justify-center"
        >
          {isSubmitting ? (
            <>
              {/* Loading spinner while submitting */}
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>Submit Incident</>
          )}
        </Button>
      </div>
    </form>
  );
};
