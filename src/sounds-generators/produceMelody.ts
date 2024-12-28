import { Channel } from "easymidi";
import { Note, RelativeDuration, RelativeDurationByName } from "../types/notes";
import { getAbsoluteDuration } from "../utils/getAbsoluteDuration";
import { pitchMap } from "../utils/pitchMap";
import { produceOneNote } from "./produceOneNote";

export const produceMelody = (
  melody: Note[],
  tempo: number = 100,
  channel: Channel = 0
) => {
  let absoluteDurations: number[];

  if (
    typeof melody[0].duration === "number" &&
    melody.some((el) => (el.duration as number) > 16)
  ) {
    absoluteDurations = melody.map((note) => note.duration as number);
  } else {
    absoluteDurations = melody.map((note) =>
      getAbsoluteDuration({
        tempo,
        relativeDuration: note.duration as
          | RelativeDuration
          | RelativeDurationByName,
      })
    );
  }

  const pitches = melody.map((note) => pitchMap[note.pitch]);

  reqTimer(melody, 0, absoluteDurations, pitches, channel);

  function reqTimer(
    melody: Note[],
    currPosition: number,
    durations: number[],
    pitches: number[],
    channel: Channel
  ) {
    if (currPosition >= melody.length) {
      return;
    }

    // Производство ноты с уже вычисленными значениями
    produceOneNote({
      duration: durations[currPosition],
      pitch: pitches[currPosition],
      channel,
    });

    // Вызов следующей ноты через абсолютную длительность
    setTimeout(
      () => reqTimer(melody, currPosition + 1, durations, pitches, channel),
      durations[currPosition]
    );
  }
};
