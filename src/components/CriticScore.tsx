import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score > 90
      ? "green"
      : score > 85
      ? "yellow"
      : score > 80
      ? "red"
      : score > 70
      ? "blue"
      : "";
  return (
    <Badge colorScheme={color} paddingX={2} fontSize="14px" borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
