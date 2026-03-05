export interface CardDef {
  id: string;
  color: string;
  label: string;
  number: string;
  tags: string[];
  name: string;
}

export interface Snapshot {
  src: DOMRect;
  dest: DOMRect;
}

export interface AbsRect {
  top: number;
  left: number;
  width: number;
  height: number;
}
