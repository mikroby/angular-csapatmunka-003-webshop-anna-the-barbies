export class Category {
  id: number = 0;
  name: string = '';
  description: string = '';

  constructor(parameters: Category) {
    this.id = parameters.id;
    this.name = parameters.name;
    this.description = parameters.description;
  }
}

