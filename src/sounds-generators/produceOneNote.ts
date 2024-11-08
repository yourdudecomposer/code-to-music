import getOutputInstance from "../outputMidiPorts/outputGenerator";
import { NoteForEasymidi } from "../types/notes";

const output = getOutputInstance();
export const produceOneNote = ({
  pitch,
  duration,
  channel = 0,
}: NoteForEasymidi) => {
  output.send("noteon", {
    note: pitch,
    velocity: 100,
    channel,
  });

  setTimeout(() => {
    output.send("noteoff", {
      note: pitch,
      velocity: 100,
      channel,
    });
  }, duration);
};
