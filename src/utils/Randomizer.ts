

    export function getRandomElements<T>(list: T[], numElements: number): T[] {
        const shuffled = list.slice().sort(() => Math.random() - 0.5);
        return shuffled.slice(0, numElements);
      }
      
      
