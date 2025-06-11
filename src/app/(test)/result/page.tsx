import { ResultStatus } from '@/features';

type Props = {
  searchParams: { taskId?: string };
};

export default function ResultPage({ searchParams }: Props) {
  const taskId = searchParams.taskId ?? '';

  return <ResultStatus taskId={taskId} />;
}
