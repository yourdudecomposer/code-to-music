import { RelativeDuration } from "../types/notes";

export const getAbsoluteDuration = ({
  relativeDuration,
  tempo,
  baseRelativeDuration = 4,
}: {
  relativeDuration: RelativeDuration;
  tempo: number;
  baseRelativeDuration?: RelativeDuration;
}) => {
  let coefficient: number;

  switch (baseRelativeDuration) {
    case 1:
      coefficient = 60000;
      break;
    case 2:
      coefficient = 120000;
      break;
    case 4:
      coefficient = 240000;
      break;
    case 8:
      coefficient = 480000;
      break;

    default:
      coefficient = 240000;
      break;
  }

  return coefficient / tempo / relativeDuration;
};
