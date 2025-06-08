import { ProgressBar } from '@/widgets';

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ProgressBar />
      {children}
    </div>
  );
}
