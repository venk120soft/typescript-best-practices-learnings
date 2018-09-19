//Typescript Defination files.

//Statically typed interface for external dynamic code
//Declarations without implementations.
//having .d.ts extenstion

 declare module "planet" {
  
  export function visit(): void;
  
  export function getCities(): City[];
  
  export interface City{
    population: number;
    founded: Date;
  }
}
  
