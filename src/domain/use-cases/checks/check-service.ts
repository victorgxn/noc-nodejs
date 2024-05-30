interface CheckService {
  execute(url: string): Promise<Boolean>;
}

export class Checkservice implements CheckService {
  async execute(url: string): Promise<Boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error on check service ${url}`);
      }
      console.log(`Success on check service ${url}`);
      return true;
    } catch (error) {
      console.log(`${error}`);
      return false;
    }
  }
}
