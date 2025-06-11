import { ResultStatus } from '@/features';

type Props = {
  searchParams: Promise<{ taskId?: string | string[] }>;
};

export default async function ResultPage({ searchParams }: Props) {
  const params = await searchParams;
  const taskId = Array.isArray(params.taskId)
    ? params.taskId[0]
    : params.taskId ?? '';

  return <ResultStatus taskId={taskId} />;
}
