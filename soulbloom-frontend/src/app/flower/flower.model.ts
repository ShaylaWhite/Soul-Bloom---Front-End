// flower.model.ts

export interface Flower {
    selfCareType: string;
    description: string;
    user: {
      id: number;
    };
    garden: {
      id: number;
    };
  }
  