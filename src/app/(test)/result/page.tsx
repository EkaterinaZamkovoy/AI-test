import { ResultStatus } from '@/features';

type Props = {
  searchParams: { taskId?: string };
};

export default function ResultPage({ searchParams }: Props) {
  //   const taskId = searchParams.taskId ?? '';

  const taskId = 'c72a5392-bdc2-424f-b502-8c46526d608b';
  return <ResultStatus taskId={taskId} />;
}
