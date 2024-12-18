import React from 'react';
import { X, Clock } from 'lucide-react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  submitButtonText: string;
  // isSubmitDisabled: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
  submitButtonText,
  // isSubmitDisabled,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            className="p-1 rounded-full transition-colors"
            icon={<X className="w-5 h-5" />}
          />
        </div>
        
        <form onSubmit={onSubmit} className="space-y-6">
          {children}
          
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              children="Cancel"
            />
            <Button
              type="submit"
              className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors bg-blue-600 hover:bg-blue-700`}
              children={submitButtonText}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

