import { Melody } from "../types/notes";
import { getAbsoluteDuration } from "../utils/getAbsoluteDuration";
import { pitchMap } from "../utils/pitchMap";
import { produceOneNote } from "./produceOneNote";

export const produceMelody = (melody: Melody) => {
  const absoluteDurations = melody.scores.map((note) =>
    getAbsoluteDuration({
      tempo: melody.tempo,
      relativeDuration: note.duration,
    })
  );

  const pitches = melody.scores.map((note) => pitchMap[note.pitch]);

  reqTimer(melody, 0, absoluteDurations, pitches);

  function reqTimer(
    melody: Melody,
    currPosition: number,
    durations: number[],
    pitches: number[]
  ) {
    if (currPosition >= melody.scores.length) {
      return;
    }

    // Производство ноты с уже вычисленными значениями
    produceOneNote({
      duration: durations[currPosition],
      pitch: pitches[currPosition],
      channel: melody.channel,
    });

    // Вызов следующей ноты через абсолютную длительность
    setTimeout(
      () => reqTimer(melody, currPosition + 1, durations, pitches),
      durations[currPosition]
    );
  }
};
