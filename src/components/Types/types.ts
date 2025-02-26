export interface Cost {
  id?: string, 
  date: Date,
  descrition: string,
  price: number
}

export interface DiagramDataSets {
  label: string,
  value: number, 
  maxValue?: number;
}

