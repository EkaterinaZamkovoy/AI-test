import { usePathname } from 'next/navigation';
import { steps } from '../constants';

export const useStep = () => {
  const pathname = usePathname();
  const currentStepIndex = steps.findIndex((step) => pathname.startsWith(step));

  return {
    currentStep: currentStepIndex + 1,
    totalSteps: steps.length,
    currentStepIndex,
    pathname,
  };
};
