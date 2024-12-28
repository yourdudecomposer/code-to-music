import { RelativeDuration, RelativeDurationByName } from "../types/notes";
import { durationMap } from "./pitchMap";

export const getAbsoluteDuration = ({
  relativeDuration,
  tempo,
  baseRelativeDuration = 4,
}: {
  relativeDuration: RelativeDuration | RelativeDurationByName;
  tempo: number;
  baseRelativeDuration?: RelativeDuration;
}): number => {
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

  if (typeof relativeDuration === "number") {
    return coefficient / tempo / relativeDuration;
  } else {
    return (coefficient / tempo) * durationMap[relativeDuration];
  }
};
