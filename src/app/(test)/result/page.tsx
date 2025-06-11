import { ResultStatus } from '@/features';

type Props = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default function ResultPage({ searchParams }: Props) {
  const taskId = Array.isArray(searchParams?.taskId)
    ? searchParams.taskId[0] ?? ''
    : searchParams?.taskId ?? '';

  return <ResultStatus taskId={taskId} />;
}
