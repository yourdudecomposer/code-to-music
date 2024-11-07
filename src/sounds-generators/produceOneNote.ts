import getOutputInstance from "../outputMidiPorts/outputGenerator";
import { Note } from "../types/notes";

const output = getOutputInstance();
export const produceOneNote = ({ pitch, duration, channel = 0 }: Note) => {
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
