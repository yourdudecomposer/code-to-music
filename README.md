
# Code To Music

As simple as posible api for produce melody on JS


## Installation

Install my-project with npm

```bash
  npm install code-to-music
```
    
## Usage/Examples

```javascript

import { Note, produceMelody } from "code-to-music";

const greenTreeMelody: Note[] = [
  { pitch: "E4", duration: 4 },
  { pitch: "C#4", duration: 8 },
  { pitch: "C#4", duration: 8 },
  { pitch: "E4", duration: 4 },
  { pitch: "C#4", duration: 8 },
  { pitch: "C#4", duration: 8 },
  { pitch: "E4", duration: 8 },
  { pitch: "D4", duration: 8 },
  { pitch: "C#4", duration: 8 },
  { pitch: "B3", duration: 8 },
  { pitch: "A3", duration: 2 },
  { pitch: "F#4", duration: 4 },
  { pitch: "A4", duration: 8 },
  { pitch: "F#4", duration: 8 },
  { pitch: "E4", duration: 4 },
  { pitch: "C#4", duration: 8 },
  { pitch: "C#4", duration: 8 },
  { pitch: "E4", duration: 8 },
  { pitch: "D4", duration: 8 },
  { pitch: "C#4", duration: 8 },
  { pitch: "B3", duration: 8 },
  { pitch: "A3", duration: 2 },
];

produceMelody(greenTreeMelody, 120);

```

