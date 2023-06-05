interface ICardModelProps {
  progress: 'a fazer' | 'andamento' | 'concluído';
  goalName: string;
}

export function CardModel({ progress, goalName }: ICardModelProps) {
  return (
    <div>
      <div
        className="progress"
        style={progress === 'a fazer' ? { background: '#FF5A5A' } : {}}
      ></div>
      <div className="goal">{goalName}</div>
    </div>
  );
}
