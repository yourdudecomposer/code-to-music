import easymidi from "easymidi";

let outputInstance: easymidi.Output | null = null;

export default function getOutputInstance() {
  if (outputInstance === null) {
    const outputs = easymidi.getOutputs();

    if (outputs.length === 0) {
      throw new Error("Нет доступных MIDI-выходов.");
    }

    outputInstance = new easymidi.Output(outputs[0]);
  }

  return outputInstance;
}
