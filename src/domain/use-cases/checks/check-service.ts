interface CheckService {
  execute(url: string): Promise<Boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class Checkservice implements CheckService {
  constructor(
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

  async execute(url: string): Promise<Boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error on check service ${url}`);
      }
      this.successCallback();
      return true;
    } catch (error) {
      this.errorCallback(`${error}`);
      console.log(`${error}`);
      return false;
    }
  }
}
