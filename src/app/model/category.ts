export class Category {
  [key:string]: any;
  id: number = 0;
  name: string = '';
  description: string = '';

  constructor(parameters?: Category) {
    if(!parameters) {return;}
    for (const key of Object.keys(parameters)){
      this[key] = parameters[key];
    }
  }
}

